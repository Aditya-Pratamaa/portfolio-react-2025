import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My Portfolio</Link>
        <div>
          <Link to="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</Link>
          <Link to="/services" className="px-3 py-2 rounded hover:bg-gray-700 ml-4">Services</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
