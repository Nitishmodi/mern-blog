import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table } from 'flowbite-react';

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState(null); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && userPosts === null ? (
        <p>Loading...</p>
      ) : (
        <>
          {userPosts && userPosts.length > 0 ? (
            <Table hoverable className='shadow-md'>
              <Table.Head>
                <Table.HeadCell style={{ width: '30%' }}>Date updated</Table.HeadCell>
                <Table.HeadCell style={{ width: '35%' }}>Post image</Table.HeadCell>
                <Table.HeadCell style={{ width: '40%' }}>Post title</Table.HeadCell>
                <Table.HeadCell style={{ width: '30%' }}>category</Table.HeadCell>
                <Table.HeadCell style={{ width: '10%' }}>Delete</Table.HeadCell>
                <Table.HeadCell style={{ width: '10%' }}>Edit</Table.HeadCell>
              </Table.Head>
              <Table.Body className='divide-y'>
                {userPosts.map((post) => (
                  <Table.Row key={post._id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell style={{ width: '15%' }}>{new Date(post.updatedAt).toLocaleDateString()}</Table.Cell>
                    <Table.Cell style={{ width: '15%' }}>
                      <Link to={`/post/${post.slug}`}>
                        <img src={post.image} alt={post.title} className='w-20 h-10 object-cover bg-gray-500' />
                      </Link>
                    </Table.Cell>
                    <Table.Cell style={{ width: '30%' }}>
                      <Link className='font-medium text-gray-900 dark:text-white' to={`/post/${post.slug}`}>
                        {post.title}
                      </Link>
                    </Table.Cell>
                    <Table.Cell style={{ width: '20%' }}>{post.category}</Table.Cell>
                    <Table.Cell style={{ width: '10%' }}>
                      <Button className='font-medium hover:underline cursor-pointer' color='failure'>Delete</Button>
                    </Table.Cell>
                    <Table.Cell style={{ width: '10%' }}>
                      <Link className='text-teal-500 hover:underline' to={`/update-post/${post._id}`}>
                        <Button>Edit</Button>
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ) : (
            <p>You have no posts yet!</p>
          )}
        </>
      )}
    </div>
  );
}
