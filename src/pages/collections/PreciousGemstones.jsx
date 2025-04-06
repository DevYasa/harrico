// src/pages/collections/PreciousGemstones.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import AnimatedPageHeader from '../../components/common/AnimatedPageHeader';
import PreciousGemsHeroImage from '../../assets/images/collections/sapphire-jewelry.jpg';

const PreciousGemstones = () => {
  // Precious gemstones data
  const preciousGemstones = [
    {
      id: 'blue-sapphire',
      name: 'Blue Sapphire',
      description: 'The iconic deep blue sapphire from Ceylon, known for its exceptional color and clarity.',
      image: '/assets/images/collections/gems/blue-sapphire.jpg',
      link: '/collections/precious-gemstones/blue-sapphire'
    },
    {
      id: 'emerald',
      name: 'Emerald',
      description: 'Vibrant green emeralds with rich color and distinctive inclusions that add character.',
      image: '/assets/images/collections/gems/emerald.jpg',
      link: '/collections/precious-gemstones/emerald'
    },
    {
      id: 'yellow-sapphire',
      name: 'Yellow Sapphire',
      description: 'Brilliant yellow sapphires ranging from light lemon to deep golden hues.',
      image: '/assets/images/collections/gems/yellow-sapphire.jpg',
      link: '/collections/precious-gemstones/yellow-sapphire'
    },
    {
      id: 'white-sapphire',
      name: 'White Sapphire',
      description: 'Colorless sapphires with exceptional brilliance, a natural alternative to diamonds.',
      image: '/assets/images/collections/gems/white-sapphire.jpg',
      link: '/collections/precious-gemstones/white-sapphire'
    },
    {
      id: 'pink-sapphire',
      name: 'Pink Sapphire',
      description: 'Delicate to vivid pink sapphires that exude femininity and elegance.',
      image: '/assets/images/collections/gems/pink-sapphire.jpg',
      link: '/collections/precious-gemstones/pink-sapphire'
    },
    {
      id: 'cats-eye',
      name: 'Cat\'s Eye',
      description: 'Chrysoberyl with a distinctive band of light that resembles a feline eye.',
      image: '/assets/images/collections/gems/cats-eye.jpg',
      link: '/collections/precious-gemstones/cats-eye'
    },
    {
      id: 'diamonds',
      name: 'Diamonds',
      description: 'The timeless classic, featuring exceptional cut, clarity, and brilliance.',
      image: '/assets/images/collections/gems/diamonds.jpg',
      link: '/collections/precious-gemstones/diamonds'
    },
    {
      id: 'ruby',
      name: 'Ruby',
      description: 'Fiery red gemstones symbolizing passion and commanding the highest prices of colored gems.',
      image: '/assets/images/collections/gems/ruby.jpg',
      link: '/collections/precious-gemstones/ruby'
    },
    {
      id: 'padparadscha',
      name: 'Padparadscha',
      description: 'The rarest sapphire variety with a unique pinkish-orange hue reminiscent of lotus flowers.',
      image: '/assets/images/collections/gems/padparadscha.jpg',
      link: '/collections/precious-gemstones/padparadscha'
    },
    {
      id: 'alexandrite',
      name: 'Alexandrite',
      description: 'Phenomenal gem that changes color from green in daylight to red in incandescent light.',
      image: '/assets/images/collections/gems/alexandrite.jpg',
      link: '/collections/precious-gemstones/alexandrite'
    },
    {
      id: 'color-change-sapphire',
      name: 'Color Change Sapphire',
      description: 'Rare sapphires that display different colors under different lighting conditions.',
      image: '/assets/images/collections/gems/color-change-sapphire.jpg',
      link: '/collections/precious-gemstones/color-change-sapphire'
    },
    {
      id: 'teal-sapphire',
      name: 'Teal Sapphire',
      description: 'Unique sapphires with a captivating blue-green color that bridges blue and green gems.',
      image: '/assets/images/collections/gems/teal-sapphire.jpg',
      link: '/collections/precious-gemstones/teal-sapphire'
    },
    {
      id: 'spinel',
      name: 'Spinel',
      description: 'Brilliantly colored gems often mistaken for ruby or sapphire with excellent clarity.',
      image: '/assets/images/collections/gems/spinel.jpg',
      link: '/collections/precious-gemstones/spinel'
    }
  ];

  // Featured gemstones (could be your best sellers or most distinctive gems)
  const featuredGems = preciousGemstones.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Precious Gemstones" 
        subtitle="Discover our exceptional collection of the world's most coveted gemstones"
        backgroundImage={PreciousGemsHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="The Finest Ceylon Gems" 
            subtitle="HARRICO COLLECTION" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              Our precious gemstone collection represents the pinnacle of natural beauty. Sourced directly from 
              our own mines in Ceylon (Sri Lanka), each gem is carefully selected for its color, clarity, and 
              character by our expert gemologists.
            </p>
            <p className="text-gray-700">
              With complete control over our supply chain, we ensure that every Harrico gemstone meets our 
              exacting standards while adhering to ethical and sustainable practices throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Gemstones */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Featured Gemstones" 
            subtitle="HARRICO SIGNATURE" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {featuredGems.map((gem) => (
              <Link 
                key={gem.id}
                to={gem.link}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg mb-3 md:mb-4">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-2">{gem.name}</h3>
                <p className="text-gray-700 mb-3 text-sm">{gem.description}</p>
                <span className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center">
                  EXPLORE <span className="ml-1">›</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#b9a16b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* All Precious Gemstones Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Precious Gemstone Collection" 
            subtitle="EXPLORE ALL" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
            {preciousGemstones.map((gem) => (
              <Link 
                key={gem.id}
                to={gem.link}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 md:h-48 overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-serif mb-2">{gem.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-2">{gem.description}</p>
                  <span className="text-sm text-[#b9a16b] tracking-wider uppercase inline-flex items-center">
                    VIEW DETAILS <span className="ml-1">›</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Education Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <SectionTitle 
                title="Gemstone Education" 
                subtitle="KNOWLEDGE CENTER" 
                alignment="left"
              />
              
              <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                <p className="text-gray-700">
                  Understanding the unique characteristics and value factors of precious gemstones enhances 
                  your appreciation and helps you make informed decisions.
                </p>
                <p className="text-gray-700">
                  Our gemstone experts have created comprehensive guides on each type of precious gemstone, 
                  covering color, clarity, cut, carat weight, and origin considerations.
                </p>
                <Link
                  to="/education/gemstones"
                  className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300 mt-4"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-base md:text-lg font-serif mb-2 md:mb-3">Color Grading</h4>
                  <p className="text-sm text-gray-700">Learn how gemstone colors are evaluated and graded.</p>
                </div>
                <div className="bg-white p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-base md:text-lg font-serif mb-2 md:mb-3">Clarity Factors</h4>
                  <p className="text-sm text-gray-700">Understand inclusions and their impact on gem quality.</p>
                </div>
                <div className="bg-white p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-base md:text-lg font-serif mb-2 md:mb-3">Cut & Polish</h4>
                  <p className="text-sm text-gray-700">Discover how cutting affects a gemstone's brilliance and value.</p>
                </div>
                <div className="bg-white p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-base md:text-lg font-serif mb-2 md:mb-3">Origin Matters</h4>
                  <p className="text-sm text-gray-700">Why Ceylon gems are among the most prized in the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Jewelry CTA */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6">Create Your Dream Jewelry</h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-10">
            Select any of our exquisite gemstones and work with our design team to create 
            a custom piece that perfectly reflects your personal style. Custom designs 
            delivered within 3 weeks.
          </p>
          <Link 
            to="/collections/custom-designs" 
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 md:px-12 md:py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            START YOUR DESIGN
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PreciousGemstones;