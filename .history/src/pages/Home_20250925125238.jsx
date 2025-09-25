import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import  SkillsSection  from '../components/SkillsSection';
import Footer from '../components/FooterSection';

function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const xSoftware = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const xEngineer = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-red-50 relative font-serif"
    >
      <div ref={ref} className="min-h-screen flex items-center justify-center relative px-4">
        {/* Background overlapping text */}
        <motion.span
          style={{ x: xSoftware }}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute text-5xl sm:text-8xl md:text-9xl lg:text-[15rem] font-bold text-red-100 opacity-60 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0 tracking-widest leading-none"
        >
          SOFTWARE
        </motion.span>
        <motion.span
          style={{ x: xEngineer }}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute text-5xl sm:text-8xl md:text-9xl lg:text-[15rem] font-bold text-red-100 opacity-60 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 select-none z-0 tracking-widest leading-none"
        >
          ENGINEER
        </motion.span>

        <div className="relative z-10 text-center">
          {/* Top text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-700 mb-8 tracking-wide"
          >
            Aditya Pratama | <span className="font-semibold">Software Engineer & IT Enthusiast</span>
            <span className="block w-24 h-0.5 bg-gray-400 mx-auto mt-2"></span>
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-5xl md:text-9xl lg:text-[10rem] font-extrabold text-gray-800 leading-none mb-10 tracking-tight"
          >
            PORTOFOLIO
          </motion.h1>

          {/* Bottom text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-600 mt-8 tracking-wide inline-block group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Let's explore my work
            <motion.span 
              className="block w-24 h-0.5 bg-gray-400 mx-auto mt-2"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.p>
        </div>
      </div>
      <ServicesSection />
      <SkillsSection />
      <Footer />
    </motion.div>
  );
}

export default Home;
