import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import axios from "axios";

const SingleBlog = () => {
    const [singleBlogs, setSingleBlog] = useState(null)
    const {id} = useParams()

    const fetchSingleBlog = async () => {
        let data = await axios.get(`/api/v1/readBlog/${id}`)
        setSingleBlog(data['data']['data'])
        console.log(data['data']['data'])
    }

    useEffect(() => {
        (async () => {
            await fetchSingleBlog()
        })()
    }, []);

    return (
        singleBlogs!==null && <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-6 mt-24">
            {/* Blog Title */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800 p-6 text-center">{singleBlogs['blogTitle']}</h1>

                {/* Blog Image */}
                <div className="w-full  bg-cover bg-center">
                    <img src={singleBlogs['blogImage']} alt='image'/>
                </div>

                {/* Blog Description */}
                <div className="p-6">
                    <p className="text-gray-700 text-lg">{singleBlogs['blogDetails']}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;