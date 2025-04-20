import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/src/assets/farhanamou.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contacts', to: '/contacts' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-10/12 mx-auto h-20 flex justify-between items-center font-body relative z-50'>

      {/* Logo & Name */}
      <Link to='/' className='flex items-center gap-3'>
        <img className='w-12 h-12' src={logo} alt="Logo" />
        <h1 className='text-xl font-semibold bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500 text-transparent bg-clip-text uppercase'>
          farhanamou
        </h1>
      </Link>

      {/* Desktop Nav */}
      <div className='hidden md:flex items-center gap-5 text-xl font-title'>
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

      {/* Mobile Hamburger */}
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 text-lg font-title md:hidden'>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `w-full text-center py-2 ${
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500'
                    : 'text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-700 hover:to-yellow-500'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/message/6EHGGUHMSFZFG1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center"
          >
            <button className="btn colour btn-lg w-full hover:text-white">
              HIRE ME
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
