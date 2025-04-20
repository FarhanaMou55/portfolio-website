import React, { useEffect, useState } from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Services from '../services/Services';
import Projects from '../projects/Projects';
import Testimonials from '../testimonials/Testimonials';
import Contacts from '../contact/Contacts';
import { PiStarFour } from "react-icons/pi";
import Marquee from 'react-fast-marquee';
import ServicesMarquee from './ServicesMarquee';
import Myskill from './Myskill';
import heroimg from '/src/assets/farhanamou828.png';



const Home = () => {
  const words = [
    'Professional Coder',
    'Web Developer',
    'Frontend Web Developer',
    'Digital Marketer',
  ];

  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (

    <section
      id="home"
      className="w-full   pt-24"
    >
      <div>
        <div className="w-10/12 mx-auto gap-3 justify-center flex items-center md:justify-between flex-wrap">
          {/* Text Section */}
          <div className="max-w-xl flex flex-col gap-6 ">
            <div className='text-center md:text-left gap-4'>
              <h4 className="text-xl font-semibold uppercase mb-3">
                Welcome to my website
              </h4>

              <h1 className="font-bold text-black text-4xl">
                I'M{' '}
                <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500 inline-block text-transparent bg-clip-text">
                  FARHANA ISLAM MOU
                </span>
              </h1>

              <h1 className='font-bold  gap-2 text-2xl md:text-3xl mb-4 '>A
                <h4 className="font-bold  text-orange-600 ">
                  {text}
                  <span className="animate-pulse">|</span>
                </h4>

              </h1>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                — a passionate
                <span className="font-semibold"> Frontend Developer</span> & <span className="font-semibold">Digital Marketer</span>.
                I specialize in <span className="text-pink-600 font-medium">Facebook Ads</span>,
                <span className="text-pink-600 font-medium"> SEO</span>,
                <span className="text-pink-600 font-medium"> Facebook Pixel</span>, and
                <span className="text-pink-600 font-medium"> Website Development</span>.
                Let's build something amazing and grow your business together!
              </p>
            </div>
            <div className='text-center md:text-left mb-4 ' >
              <div className='gap-4'>
                <h1 className='uppercase text-md font-semibold text-base mb-2 '>Find me in</h1>
              </div>
              <div className=' space-x-4 gap-7 mb-4 '>

                <a
                  href="https://www.facebook.com/profile.php?id=100090152457744"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareFacebook className='hover:text-white colour text-3xl ' />
                </a>
                <a
                  href="https://www.instagram.com/farhanamou_828/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className='hover:text-white colour text-3xl ' />
                </a>
                <a
                  href="https://www.linkedin.com/in/farhanamou828/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className='hover:text-white colour text-3xl ' />
                </a>
                <a
                  href="https://x.com/FarhanaIslamMo1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter className='hover:text-white colour text-3xl ' />
                </a>
                <a
                  href="https://wa.me/message/6EHGGUHMSFZFG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareWhatsapp className='hover:text-white colour text-3xl   ' />
                </a>

              </div>
            </div>
          </div>


          {/* Image Section */}
          <div>
            <img
              className="max-w-screen h-[480px]"
              src={heroimg}
              alt="Farhana Islam Mou"
            />
          </div>
        </div>
        <ServicesMarquee />



        <section id="services" className="py-14  ">
          <Services />
        </section>

        <section id="projects" className="py-14  ">
          <Projects />
        </section>
        <ServicesMarquee />
        <Myskill />

        <section id="testimonials" className="py-14  ">
          <Testimonials />
        </section>

        <section id="contacts" >
          <Contacts />
        </section>
      </div>
    </section>
  );
};



export default Home;
