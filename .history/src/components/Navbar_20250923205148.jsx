import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-gray-800 text-xl font-semibold">MipalDev's</Link>
        <div className="flex items-center space-x-6">
          <Link to="/about" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">About</Link>
          <Link to="/projects" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">Projects</Link>
          <Link to="/contact" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">Contact</Link>
          {/* Dark mode toggle icon */}
          <button className="text-gray-800 hover:text-gray-600 transition-colors duration-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
