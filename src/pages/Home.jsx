import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/FooterSection';

const Home = () => {
  const ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect calculations
  const xSoftware = -scrollY * 0.5;
  const xEngineer = scrollY * 0.5;

  return (
    <div className="bg-rose-50 dark:bg-gray-900 relative font-serif transition-colors duration-500 min-h-screen">
      {/* <Navbar /> */}
      
      <div ref={ref} className="pt-20 min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
        {/* Background overlapping text */}
        <span
          style={{ 
            transform: `translateX(${xSoftware}px) translateX(-50%) translateY(-50%)`,
            transition: 'opacity 1.5s ease-out'
          }}
          className="absolute text-5xl sm:text-8xl md:text-9xl lg:text-[15rem] font-bold text-rose-100 dark:text-gray-800 opacity-60 pointer-events-none top-1/2 left-1/2 select-none z-0 tracking-widest leading-none"
        >
          SOFTWARE
        </span>
        <span
          style={{ 
            transform: `translateX(${xEngineer}px) translateX(-50%) translateY(50%)`,
            transition: 'opacity 1.5s ease-out'
          }}
          className="absolute text-5xl sm:text-8xl md:text-9xl lg:text-[15rem] font-bold text-rose-100 dark:text-gray-800 opacity-60 pointer-events-none top-1/2 left-1/2 select-none z-0 tracking-widest leading-none"
        >
          ENGINEER
        </span>

        <div className="relative z-10 text-center">
          {/* Top text */}
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 tracking-wide transition-colors duration-300">
            Aditya Pratama | <span className="font-semibold text-gray-800 dark:text-gray-200">Software Engineer & IT Enthusiast</span>
            <span className="block w-24 h-0.5 bg-gray-400 dark:bg-gray-500 mx-auto mt-2 transition-colors duration-300"></span>
          </p>

          {/* Main title */}
          <h1 className="text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-gray-800 dark:text-gray-100 leading-none mb-10 tracking-tight transition-colors duration-300">
            PORTOFOLIO
          </h1>

          {/* Bottom text */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-8 tracking-wide inline-block group cursor-pointer transition-colors duration-300 hover:text-rose-600 dark:hover:text-rose-400">
            Let's explore my work
            <span className="block w-24 h-0.5 bg-gray-400 dark:bg-gray-500 mx-auto mt-2 transition-all duration-300 group-hover:w-32 group-hover:bg-rose-500 dark:group-hover:bg-rose-400"></span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-rose-300 dark:bg-rose-600 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-pink-300 dark:bg-pink-600 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-red-300 dark:bg-red-600 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-rose-200 dark:bg-rose-700 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      {/* <ProjectsSection /> */}

      {/* Skills Section */}
      <SkillsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Home />
    </div>
  );
};

export default Home;
