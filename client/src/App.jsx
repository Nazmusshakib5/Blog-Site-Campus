import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/pages/Homepage.jsx";
import BlogDetailsPage from "./components/pages/BlogDetailsPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import DashBoardPage from "./components/pages/DashBoardPage.jsx";
import UpdateBlogPage from "./components/pages/InnerDashBoardPages/UpdateBlogPage.jsx";
import CreateBlogPage from "./components/pages/InnerDashBoardPages/CreateBlogPage.jsx";

const App = () => {
    return (
        <>
           <BrowserRouter>
               <Routes>
                   <Route path='/' element={<Homepage/>}/>
                   <Route path='/blogDetails/:id' element={<BlogDetailsPage/>}/>
                   <Route path='/login' element={<LoginPage/>}/>
                   <Route path='/dashboard' element={<DashBoardPage/>}/>
                   <Route path='/dashboard/update/:ID' element={<UpdateBlogPage/>}/>
                   <Route path='/createBlog' element={<CreateBlogPage/>}/>
               </Routes>
           </BrowserRouter>
        </>
    );
};

export default App;