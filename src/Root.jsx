import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/home/Navbar';

const Root = () => {
    return (
        <div className='max-w-screen-2xl mx-auto bg-white text-black '>
           <div className='max-w-screen mx-auto shadow-lg bg-white sticky top-0 z-50 '><Navbar/> </div>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Root;