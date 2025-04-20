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
            <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500 text-white rounded p-10">
                <div className='w-full max-w-screen-lg px-4 mx-auto'>
                    {/* Quick Links Section */}
                    <div>
                        <h1 className='uppercase text-sm md:text-md font-semibold'>Quick Links</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-flow-col gap-4 my-4 text-sm">
                        <a href="/" className="link link-hover">Home</a>
                        <a href="/services" className="link link-hover">Services</a>
                        <a href="/projects" className="link link-hover">Projects</a>
                        <a href="/testimonials" className="link link-hover">Testimonials</a>
                        <a href="/contacts" className="link link-hover">Contact</a>
                    </div>

                    {/* Social Links Section */}
                    <nav>
                        <div className="flex flex-col gap-4 items-center">
                            <h1 className='uppercase text-sm md:text-md font-semibold'>Find me in</h1>
                            <div className='flex flex-wrap items-center justify-center gap-4'>
                                <a href="https://www.facebook.com/profile.php?id=100090152457744" target="_blank" rel="noopener noreferrer">
                                    <FaSquareFacebook className='hover:text-white text-3xl' />
                                </a>
                                <a href="https://www.instagram.com/farhanamou_828/" target="_blank" rel="noopener noreferrer">
                                    <FaSquareInstagram className='hover:text-white text-3xl' />
                                </a>
                                <a href="https://www.linkedin.com/in/farhanamou828/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='hover:text-white text-3xl' />
                                </a>
                                <a href="https://x.com/FarhanaIslamMo1" target="_blank" rel="noopener noreferrer">
                                    <FaSquareXTwitter className='hover:text-white text-3xl' />
                                </a>
                                <a href="https://wa.me/message/6EHGGUHMSFZFG1" target="_blank" rel="noopener noreferrer">
                                    <FaSquareWhatsapp className='hover:text-white text-3xl' />
                                </a>
                            </div>
                        </div>
                    </nav>

                    {/* Copyright */}
                    <aside className='mt-6 text-center text-xs md:text-sm'>
                        <p className='font-bold'>
                            Copyright © {new Date().getFullYear()} - All rights reserved by FARHANA ISLAM MOU
                        </p>
                    </aside>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
