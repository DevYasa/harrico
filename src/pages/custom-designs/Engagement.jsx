// src/pages/custom-designs/Engagement.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import AnimatedPageHeader from '../../components/common/AnimatedPageHeader';
import EngagementHeroImage from '../../assets/images/collections/custom/bridal-collection.jpg';

const Engagement = () => {
  // Engagement ring styles
  const ringStyles = [
    {
      id: 'solitaire',
      name: 'Solitaire',
      description: 'Timeless elegance that centers on a single stunning gemstone, allowing its beauty to take center stage.',
      image: '/assets/images/collections/custom/engagement/solitaire.jpg',
    },
    {
      id: 'halo',
      name: 'Halo',
      description: 'A brilliant center stone surrounded by a circle of smaller diamonds, creating maximum sparkle and perceived size.',
      image: '/assets/images/collections/custom/engagement/halo.jpg',
    },
    {
      id: 'three-stone',
      name: 'Three Stone',
      description: 'Symbolizing your past, present, and future together with three magnificent gemstones in harmony.',
      image: '/assets/images/collections/custom/engagement/three-stone.jpg',
    },
    {
      id: 'vintage',
      name: 'Vintage & Art Deco',
      description: 'Intricate detailing and milgrain work inspired by historical designs, offering timeless romance and character.',
      image: '/assets/images/collections/custom/engagement/vintage.jpg',
    },
    {
      id: 'modern',
      name: 'Modern & Geometric',
      description: 'Clean lines and architectural elements for the contemporary couple who appreciates minimalist sophistication.',
      image: '/assets/images/collections/custom/engagement/modern.jpg',
    },
    {
      id: 'colored-gem',
      name: 'Colored Gemstone',
      description: 'Stand out with a vibrant Ceylon sapphire, ruby, or emerald for a unique engagement ring with rich symbolism.',
      image: '/assets/images/collections/custom/engagement/colored-gem.jpg',
    }
  ];

  // Featured engagement rings
  const featuredRings = [
    {
      id: 'er-sapphire-1',
      name: 'Ceylon Sapphire Halo Ring',
      description: 'A stunning 2 carat oval blue sapphire surrounded by a diamond halo in platinum.',
      image: '/assets/images/collections/custom/engagement/sapphire-halo.jpg',
    },
    {
      id: 'er-diamond-1',
      name: 'Classic Diamond Solitaire',
      description: 'A timeless 1.5 carat round brilliant diamond set in 18kt white gold with a knife-edge band.',
      image: '/assets/images/collections/custom/engagement/diamond-solitaire.jpg',
    },
    {
      id: 'er-ruby-1',
      name: 'Three Stone Ruby Ring',
      description: 'A vibrant Ceylon ruby flanked by two round diamonds in 18kt yellow gold.',
      image: '/assets/images/collections/custom/engagement/ruby-three-stone.jpg',
    }
  ];

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Custom Engagement Rings" 
        subtitle="Create a unique symbol of your love with our exceptional gemstones and expert craftsmanship"
        backgroundImage={EngagementHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Your Perfect Engagement Ring" 
            subtitle="BESPOKE CREATIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              An engagement ring represents one of life's most meaningful moments. At Harrico, we believe 
              this symbol of your commitment should be as unique as your love story. Our custom engagement 
              rings combine exceptional Ceylon gemstones with expert craftsmanship to create heirloom-quality 
              pieces that tell your personal story.
            </p>
            <p className="text-gray-700">
              Whether you envision a classic diamond solitaire, a vibrant sapphire surrounded by a halo of 
              diamonds, or something entirely unique, our design team will bring your vision to life. Every 
              engagement ring is crafted with meticulous attention to detail and delivered within 3 weeks of 
              design approval.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Ring Styles */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Engagement Ring Styles" 
            subtitle="DESIGN INSPIRATION" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {ringStyles.map(style => (
              <div 
                key={style.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-56 md:h-64 overflow-hidden">
                  <img 
                    src={style.image} 
                    alt={style.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-serif mb-2">{style.name}</h3>
                  <p className="text-gray-700 text-sm">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

      <GoldDivider />

      {/* Featured Engagement Rings */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Featured Custom Engagement Rings" 
            subtitle="RECENT CREATIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {featuredRings.map(ring => (
              <div 
                key={ring.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-56 md:h-64 overflow-hidden">
                  <img 
                    src={ring.image} 
                    alt={ring.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-serif mb-2">{ring.name}</h3>
                  <p className="text-gray-700 text-sm">{ring.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
              These are just a few examples of our custom engagement rings. We can create any style 
              using your choice of Ceylon gemstones and precious metals, tailored to your preferences.
            </p>
            <Link
              to="/custom-designs/gallery"
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              VIEW FULL GALLERY
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Gemstone Options */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Exceptional Gemstone Options" 
            subtitle="CENTER STONES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-8 md:mt-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/images/collections/custom/engagement/gemstone-options.jpg"
                alt="Gemstone Options" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6">Beyond Diamonds</h3>
              <p className="text-gray-700 mb-4 md:mb-6">
                While diamonds remain a popular choice for engagement rings, more couples are seeking 
                unique alternatives that reflect their personal style. Our Ceylon gemstones offer 
                exceptional beauty, durability, and meaningful symbolism.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#b9a16b] mr-2">•</span>
                  <span><strong>Blue Sapphires</strong> — Symbolizing loyalty and fidelity, these iconic gems have adorned royal engagement rings for centuries.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#b9a16b] mr-2">•</span>
                  <span><strong>Rubies</strong> — Representing passion and love, these vibrant red gems make a bold and romantic statement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#b9a16b] mr-2">•</span>
                  <span><strong>Emeralds</strong> — Symbolizing new beginnings and eternal love with their lush green color.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#b9a16b] mr-2">•</span>
                  <span><strong>Padparadscha Sapphires</strong> — Exceptionally rare with their unique pinkish-orange hue, perfect for the truly one-of-a-kind ring.</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  to="/gemstones/precious"
                  className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                >
                  EXPLORE GEMSTONES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Design Process */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="The Custom Design Experience" 
            subtitle="CREATING YOUR RING" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-16 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#b9a16b] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif mb-2">Private Consultation</h3>
                  <p className="text-gray-700 text-sm">
                    Begin with a private consultation where our design team will discuss your vision, 
                    preferences, and budget. We'll help you explore different design possibilities and 
                    gemstone options to find the perfect combination for your engagement ring.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-16 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#b9a16b] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif mb-2">Gemstone Selection</h3>
                  <p className="text-gray-700 text-sm">
                    Choose from our exceptional collection of Ceylon gemstones. Our gemologists will 
                    help you select the perfect center stone based on quality, color, cut, and size to 
                    create a ring that aligns with your vision and budget.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-16 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#b9a16b] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif mb-2">Design Creation</h3>
                  <p className="text-gray-700 text-sm">
                    Our designers will create detailed sketches and 3D renderings of your custom engagement 
                    ring. We'll refine the design based on your feedback until it perfectly captures your vision.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-16 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#b9a16b] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif mb-2">Master Craftsmanship</h3>
                  <p className="text-gray-700 text-sm">
                    Once the design is approved, our master jewelers will bring it to life with exceptional 
                    attention to detail. Each ring is meticulously handcrafted to ensure the highest quality 
                    and durability for a lifetime of wear.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-16 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#b9a16b] flex items-center justify-center text-white font-bold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif mb-2">Timely Delivery</h3>
                  <p className="text-gray-700 text-sm">
                    Your completed engagement ring will be delivered within 3 weeks of design approval, 
                    accompanied by certification for the gemstones and precious metals used in your piece.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/custom-designs/process"
                className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
              >
                LEARN MORE ABOUT THE PROCESS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Design CTA */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6">Begin Your Engagement Ring Journey</h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-10">
            Create a ring as unique as your love story. Schedule a consultation with our design team 
            to begin crafting the perfect symbol of your commitment. From concept to creation, we'll 
            guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact/appointment" 
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </Link>
            <Link 
              to="/custom-designs/gallery" 
              className="inline-block border border-white text-white px-6 py-2 md:px-8 md:py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-[#08081a] transition-all duration-300"
            >
              EXPLORE GALLERY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Engagement;