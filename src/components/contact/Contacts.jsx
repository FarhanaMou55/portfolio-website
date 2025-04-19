import React, { useState } from 'react';
import {
    FaSquareFacebook,
    FaSquareInstagram,
    FaSquareXTwitter,
    FaLinkedin,
    FaSquareWhatsapp
} from "react-icons/fa6";

const Contacts = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [details, setDetails] = useState('');

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');


    const handleSendClick = (e) => {
        e.preventDefault();

        let newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) newErrors.name = 'Name is required';
        if (!phone) newErrors.phone = 'Phone is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!emailPattern.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!subject) newErrors.subject = 'Subject is required';
        if (!details) newErrors.details = 'Details are required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSuccessMessage(`✅ Thank you dear ${name}, your message has been sent successfully.`);

            // Clear inputs
            setName('');
            setPhone('');
            setEmail('');
            setSubject('');
            setDetails('');
        }
    };


    return (
        <div className="w-10/12 max-w-7xl mx-auto h-auto py-14">
            <h2 className="text-3xl md:text-4xl mb-10 font-bold text-center uppercase text-gray-800">
                contact
            </h2>

           
            <div className="relative transition-all duration-700 ease-in-out flex flex-col md:flex-row gap-6 items-center md:items-stretch justify-between">

                {/* Left Card */}
                <div className="w-full py-5 shadow-2xl md:w-1/3 h-auto md:h-[500px] text-white bg-gradient-to-r from-yellow-500 via-pink-700 to-orange-500 flex flex-col gap-1.5 p-6 rounded-2xl text-center">
                    <img className="h-52 w-52 object-cover mx-auto rounded-3xl mb-3" src="/src/assets/handshake.jpg" alt="Farhana Mou" />
                    <h3 className="text-xl md:text-2xl font-bold uppercase">farhana islam mou</h3>
                    <p className="text-lg md:text-md uppercase tracking-wide">mern stack developer</p>
                    <h2 className="text-xl mb-2 font-bold tracking-wide">Building the Future, One Project at a Time</h2>
                    <p className="text-md">Let’s work together and create something impactful.</p>
                    <div className="text-sm leading-relaxed mt-2">
                        <p className="tracking-wide">📞 +8801886305528</p>
                        <p className="tracking-wide">📧 Farhanamou828@gmail.com</p>
                    </div>
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

                {/* Right Form */}
                <div className="w-full py-6 rounded-2xl shadow-2xl md:w-2/3 mx-auto h-auto md:h-[500px] px-4 md:px-14 flex flex-col justify-betwwen bg-gradient-to-r from-yellow-500 via-pink-700 to-orange-500">
                    <div className='flex flex-col justify-center gap-8 h-full'>

                        {/* Name and Phone */}
                        <div className='flex justify-between items-center gap-4'>
                            <div className='w-full'>
                                <input
                                    name="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setErrors(prev => ({ ...prev, name: '' }));
                                        setSuccessMessage('');
                                    }}
                                    className='w-full bg-amber-50 rounded-2xl p-3'
                                    type="text"
                                    placeholder='Your name'
                                />
                                {errors.name && <span className='text-sm font-semibold text-white  px-2 py-1 rounded-md'>{errors.name}</span>}
                            </div>
                            <div className='w-full'>
                                <input
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        setErrors(prev => ({ ...prev, phone: '' }));
                                        setSuccessMessage('');
                                    }}
                                    className='w-full bg-amber-50 rounded-2xl p-3'
                                    type="text"
                                    placeholder='Phone No.'
                                />
                                {errors.phone && <span className='text-sm font-semibold text-white px-2 py-1 rounded-md'>{errors.phone}</span>}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrors(prev => ({ ...prev, email: '' }));
                                    setSuccessMessage('');
                                }}
                                className='w-full bg-amber-50 rounded-2xl p-3'
                                type="email"
                                placeholder='Your email'
                            />
                            {errors.email && <span className='text-sm font-semibold text-white  px-2 py-1 rounded-md'>{errors.email}</span>}
                        </div>

                        {/* Subject */}
                        <div>
                            <input
                                name="subject"
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    setErrors(prev => ({ ...prev, subject: '' }));
                                    setSuccessMessage('');
                                }}
                                className='w-full bg-amber-50 rounded-2xl p-3'
                                type="text"
                                placeholder='Subject'
                            />
                            {errors.subject && <span className='text-sm font-semibold text-white px-2 py-1 rounded-md'>{errors.subject}</span>}
                        </div>

                        {/* Details */}
                        <div>
                            <input
                                name="details"
                                value={details}
                                onChange={(e) => {
                                    setDetails(e.target.value);
                                    setErrors(prev => ({ ...prev, details: '' }));
                                    setSuccessMessage('');
                                }}
                                className='w-full bg-amber-50 rounded-2xl p-3'
                                type="text"
                                placeholder='Details'
                            />
                            {errors.details && <span className='text-sm font-semibold text-white  px-2 py-1 rounded-md'>{errors.details}</span>}
                        </div>

                        {/* Button + Success Message */}
                        <div className="flex flex-col items-center">
                            <button
                                className='mt-2 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300'
                                onClick={handleSendClick}
                            >
                                Send
                            </button>

                            {/* ✅ Success message below the button */}
                            {successMessage && (
                                <p className='text-white text-md font-semibold text-center mt-3 animate-bounce'>
                                    {successMessage}
                                </p>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contacts;
