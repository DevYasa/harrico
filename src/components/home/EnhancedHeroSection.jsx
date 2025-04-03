import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Import your jewelry images
import SapphireRing from '../../assets/images/hero/bg8.jpg'; // Blue sapphire ring with diamonds
import DiamondRing from '../../assets/images/hero/bg9.jpg'; // Diamond engagement ring
import JewelryBoutique1 from '../../assets/images/hero/bg2.jpeg'; // Luxury store with display cases
import JewelryBoutique2 from '../../assets/images/hero/bg1.jpeg'; // Elegant store with gold lighting
import LuxuryShowroom from '../../assets/images/hero/bg7.jpg'; // High-end showroom with gold trim
// Import your logo
import Logo from '../../assets/images/logo.png'; // Your logo image
// You'll need to add these images to your project
import GemMining from '../../assets/images/hero/mining1.jpg'; // Gem mining image
// import GemManufacturing from '../../assets/images/hero/gem-manufacturing.jpg'; // Gem manufacturing image

const EnhancedHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  
  const slides = [
    {
      image: LuxuryShowroom, // Replace with a better background for logo+gems slide
      title: 'HARRICO CEYLON GEMS & JEWELS',
      subtitle: 'LUXURY & EXCELLENCE',
      description: 'Discover the finest Ceylon gems and exquisite jewelry crafted with unparalleled expertise and passion',
      cta: 'Explore Our Collections',
      hasLogo: true // Special flag for the first slide with logo
    },
    {
      image: SapphireRing,
      title: 'EXCEPTIONAL CEYLON GEMS',
      subtitle: 'RARE & EXQUISITE',
      description: 'Our premium selection features only the finest sapphires, rubies, and other precious gemstones from Ceylon',
      cta: 'Discover Our Gems'
    },
    {
      image: DiamondRing,
      title: 'LUXURY JEWELRY COLLECTIONS',
      subtitle: 'CRAFTSMANSHIP & DESIGN',
      description: 'Masterfully crafted jewelry featuring stones of exceptional cut, color and clarity set in precious metals',
      cta: 'View Collections'
    },
    {
      image: JewelryBoutique1,
      title: 'EXCLUSIVE BOUTIQUE EXPERIENCE',
      subtitle: 'LUXURY & ELEGANCE',
      description: 'Visit our flagship stores in Kuala Lumpur, Penang, and London for a personalized luxury experience',
      cta: 'Find Our Locations'
    },
    {
      image: GemMining, // Replace with actual gem mining image
      title: 'CEYLON GEMS MINING',
      subtitle: 'ETHICALLY SOURCED',
      description: 'We ethically source our gemstones directly from the legendary mines of Sri Lanka, ensuring the highest quality',
      cta: 'Learn About Our Sourcing'
    },
    {
      image: LuxuryShowroom, // Replace with actual gem manufacturing image
      title: 'GEM MANUFACTURING EXCELLENCE',
      subtitle: 'PRECISION & ARTISTRY',
      description: 'Our master craftsmen transform rough gemstones into brilliant treasures through expert cutting and polishing',
      cta: 'Discover Our Process'
    }
  ];

  // Preload all images for instant display
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    // Clear existing timeout when slide changes or component mounts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Only set a new timeout if not paused
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        changeSlide((currentSlide + 1) % slides.length);
      }, 7000); // Slightly longer display time for jewelry appreciation
    }
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isPaused, slides.length]);

  const changeSlide = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Resume auto sliding after transition completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const nextSlide = () => {
    // Temporarily pause auto sliding
    setIsPaused(true);
    changeSlide((currentSlide + 1) % slides.length);
    
    // Resume auto sliding after a brief pause
    setTimeout(() => setIsPaused(false), 7000);
  };

  const prevSlide = () => {
    // Temporarily pause auto sliding
    setIsPaused(true);
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
    
    // Resume auto sliding after a brief pause
    setTimeout(() => setIsPaused(false), 7000);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image - optimized for clarity */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="h-full w-full object-cover transition-transform duration-7000"
                style={{ 
                  transform: index === currentSlide ? 'scale(1.03)' : 'scale(1)',
                  transition: 'transform 7s ease-out',
                  objectPosition: 'center center'
                }}
              />
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
            </div>
            
            {/* Text Content with Golden Border */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 py-12 max-w-5xl relative">
                {/* Decorative gold borders */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-400"></div>
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-amber-400"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-amber-400"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-400"></div>
                
                {/* Content - faster animations for quicker appearance */}
                <div className="py-8 px-8">
                  {/* Logo for first slide only */}
                  {slide.hasLogo && (
                    <div
                      className="mx-auto mb-6 w-40 h-40"
                      style={{ 
                        opacity: 0, 
                        animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.1s' : 'none' 
                      }}
                    >
                      <img 
                        src={Logo} 
                        alt="Harrico Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  
                  <h2 
                    className="font-subheading text-xl md:text-2xl lg:text-3xl mb-4 tracking-widest text-amber-300 opacity-90"
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.2s' : 'none' 
                    }}
                  >
                    {slide.subtitle}
                  </h2>
                  
                  <h1 
                    className="font-heading text-4xl md:text-6xl lg:text-7xl mb-8 tracking-wider leading-tight"
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.4s' : 'none'
                    }}
                  >
                    {slide.title}
                  </h1>
                  
                  <div className="w-24 h-px bg-amber-400 mx-auto mb-8"
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.6s' : 'none'
                    }}
                  ></div>
                  
                  <p 
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.8s' : 'none'
                    }}
                  >
                    {slide.description}
                  </p>
                  
                  <Link 
                    to="/collections" 
                    className="inline-block px-8 py-3 border-2 border-amber-400 text-amber-50 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 uppercase tracking-widest text-sm"
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 1s' : 'none'
                    }}
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows - more visible */}
      <button 
        className="absolute top-1/2 left-6 z-20 w-12 h-12 flex items-center justify-center text-white bg-black/30 hover:bg-amber-500 rounded-full transition-all duration-300 transform -translate-y-1/2 border border-amber-400/50"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute top-1/2 right-6 z-20 w-12 h-12 flex items-center justify-center text-white bg-black/30 hover:bg-amber-500 rounded-full transition-all duration-300 transform -translate-y-1/2 border border-amber-400/50"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators - more visible */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPaused(true);
              changeSlide(index);
              setTimeout(() => setIsPaused(false), 7000);
            }}
            className={`w-12 h-1.5 transition-all duration-500 ${
              index === currentSlide ? 'bg-amber-400 w-20' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default EnhancedHeroSection;