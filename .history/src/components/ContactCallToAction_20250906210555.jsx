import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCallToAction = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-gray-900 mb-8 leading-tight"
        >
          Let's start the conversation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Great code isn't just about what you build—it's about who you build it with.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-gray-800 text-white text-xl font-bold px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            GET IN TOUCH
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCallToAction;
