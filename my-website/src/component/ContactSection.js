import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter,
  MapPin,
  Phone,
  Calendar,
  Heart
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon. 🌸');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      href: "#",
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Available for projects",
      href: "#",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-gray-700" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-600" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-blue-400" }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <MessageCircle className="text-green-600" size={32} />
            <Heart className="text-rose-500" size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-rose-500 to-green-700 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-green-800/80 max-w-3xl mx-auto mb-8">
            Ready to bring your creative vision to life? Let's collaborate and create something beautiful together
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-green-400"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-rose-400 to-green-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="glass-green rounded-xl p-6 hover:shadow-bloom transition-all duration-500 hover:transform hover:scale-105 block animate-bloom"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="font-bold text-green-800 mb-1">{info.label}</h3>
                    <p className="text-green-600 text-sm">{info.value}</p>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass-rose rounded-2xl p-8 hover:shadow-bloom transition-all duration-500">
              <h3 className="text-xl font-bold text-green-800 mb-6 text-center">Follow My Journey</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/60 rounded-full flex items-center justify-center text-green-600 ${social.color} transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg animate-bloom`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-green-50/80 to-rose-50/80">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-bold text-green-800">Currently Available</h3>
              </div>
              <p className="text-green-700/80 leading-relaxed">
                I'm currently accepting new projects and collaborations. 
                Whether you need a website, digital art, or something completely unique, 
                I'd love to help bring your vision to life.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-green rounded-2xl p-8 hover:shadow-bloom transition-all duration-500">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-green-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 border-2 border-green-200 rounded-lg text-green-800 placeholder-green-500/60 focus:border-green-400 focus:outline-none transition-all duration-300 hover:bg-white/80"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-green-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 border-2 border-green-200 rounded-lg text-green-800 placeholder-green-500/60 focus:border-green-400 focus:outline-none transition-all duration-300 hover:bg-white/80"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-green-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border-2 border-green-200 rounded-lg text-green-800 placeholder-green-500/60 focus:border-green-400 focus:outline-none transition-all duration-300 hover:bg-white/80"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-green-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/60 border-2 border-green-200 rounded-lg text-green-800 placeholder-green-500/60 focus:border-green-400 focus:outline-none transition-all duration-300 hover:bg-white/80 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-green-300 text-green-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-rose-500 text-white hover:from-green-400 hover:to-rose-400 hover:shadow-bloom transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 pt-6 border-t border-green-200/50 text-center">
              <p className="text-green-600/80 text-sm">
                I typically respond within 24 hours 🌱
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-green-50/80 to-rose-50/80 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-700 to-rose-600 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h3>
          <p className="text-green-700/80 mb-8 max-w-2xl mx-auto">
            Every great project starts with a conversation. Whether you have a clear vision 
            or just a spark of an idea, I'm here to help bring it to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:from-green-400 hover:to-emerald-400 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={18} />
              Quick Email
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold rounded-full hover:from-rose-300 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar size={18} />
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;