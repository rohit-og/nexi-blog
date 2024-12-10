'use client'
import {useState} from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const page = () => {
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "admin",
        authorImg: "/admin.jpeg",
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData(data => ({...data,[name]: value}))
        console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);
        const res = await axios.post('/api/blog', formData)
        if(res.data.success){
           toast.success(res.data.msg)
           setImage(false);
              setData({
                title: "",
                description: "",
                category: "Startup",})  
    }
    else{
        toast.error('Error occured')
    }}
  return (
    <>
        <form className='pt-5 px-5 sm:pt-12 sm:pl-16' onSubmit={handleSubmit}>
            <p className='text-xl'>Upload Thumbnail</p>
            <label htmlFor='image'>
                <Image className="mt-4" src={!image?assets.upload_area:URL.createObjectURL(image)} alt='upload_icon' width={140} height={70} />
            </label>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image"hidden required />
            <p className='mt-4 text-xl'>Blog Title</p>
            <input name='title' onChange={handleChange} value={data.title} className='w-full sm:w-[500px] mt-4 border  px-4 py-3' type="text" placeholder='Type Here'/>

            <p className='mt-4 text-xl'>Blog Description</p>
            <textarea name="description" onChange={handleChange} value={data.description} className='w-full sm:w-[500px] mt-4 border  px-4 py-3' type="text" placeholder='Write content here' rows={6}/>

            <p className='text-xl mt-4'>Blog category</p>
            <select name="category" onChange={handleChange} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
        </form>
    </>
  )
}

export default page