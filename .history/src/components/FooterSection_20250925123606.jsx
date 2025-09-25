import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Nama & Role */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-gray-800 mb-4"
        >
          Aditya Pratama
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mb-8"
        >
          Software Engineer & IT Enthusiast
        </motion.p>

        {/* Navigasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mb-8 text-gray-700 font-medium"
        >
          <Link to="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-gray-900 transition">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-gray-900 transition">
            Skills
          </Link>
          <Link to="/contact" className="hover:text-gray-900 transition">
            Contact
          </Link>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Aditya Pratama. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
