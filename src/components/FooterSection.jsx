import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ArrowUp,
} from 'lucide-react';

const FooterSection = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  // Show scroll to top button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#web-dev' },
    { name: 'Mobile Apps', href: '#mobile' },
    { name: 'UI/UX Design', href: '#design' },
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/aditya-pratama-761143322/', 
      color: 'hover:text-blue-600',
    },
    { 
      icon: Github, 
      name: 'GitHub', 
      href: 'https://github.com/Aditya-Pratamaa', 
      color: 'hover:text-gray-800',
    },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-rose-400 rounded-full opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Aditya Pratama
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Software Engineer & IT Enthusiast passionate about creating 
                  digital experiences that make a difference. Let's build something amazing together!
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base break-words">adityapratamatech@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">+62 895 3553 21756 </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Kota Bogor, Indonesia</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-4 sm:mb-6">
                  <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Connect With Me</h5>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${social.color}`}
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base font-medium text-white">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-green-900/30 border border-green-600/50 rounded-lg w-fit">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-green-300 font-medium text-sm sm:text-base">Available for work</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <div className="w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      {link.name} 
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <div className="w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
              
              {/* Copyright */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Aditya Pratama,</span>
                <span>All rights reserved</span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-rose-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-rose-400 transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </>
  );
};

export default FooterSection;