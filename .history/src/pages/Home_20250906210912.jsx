import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-red-50 relative font-serif"
    >
      <Navbar />
      <div className="min-h-screen flex items-center justify-center relative mt-16">
        {/* Background overlapping text */}
        <motion.span
          initial={{ y: "-100%", opacity: 0.2 }}
          animate={{ y: "-50%", opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute text-[15rem] font-bold text-red-100 opacity-60 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0 tracking-widest leading-none"
        >
          SOFTWARE
        </motion.span>
        <motion.span
          initial={{ y: "100%", opacity: 0.2 }}
          animate={{ y: "50%", opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute text-[15rem] font-bold text-red-100 opacity-60 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 select-none z-0 tracking-widest leading-none"
        >
          ENGINEER
        </motion.span>

        <div className="relative z-10 text-center">
          {/* Top text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-gray-700 text-lg mb-8 tracking-wide"
          >
            Aditya Pratama | <span className="font-semibold">Software Engineer & IT Enthusiast</span>
            <span className="block w-24 h-0.5 bg-gray-400 mx-auto mt-2"></span>
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="text-[10rem] font-extrabold text-gray-800 leading-none mb-10 tracking-tight"
          >
            PORTOFOLIO
          </motion.h1>

          {/* Bottom text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
            className="text-gray-600 text-lg mt-8 tracking-wide"
          >
            Let's explore my work
            <span className="block w-24 h-0.5 bg-gray-400 mx-auto mt-2"></span>
          </motion.p>
        </div>
      </div>
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </motion.div>
  );
}

export default Home;
