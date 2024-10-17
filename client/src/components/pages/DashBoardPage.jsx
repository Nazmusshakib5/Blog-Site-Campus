import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import ValidationHelper from '../../Utility/IsLoggedIn.js'
import axios from "axios";
import AllBlogs from "./InnerDashBoardPages/AllBlogs.jsx";


const DashBoardPage = () => {
    const navigate=useNavigate()

    const HandleLogout=async ()=>{
        await axios.get('/api/v1/logout')
        navigate('/login')
    }


    useEffect(() => {
        if(!ValidationHelper.IsLogin()){
            navigate('/login')
        }
    }, [navigate]);
    return (
        <div>
            <div className='bg-neutral-900 w-full h-20 flex justify-between items-center'>
                <p className='text-white font-semibold text-xl ms-5'>Dashboard</p>
                <button className='bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 me-5'
                        onClick={()=>HandleLogout()}
                >LogOut</button>
            </div>
            <AllBlogs/>
        </div>
    );
};

export default DashBoardPage;