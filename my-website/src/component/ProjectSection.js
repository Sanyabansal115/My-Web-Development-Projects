import React from 'react';
import { Github, ExternalLink, Star, Code, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Garden Portfolio Website",
      description: "A nature-inspired portfolio showcasing the harmony between technology and organic beauty. Built with React and featuring smooth animations.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      github: "#",
      demo: "#",
      featured: true,
      category: "Web Development",
      color: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "Bloom Task Manager",
      description: "A productivity app inspired by the growth cycles of plants. Track your goals as they bloom from seeds to beautiful achievements.",
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#",
      featured: true,
      category: "Mobile App",
      color: "from-rose-400 to-pink-500"
    },
    {
      id: 3,
      title: "EcoCommerce Platform",
      description: "Sustainable e-commerce platform promoting eco-friendly products with carbon footprint tracking and green delivery options.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Chart.js"],
      github: "#",
      demo: "#",
      featured: false,
      category: "E-commerce",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Nature Sounds App",
      description: "Relaxation app featuring high-quality nature sounds with beautiful visualizations inspired by natural environments.",
      tech: ["Vue.js", "Web Audio API", "Three.js", "PWA"],
      github: "#",
      demo: "#",
      featured: false,
      category: "Web App",
      color: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Code className="text-green-600" size={32} />
            <Zap className="text-rose-500" size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-rose-500 to-green-700 bg-clip-text text-transparent">
            Tech Projects
          </h2>
          <p className="text-lg md:text-xl text-green-800/80 max-w-3xl mx-auto mb-8">
            Digital solutions that grow from creative ideas into flourishing applications
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-rose-400 rounded-full"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className={`group relative glass-green rounded-2xl p-8 hover:shadow-bloom transition-all duration-500 hover:transform hover:scale-105 ${
      project.featured ? 'ring-2 ring-green-200' : ''
    }`}>
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
          <Star size={12} />
          Featured
        </div>
      )}

      {/* Category Tag */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-rose-100 text-green-700 rounded-full text-sm font-medium">
          {project.category}
        </span>
      </div>

      {/* Project Image Placeholder */}
      <div className={`h-48 mb-6 rounded-xl bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-70">
            {project.category.includes('Mobile') ? '📱' : 
             project.category.includes('E-commerce') ? '🛍️' : 
             project.category.includes('Web') ? '🌐' : '💻'}
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute bottom-6 left-6 w-4 h-4 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-green-800 group-hover:text-green-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-green-700/80 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-white/50 text-green-700 rounded-full text-sm font-medium border border-green-200 hover:bg-green-100 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <a 
            href={project.github} 
            className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium transition-colors group/link"
          >
            <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
            Code
          </a>
          <a 
            href={project.demo} 
            className="flex items-center gap-2 text-rose-500 hover:text-rose-700 font-medium transition-colors group/link"
          >
            <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
            Live Demo
          </a>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-rose-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProjectsSection;