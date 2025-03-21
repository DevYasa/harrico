// src/components/home/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlueSapphire from '../../assets/images/hero/blue-sapphire.png';
import VisitOurBoutique from '../../assets/images/hero/visit-our-boutique.jpeg';
import ExquisteCraftmanship from '../../assets/images/hero/exquisite-craftsmanship.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  
  const slides = [
    {
      image: ExquisteCraftmanship,
      title: 'EXQUISITE CRAFTSMANSHIP',
      subtitle: 'CEYLON GEMS & JEWELS',
      description: 'Discover our handcrafted jewelry featuring the finest Ceylon gemstones'
    },
    {
      image: BlueSapphire,
      title: 'RARE BLUE SAPPHIRES',
      subtitle: 'CEYLON\'S FINEST',
      description: 'World-renowned for their exceptional color and clarity'
    },
    {
      image: VisitOurBoutique,
      title: 'VISIT OUR BOUTIQUE',
      subtitle: 'LUXURY EXPERIENCE',
      description: 'Located at Intermark Mall, Kuala Lumpur'
    }
  ];

  useEffect(() => {
    // Clear existing timeout when slide changes or component mounts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Only set a new timeout if not paused
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
    }
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isPaused, slides.length]);

  const nextSlide = () => {
    // Temporarily pause auto sliding
    setIsPaused(true);
    setCurrentSlide(prev => (prev + 1) % slides.length);
    
    // Resume auto sliding after a brief pause
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    // Temporarily pause auto sliding
    setIsPaused(true);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    
    // Resume auto sliding after a brief pause
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className="relative h-screen">
      {/* Slides */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="h-full w-full object-cover" 
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h2 className="font-serif text-lg md:text-2xl mb-4 tracking-widest opacity-90">{slide.subtitle}</h2>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wider leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">{slide.description}</p>
                <Link 
                  to="/collections" 
                  className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 text-lg border border-amber-700 hover:from-transparent hover:to-transparent hover:text-white transition-all duration-300"
                >
                  Explore Collections
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        className="absolute top-1/2 left-4 z-20 w-12 h-12 flex items-center justify-center text-white bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 transform -translate-y-1/2"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute top-1/2 right-4 z-20 w-12 h-12 flex items-center justify-center text-white bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 transform -translate-y-1/2"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPaused(true);
              setCurrentSlide(index);
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;