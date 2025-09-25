import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Classic Car",
    category: "Web Development",
    imageUrl: "https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=Classic+Car", // Placeholder image
  },
  {
    title: "Book Store",
    category: "UI/UX Design",
    imageUrl: "https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=Book+Store", // Placeholder image
  },
  {
    title: "Bear Illustration",
    category: "Graphic Design",
    imageUrl: "https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=Bear+Illustration", // Placeholder image
  },
  {
    title: "Violin Player",
    category: "Web Development",
    imageUrl: "https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=Violin+Player", // Placeholder image
  },
  {
    title: "Road Bike",
    category: "UI/UX Design",
    imageUrl: "https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=Road+Bike", // Placeholder image
  },
  {
    title: "Alhambra Palace",
    category: "Graphic Design",
    imageUrl: "https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=Alhambra+Palace", // Placeholder image
  },
];

const ProjectsSection = () => {
  return (
    <div className="bg-red-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-800 tracking-wider mb-10 text-center"
        >
          <span className="inline-block w-3 h-3 bg-black rounded-full mr-3"></span>
          PROJECTS
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">
            See all of our work
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
