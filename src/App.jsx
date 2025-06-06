import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Star, Menu, X, Check, ArrowRight, Play, Award, Users, Clock, Shield, Zap, Heart } from 'lucide-react';

// Import logos
import logo from '/src/assets/logo.png';
import favicon from '/src/assets/favicon.png';

const StaycationsWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Project images from assets folder
  const galleryImages = [
    {
      id: 1,
      src: "/src/assets/IMG_1271.jpg",
      alt: "Luxury Pool with Infinity Edge",
      category: "Pools"
    },
    {
      id: 2,
      src: "/src/assets/IMG_1272.jpg",
      alt: "Resort-Style Pool Design",
      category: "Pools"
    },
    {
      id: 3,
      src: "/src/assets/IMG_6965.jpg",
      alt: "Modern Pool with Lighting",
      category: "Pools"
    },
    {
      id: 4,
      src: "/src/assets/IMG_6966.jpg",
      alt: "Custom Pool Installation",
      category: "Pools"
    },
    {
      id: 5,
      src: "/src/assets/IMG_6969.jpg",
      alt: "Pool with Spa Features",
      category: "Pools"
    },
    {
      id: 6,
      src: "/src/assets/IMG_7468.jpg",
      alt: "Elegant Pool Design",
      category: "Pools"
    },
    {
      id: 7,
      src: "/src/assets/IMG_7471.jpg",
      alt: "Backyard Pool Paradise",
      category: "Pools"
    },
    {
      id: 8,
      src: "/src/assets/IMG_8002.jpg",
      alt: "Luxury Pool Installation",
      category: "Pools"
    },
    {
      id: 9,
      src: "/src/assets/IMG_8004.jpg",
      alt: "Modern Pool Design",
      category: "Pools"
    },
    {
      id: 10,
      src: "/src/assets/IMG_8006.jpg",
      alt: "Custom Pool Features",
      category: "Pools"
    },
    {
      id: 11,
      src: "/src/assets/IMG_0614.jpg",
      alt: "Concrete Hardscaping",
      category: "Hardscaping"
    },
    {
      id: 12,
      src: "/src/assets/IMG_0615.jpg",
      alt: "Stamped Concrete Patio",
      category: "Hardscaping"
    },
    {
      id: 13,
      src: "/src/assets/IMG_0616.jpg",
      alt: "Decorative Concrete Work",
      category: "Hardscaping"
    },
    {
      id: 14,
      src: "/src/assets/IMG_0852.jpg",
      alt: "Professional Hardscaping",
      category: "Hardscaping"
    },
    {
      id: 15,
      src: "/src/assets/IMG_0858.jpg",
      alt: "Custom Concrete Design",
      category: "Hardscaping"
    },
    {
      id: 16,
      src: "/src/assets/IMG_1080.jpg",
      alt: "Artificial Turf Installation",
      category: "Turf"
    },
    {
      id: 17,
      src: "/src/assets/IMG_1081.jpg",
      alt: "Synthetic Grass Landscape",
      category: "Turf"
    },
    {
      id: 18,
      src: "/src/assets/IMG_1086.jpg",
      alt: "Premium Turf Solution",
      category: "Turf"
    },
    {
      id: 19,
      src: "/src/assets/IMG_1087.jpg",
      alt: "Eco-Friendly Turf",
      category: "Turf"
    },
    {
      id: 20,
      src: "/src/assets/IMG_1089.jpg",
      alt: "Natural Looking Turf",
      category: "Turf"
    },
    {
      id: 21,
      src: "/src/assets/IMG_3010.jpg",
      alt: "Outdoor Living Space",
      category: "Outdoor Living"
    },
    {
      id: 22,
      src: "/src/assets/IMG_3041.jpg",
      alt: "Backyard Entertainment Area",
      category: "Outdoor Living"
    },
    {
      id: 23,
      src: "/src/assets/IMG_3210.jpg",
      alt: "Custom Outdoor Kitchen",
      category: "Outdoor Living"
    },
    {
      id: 24,
      src: "/src/assets/IMG_3213.jpg",
      alt: "Fire Pit Installation",
      category: "Outdoor Living"
    },
    {
      id: 25,
      src: "/src/assets/IMG_3214.jpg",
      alt: "Complete Backyard Transformation",
      category: "Outdoor Living"
    }
  ];

  const heroImage = "/src/assets/IMG_1271.jpg";

  const services = [
    {
      title: "Custom Pool Design",
      description: "Luxury pools tailored to your space and style",
      icon: "🏊‍♂️",
      features: ["Custom shapes", "LED lighting", "Heating systems", "Infinity edges"],
      image: "/src/assets/IMG_1272.jpg"
    },
    {
      title: "Concrete & Hardscaping",
      description: "Beautiful concrete work and outdoor surfaces",
      icon: "🏗️",
      features: ["Stamped concrete", "Patios", "Walkways", "Retaining walls"],
      image: "/src/assets/IMG_0614.jpg"
    },
    {
      title: "Artificial Turf",
      description: "Low-maintenance, year-round green spaces",
      icon: "🌱",
      features: ["Pet-friendly", "Drought resistant", "Easy maintenance", "Natural look"],
      image: "/src/assets/IMG_1080.jpg"
    },
    {
      title: "Outdoor Living",
      description: "Complete backyard transformations",
      icon: "🏡",
      features: ["Fire pits", "Outdoor kitchens", "Pergolas", "Entertainment areas"],
      image: "/src/assets/IMG_3210.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      rating: 5,
      text: "Staycations transformed our Plano backyard into a resort-like paradise. We haven't needed a vacation since! The pool is absolutely stunning.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
      location: "Plano, TX"
    },
    {
      name: "Mike Johnson",
      rating: 5,
      text: "Professional, reliable, and the quality is outstanding. Our new pool is the neighborhood showpiece here in Frisco. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      location: "Frisco, TX"
    },
    {
      name: "Jennifer Chen",
      rating: 5,
      text: "From design to completion, the Staycations team exceeded every expectation. Our McKinney home now has the backyard of our dreams!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      location: "McKinney, TX"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="w-8 h-8" /> },
    { number: "100%", label: "Satisfaction Rate", icon: <Heart className="w-8 h-8" /> },
    { number: "50+", label: "Team Members", icon: <Users className="w-8 h-8" /> }
  ];

  const processes = [
    {
      step: "01",
      title: "Consultation",
      description: "We start with a detailed consultation to understand your vision and requirements.",
      image: "/src/assets/IMG_2601.jpg"
    },
    {
      step: "02",
      title: "Design",
      description: "Our experts create custom 3D designs tailored to your space and style.",
      image: "/src/assets/IMG_1161.jpg"
    },
    {
      step: "03",
      title: "Construction",
      description: "Professional installation with attention to every detail and quality craftsmanship.",
      image: "/src/assets/IMG_8002.jpg"
    },
    {
      step: "04",
      title: "Completion",
      description: "Final walkthrough and handover of your dream backyard oasis.",
      image: "/src/assets/IMG_0852.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Gallery', 'Process', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium hover:text-blue-500 transition-colors relative group ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-6">
              {['Home', 'Services', 'Gallery', 'Process', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-gray-700 hover:text-blue-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-cyan-700/70"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'pulse 4s infinite'
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          {/* Large Logo Above Text */}
          <div className="mb-8">
            <img 
              src={favicon} 
              alt="Staycations" 
              className="w-64 h-auto mx-auto object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Your Personal
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Paradise Awaits
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 max-w-3xl mx-auto">
            Transform your backyard into the ultimate luxury destination where every day feels like a vacation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:8175921134"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <span>Call Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#gallery"
              className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>See Our Work</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img 
            src={logo} 
            alt="Staycations Background Logo" 
            className="w-96 h-96 object-contain"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-yellow-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury pools to complete outdoor living spaces, we create extraordinary experiences that bring resort-style living to your home
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-4xl">{service.icon}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of stunning transformations that have turned ordinary backyards into extraordinary escapes
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={galleryImages[currentSlide].src} 
                alt={galleryImages[currentSlide].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">{galleryImages[currentSlide].alt}</h3>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 12).map((image, index) => (
              <div 
                key={image.id} 
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${index === currentSlide ? 'ring-4 ring-blue-500' : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-32 md:h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final completion, we guide you through every step of creating your perfect outdoor oasis
            </p>
          </div>

          <div className="space-y-12">
            {processes.map((process, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={process.image} 
                      alt={process.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute top-6 left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {process.step}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{process.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Why Choose Staycations?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                At Staycations, we're not just building pools and patios – we're creating lifetime memories. Our mission is to transform your home into your personal sanctuary, where you can escape the world without ever leaving your property.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center lg:justify-start">
                {[
                  { icon: <Shield className="w-6 h-6" />, text: "Licensed & Insured" },
                  { icon: <Award className="w-6 h-6" />, text: "15+ Years Experience" },
                  { icon: <Heart className="w-6 h-6" />, text: "100% Satisfaction" },
                  { icon: <Zap className="w-6 h-6" />, text: "Custom Designs" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-800">
                      {item.icon}
                    </div>
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-xl bg-white/90 text-gray-800 border-0 focus:ring-4 focus:ring-blue-300/50 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 rounded-xl bg-white/90 text-gray-800 border-0 focus:ring-4 focus:ring-blue-300/50 transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-4 rounded-xl bg-white/90 text-gray-800 border-0 focus:ring-4 focus:ring-blue-300/50 transition-all"
                />
                <textarea 
                  placeholder="Tell us about your dream project" 
                  rows="4" 
                  className="w-full p-4 rounded-xl bg-white/90 text-gray-800 border-0 focus:ring-4 focus:ring-blue-300/50 transition-all resize-none"
                ></textarea>
                <button className="w-full bg-yellow-400 text-yellow-800 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it – hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-lg">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Backyard?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Contact us today for a free consultation and let's start building your dream outdoor space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a 
              href="tel:8175921134"
              className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-600/50 transition-all transform hover:-translate-y-2 block text-center"
            >
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 text-lg">(817) 592-1134</p>
            </a>
            <a 
              href="mailto:service@staycationpools.com"
              className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-600/50 transition-all transform hover:-translate-y-2 block text-center"
            >
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm break-all">service@staycationpools.com</p>
            </a>
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-600/50 transition-all transform hover:-translate-y-2">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300 text-lg">DFW Metroplex</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={favicon} 
                  alt="Staycations Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Creating personal oases one backyard at a time. Your dream outdoor space is just a conversation away.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Pool Design & Installation</li>
                <li className="hover:text-white transition-colors cursor-pointer">Concrete & Hardscaping</li>
                <li className="hover:text-white transition-colors cursor-pointer">Artificial Turf</li>
                <li className="hover:text-white transition-colors cursor-pointer">Outdoor Living Spaces</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Gallery</li>
                <li className="hover:text-white transition-colors cursor-pointer">Testimonials</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Staycations. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StaycationsWebsite;