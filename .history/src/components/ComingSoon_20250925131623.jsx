import React, { useState, useEffect } from 'react';
import { Mail, Bell, Sparkles, Zap, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isNotified, setIsNotified] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Target date for countdown (30 days from now)
  const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 2
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsNotified(true);
      setTimeout(() => setIsNotified(false), 3000);
      setEmail('');
    }
  };

  const features = [
    { icon: Zap, text: 'Lightning Fast Performance', delay: '0s' },
    { icon: Star, text: 'Premium User Experience', delay: '0.2s' },
    { icon: Sparkles, text: 'Cutting-edge Technology', delay: '0.4s' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-red-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4"
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
        className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center max-w-xl"
      >
        We're busy crafting some amazing projects to share with you. Stay tuned for updates!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Link to="/" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ComingSoon;