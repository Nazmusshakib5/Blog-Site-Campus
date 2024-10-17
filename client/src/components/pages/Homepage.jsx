import React from 'react';
import Home from "../home/Home.jsx";
import Layout from "../layout/Layout.jsx";
import Blogs from "../blog/Blogs.jsx";

const Homepage = () => {
    return (
        <Layout>
            <Home/>
            <Blogs/>
        </Layout>
    );
};

export default Homepage;