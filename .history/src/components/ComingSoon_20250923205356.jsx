import React, { useState, useEffect } from 'react';
import { Mail, Bell, Sparkles, Zap, Star, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePos.x * 0.02}%`,
            top: `${mousePos.y * 0.02}%`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"
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
          className="absolute bg-white rounded-full opacity-20 animate-bounce"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '3s'
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Main heading with glow effect */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Coming Soon
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-12 text-gray-300 leading-relaxed">
          Something <span className="text-purple-400 font-semibold">extraordinary</span> is on the way. 
          Get ready for an experience that will blow your mind! ✨
        </p>

        {/* Countdown timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(countdown).map(([unit, value], index) => (
            <div key={unit} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-1">{value}</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">{unit}</div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
              style={{ animationDelay: feature.delay }}
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <p className="text-gray-300">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Email notification */}
        <div className="w-full max-w-md mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit(e)}
              />
            </div>
            <button
              onClick={handleEmailSubmit}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Bell className="w-5 h-5" />
              Notify Me
            </button>
          </div>
          
          {isNotified && (
            <div className="mt-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center animate-pulse">
              🎉 Awesome! You'll be the first to know when we launch!
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20">
            Learn More
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Back to Home
          </button>
        </div>

        {/* Progress indicator */}
        <div className="mt-12 w-full max-w-md">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Development Progress</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full animate-pulse" style={{ width: '85%' }} />
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce">
        <Sparkles className="w-6 h-6" />
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;