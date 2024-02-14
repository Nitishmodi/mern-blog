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
