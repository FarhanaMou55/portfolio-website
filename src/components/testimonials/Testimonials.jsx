import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const testimonials = [
  {
    name: "ninjabee_vienna",
    role: "CEO",
    image: "/src/assets/0C8FAEAD-E946-4833-908C-3375111EDE02.webp",
    title: "Social Media Management",
    platform: "via FIVERR - Dec 2024 - Present 2025",
    quote:
      "I can truly recommend Farhana, she is really good in what she is doing. i came to her to outsource our social media game and wasn't disappointed at all. she has strategic thinking, she knows what is best for us and the timeframe which she gets things done is awesome! I will def. come back for more. in fact i already booked the next gig!",
  },
  {
    name: "Tyler Ashford",
    role: "Managing Director",
    image: "/src/assets/A852D67A-7D6C-4BDC-B5A4-6A9CE9CB6828.webp",
    title: "Website Development",
    platform: "via FIVERR",
    quote:
      " She is a master at her craft. I will be coming back again and working long term with her. I am very happy with the work she has done for me. She is very professional and has a great eye for design. I highly recommend her to anyone looking for a web designer or developer.",
  },
  {
    name: "Karthik Buddha",
    role: "Entrepreneur",
    image: "/src/assets/cheerful-young-caucasian-businessman.jpg",
    title: "Social Media Marketing",
    platform: "via UPWORK",
    quote:
      "I recently engaged with Farhana's social media marketing services, and I must say, I am thoroughly impressed! Her strategies have significantly boosted my online presence. She is incredibly knowledgeable and proactive. Her creativity and attention to detail are truly commendable. ",
  },
  {
    name: "brian adamz",
    role: "Entrepreneur",
    image: "/src/assets/portrait-smiling-young-man-rubbing-his-hands.jpg",
    title: "Website Development",
    platform: "via UPWORK",
    quote:
      "Farhana has been a pleasure to deal with. Very responsive, advising, and capable of high-quality design. She was very reasonable in pricing, and that is what attracted me to her. Even when I overpaid here, she chose to refund me. I didn't think it was overpaying. However, his integrity obviously showed great character.",
  },
  {
    name: "bilal_asghar",
    role: "Entrepreneur",
    image: "/src/assets/fbc8a7cb-9b11-4902-8144-5061d1f2a9a9.webp",
    title: "Website Development",
    platform: "via FIVERR",
    quote:
      "   I'm incredibly happy with the results and will definitely be using farhanamou828 again for future projects. If you're looking for a talented and reliable website developer for your  needs, look no further! working long term with her. I highly recommend her.",
  },
];
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [pause, current]);

  return (
    <div className="relative w-10/12 mx-auto py-14">
      <h2 className="text-4xl mb-12 font-bold text-center text-gray-800">What Clients Say</h2>

      {/* Slide */}
      <div
        className="relative transition-all duration-700 ease-in-out flex flex-col md:flex-row gap-6 items-center md:items-stretch justify-between"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {/* Arrows on left and right sides */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-pink-700 p-2 rounded-full shadow-md hover:bg-pink-100 z-10"
          aria-label="Previous"
        >
          <FaArrowLeft />
        </button>

        {/* Left / Image */}
        <div className="w-full mx-auto shadow-2xl md:w-1/3 h-auto md:h-[500px] text-white bg-gradient-to-r from-yellow-500 via-pink-700 to-orange-500 flex flex-col gap-6 p-6 rounded-xl text-center justify-center">
          <img className="h-52 md:h-72 w-full object-cover rounded-3xl mx-auto" src={testimonials[current].image} alt={testimonials[current].name} />
          <h3 className="text-xl md:text-2xl font-bold uppercase">{testimonials[current].name}</h3>
          <p className="text-sm md:text-md uppercase tracking-wide">{testimonials[current].role}</p>
        </div>

        {/* Right / Text */}
        <div className="w-full shadow-2xl md:w-2/3 h-auto md:h-[500px]  flex flex-col gap-6 justify-between">
          <img className="w-16 md:w-20" src="/src/assets/quotation.png" alt="quote" />
          <div className="w-full h-full py-8 md:py-10 rounded-3xl shadow-2xl text-white bg-gradient-to-r from-yellow-500 via-pink-700 to-orange-500 px-6 md:px-14 flex flex-col justify-center gap-6 md:gap-8">
            <div className="border-b-2 border-white pb-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2 md:mb-4">
                    {testimonials[current].title}
                  </h3>
                  <p className="text-sm">{testimonials[current].platform}</p>
                </div>
                <div>
                  <img className="w-28" src="/src/assets/rating.png" alt="rating" />
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium tracking-wide">{testimonials[current].quote}</p>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-pink-700 p-2 rounded-full shadow-md hover:bg-pink-100 z-10"
          aria-label="Next"
        >
          <FaArrowRight />
        </button>

      </div>

      {/* Arrows */}
      <div className="md:hidden flex justify-center gap-4 mt-8 text-gray-800 text-xl">
        <button onClick={prevSlide} aria-label="Previous">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} aria-label="Next">
          <FaArrowRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-pink-700 scale-110' : 'bg-gray-300'} transition-all duration-300`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;