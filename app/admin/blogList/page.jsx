'use client'
import TableItem from '@/components/AdminComponents/TableItem'
import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { toast } from 'react-toastify';


export default function page = () => {

  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const res = await axios.get('/api/blog');
    setBlogs(res.data.blogs);
  }
  const deleteBlog = async (mongoId) => {
    const res = await axios.delete("/api/blog", {
      params: {
        id: mongoId,
      },
    });
    toast.success(res.data.message);
    fetchBlogs();
  };
  useEffect(() => {
    fetchBlogs();
  },[])
  return(
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='hidden sm:block px-6 py-3'>
                  Author Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Blog Title
                </th>
                <th scope='col' className='px-6 py-3'>
                  Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
          </thead>
          <tbody>
            {blogs.map((item,index) => {
                return <TableItem key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}/>
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
