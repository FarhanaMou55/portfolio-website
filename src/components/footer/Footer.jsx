import React from 'react';
import {
    FaSquareFacebook,
    FaSquareInstagram,
    FaSquareXTwitter,
    FaLinkedin,
    FaSquareWhatsapp
} from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center  bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500 text-white rounded p-10">
              
                   <div className='w-10/12 mx-auto'>
                   <div >
                        <h1 className='uppercase text-md font-semibold text-base'>Quick Links</h1>
                    </div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="/" className="link link-hover">Home</a>
                        <a href="/services" className="link link-hover">Services</a>
                        <a href="/projects" className="link link-hover">Projects</a>
                        <a href="/testimonials" className="link link-hover">Testimonials</a>
                        <a href="/contacts" className="link link-hover">Contact</a>
                    </div>
               
                <nav>
                    <div className="flex flex-col gap-4">
                        <div className='gap-4'>
                            <h1 className='uppercase text-md font-semibold text-base'>Find me in</h1>
                        </div>
                        <div className='flex items-center justify-center gap-7 tracking-wide'>
                            <a href="https://www.facebook.com/profile.php?id=100090152457744" target="_blank" rel="noopener noreferrer"><FaSquareFacebook className='hover:text-white text-3xl' /></a>
                            <a href="https://www.instagram.com/farhanamou_828/" target="_blank" rel="noopener noreferrer"><FaSquareInstagram className='hover:text-white text-3xl' /></a>
                            <a href="https://www.linkedin.com/in/farhanamou828/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='hover:text-white text-3xl' /></a>
                            <a href="https://x.com/FarhanaIslamMo1" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className='hover:text-white text-3xl' /></a>
                            <a href="https://wa.me/message/6EHGGUHMSFZFG1" target="_blank" rel="noopener noreferrer"><FaSquareWhatsapp className='hover:text-white text-3xl' /></a>
                        </div>
                    </div>
                </nav>
                <aside >
                    <p className='font-bold'>Copyright © {new Date().getFullYear()} - All right reserved by FARHANA ISLAM MOU</p>
                </aside>
                   </div>
            </footer>
        </div>
    );
};

export default Footer;