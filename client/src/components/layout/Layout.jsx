import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;