import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
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
          <Link to="/" className="text-gray-800 dark:text-gray-100 text-2xl font-bold">Aditya</Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 font-medium">
                {link.text}
              </Link>
            ))}
            <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 focus:outline-none">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-100 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-red-50 dark:bg-gray-900 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navLinks.map(link => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="text-gray-800 dark:text-gray-100 text-3xl font-semibold hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.text}
            </Link>
          ))}
          <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-100 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 focus:outline-none mt-8">
            {theme === 'dark' ? <Sun size={28} /> : <Moon size={28} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
