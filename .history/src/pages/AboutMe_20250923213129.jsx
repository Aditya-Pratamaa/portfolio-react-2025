import React, { useState, useEffect } from 'react';
import { Code, Coffee, Heart, Award, Users, MapPin, Calendar, Download, ExternalLink, ChevronRight, Moon, ArrowLeft, Zap, Star, Target, BookOpen, Gamepad2, Music, Camera, Plane, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [skillHover, setSkillHover] = useState(null);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'interests', label: 'Interests', icon: Heart }
  ];

  const skills = {
    frontend: [
      { name: 'React', icon: 'react', color: '#61DAFB' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
      { name: 'Next.js', icon: 'nextjs', color: '#000000' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4' },
      { name: 'Vue.js', icon: 'vuejs', color: '#4FC08D' }
    ],
    backend: [
      { name: 'Node.js', icon: 'nodejs', color: '#339933' },
      { name: 'Python', icon: 'python', color: '#3776AB' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
      { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
      { name: 'Express.js', icon: 'express', color: '#000000' }
    ],
    tools: [
      { name: 'Git', icon: 'git', color: '#F05032' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
      { name: 'AWS', icon: 'amazonaws', color: '#232F3E' },
      { name: 'Figma', icon: 'figma', color: '#F24E1E' },
      { name: 'VS Code', icon: 'visualstudiocode', color: '#007ACC' }
    ]
  };

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovate Indonesia',
      period: '2022 - Present',
      location: 'Jakarta, Indonesia',
      description: 'Leading frontend development for multiple high-traffic web applications. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented modern CI/CD pipeline'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      location: 'Bandung, Indonesia',
      description: 'Developed end-to-end web applications using React, Node.js, and PostgreSQL. Collaborated with design team to create user-friendly interfaces.',
      achievements: [
        'Built 15+ production applications',
        'Reduced bug reports by 60%',
        'Implemented automated testing'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'StartupTech',
      period: '2018 - 2020',
      location: 'Yogyakarta, Indonesia',
      description: 'Started my journey as a software developer, working on various projects and learning modern web technologies.',
      achievements: [
        'Completed 20+ client projects',
        'Learned 5+ programming languages',
        'Won "Best Newcomer" award'
      ]
    }
  ];

  const interests = [
    { icon: BookOpen, name: 'Reading Tech Blogs', description: 'Staying updated with latest trends' },
    { icon: Gamepad2, name: 'Gaming', description: 'Strategy and puzzle games' },
    { icon: Music, name: 'Music Production', description: 'Creating ambient soundscapes' },
    { icon: Camera, name: 'Photography', description: 'Urban and landscape photography' },
    { icon: Plane, name: 'Traveling', description: 'Exploring new cultures and places' },
    { icon: Dumbbell, name: 'Fitness', description: 'Staying healthy and energized' }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Target },
    { number: '3+', label: 'Years Experience', icon: Calendar },
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '10+', label: 'Technologies', icon: Code }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Hi there! I'm <span className="text-rose-600">Aditya Pratama</span> 👋
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A passionate <span className="font-semibold text-rose-600">Software Engineer</span> and 
            <span className="font-semibold text-rose-600"> IT Enthusiast</span> based in Jakarta, Indonesia. 
            I love creating digital experiences that make people's lives easier and more enjoyable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            With over 3 years of experience in web development, I specialize in building 
            modern, scalable applications using cutting-edge technologies. I'm always 
            eager to learn new things and take on challenging projects that push the 
            boundaries of what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button className="flex items-center gap-2 bg-white/60 text-gray-700 px-6 py-3 rounded-full font-semibold border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
              <ExternalLink className="w-5 h-5" />
              View Portfolio
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full bg-white/60 backdrop-blur-sm rounded-full border border-rose-200 flex items-center justify-center overflow-hidden">
              <div className="text-8xl">👨‍💻</div>
            </div>
            {/* Floating icons around avatar */}
            <div className="absolute -top-4 -right-4 bg-blue-500 p-3 rounded-full text-white animate-bounce" style={{animationDelay: '0s'}}>
              <Code className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 p-3 rounded-full text-white animate-bounce" style={{animationDelay: '1s'}}>
              <Coffee className="w-6 h-6" />
            </div>
            <div className="absolute top-1/2 -left-6 bg-purple-500 p-3 rounded-full text-white animate-bounce" style={{animationDelay: '0.5s'}}>
              <Zap className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
            <stat.icon className="w-8 h-8 mx-auto mb-3 text-rose-600" />
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-rose-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">What I Do</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700">Full-Stack Web Development</span>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700">UI/UX Design Implementation</span>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700">API Development & Integration</span>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700">Performance Optimization</span>
            </li>
          </ul>
        </div>
        
        <div className="p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-rose-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Fun Facts</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Coffee addict ☕ (5+ cups daily)</span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Night owl 🦉 (best ideas at 2 AM)</span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Mechanical keyboard enthusiast</span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Always learning something new</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm constantly learning and improving my skills. Here's what I'm currently working with:
        </p>
      </div>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-200">
          <h4 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
            {category} Development
          </h4>
          <div className="space-y-4">
            {skillList.map((skill, index) => (
              <div 
                key={index}
                className="group"
                onMouseEnter={() => setSkillHover(`${category}-${index}`)}
                onMouseLeave={() => setSkillHover(null)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full ${
                      skillHover === `${category}-${index}` ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      width: `${skill.level}%`,
                      transition: 'width 1s ease-out'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Work Experience</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My journey in the tech industry, from junior developer to senior engineer.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 to-pink-400" />
        
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full border-4 border-white shadow-lg" />
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                    <p className="text-rose-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right text-gray-600">
                    <p className="font-medium">{exp.period}</p>
                    <p className="text-sm flex items-center gap-1 justify-end">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-rose-400 rounded-full" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInterests = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Beyond Coding</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          When I'm not writing code, here's what I love to do in my free time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <div 
            key={index}
            className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <interest.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">{interest.name}</h4>
            </div>
            <p className="text-gray-600">{interest.description}</p>
          </div>
        ))}
      </div>

      <div className="p-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl text-white text-center">
        <h4 className="text-2xl font-bold mb-4">Let's Connect!</h4>
        <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
          I'm always excited to meet new people and discuss interesting projects, 
          technology trends, or just have a friendly chat over coffee!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
            Send Message
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105">
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'skills': return renderSkills();
      case 'experience': return renderExperience();
      case 'interests': return renderInterests();
      default: return renderOverview();
    }
  };

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <button className="flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors duration-300 mb-8 mx-auto">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mb-6" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg' 
                  : 'bg-white/60 text-gray-700 border border-rose-200 hover:bg-white/80'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {renderTabContent()}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AboutMe;