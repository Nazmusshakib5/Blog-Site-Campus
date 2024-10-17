import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Blogs = () => {
    const [blog,setBlog]=useState(null)

    const BlogListApi=async ()=>{
        const data=await axios.get('/api/v1/blog')
        setBlog(data['data']['data'])

    }

    useEffect(() => {
        (async ()=>{
            await BlogListApi()
        })()
    }, []);
    return (
        blog !==null && <div>
            <div className='bg-white w-full' id='blog'>
                <p className='text-center text-4xl py-10 uppercase'>Blogs</p>
            </div>
            <div className='w-full grid grid-cols-12 px-10 gap-6 py-16'>
                {
                    blog.map((item,i)=> (
                        <Link to={`/blogDetails/${item['_id']}`} key={i} className=' col-span-4 shadow-sm shadow-neutral-500 rounded-lg'>
                            <img alt='image'
                                src={item['blogImage']}
                                className=''
                            />
                            <div className='py-5'>
                                <p className='text-center font-semibold text-3xl'>{item['blogTitle']}</p>
                            </div>
                        </Link>
                    ))
                }

                {/*<div className=' col-span-4 shadow-sm shadow-black rounded-lg'>*/}
                {/*    <img*/}
                {/*        src='https://c.wallhere.com/photos/fe/ec/africa_light_portrait_black_men_smile_night_laughing-941444.jpg!d'*/}
                {/*        className='rounded-lg'*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className=' col-span-4 shadow-sm shadow-neutral-500 rounded-lg'>*/}
                {/*    <img*/}
                {/*        src='https://c.wallhere.com/photos/fe/ec/africa_light_portrait_black_men_smile_night_laughing-941444.jpg!d'*/}
                {/*        className='rounded-lg'*/}
                {/*    />*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

export default Blogs;