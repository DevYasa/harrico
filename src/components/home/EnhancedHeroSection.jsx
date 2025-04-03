import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Import your desktop images
import SapphireRingDesktop from '../../assets/images/hero/desktop/bg8.jpg';
import DiamondRingDesktop from '../../assets/images/hero/desktop/bg9.jpg';
import JewelryBoutique1Desktop from '../../assets/images/hero/desktop/bg11.jpeg';
import LuxuryShowroomDesktop from '../../assets/images/hero/desktop/bg7.jpg';
// Import your mobile images (these will be different, more vertically oriented versions)
import SapphireRingMobile from '../../assets/images/hero/mobile/14.jpg';
import DiamondRingMobile from '../../assets/images/hero/mobile/15.jpg';
import JewelryBoutique1Mobile from '../../assets/images/hero/mobile/16.jpg';
import LuxuryShowroomMobile from '../../assets/images/hero/mobile/bg7.jpg';
// Import your logo
import Logo from '../../assets/images/logo.png';
// For new images like gem mining and manufacturing, follow the same pattern
import GemMiningDesktop from '../../assets/images/hero/desktop/bg10.jpg';
import GemMiningMobile from '../../assets/images/hero/mobile/bg12.jpg';
import GemManufacturingDesktop from '../../assets/images/hero/desktop/bg11.jpg';
import GemManufacturingMobile from '../../assets/images/hero/mobile/bg13.jpg';

const EnhancedHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const timeoutRef = useRef(null);
  
  // Check if the screen is mobile size and detect very small screens
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallMobile(window.innerWidth < 375); // Extra small screens like Galaxy S10
    };
    
    // Initial check
    checkScreenSize();
    
    // Set up event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  const slides = [
    {
      desktopImage: LuxuryShowroomDesktop,
      mobileImage: LuxuryShowroomMobile,
      title: 'HARRICO CEYLON GEMS & JEWELS',
      subtitle: 'LUXURY & EXCELLENCE',
      description: 'Discover the finest Ceylon gems and exquisite jewelry crafted with unparalleled expertise and passion',
      cta: 'Explore Our Collections',
      hasLogo: true
    },
    {
      desktopImage: SapphireRingDesktop,
      mobileImage: SapphireRingMobile,
      title: 'EXCEPTIONAL CEYLON GEMS',
      subtitle: 'RARE & EXQUISITE',
      description: 'Our premium selection features only the finest sapphires, rubies, and other precious gemstones from Ceylon',
      cta: 'Discover Our Gems'
    },
    {
      desktopImage: DiamondRingDesktop,
      mobileImage: DiamondRingMobile,
      title: 'LUXURY JEWELRY COLLECTIONS',
      subtitle: 'CRAFTSMANSHIP & DESIGN',
      description: 'Masterfully crafted jewelry featuring stones of exceptional cut, color and clarity set in precious metals',
      cta: 'View Collections'
    },
    {
      desktopImage: JewelryBoutique1Desktop,
      mobileImage: JewelryBoutique1Mobile,
      title: 'EXCLUSIVE BOUTIQUE EXPERIENCE',
      subtitle: 'LUXURY & ELEGANCE',
      description: 'Visit our flagship stores in Kuala Lumpur, Penang, and London for a personalized luxury experience',
      cta: 'Find Our Locations'
    },
    {
      desktopImage: GemMiningDesktop,
      mobileImage: GemMiningMobile,
      title: 'CEYLON GEMS MINING',
      subtitle: 'ETHICALLY SOURCED',
      description: 'We ethically source our gemstones directly from the legendary mines of Sri Lanka, ensuring the highest quality',
      cta: 'Learn About Our Sourcing'
    },
    {
      desktopImage: GemManufacturingDesktop,
      mobileImage: GemManufacturingMobile,
      title: 'GEM MANUFACTURING EXCELLENCE',
      subtitle: 'PRECISION & ARTISTRY',
      description: 'Our master craftsmen transform rough gemstones into brilliant treasures through expert cutting and polishing',
      cta: 'Discover Our Process'
    }
  ];

  // Preload all images for instant display
  useEffect(() => {
    slides.forEach(slide => {
      // Preload desktop images
      const desktopImg = new Image();
      desktopImg.src = slide.desktopImage;
      
      // Preload mobile images
      const mobileImg = new Image();
      mobileImg.src = slide.mobileImage;
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
      }, 7000);
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
            {/* Background Image - conditionally render mobile or desktop version */}
            <div className="absolute inset-0">
              <img 
                src={isMobile ? slide.mobileImage : slide.desktopImage} 
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
              <div className={`text-center text-white relative ${
                isSmallMobile ? 'px-2 py-4' : isMobile ? 'px-3 py-8' : 'px-4 py-12'
              } max-w-5xl`}>
                {/* Decorative gold borders - Adjusted for mobile */}
                <div className={`absolute top-0 left-0 border-t-2 border-l-2 border-amber-400 ${
                  isSmallMobile ? 'w-10 h-10' : isMobile ? 'w-16 h-16' : 'w-32 h-32'
                }`}></div>
                <div className={`absolute top-0 right-0 border-t-2 border-r-2 border-amber-400 ${
                  isSmallMobile ? 'w-10 h-10' : isMobile ? 'w-16 h-16' : 'w-32 h-32'
                }`}></div>
                <div className={`absolute bottom-0 left-0 border-b-2 border-l-2 border-amber-400 ${
                  isSmallMobile ? 'w-10 h-10' : isMobile ? 'w-16 h-16' : 'w-32 h-32'
                }`}></div>
                <div className={`absolute bottom-0 right-0 border-b-2 border-r-2 border-amber-400 ${
                  isSmallMobile ? 'w-10 h-10' : isMobile ? 'w-16 h-16' : 'w-32 h-32'
                }`}></div>
                
                {/* Content - faster animations for quicker appearance - Reduced spacing for mobile */}
                <div className={`${isSmallMobile ? 'py-2 px-3' : isMobile ? 'py-4 px-5' : 'py-8 px-8'}`}>
                  {/* Logo for first slide only - Reduced size for mobile */}
                  {slide.hasLogo && (
                    <div
                      className={`mx-auto ${
                        isSmallMobile ? 'mb-2 w-20 h-20' : isMobile ? 'mb-3 w-28 h-28' : 'mb-6 w-40 h-40'
                      }`}
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
                  
                  {/* Subtitle - Smaller text and reduced margin for mobile */}
                  <h2 
                    className={`font-subheading tracking-widest text-amber-300 opacity-90 ${
                      isSmallMobile ? 'text-sm mb-1' : isMobile ? 'text-base mb-2' : 'text-xl md:text-2xl lg:text-3xl mb-4'
                    }`}
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.2s' : 'none' 
                    }}
                  >
                    {slide.subtitle}
                  </h2>
                  
                  {/* Title - Smaller text and reduced margin for mobile */}
                  <h1 
                    className={`font-heading tracking-wider leading-tight ${
                      isSmallMobile ? 'text-2xl mb-2' : isMobile ? 'text-3xl mb-3' : 'text-4xl md:text-6xl lg:text-7xl mb-8'
                    }`}
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.4s' : 'none'
                    }}
                  >
                    {slide.title}
                  </h1>
                  
                  {/* Divider - Reduced margin for mobile */}
                  <div 
                    className={`w-24 h-px bg-amber-400 mx-auto ${
                      isSmallMobile ? 'mb-2' : isMobile ? 'mb-3' : 'mb-8'
                    }`}
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.6s' : 'none'
                    }}
                  ></div>
                  
                  {/* Description - Smaller text, line height, and reduced margin for mobile */}
                  <p 
                    className={`mx-auto leading-relaxed ${
                      isSmallMobile ? 'text-xs max-w-xs mb-3 leading-tight' : 
                      isMobile ? 'text-sm max-w-sm mb-6 leading-snug' : 
                      'text-lg md:text-xl max-w-2xl mb-12 leading-relaxed'
                    }`}
                    style={{ 
                      opacity: 0, 
                      animation: index === currentSlide ? 'fadeIn 0.6s ease forwards 0.8s' : 'none'
                    }}
                  >
                    {slide.description}
                  </p>
                  
                  {/* CTA Button - Smaller button for mobile */}
                  <Link 
                    to="/collections" 
                    className={`inline-block border-2 border-amber-400 text-amber-50 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 uppercase tracking-widest ${
                      isSmallMobile ? 'px-4 py-1.5 text-xs' : isMobile ? 'px-5 py-2 text-xs' : 'px-8 py-3 text-sm'
                    }`}
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
      
      {/* Navigation arrows - smaller and repositioned for mobile */}
      <button 
        className={`absolute top-1/2 z-20 flex items-center justify-center text-white bg-black/30 hover:bg-amber-500 rounded-full transition-all duration-300 transform -translate-y-1/2 border border-amber-400/50 ${
          isSmallMobile ? 'left-1 w-8 h-8' : isMobile ? 'left-2 w-9 h-9' : 'left-6 w-12 h-12'
        }`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={isSmallMobile ? 'h-4 w-4' : isMobile ? 'h-5 w-5' : 'h-6 w-6'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className={`absolute top-1/2 z-20 flex items-center justify-center text-white bg-black/30 hover:bg-amber-500 rounded-full transition-all duration-300 transform -translate-y-1/2 border border-amber-400/50 ${
          isSmallMobile ? 'right-1 w-8 h-8' : isMobile ? 'right-2 w-9 h-9' : 'right-6 w-12 h-12'
        }`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={isSmallMobile ? 'h-4 w-4' : isMobile ? 'h-5 w-5' : 'h-6 w-6'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators - smaller and moved up for small mobile screens */}
      <div className={`absolute z-20 flex justify-center space-x-2 left-0 right-0 ${
        isSmallMobile ? 'bottom-4' : isMobile ? 'bottom-8' : 'bottom-12'
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPaused(true);
              changeSlide(index);
              setTimeout(() => setIsPaused(false), 7000);
            }}
            className={`transition-all duration-500 ${
              index === currentSlide 
                ? `bg-amber-400 ${isSmallMobile ? 'w-12 h-1' : isMobile ? 'w-14 h-1' : 'w-20 h-1.5'}`
                : `bg-white/60 ${isSmallMobile ? 'w-6 h-1' : isMobile ? 'w-7 h-1' : 'w-12 h-1.5'}`
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default EnhancedHeroSection;