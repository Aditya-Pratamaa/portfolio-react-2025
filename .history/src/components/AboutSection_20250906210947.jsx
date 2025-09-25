import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="bg-white mt-20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-gray-900 mb-8 leading-tight"
        >
          STRUCTURED BY PRINCIPLE, <br />DRIVEN BY PURPOSE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          I don't work to look busy—I work to get things done, and done right. My focus is always on the goal: what needs to be built, who it's for, and the most efficient way to make it happen. I value clear processes, clean execution, and real outcomes over distractions or empty impressions.
          <br /><br />
          In the end, good work isn't about how it looks—it's about what it does.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutSection;
