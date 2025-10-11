import React from 'react';
import { User, MapPin, Calendar, Award, Lightbulb, Coffee, Camera, Code2 } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: Code2,
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Python", "MongoDB", "PostgreSQL", "GraphQL"],
      icon: Award,
      color: "from-rose-400 to-pink-500"
    },
    {
      category: "Design & Art",
      items: ["Figma", "Adobe Creative Suite", "Procreate", "Blender", "Photography"],
      icon: Camera,
      color: "from-teal-400 to-cyan-500"
    },
    {
      category: "Creative Skills",
      items: ["Digital Painting", "UI/UX Design", "3D Modeling", "Generative Art", "Photo Editing"],
      icon: Lightbulb,
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Creative Developer of the Year",
      description: "Recognized for innovative blend of technology and artistry",
      icon: Award
    },
    {
      year: "2023",
      title: "Digital Art Exhibition",
      description: "Featured artist in 'Nature & Technology' gallery showcase",
      icon: Camera
    },
    {
      year: "2023",
      title: "Open Source Contributor",
      description: "Active contributor to design system libraries",
      icon: Code2
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <User className="text-green-600" size={32} />
            <Coffee className="text-rose-500" size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-rose-500 to-green-700 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-green-400"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-rose-400 to-green-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story & Info */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="glass-green rounded-2xl p-8 hover:shadow-bloom transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-200 to-rose-200 rounded-full flex items-center justify-center">
                  <Camera size={32} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Creative Developer</h3>
                  <div className="flex items-center gap-2 text-green-600 mt-1">
                    <MapPin size={16} />
                    <span>Based in Nature's Garden</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-700">3+</div>
                  <div className="text-sm text-green-600">Years Experience</div>
                </div>
                <div className="bg-white/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-rose-600">50+</div>
                  <div className="text-sm text-rose-500">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="glass-rose rounded-2xl p-8 hover:shadow-bloom transition-all duration-500">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                <Lightbulb className="text-rose-500" size={24} />
                My Journey
              </h3>
              <div className="space-y-4 text-green-700/90 leading-relaxed">
                <p>
                  My passion for creating began in nature's embrace, where I learned to see beauty 
                  in the intricate patterns of leaves and the gentle dance of light through trees. 
                  This natural wonder sparked my journey into the digital realm.
                </p>
                <p>
                  As a creative developer and digital artist, I bridge the gap between organic 
                  inspiration and technological innovation. Every project I create reflects this 
                  harmony, bringing the serenity and beauty of nature into the digital world.
                </p>
                <p>
                  When I'm not coding or creating art, you'll find me exploring gardens, 
                  photographing golden hour moments, and drawing inspiration from the endless 
                  creativity that surrounds us in nature.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Skills & Expertise</h3>
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <div 
                  key={skillGroup.category} 
                  className="glass rounded-2xl p-6 hover:shadow-garden transition-all duration-500 hover:transform hover:scale-105 animate-bloom"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${skillGroup.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-green-800">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-white/60 text-green-700 rounded-full text-sm font-medium border border-green-200 hover:bg-green-100 transition-all duration-300 hover:scale-105 animate-bloom"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-br from-green-50/50 to-rose-50/50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-700 to-rose-600 bg-clip-text text-transparent">
            Recent Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={achievement.title}
                  className="text-center glass-green rounded-xl p-6 hover:shadow-bloom transition-all duration-500 hover:transform hover:translateY(-5px) animate-bloom"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="text-lg font-bold text-green-800 mb-2">{achievement.title}</div>
                  <div className="text-rose-600 font-medium mb-3">{achievement.year}</div>
                  <p className="text-green-700/80 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Coffee, label: "Cups of coffee", value: "∞", color: "from-amber-400 to-orange-500" },
            { icon: Camera, label: "Photos taken", value: "10K+", color: "from-green-400 to-emerald-500" },
            { icon: Code2, label: "Lines of code", value: "50K+", color: "from-blue-400 to-cyan-500" },
            { icon: Award, label: "Happy clients", value: "25+", color: "from-rose-400 to-pink-500" }
          ].map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div 
                key={fact.label}
                className="text-center glass rounded-xl p-6 hover:shadow-garden transition-all duration-500 hover:transform hover:scale-110 animate-bloom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${fact.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className="text-white" size={20} />
                </div>
                <div className="text-2xl font-bold text-green-800 mb-1">{fact.value}</div>
                <div className="text-green-600 text-sm">{fact.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;