import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Menggunakan ikon dari lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 p-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-gray-800 text-2xl font-bold">MipalDev's</Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium">
                {link.text}
              </Link>
            ))}
            <button className="text-gray-700 hover:text-rose-600 transition-colors duration-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-red-50 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navLinks.map(link => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="text-gray-800 text-3xl font-semibold hover:text-rose-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.text}
            </Link>
          ))}
          <button className="text-gray-800 hover:text-rose-600 transition-colors duration-300 focus:outline-none mt-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
