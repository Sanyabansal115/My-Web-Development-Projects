import React, { useEffect, useState } from 'react';

const BackgroundEffects = ({ scrollY }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Garden Background */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(244, 114, 182, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)
            `,
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />

        {/* Floating Petals */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`petal-${i}`}
              className="absolute animate-petal-fall opacity-60"
              style={{
                left: `${(i * 7) % 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + (i % 4)}s`
              }}
            >
              <div 
                className={`w-4 h-4 rounded-full blur-sm ${
                  i % 3 === 0 ? 'bg-gradient-to-br from-rose-300 to-pink-400' :
                  i % 3 === 1 ? 'bg-gradient-to-br from-green-300 to-emerald-400' :
                  'bg-gradient-to-br from-green-200 to-rose-200'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Organic Shapes */}
        <div className="absolute inset-0 opacity-20">
          <svg 
            className="w-full h-full" 
            viewBox={`0 0 ${windowSize.width} ${windowSize.height}`} 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Flowing organic shape 1 */}
            <path
              d={`M0,${windowSize.height * 0.7} Q${windowSize.width * 0.3},${windowSize.height * 0.5} ${windowSize.width * 0.6},${windowSize.height * 0.6} T${windowSize.width},${windowSize.height * 0.8} L${windowSize.width},${windowSize.height} L0,${windowSize.height} Z`}
              fill="url(#organicGradient1)"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            />
            
            {/* Flowing organic shape 2 */}
            <path
              d={`M0,${windowSize.height * 0.4} Q${windowSize.width * 0.4},${windowSize.height * 0.2} ${windowSize.width * 0.7},${windowSize.height * 0.3} T${windowSize.width},${windowSize.height * 0.5} L${windowSize.width},${windowSize.height} L0,${windowSize.height} Z`}
              fill="url(#organicGradient2)"
              style={{ transform: `translateY(${scrollY * -0.03}px)` }}
            />

            <defs>
              <linearGradient id="organicGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86efac" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#22c55e" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="organicGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="#4ade80" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                backgroundColor: i % 2 === 0 ? 'rgba(34, 197, 94, 0.6)' : 'rgba(244, 114, 182, 0.6)',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                transform: `translateY(${scrollY * (0.02 + Math.random() * 0.03)}px)`
              }}
            />
          ))}
        </div>

        {/* Large Floating Elements */}
        <div className="absolute inset-0">
          {/* Large green circle */}
          <div 
            className="absolute w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/10 rounded-full blur-3xl animate-leaf-sway"
            style={{
              top: '10%',
              left: '70%',
              transform: `translateY(${scrollY * -0.08}px)`
            }}
          />
          
          {/* Large rose circle */}
          <div 
            className="absolute w-80 h-80 bg-gradient-to-br from-rose-200/15 to-pink-300/10 rounded-full blur-3xl animate-leaf-sway"
            style={{
              top: '60%',
              left: '10%',
              animationDelay: '2s',
              transform: `translateY(${scrollY * -0.06}px)`
            }}
          />

          {/* Medium floating element */}
          <div 
            className="absolute w-64 h-64 bg-gradient-to-br from-teal-200/10 to-cyan-300/10 rounded-full blur-2xl animate-float"
            style={{
              top: '30%',
              left: '20%',
              animationDelay: '3s',
              transform: `translateY(${scrollY * -0.04}px)`
            }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(244, 114, 182, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${scrollY * 0.01}px, ${scrollY * 0.02}px)`
          }}
        />

        {/* Subtle Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, transparent 20%, rgba(34, 197, 94, 0.1) 21%, rgba(34, 197, 94, 0.1) 40%, transparent 41%),
              radial-gradient(circle at 75% 75%, transparent 20%, rgba(244, 114, 182, 0.08) 21%, rgba(244, 114, 182, 0.08) 40%, transparent 41%)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Dynamic Light Effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(
              circle at 50% ${Math.min(100, Math.max(0, 50 + scrollY * 0.05))}%,
              rgba(252, 211, 77, 0.1) 0%,
              rgba(34, 197, 94, 0.05) 30%,
              transparent 70%
            )
          `
        }}
      />
    </div>
  );
};

export default BackgroundEffects;