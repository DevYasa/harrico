import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SapphireImage1 from '../../assets/images/home/desktop/bg4.gif'; 
import SapphireImage2 from '../../assets/images/home/desktop/bg4.gif'; 
import SapphireImage3 from '../../assets/images/home/desktop/bg4.gif'; 
import SapphireImage4 from '../../assets/images/home/desktop/bg4.gif'; 
import SapphireImage5 from '../../assets/images/home/desktop/bg4.gif'; // Added fifth image
import SapphireImage6 from '../../assets/images/home/desktop/bg4.gif'; // Added sixth image
import SapphireImageMobile1 from '../../assets/images/home/mobile/mbg15.gif';
import SapphireImageMobile2 from '../../assets/images/home/mobile/mbg17.gif';
import SapphireImageMobile3 from '../../assets/images/home/mobile/mbg19.gif';
import SapphireImageMobile4 from '../../assets/images/home/mobile/mbg16.gif';
import SapphireImageMobile5 from '../../assets/images/home/mobile/mbg18.gif'; // Added fifth mobile image
import SapphireImageMobile6 from '../../assets/images/home/mobile/mbg20.gif'; // Added sixth mobile image
import BridalImage from '../../assets/images/home/desktop/bg4.gif';
import BridalImageMobile from '../../assets/images/home/mobile/mbg5.gif';
import EmeraldImage from '../../assets/images/home/desktop/bg.gif';
import EmeraldImageMobile from '../../assets/images/home/mobile/mbg6.gif';

const ShowcaseSections = () => {
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slideshow images for the sapphire collection
  const sapphireSlides = [
    {
      desktop: SapphireImage1,
      mobile: SapphireImageMobile1 || SapphireImage1
    },
    {
      desktop: SapphireImage2,
      mobile: SapphireImageMobile2 || SapphireImage2
    },
    {
      desktop: SapphireImage3,
      mobile: SapphireImageMobile3 || SapphireImage3
    },
    {
      desktop: SapphireImage4,
      mobile: SapphireImageMobile4 || SapphireImage4
    },
    {
      desktop: SapphireImage5,
      mobile: SapphireImageMobile5 || SapphireImage5
    },
    {
      desktop: SapphireImage6,
      mobile: SapphireImageMobile6 || SapphireImage6
    }
  ];
  
  // Auto-slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sapphireSlides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [sapphireSlides.length]);

  const showcaseSections = [
    {
      id: 'sapphire-collection',
      isSlideshow: true,
      title: "The Sapphire Collection",
      subtitle: "by Harrico",
      description: "A brilliant tribute to the finest Ceylon gems, showcasing extraordinary color and brilliance.",
      buttonText: "DISCOVER",
      buttonLink: "/collections/sapphire"
    },
    {
      id: 'bridal-collection',
      desktopImage: BridalImage,
      mobileImage: BridalImageMobile || BridalImage,
      title: "From Our Hands to Yours",
      subtitle: "",
      description: "Driven by the natural brilliance of Ceylon gems, our jewelry captures the unique sparkle of your everlasting love story.",
      buttonText: "DISCOVER",
      buttonLink: "/collections/bridal",
      backgroundColor: "#f8f5f5"
    },
    {
      id: 'emerald-collection',
      desktopImage: EmeraldImage,
      mobileImage: EmeraldImageMobile || EmeraldImage,
      title: "Emerald Collection",
      subtitle: "",
      description: "Timeless elegance meets contemporary design, inspired by nature's finest treasures.",
      buttonText: "DISCOVER",
      buttonLink: "/collections/emerald",
      backgroundColor: "#f5f8f5"
    }
  ];

  const GoldDivider = () => (
    <div className="w-full py-16 flex justify-center items-center">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#b9a16b] to-transparent w-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[#b9a16b] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#b9a16b]"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {showcaseSections.map((section, index) => (
        <React.Fragment key={section.id}>
          {section.isSlideshow ? (
            // Slideshow section with text overlay
            <>
              {/* Desktop Slideshow with Text */}
              <section className="relative min-h-screen hidden md:block">
                {/* Slideshow background images */}
                <div className="absolute inset-0 overflow-hidden">
                  {sapphireSlides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        slideIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        backgroundImage: `url(${slide.desktop})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      aria-hidden={slideIndex !== currentSlide}
                    ></div>
                  ))}
                </div>
                
                {/* Text Overlay */}
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
                  <div className="w-full md:w-1/2 py-20">
                    {section.subtitle && (
                      <p className="text-base font-serif mb-2">{section.subtitle}</p>
                    )}
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-base mb-10 max-w-md text-gray-700">
                      {section.description}
                    </p>
                    <Link
                      to={section.buttonLink}
                      className="inline-block border border-[#cbb472] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                    >
                      {section.buttonText}
                    </Link>
                  </div>
                </div>
                
                {/* Slide indicators - centered */}
                <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
                  <div className="flex space-x-3">
                    {sapphireSlides.map((_, slideIndex) => (
                      <button
                        key={slideIndex}
                        onClick={() => setCurrentSlide(slideIndex)}
                        className={`w-2.5 h-2.5 rounded-full ${
                          slideIndex === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </section>
              
              {/* Mobile Slideshow with Text Below */}
              <section className="md:hidden bg-white">
                {/* Mobile slideshow */}
                <div className="relative w-full h-[60vh] overflow-hidden">
                  {sapphireSlides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        slideIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        backgroundImage: `url(${slide.mobile})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      aria-hidden={slideIndex !== currentSlide}
                    ></div>
                  ))}
                  
                  {/* Mobile slide indicators - centered */}
                  <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center">
                    <div className="flex space-x-2">
                      {sapphireSlides.map((_, slideIndex) => (
                        <button
                          key={slideIndex}
                          onClick={() => setCurrentSlide(slideIndex)}
                          className={`w-2.5 h-2.5 rounded-full ${
                            slideIndex === currentSlide ? 'bg-white' : 'bg-white/50'
                          }`}
                          aria-label={`Go to slide ${slideIndex + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Text Section - Always below image on mobile */}
                <div className="w-full px-6 py-12 text-center">
                  {section.subtitle && (
                    <p className="text-sm font-serif mb-2">{section.subtitle}</p>
                  )}
                  <h2 className="text-3xl font-serif mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-sm mb-8 mx-auto max-w-sm text-gray-700">
                    {section.description}
                  </p>
                  <Link
                    to={section.buttonLink}
                    className="inline-block border border-[#cbb472] text-[#b9a16b] px-10 py-3 text-xs tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                  >
                    {section.buttonText}
                  </Link>
                </div>
              </section>
            </>
          ) : (
            // Regular showcase section (unchanged)
            <>
              {/* Desktop View - Image as background with text overlay */}
              <section className="relative min-h-screen hidden md:block bg-no-repeat bg-cover bg-center">
                {/* Clickable background - covers the entire section */}
                <Link 
                  to={section.buttonLink} 
                  className="absolute inset-0 z-0"
                  style={{ 
                    backgroundImage: `url(${section.desktopImage})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundColor: section.backgroundColor || 'transparent' 
                  }}
                  aria-label={`View ${section.title}`}
                ></Link>
                
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
                  <div className="w-full md:w-1/2 py-20">
                    {section.subtitle && (
                      <p className="text-base font-serif mb-2">{section.subtitle}</p>
                    )}
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-base mb-10 max-w-md text-gray-700">
                      {section.description}
                    </p>
                    <Link
                      to={section.buttonLink}
                      className="inline-block border border-[#cbb472] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                    >
                      {section.buttonText}
                    </Link>
                  </div>
                </div>
              </section>
              
              {/* Mobile View - Image on top, text below (Harry Winston style) */}
              <section className="md:hidden bg-white">
                {/* Image Section - Now clickable */}
                <Link 
                  to={section.buttonLink}
                  className="block w-full h-[60vh] bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${section.mobileImage})`,
                    backgroundColor: section.backgroundColor || 'transparent'
                  }}
                  aria-label={`View ${section.title}`}
                ></Link>
                
                {/* Text Section - Always below image on mobile */}
                <div className="w-full px-6 py-12 text-center">
                  {section.subtitle && (
                    <p className="text-sm font-serif mb-2">{section.subtitle}</p>
                  )}
                  <h2 className="text-3xl font-serif mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-sm mb-8 mx-auto max-w-sm text-gray-700">
                    {section.description}
                  </p>
                  <Link
                    to={section.buttonLink}
                    className="inline-block border border-[#cbb472] text-[#b9a16b] px-10 py-3 text-xs tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                  >
                    {section.buttonText}
                  </Link>
                </div>
              </section>
            </>
          )}
          
          {index < showcaseSections.length - 1 && <GoldDivider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ShowcaseSections;