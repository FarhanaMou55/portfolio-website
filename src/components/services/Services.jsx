import React from 'react';
import {
    FaFacebookSquare,
    FaSearch,
    FaCode,
    FaHtml5,
    FaBullhorn,
    FaLaptopCode,
    FaChartLine
} from 'react-icons/fa';

const services = [
    {
        title: "Facebook Ads",
        icon: "FaFacebookSquare",
        description: "Boost your business with high-performing Facebook ad campaigns tailored to your target audience."
    },
    {
        title: "SEO",
        icon: "FaSearch",
        description: "Improve your search engine ranking and organic traffic with modern SEO strategies."
    },
    {
        title: "Web Development",
        icon: "FaCode",
        description: "Full-stack web development solutions to build fast, responsive, and scalable websites."
    },
    {
        title: "Frontend Web Development",
        icon: "FaHtml5",
        description: "Create beautiful, functional UIs using HTML, CSS, JavaScript, React, and Tailwind CSS."
    },
    {
        title: "Digital Marketing",
        icon: "FaBullhorn",
        description: "Grow your brand online through social media marketing, email campaigns, and content creation."
    },
  
    {
        title: "Facebook Pixel",
        icon: "FaChartLine",
        description: "Track user interactions on your website to optimize Facebook ad performance and conversions."
    }
];

const Services = () => {
    return (
        <div>
            <section id='services ' className='w-full py-15  bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500 inline-block ' >

                <div className='w-10/12 mx-auto '>
                    <div className='flex flex-col gap-4 font-title flex-wrap  '>
                        <h3 className='text-md uppercase font-semibold tracking-wide text-white'>My Services</h3>
                        <h1 className='text-5xl font-bold capitalize text-white mb-3'>

                            What i do
                        </h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20'>
                            {services.map((service, index) => {
                                const Icon = {
                                    FaFacebookSquare,
                                    FaSearch,
                                    FaCode,
                                    FaHtml5,
                                    FaBullhorn,
                                    FaLaptopCode,
                                    FaChartLine
                                }[service.icon];

                                return (
                                    <div key={index} className="p-10 mb-8  rounded-xl text-center shadow-amber-50 shadow transition-all hover:transform-translate-y-l hover:shadow-2xl bg-white">
                                        <Icon className="text-4xl text-orange-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                );
                            })}

                          

                        </div>
                    </div>


                </div>






            </section>
        </div>
    );
};

export default Services;