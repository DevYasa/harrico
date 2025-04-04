// src/pages/collections/PreciousGemstones.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import PreciousGemsHeroImage from '../../assets/images/collections/precious-gems-hero.jpg'; // Add this image

const PreciousGemstones = () => {
  // Precious gemstones data
  const preciousGemstones = [
    {
      id: 'blue-sapphire',
      name: 'Blue Sapphire',
      description: 'The iconic deep blue sapphire from Ceylon, known for its exceptional color and clarity.',
      image: '/assets/images/collections/gems/blue-sapphire.jpg', // Add this image
      link: '/collections/precious-gemstones/blue-sapphire'
    },
    {
      id: 'emerald',
      name: 'Emerald',
      description: 'Vibrant green emeralds with rich color and distinctive inclusions that add character.',
      image: '/assets/images/collections/gems/emerald.jpg', // Add this image
      link: '/collections/precious-gemstones/emerald'
    },
    {
      id: 'yellow-sapphire',
      name: 'Yellow Sapphire',
      description: 'Brilliant yellow sapphires ranging from light lemon to deep golden hues.',
      image: '/assets/images/collections/gems/yellow-sapphire.jpg', // Add this image
      link: '/collections/precious-gemstones/yellow-sapphire'
    },
    {
      id: 'white-sapphire',
      name: 'White Sapphire',
      description: 'Colorless sapphires with exceptional brilliance, a natural alternative to diamonds.',
      image: '/assets/images/collections/gems/white-sapphire.jpg', // Add this image
      link: '/collections/precious-gemstones/white-sapphire'
    },
    {
      id: 'pink-sapphire',
      name: 'Pink Sapphire',
      description: 'Delicate to vivid pink sapphires that exude femininity and elegance.',
      image: '/assets/images/collections/gems/pink-sapphire.jpg', // Add this image
      link: '/collections/precious-gemstones/pink-sapphire'
    },
    {
      id: 'cats-eye',
      name: 'Cat\'s Eye',
      description: 'Chrysoberyl with a distinctive band of light that resembles a feline eye.',
      image: '/assets/images/collections/gems/cats-eye.jpg', // Add this image
      link: '/collections/precious-gemstones/cats-eye'
    },
    {
      id: 'diamonds',
      name: 'Diamonds',
      description: 'The timeless classic, featuring exceptional cut, clarity, and brilliance.',
      image: '/assets/images/collections/gems/diamonds.jpg', // Add this image
      link: '/collections/precious-gemstones/diamonds'
    },
    {
      id: 'ruby',
      name: 'Ruby',
      description: 'Fiery red gemstones symbolizing passion and commanding the highest prices of colored gems.',
      image: '/assets/images/collections/gems/ruby.jpg', // Add this image
      link: '/collections/precious-gemstones/ruby'
    },
    {
      id: 'padparadscha',
      name: 'Padparadscha',
      description: 'The rarest sapphire variety with a unique pinkish-orange hue reminiscent of lotus flowers.',
      image: '/assets/images/collections/gems/padparadscha.jpg', // Add this image
      link: '/collections/precious-gemstones/padparadscha'
    },
    {
      id: 'alexandrite',
      name: 'Alexandrite',
      description: 'Phenomenal gem that changes color from green in daylight to red in incandescent light.',
      image: '/assets/images/collections/gems/alexandrite.jpg', // Add this image
      link: '/collections/precious-gemstones/alexandrite'
    },
    {
      id: 'color-change-sapphire',
      name: 'Color Change Sapphire',
      description: 'Rare sapphires that display different colors under different lighting conditions.',
      image: '/assets/images/collections/gems/color-change-sapphire.jpg', // Add this image
      link: '/collections/precious-gemstones/color-change-sapphire'
    },
    {
      id: 'teal-sapphire',
      name: 'Teal Sapphire',
      description: 'Unique sapphires with a captivating blue-green color that bridges blue and green gems.',
      image: '/assets/images/collections/gems/teal-sapphire.jpg', // Add this image
      link: '/collections/precious-gemstones/teal-sapphire'
    },
    {
      id: 'spinel',
      name: 'Spinel',
      description: 'Brilliantly colored gems often mistaken for ruby or sapphire with excellent clarity.',
      image: '/assets/images/collections/gems/spinel.jpg', // Add this image
      link: '/collections/precious-gemstones/spinel'
    }
  ];

  // Featured gemstones (could be your best sellers or most distinctive gems)
  const featuredGems = preciousGemstones.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${PreciousGemsHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Precious Gemstones</h1>
          <p className="max-w-2xl mx-auto">
            Discover our exceptional collection of the world's most coveted gemstones
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="The Finest Ceylon Gems" 
            subtitle="HARRICO COLLECTION" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-6">
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
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Featured Gemstones" 
            subtitle="HARRICO SIGNATURE" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredGems.map((gem) => (
              <Link 
                key={gem.id}
                to={gem.link}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg mb-4">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{gem.name}</h3>
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Our Precious Gemstone Collection" 
            subtitle="EXPLORE ALL" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {preciousGemstones.map((gem) => (
              <Link 
                key={gem.id}
                to={gem.link}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{gem.name}</h3>
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
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionTitle 
                title="Gemstone Education" 
                subtitle="KNOWLEDGE CENTER" 
                alignment="left"
              />
              
              <div className="mt-8 space-y-6">
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
                  className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300 mt-4"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Color Grading</h4>
                  <p className="text-sm text-gray-700">Learn how gemstone colors are evaluated and graded.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Clarity Factors</h4>
                  <p className="text-sm text-gray-700">Understand inclusions and their impact on gem quality.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Cut & Polish</h4>
                  <p className="text-sm text-gray-700">Discover how cutting affects a gemstone's brilliance and value.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Origin Matters</h4>
                  <p className="text-sm text-gray-700">Why Ceylon gems are among the most prized in the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Jewelry CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Create Your Dream Jewelry</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Select any of our exquisite gemstones and work with our design team to create 
            a custom piece that perfectly reflects your personal style. Custom designs 
            delivered within 3 weeks.
          </p>
          <Link 
            to="/collections/custom-designs" 
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            START YOUR DESIGN
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PreciousGemstones;