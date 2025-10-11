import React, { useState } from 'react';
import { Palette, Heart, Eye, Camera, Flower } from 'lucide-react';

const ArtSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const artworks = [
    {
      id: 1,
      title: "Garden Dreams",
      description: "Digital interpretation of blooming flowers in golden hour light, capturing the essence of natural beauty.",
      medium: "Digital Painting",
      year: "2024",
      category: "digital",
      featured: true,
      color: "from-rose-300 via-pink-200 to-green-200",
      likes: 234
    },
    {
      id: 2,
      title: "Portrait in Nature",
      description: "Self-portrait series combining photography with digital art, exploring the connection between humanity and nature.",
      medium: "Mixed Media",
      year: "2024",
      category: "photography",
      featured: true,
      color: "from-green-300 via-emerald-200 to-rose-200",
      likes: 189
    },
    {
      id: 3,
      title: "Botanical Abstracts",
      description: "Abstract representations of plant forms and natural patterns, created through algorithmic design.",
      medium: "Generative Art",
      year: "2023",
      category: "digital",
      featured: false,
      color: "from-teal-300 via-green-200 to-lime-200",
      likes: 156
    },
    {
      id: 4,
      title: "Seasonal Moods",
      description: "A collection capturing the emotional essence of different seasons through color and form.",
      medium: "Digital Collage",
      year: "2023",
      category: "digital",
      featured: false,
      color: "from-amber-200 via-orange-200 to-rose-200",
      likes: 203
    },
    {
      id: 5,
      title: "Urban Garden",
      description: "Exploring the contrast between city life and natural elements through photographic composition.",
      medium: "Photography",
      year: "2024",
      category: "photography",
      featured: true,
      color: "from-slate-200 via-green-200 to-emerald-200",
      likes: 178
    },
    {
      id: 6,
      title: "Watercolor Memories",
      description: "Traditional watercolor techniques brought into the digital realm, preserving organic textures.",
      medium: "Digital Watercolor",
      year: "2023",
      category: "traditional",
      featured: false,
      color: "from-blue-200 via-purple-200 to-pink-200",
      likes: 142
    }
  ];

  const categories = [
    { id: 'all', label: 'All Works', icon: Palette },
    { id: 'digital', label: 'Digital Art', icon: Camera },
    { id: 'photography', label: 'Photography', icon: Eye },
    { id: 'traditional', label: 'Traditional', icon: Flower }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <Palette className="text-rose-500" size={32} />
            <Heart className="text-green-600" size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-green-600 to-pink-500 bg-clip-text text-transparent">
            Art Gallery
          </h2>
          <p className="text-lg md:text-xl text-green-800/80 max-w-3xl mx-auto mb-8">
            Visual stories inspired by nature's palette and the beauty found in everyday moments
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-green-400"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-rose-400 to-green-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-rose-400 to-green-500 text-white shadow-bloom'
                    : 'glass-rose text-green-700 hover:bg-green-100'
                }`}
              >
                <IconComponent size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArtworkCard = ({ artwork, index }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="group glass-rose rounded-2xl overflow-hidden hover:shadow-bloom transition-all duration-500 hover:transform hover:scale-105 animate-bloom"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Featured Badge */}
      {artwork.featured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
          <Heart size={12} />
          Featured
        </div>
      )}

      {/* Artwork Image Placeholder */}
      <div className={`h-64 bg-gradient-to-br ${artwork.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        
        {/* Artistic overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>
        </div>

        {/* Category Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-40">
            {artwork.category === 'photography' ? '📸' : 
             artwork.category === 'digital' ? '🎨' : 
             artwork.category === 'traditional' ? '🖌️' : '🎭'}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <button className="text-white font-medium flex items-center gap-2 hover:scale-105 transition-transform">
            <Eye size={16} />
            View Full Size
          </button>
        </div>
      </div>

      {/* Artwork Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-green-800 group-hover:text-rose-600 transition-colors mb-1">
              {artwork.title}
            </h3>
            <p className="text-green-600 text-sm font-medium">{artwork.year}</p>
          </div>
          
          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              isLiked 
                ? 'bg-rose-100 text-rose-600' 
                : 'text-green-600 hover:bg-green-100'
            }`}
          >
            <Heart 
              size={14} 
              className={`transition-all duration-300 ${
                isLiked ? 'fill-rose-500 text-rose-500 scale-110' : 'hover:scale-110'
              }`} 
            />
            {isLiked ? artwork.likes + 1 : artwork.likes}
          </button>
        </div>
        
        <p className="text-green-700/80 text-sm leading-relaxed mb-4">
          {artwork.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-rose-100 text-green-700 rounded-full text-sm font-medium border border-green-200">
            {artwork.medium}
          </span>
          
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-green-100 hover:bg-green-200 text-green-600 rounded-full flex items-center justify-center transition-colors">
              <Heart size={14} />
            </button>
            <button className="w-8 h-8 bg-rose-100 hover:bg-rose-200 text-rose-600 rounded-full flex items-center justify-center transition-colors">
              <Eye size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtSection;