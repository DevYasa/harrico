import React from 'react';
import { Link } from 'react-router-dom';
import SapphireImage from '../../assets/images/home/desktop/bg4.gif'; 
import SapphireImageMobile from '../../assets/images/home/mobile/mbg15.gif'; // Add your mobile version
import BridalImage from '../../assets/images/home/desktop/bg.gif';
import BridalImageMobile from '../../assets/images/home/mobile/mbg5.gif';
import EmeraldImage from '../../assets/images/home/desktop/bg.gif';
import EmeraldImageMobile from '../../assets/images/home/mobile/mbg6.gif'; // Add your mobile version

const ShowcaseSections = () => {
  const showcaseSections = [
    {
      id: 'sapphire-collection',
      desktopImage: SapphireImage,
      mobileImage: SapphireImageMobile || SapphireImage, // Fallback to desktop if mobile not available
      title: "The Sapphire Collection",
      subtitle: "by Harrico",
      description: "A brilliant tribute to the finest Ceylon gems, showcasing extraordinary color and brilliance.",
      buttonText: "DISCOVER",
      buttonLink: "/collections/sapphire"
    },
    {
      id: 'bridal-collection',
      desktopImage: BridalImage,
      mobileImage: BridalImageMobile || BridalImage, // Fallback to desktop if mobile not available
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
      mobileImage: EmeraldImageMobile || EmeraldImage, // Mobile placeholder with portrait orientation
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
          
          {index < showcaseSections.length - 1 && <GoldDivider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ShowcaseSections;