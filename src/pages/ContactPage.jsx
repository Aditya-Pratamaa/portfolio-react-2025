import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Linkedin, Github, Instagram, Twitter, Clock, CheckCircle, ArrowLeft, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setSubmitError('Please fill out all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/mjknloae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adityapratamatech@gmail.com',
      subtitle: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 895-3553-21756',
      subtitle: ''
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kota Bogor, Indonesia',
      subtitle: 'Available for remote work'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-pratama-761143323/', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { icon: Github, name: 'GitHub', url: 'https://github.com/Aditya-Pratamaa', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Animated background & Floating particles (No changes needed, already responsive) */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-96 h-96 bg-rose-300 dark:bg-rose-800 rounded-full blur-3xl animate-pulse transition-colors duration-500"
          style={{
            left: `${mousePos.x * 0.02}%`,
            top: `${mousePos.y * 0.02}%`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-pink-300 dark:bg-pink-800 rounded-full blur-3xl animate-pulse transition-colors duration-500"
          style={{
            right: `${mousePos.x * 0.01}%`,
            bottom: `${mousePos.y * 0.01}%`,
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-rose-400 dark:bg-rose-600 rounded-full opacity-30 animate-bounce transition-colors duration-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '4s'
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 mt-13">
          <Link 
            to="/"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 mb-8 mx-auto w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          {/* Adjusted text size for better mobile display (text-4xl for small screens) */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 dark:from-rose-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-600 dark:to-pink-600 mx-auto rounded-full mb-6" />
          {/* Adjusted max-w for better readability on various screens */}
          <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed transition-colors duration-300">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together! 🚀
          </p>
        </div>

        {/* Main Grid: Changed lg:grid-cols-2 to grid-cols-1 md:grid-cols-2 for tablet/desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">Get In Touch</h2>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 sm:p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-rose-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 transition-colors duration-300">{info.title}</h3>
                      <p className="text-base sm:text-lg text-rose-600 dark:text-rose-400 font-medium mb-1 transition-colors duration-300">{info.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-rose-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-2xl transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-green-800 dark:text-green-200 transition-colors duration-300">Available for Work</span>
              </div>
              <p className="text-green-700 dark:text-green-300 text-sm sm:text-base transition-colors duration-300">
                I'm currently open for new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-rose-200 dark:border-gray-700 shadow-xl transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-rose-600 dark:text-rose-400 transition-colors duration-300" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">Send Message</h2>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-xl flex items-center gap-3 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-300 transition-colors duration-300" />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200 transition-colors duration-300">Message Sent!</p>
                  <p className="text-sm text-green-700 dark:text-green-300 transition-colors duration-300">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-xl flex items-center gap-3 transition-colors duration-300">
                <div className="text-red-600 dark:text-red-300">
                  <p className="font-semibold">Submission Failed</p>
                  <p className="text-sm">{submitError}</p>
                </div>
              </div>
            )}

            <div className="space-y-4 sm:space-y-6">
              {/* Adjusted grid to single column on small screens, two columns on medium screens and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5 transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white/80 dark:bg-gray-700/80 border border-rose-200 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-rose-400 dark:focus:border-rose-500 focus:bg-white dark:focus:bg-gray-700 transition-all duration-300"
                    required
                    minLength={2}
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white/80 dark:bg-gray-700/80 border border-rose-200 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-rose-400 dark:focus:border-rose-500 focus:bg-white dark:focus:bg-gray-700 transition-all duration-300"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-4 py-3 sm:py-4 bg-white/80 dark:bg-gray-700/80 border border-rose-200 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-rose-400 dark:focus:border-rose-500 focus:bg-white dark:focus:bg-gray-700 transition-all duration-300"
                required
                minLength={4}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 sm:py-4 bg-white/80 dark:bg-gray-700/80 border border-rose-200 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-rose-400 dark:focus:border-rose-500 focus:bg-white dark:focus:bg-gray-700 transition-all duration-300 resize-none"
                required
                minLength={10}
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${ 
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400' 
                    : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 sm:mt-6 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              <Clock className="w-4 h-4 mr-2" />
              Usually responds within 24 hours
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-20 p-6 sm:p-8 bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-700 dark:to-pink-700 rounded-3xl text-white transition-colors duration-300">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start Your Project?</h3>
          <p className="text-sm sm:text-base text-rose-100 mb-4 sm:mb-6 max-w-2xl mx-auto dark:text-rose-200 transition-colors duration-300">
            Whether you need a website, mobile app, or custom software solution, 
            I'm here to bring your ideas to life with cutting-edge technology and creative design.
          </p>
          {/* Adjusted button size for mobile */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
              View Projects
            </Link>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;