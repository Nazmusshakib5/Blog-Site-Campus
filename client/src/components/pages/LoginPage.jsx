import axios from "axios";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [UserEmail,setUserEmail]=useState('')
    const [UserPassWord,setUserPassWord]=useState('')
    const navigate=useNavigate()

    const loginReq=async (user,pass)=>{
        const reqBody={user:user,pass:pass}
        const data=await axios.post('/api/v1/login',reqBody)
        if(data['data']['status']==='success'){
            console.log('successfully logged in')
            console.log('reqBody is',reqBody)
            navigate('/dashboard')
        }
        else {
            console.log('failed login')
            navigate('/login')
        }
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full text-gray-700 p-3 border border-gray-300 rounded-lg focus:outline-0
                                 bg-gray-100 focus:border-emerald-950"
                            onChange={(e)=>setUserEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full  text-gray-700 p-3 border border-gray-300 rounded-lg focus:outline-none
                                 bg-gray-100 focus:border-emerald-950"
                            onChange={(e)=>setUserPassWord(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between flex-col gap-2">
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4
                                 rounded-lg focus:outline-none focus:shadow-outline w-full"
                            onClick={() => loginReq(UserEmail, UserPassWord)}
                        >
                            Sign In
                        </button>
                        <Link
                            to='/'
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4
                                 rounded-lg focus:outline-none focus:shadow-outline w-full text-center"
                        >
                            Back To Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;