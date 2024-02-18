import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
export const test = (req, res) => {
    res.json({ message: 'API is working!' });
};
export const updateUser = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.userId) {
            return next(errorHandler(403, 'You are not allowed to update this user'));
        }
        const { username, email, profilePicture, password } = req.body;
        if (password && password.length < 6) {
            return next(errorHandler(400, 'Password must be at least 6 characters long'));
        }
        if (username) {
            if (username.length < 7 || username.length > 20) {
                return next(errorHandler(400, "Username should have length between 7 and 20"));
            }
            if (/\s/.test(username)) {
                return next(errorHandler(400, "Username can't contain spaces"));
            }
            if (username !== username.toLowerCase()) {
                return next(errorHandler(400, "Username should be in lower case"));
            }
            if (!/^[a-zA-Z0-9]+$/.test(username)) {
                return next(errorHandler(400, "Username can only contain letters and numbers"));
            }
        }
        const updateFields = {};
        if (username) updateFields.username = username;
        if (email) updateFields.email = email;
        if (profilePicture) updateFields.profilePicture = profilePicture;
        if (password) updateFields.password = bcryptjs.hashSync(password, 10);
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $set: updateFields }, { new: true });
        const { password: userPassword, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
export const deleteUser=async(req,res,next)=>{
     if(!req.user.isAdmin && req.user.id!==req.params.userId){
        return next(errorHandler(403,'You are not allowed to delete this user'));
     }
     try{
     await User.findByIdAndDelete(req.params.userId);
     res.status(200).json({message:'User deleted successfully'});
     }catch(error){
        next(error);
     }
}

export const signout=(req,res,next)=>{
    try{
        res.clearCookie('access_token').status(200).json('User has been signed out');
    }catch(error){
        next(error);
    }
}

export const getUsers= async(req,res,next)=> {
    if(!req.user.isAdmin){
      return next(errorHandler(403,'You are not allowed to see all users'));  
    }
    try{
        const startIndex=parseInt(req.query.startIndex)||0;
        const limit=parseInt(req.query.limit) || 9;
        const sortDirection=req.query.sort === 'asc'?1:-1;

        const users=await User.find()
        .sort({createdAt:sortDirection})
        .skip(startIndex)
        .limit(limit);

        const usersWithoutPassword=users.map((user)=>{
            const {password,...rest}=user._doc;
            return rest;
        });
        const totalUsers=await User.countDocuments();
        const now=new Date();
        const oneMonthAgo=new Date(
            now.getFullYear(),
            now.getMonth()-1,
            now.getDate()
        );
        const lastMonthsUsers = await User.countDocuments({
            createdAt:{ $gte :oneMonthAgo},
        });
        res.status(200).json({
            users:usersWithoutPassword,
            totalUsers,
            lastMonthsUsers,
        });
    }catch(error){
        next(error);
    }
}
export const getUser=async(req,res,next)=>{
    try{
       const user=await  User.findById(req.params.userId);
       if(!user){
        return next(errorHandler(404,'User not  found'));
       }
       const {password,...rest}=user._doc;
       res.status(200).json(rest);
    }catch(error){
          next(error);
    }
}