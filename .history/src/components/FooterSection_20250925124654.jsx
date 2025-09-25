import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Instagram, 
  Twitter, 
  Send, 
  Heart, 
  ArrowUp, 
  ExternalLink,
  Code,
  Coffee,
  Zap,
  Star,
  Calendar,
  Clock
} from 'lucide-react';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resume', href: '#resume' }
  ];

  const services = [
    { name: 'Web Development', href: '#web-dev' },
    { name: 'Mobile Apps', href: '#mobile' },
    { name: 'UI/UX Design', href: '#design' },
    { name: 'Consulting', href: '#consulting' },
    { name: 'Code Review', href: '#review' },
    { name: 'Mentoring', href: '#mentoring' }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/aditya-pratama-761143322/', 
      color: 'hover:text-blue-600',
      followers: ''
    },
    { 
      icon: Github, 
      name: 'GitHub', 
      href: 'https://github.com/Aditya-Pratamaa', 
      color: 'hover:text-gray-800',
      followers: ''
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      href: '#', 
      color: 'hover:text-pink-600',
      followers: ''
    },
  ];

  const techStack = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Next.js'
  ];

  const recentProjects = [
    { name: 'E-Commerce Platform', status: 'Completed', date: '2024' },
    { name: 'Task Management App', status: 'In Progress', date: '2024' },
    { name: 'Portfolio Website', status: 'Completed', date: '2024' }
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Aditya Pratama
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Software Engineer & IT Enthusiast passionate about creating 
                  digital experiences that make a difference. Let's build something amazing together! 🚀
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-rose-400" />
                    <span className="text-gray-300">adityapratamatech@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-rose-400" />
                    <span className="text-gray-300">+62 895 0000 0000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-rose-400" />
                    <span className="text-gray-300">Kota Bogor, Indonesia</span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 p-3 bg-green-900/30 border border-green-600/50 rounded-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-300 font-medium">Available for work</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Recent Projects */}
              {/* <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4 text-white">Recent Work</h5>
                <div className="space-y-3">
                  {recentProjects.map((project, index) => (
                    <div key={index} className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{project.name}</span>
                        <span className="text-xs text-gray-400">{project.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 rounded-full ${project.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                        <span className="text-xs text-gray-400">{project.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Stay Connected</h4>
              
              {/* Newsletter */}
              <div className="mb-8">
                <p className="text-gray-300 mb-4">
                  Subscribe to get updates about new projects and tech insights!
                </p>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                  <button
                    onClick={handleNewsletterSubmit}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </div>

                {isSubscribed && (
                  <div className="mt-3 p-3 bg-green-900/50 border border-green-600/50 rounded-lg text-green-300 text-sm">
                    🎉 Thanks for subscribing! You'll hear from me soon.
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div>
                <h5 className="text-lg font-semibold mb-4 text-white">Follow Me</h5>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <div>
                        <div className="text-sm font-medium text-white">{social.name}</div>
                        <div className="text-xs text-gray-400">{social.followers}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          {/* <div className="mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-rose-400" />
              <h4 className="text-lg font-semibold text-white">Tech Stack I Work With</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div> */}

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {currentYear} Aditya Pratama. Made with</span>
                <Heart className="w-4 h-4 text-rose-400 animate-pulse" />
                <span>and lots of</span>
                <Coffee className="w-4 h-4 text-yellow-400" />
              </div>

              {/* Stats */}
              {/* <div className="flex items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>50+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>25+ Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>3+ Years</span>
                </div>
              </div> */}

              {/* Links */}
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-rose-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-rose-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-rose-400 transition-colors duration-300 flex items-center gap-1">
                  Sitemap <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Fun Footer Message */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                <Clock className="w-4 h-4 inline mr-2" />
                This footer was crafted at 2:30 AM with the perfect blend of creativity and caffeine ☕
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default FooterSection;