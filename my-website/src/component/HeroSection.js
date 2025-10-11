import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Camera } from 'lucide-react';

const HeroSection = ({ setActiveSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background with Garden Theme */}
      <div className="absolute inset-0">
        {/* Floating flower petals */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full blur-sm" />
            </div>
          ))}
        </div>

        {/* Garden-inspired gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 114, 182, 0.2) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 70%)`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="text-center z-10 max-w-6xl px-6">
        {/* Profile Image Placeholder */}
        <div className="mb-12 relative">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-green-200 to-rose-200 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-rose-100 flex items-center justify-center">
              <Camera size={60} className="text-green-600 opacity-50" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 animate-pulse">
            <Sparkles className="text-rose-400" size={24} />
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-rose-500 to-green-700 bg-clip-text text-transparent leading-tight">
            Creative Developer
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-green-700 mb-6">
            & Digital Artist
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
            <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-green-800/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          Inspired by nature's beauty, I create digital experiences that bloom with creativity. 
          Like flowers in a garden, each project tells its own unique story through code and art.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-6 justify-center flex-wrap mb-16">
          <button 
            onClick={() => setActiveSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              View Projects
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-bounce"></div>
            </span>
          </button>
          
          <button 
            onClick={() => setActiveSection('art')}
            className="group px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold rounded-full hover:from-rose-300 hover:to-pink-400 transform hover:scale-105 hover:shadow-xl hover:shadow-rose-500/25 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Art Gallery
              <Sparkles size={16} className="group-hover:animate-spin" />
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-green-600" size={32} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;