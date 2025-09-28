import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Clean, user-focused interfaces designed in Figma — built for clarity, usability, and visual impact.",
    },
    {
      title: "Front-End & Back-End Development",
      description: "Fully responsive websites, from front-end visuals to back-end logic. Fast, scalable, and built with clean code.",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing updates, fixes, and performance monitoring to keep your site smooth, secure, and up to date.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-800 dark:text-gray-200 tracking-wider mb-10 text-center"
        >
          <span className="inline-block w-3 h-3 bg-black dark:bg-white rounded-full mr-3"></span>
          END-TO-END WEB SERVICE
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
