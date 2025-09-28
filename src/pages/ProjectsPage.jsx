import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../datas/projects/projects.json';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Filter, 
  Search, 
  ArrowLeft, 
  Eye, 
  Code2,
  Globe,
  Zap,
  Star,
  ChevronRight,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ComingSoon from '../components/ComingSoon';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

  useEffect(() => {
    // Load projects from imported JSON data
    const loadProjects = () => {
      try {
        setProjects(projectsData);
        setFilteredProjects(projectsData);
      } catch (error) {
        console.error("Error loading projects data:", error);
        // Set empty array if there's an error
        setProjects([]);
        setFilteredProjects([]);
      } finally {
        setLoading(false);
      }
    };

    // Simulate loading delay for better UX
    setTimeout(loadProjects, 500);
  }, []);

  // Filter and search functionality
  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(project => 
        project.tags.includes(selectedFilter)
      );
    }

    // Search functionality
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredProjects(filtered);
  }, [projects, selectedFilter, searchTerm]);

  const filterOptions = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'web', label: 'Web Apps', count: projects.filter(p => p.tags.includes('web')).length },
    { value: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.tags.includes('mobile')).length },
    { value: 'frontend', label: 'Frontend', count: projects.filter(p => p.tags.includes('frontend')).length },
    { value: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.tags.includes('fullstack')).length }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'Tailwind CSS': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
      'Fast API': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'MySQL': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
      'Node.js': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'MongoDB': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'Socket.io': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      'Framer Motion': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
    };
    return colors[tech] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rose-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Loading amazing projects...</p>
        </div>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return <ComingSoon />;
  }

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Link 
            to="/"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 mb-8 mt-16 mx-auto w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 dark:from-rose-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Here's a collection of projects I've worked on, showcasing my skills in 
            web development, mobile apps, and more. Each project represents a unique 
            challenge and learning experience.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-rose-200 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-rose-400 dark:focus:border-rose-500 focus:bg-white/80 dark:focus:bg-gray-700/80 transition-all duration-300"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setSelectedFilter(option.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedFilter === option.value
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-rose-200 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80'
                }`}
              >
                <Filter className="w-4 h-4" />
                {option.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedFilter === option.value
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {option.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-rose-200 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 h-48 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-6xl opacity-50">
                      <Code2 className="w-20 h-20 text-rose-400 dark:text-rose-300" />
                    </div>
                  )}
                  
                  {/* Overlay with quick actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        <Eye className="w-6 h-6" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3 transition-colors duration-300">
                    <Calendar className="w-4 h-4" />
                    {formatDate(project.date)}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 transition-colors duration-300 group-hover:text-rose-600 dark:group-hover:text-rose-400">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 flex-1 justify-center bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 flex-1 justify-center bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold border border-rose-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center p-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl text-white">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto text-lg">
            I'm always excited to work on new challenges and bring innovative ideas to life. 
            Let's collaborate and create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:adityapratamatech@gmail.com"
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105"
            >
              Send Email
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;