import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
 // Adjust path if needed
 import handshake from '../../assets/handshake.jpg'; // Adjust path if needed

const Contacts = () => {
  const formRef = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const formData = new FormData(form);
    const name = formData.get('user_name');
    const phone = formData.get('user_phone');
    const email = formData.get('user_email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const newErrors = {};
    if (!name) newErrors.user_name = 'Name is required';
    if (!phone) newErrors.user_phone = 'Phone is required';
    if (!email) newErrors.user_email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.user_email = 'Invalid email';
    if (!subject) newErrors.subject = 'Subject is required';
    if (!message) newErrors.message = 'Details are required';

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formRef.current);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm('service_z13gtf6', 'template_sl3gjim', formRef.current, {
          publicKey: 'MAbOT6AI7oSQR-8Yd',
        })
        .then(
          () => {
            const formData = new FormData(formRef.current);
            const userName = formData.get('user_name');
            setSuccessMessage(`Thank you dear ${userName}, your message has been sent successfully.`);
            formRef.current.reset();
            setErrors({});
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSuccessMessage('Something went wrong. Please try again later.');
          }
        );
    }
  };

  return (
    <div className="w-10/12 max-w-7xl mx-auto h-auto py-14">
      <h2 className="text-3xl md:text-4xl mb-10 font-bold text-center uppercase text-gray-800">
        contact
      </h2>

      <div className="relative flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Info Card */}
        <div className="w-full py-5 shadow-2xl md:w-1/3 text-white bg-gradient-to-r from-yellow-500 via-pink-700 to-orange-500 p-6 rounded-2xl text-center">
          <img className="h-52 w-full object-cover mx-auto rounded-3xl mb-3" src={handshake} alt="Farhana Mou" />
          <h3 className="text-xl md:text-2xl font-bold uppercase">farhana islam mou</h3>
          <p className="text-lg uppercase tracking-wide">mern stack developer</p>
          <h2 className="text-xl mb-2 font-bold">Building the Future, One Project at a Time</h2>
          <p className="text-md">Let’s work together and create something impactful.</p>
          <div className="text-sm leading-relaxed mt-2">
            <p>📞 +8801886305528</p>
            <p>📧 Farhanamou828@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full py-6 rounded-2xl shadow-2xl md:w-2/3 px-4 md:px-14 bg-gradient-to-r from-yellow-500 via-pink-700 to-orange-500">
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8">
            <div className="flex gap-4">
              <div className="w-full">
                <input name="user_name" className="w-full bg-amber-50 rounded-2xl p-3" placeholder="Your name" />
                {errors.user_name && <span className="text-sm text-white">{errors.user_name}</span>}
              </div>
              <div className="w-full">
                <input name="user_phone" className="w-full bg-amber-50 rounded-2xl p-3" placeholder="Phone No." />
                {errors.user_phone && <span className="text-sm text-white">{errors.user_phone}</span>}
              </div>
            </div>

            <div>
              <input name="user_email" className="w-full bg-amber-50 rounded-2xl p-3" placeholder="Your email" />
              {errors.user_email && <span className="text-sm text-white">{errors.user_email}</span>}
            </div>

            <div>
              <input name="subject" className="w-full bg-amber-50 rounded-2xl p-3" placeholder="Subject" />
              {errors.subject && <span className="text-sm text-white">{errors.subject}</span>}
            </div>

            <div>
              <textarea name="message" rows="4" className="w-full bg-amber-50 rounded-2xl p-3" placeholder="Details" />
              {errors.message && <span className="text-sm text-white">{errors.message}</span>}
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="mt-2 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
              >
                Send
              </button>
              {successMessage && (
                <p className="text-white text-md font-semibold text-center mt-3 animate-bounce">
                  {successMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
