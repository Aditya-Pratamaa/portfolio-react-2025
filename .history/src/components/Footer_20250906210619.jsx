import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-gray-200 text-xl font-bold mb-4">MIPALDEV</h3>
          <p className="text-sm">© MipalDev 2025</p>
        </div>
        <div>
          <h3 className="text-gray-200 text-lg font-semibold mb-4">Sitemap</h3>
          <ul>
            <li className="mb-2"><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
            <li className="mb-2"><Link to="/projects" className="hover:text-white transition-colors duration-300">Projects</Link></li>
            <li className="mb-2"><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-200 text-lg font-semibold mb-4">Social</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">WhatsApp</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Email</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
