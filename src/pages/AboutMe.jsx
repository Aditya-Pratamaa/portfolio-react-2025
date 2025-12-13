import React, { useState, useEffect } from "react";
import {
  Code,
  Coffee,
  Heart,
  Award,
  Users,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  ChevronRight,
  Moon,
  ArrowLeft,
  Zap,
  Star,
  Target,
  BookOpen,
  Gamepad2,
  Music,
  Camera,
  Plane,
  Dumbbell,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageProfile from "../assets/image/ImageProfile.jpg";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("overview");
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
          delay: Math.random() * 2,
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
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: Users },
    { id: "experience", label: "Experience", icon: Award },
  ];

  const skills = {
    frontend: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Bootstrap", icon: "bootsrap", color: "#7952B3" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
    ],
    backend: [
      { name: "Laravel", icon: "laravel", color: "#F05032" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "MySql", icon: "mysql", color: "#4479A1" },
    ],
    mobile: [{ name: "Dart", icon: "dart", color: "#0175C2" }],
    tools: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "Github", icon: "github", color: "#181717" },
      { name: "Notion", icon: "notion", color: "#000000" },
      { name: "Laragon", icon: "laragon", color: "#0E83CD" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
      { name: "VS Code", icon: "visualstudiocode", color: "#007ACC" },
    ],
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "PT Exorty Indonesia",
      period: "January - June 2025",
      location: "Kota Bogor, Indonesia",
      description:
        "Developed end-to-end web applications using React, Fast API, and MySQL. Collaborated with design team to create user-friendly interfaces.",
      achievements: [
        "Built SCADS application using React, Fast API, and MySQL",
        "Built Internal Location Map using React, Fast API, and MySQL",
        "Annotated and labeled text data for Named Entity Recognition (NER) tasks using Label Studio.",
        "Reduced bug reports by 60%",
        "Implemented automated testing",
      ],
    },
  ];

  const interests = [
    {
      icon: BookOpen,
      name: "Reading Tech Blogs",
      description: "Staying updated with latest trends",
    },
    {
      icon: Gamepad2,
      name: "Gaming",
      description: "Strategy and puzzle games",
    },
    {
      icon: Music,
      name: "Music Production",
      description: "Creating ambient soundscapes",
    },
    {
      icon: Camera,
      name: "Photography",
      description: "Urban and landscape photography",
    },
    {
      icon: Plane,
      name: "Traveling",
      description: "Exploring new cultures and places",
    },
    {
      icon: Dumbbell,
      name: "Fitness",
      description: "Staying healthy and energized",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "3+", label: "Years Experience", icon: Calendar },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Technologies", icon: Code },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
            Hi there! I'm{" "}
            <span className="text-rose-600 dark:text-rose-400">
              Aditya Pratama
            </span>{" "}
            👋
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
            A passionate{" "}
            <span className="font-semibold text-rose-600 dark:text-rose-400">
              Software Engineer
            </span>{" "}
            and
            <span className="font-semibold text-rose-600 dark:text-rose-400">
              {" "}
              IT Enthusiast
            </span>{" "}
            based in Bogor City, Indonesia. I love creating digital experiences
            that make people's lives easier and more enjoyable.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors duration-300">
            With over 3 years of experience in web development, I specialize in
            building modern, scalable, and high-performance applications using
            cutting-edge technologies. I have a strong interest in mobile app
            development and enjoy exploring cross-platform solutions. I’m always
            eager to learn new technologies and take on challenging projects
            that push the boundaries of what’s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-semibold border border-rose-200 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105">
              <Link to="/projects" className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                View Projects
              </Link>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-rose-200 dark:border-gray-600 flex items-center justify-center overflow-hidden transition-colors duration-300">
              <img
                src={ImageProfile}
                alt="Aditya Pratama"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating icons around avatar */}
            <div
              className="absolute -top-4 -right-4 bg-blue-500 p-3 rounded-full text-white animate-bounce"
              style={{ animationDelay: "0s" }}
            >
              <Code className="w-6 h-6" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-green-500 p-3 rounded-full text-white animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <Coffee className="w-6 h-6" />
            </div>
            <div
              className="absolute top-1/2 -left-6 bg-purple-500 p-3 rounded-full text-white animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <Zap className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-rose-200 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105"
          >
            <stat.icon className="w-8 h-8 mx-auto mb-3 text-rose-600 dark:text-rose-400" />
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1 transition-colors duration-300">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-rose-200 dark:border-gray-600 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
            What I Do
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-rose-500 dark:text-rose-400" />
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Mobile App Development
              </span>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-rose-500 dark:text-rose-400" />
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Full-Stack Web Development
              </span>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-rose-500 dark:text-rose-400" />
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                UI/UX Design Implementation
              </span>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-rose-500 dark:text-rose-400" />
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                API Development & Integration
              </span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-rose-200 dark:border-gray-600 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
            Fun Facts
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Art and design enthusiast
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Playing video games
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Mechanical keyboard enthusiast
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Always learning something new
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
          Technical Skills
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
          I'm constantly learning and improving my skills. Here's what I'm
          currently working with:
        </p>
      </div>

      {Object.entries(skills).map(([category, skillList]) => (
        <div
          key={category}
          className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-rose-200 dark:border-gray-600 transition-colors duration-300"
        >
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 capitalize transition-colors duration-300">
            {category}
          </h4>
          <div className="flex flex-wrap gap-4">
            {skillList.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div
                  style={{ color: skill.color }}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <circle cx="12" cy="12" r="6" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {skill.name}
                </span>
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
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
          Work Experience
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
          My journey in the tech industry
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 to-pink-400" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-16 md:pl-20">
              {/* Timeline dot - adjusted for better responsiveness */}
              <div className="absolute left-0 sm:left-8 md:left-12 w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg transition-colors duration-300" />

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-rose-200 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <p className="text-rose-600 dark:text-rose-400 font-semibold text-sm sm:text-base transition-colors duration-300">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-left md:text-right text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    <p className="font-medium text-sm sm:text-base">{exp.period}</p>
                    <p className="text-xs sm:text-sm flex items-center gap-1 justify-start md:justify-end">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 transition-colors duration-300">
                  {exp.description}
                </p>

                <div>
                  <h5 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-100 mb-2 sm:mb-3 transition-colors duration-300">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-1 sm:space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-400 rounded-full" />
                        <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                          {achievement}
                        </span>
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
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
          Beyond Coding
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
          When I'm not writing code, here's what I love to do in my free time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="group p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-rose-200 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <interest.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                {interest.name}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {interest.description}
            </p>
          </div>
        ))}
      </div>

      <div className="p-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl text-white text-center">
        <h4 className="text-2xl font-bold mb-4">Let's Connect!</h4>
        <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
          I'm always excited to meet new people and discuss interesting
          projects, technology trends, or just have a friendly chat over coffee!
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
    switch (activeTab) {
      case "skills":
        return renderSkills();
      case "experience":
        return renderExperience();
      case "interests":
        return renderInterests();
      default:
        return renderOverview();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 bg-rose-300 dark:bg-rose-800 rounded-full blur-3xl animate-pulse transition-colors duration-500"
          style={{
            left: `${mousePos.x * 0.02}%`,
            top: `${mousePos.y * 0.02}%`,
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-pink-300 dark:bg-pink-800 rounded-full blur-3xl animate-pulse transition-colors duration-500"
          style={{
            right: `${mousePos.x * 0.01}%`,
            bottom: `${mousePos.y * 0.01}%`,
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-rose-400 dark:bg-rose-600 rounded-full opacity-30 animate-bounce transition-colors duration-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: "4s",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 mb-8 mt-13 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 dark:from-rose-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mb-6" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-rose-200 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">{renderTabContent()}</div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AboutMe;
