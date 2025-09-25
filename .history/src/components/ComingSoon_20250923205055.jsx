import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-gray-800 px-4"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 150 }}
        className="text-6xl font-extrabold mb-4 text-center leading-tight"
      >
        Projects Coming Soon!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl text-gray-600 mb-8 text-center max-w-xl"
      >
        We're busy crafting some amazing projects to share with you. Stay tuned for updates!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <button className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors duration-300">
          Back to Home
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ComingSoon;
