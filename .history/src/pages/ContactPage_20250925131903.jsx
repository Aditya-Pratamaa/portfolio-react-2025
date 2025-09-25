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
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
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
      value: '+62 895-0000-0000',
      subtitle: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kota Bogor, Indonesia',
      subtitle: 'Available for remote work'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-pratama-761143322/', color: 'hover:text-blue-600' },
    { icon: Github, name: 'GitHub', url: 'https://github.com/Aditya-Pratamaa', color: 'hover:text-gray-800' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-600' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-96 h-96 bg-rose-300 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePos.x * 0.02}%`,
            top: `${mousePos.y * 0.02}%`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-pink-300 rounded-full blur-3xl animate-pulse"
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
          className="absolute bg-rose-400 rounded-full opacity-30 animate-bounce"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-13">
          <button className="flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors duration-300 mb-8 mx-auto">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together! 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                      <p className="text-lg text-rose-600 font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center justify-center w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-green-50 border border-green-200 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-green-800">Available for Work</span>
              </div>
              <p className="text-green-700">
                I'm currently open for new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-rose-200 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-8 h-8 text-rose-600" />
              <h2 className="text-2xl font-bold text-gray-800">Send Message</h2>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">Message Sent!</p>
                  <p className="text-sm text-green-700">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-4 bg-white/80 border border-rose-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:bg-white transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-4 bg-white/80 border border-rose-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:bg-white transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-4 py-4 bg-white/80 border border-rose-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:bg-white transition-all duration-300"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-4 bg-white/80 border border-rose-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:bg-white transition-all duration-300 resize-none"
                required
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
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

            <div className="mt-6 flex items-center justify-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              Usually responds within 24 hours
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
            Whether you need a website, mobile app, or custom software solution, 
            I'm here to bring your ideas to life with cutting-edge technology and creative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
              View Projects
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;