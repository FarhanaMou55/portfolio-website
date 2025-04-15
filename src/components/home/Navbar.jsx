import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contacts', to: '/contacts' },
];

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-10/12 h-20 mx-auto font-body  '>
      {/* Logo */}
      <div className='flex items-center gap-5'>
        <img className='w-15 h-15' src="/src/assets/farhanamou.png" alt="Logo" />
        <h1 className='text-xl font-body font-semibold bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500 inline-block text-transparent bg-clip-text uppercase'>
          farhanamou
        </h1>
      </div>

      {/* Nav Links */}
      <div className='flex items-center gap-5 text-xl font-title '>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `relative inline-block transition-all duration-300 
                 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full 
                 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 
                 hover:before:scale-x-100 before:bg-gradient-to-r before:from-orange-500 before:via-pink-700 before:to-yellow-500
                 ${isActive
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500 before:scale-x-100'
                : 'text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-700 hover:to-yellow-500'
              }`
            }

          >
            {item.label}
          </NavLink>
        ))}
        <a
          href="https://wa.me/message/6EHGGUHMSFZFG1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn colour btn-lg ml-6 hover:text-white ">
            HIRE ME
          </button>
        </a>

      </div>

    </div>
  );
};

export default Navbar;
