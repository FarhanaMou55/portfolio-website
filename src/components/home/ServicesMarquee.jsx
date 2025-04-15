import Marquee from "react-fast-marquee";
import { PiStarFour } from "react-icons/pi";

const ServicesMarquee = () => {
  const services = [
    "Facebook Ads",
    "Website Development",
    "Frontend Developer",
    "Facebook Pixel",
    "Digital Marketing",
    "Pro Coder",
  ];

  return (
    <div className="py-6 bg-pink-700 mt-8 text-white max-w-screen ">
      <Marquee speed={50} pauseOnHover gradient={false}>
        {services.map((service, index) => (
          <div
            key={index}
            className="flex text-2xl items-center gap-2 mx-6  text-white  font-semibold"
          >
            <PiStarFour className="text-3xl" />
            <span>{service}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ServicesMarquee;
