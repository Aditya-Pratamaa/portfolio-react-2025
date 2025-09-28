import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

// Dark Mode Hook
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or default to false
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
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
          <a href="/" className="text-gray-800 dark:text-gray-100 text-2xl font-bold transition-colors duration-300">
            Aditya
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.to} 
                href={link.to} 
                className="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 font-medium"
              >
                {link.text}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 focus:outline-none p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-gray-200 focus:outline-none p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 dark:text-gray-200 focus:outline-none p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-rose-50 dark:bg-gray-900 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navLinks.map(link => (
            <a 
              key={link.to} 
              href={link.to} 
              className="text-gray-800 dark:text-gray-100 text-3xl font-semibold hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;