import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

const UpdateBlogPage = () => {
    const navigate=useNavigate()
    const [blogData,SetBlogData]=useState({
        blogTitle:'',
        blogImage:'',
        blogDetails:'',
        blogType:''
    })

    const {ID}=useParams()


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( blogData);
    };

    const HandleUpdateBlogPost=async (blogData ,id)=>{
        let data=await axios.post(`/api/v1/saveBlog/${id}`,blogData)
        if(data['data']['status']==='success'){
            navigate('/dashboard')
        }
        else {
            console.log('failed to update')
        }
    }

    const HandleOnChange=(e)=>{
        SetBlogData({
            ...blogData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        (async ()=>{
            let data=await axios.get(`/api/v1/readBlog/${ID}`)
            if(data['data']['status']==='success'){
                SetBlogData(data['data']['data'])
            }
            else {
                console.log('Init Data failed')
            }
        })()
    }, []);

    console.log(blogData)


    return (
            <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 mt-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Update Blog Details</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Blog Title */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Blog Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter blog title"
                                value={blogData.blogTitle}
                                name='blogTitle'
                                onChange={HandleOnChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none
                            text-gray-700 bg-gray-100 focus:border-emerald-950"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                                Blog Type
                            </label>
                            <input
                                type="text"
                                id="type"
                                placeholder="Enter blog type"
                                value={blogData.blogType}
                                name='blogType'
                                onChange={HandleOnChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none
                            text-gray-700 bg-gray-100 focus:border-emerald-950"
                            />
                        </div>
                        {/* Image URL */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image-url">
                                Image URL
                            </label>
                            <input
                                type="text"
                                id="image-url"
                                placeholder="Enter image URL"
                                value={blogData.blogImage}
                                name='blogImage'
                                onChange={HandleOnChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none
                            text-gray-700 bg-gray-100 focus:border-emerald-950"
                            />
                        </div>
                        {/* Description */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                placeholder="Write your blog post description"
                                value={blogData.blogDetails}
                                name='blogDetails'
                                onChange={HandleOnChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none
                             text-gray-700 bg-gray-100 focus:border-emerald-950 h-32"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div className="flex items-center justify-center flex-col gap-2">
                            <button
                                onClick={() => HandleUpdateBlogPost(blogData, ID)}
                                type="submit"
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg
                             focus:outline-none focus:shadow-outline w-full"
                            >
                                Update
                            </button>
                            <Link
                                to='/dashboard'
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4
                                 rounded-lg focus:outline-none focus:shadow-outline w-full text-center"
                            >
                                Back To DashBoard
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default UpdateBlogPage;