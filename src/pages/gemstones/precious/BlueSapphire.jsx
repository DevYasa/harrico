// src/pages/gemstones/precious/BlueSapphire.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/common/SectionTitle';
import GoldDivider from '../../../components/common/GoldDivider';
import AnimatedPageHeader from '../../../components/common/AnimatedPageHeader';
import BlueSapphireHeroImage from '../../../assets/images/collections/gems/blue-sapphire-hero.png';
// Import the gemstone data
import { gemstoneData, jewelryData } from '../../../data/mockdata';
import FeaturedJewelry from '../../../components/gemstones/FeaturedJewelry';
import CustomJewelryCTA from '../../../components/gemstones/CustomJewelryCTA';

const BlueSapphire = () => {
  // Find the blue sapphire data from the mockdata
  const blueSapphireData = gemstoneData.preciousGemstones.find(gem => gem.id === 'blue-sapphire');

  // Properties and characteristics
  const characteristics = [
    {
      title: "Color",
      description: "The most valued sapphires have a vivid, intense blue color. Our Ceylon sapphires are known for their medium to deep blue with a distinctive cornflower blue shade.",
      icon: "💙"
    },
    {
      title: "Clarity",
      description: "Ceylon sapphires typically have excellent clarity with few inclusions visible to the naked eye. Slight inclusions may be present but don't impact the gem's beauty.",
      icon: "✨"
    },
    {
      title: "Durability",
      description: `With a hardness of ${blueSapphireData.properties.hardness}, sapphires are extremely durable and perfect for everyday wear in rings and other jewelry.`,
      icon: "💪"
    },
    {
      title: "Origin",
      description: `Our sapphires are sourced directly from our own mines in ${blueSapphireData.properties.origin}, ensuring authentic origin and ethical sourcing.`,
      icon: "🌏"
    }
  ];

  // Available shapes
  const shapes = [
    { name: "Round", image: "/assets/images/collections/gems/shapes/round.jpg" },
    { name: "Oval", image: "/assets/images/collections/gems/shapes/oval.jpg" },
    { name: "Cushion", image: "/assets/images/collections/gems/shapes/cushion.jpg" },
    { name: "Emerald Cut", image: "/assets/images/collections/gems/shapes/emerald.jpg" },
    { name: "Pear", image: "/assets/images/collections/gems/shapes/pear.jpg" },
    { name: "Princess", image: "/assets/images/collections/gems/shapes/princess.jpg" }
  ];

  // Find jewelry with blue sapphires - this is a simplified approach
  // In a real implementation, you might have more specific tagging in your data
  const featuredJewelry = [
    // Find items from gold jewelry
    ...jewelryData.goldJewelry.collections
      .flatMap(collection => collection.items)
      .filter(item => item.name.toLowerCase().includes('sapphire') || item.description.toLowerCase().includes('sapphire'))
      .slice(0, 1)
      .map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image,
        link: `/jewelry/gold/${item.id}`
      })),
    
    // Find items from platinum jewelry 
    ...jewelryData.platinumJewelry.collections
      .flatMap(collection => collection.items)
      .filter(item => item.name.toLowerCase().includes('sapphire') || item.description.toLowerCase().includes('sapphire'))
      .slice(0, 2)
      .map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image,
        link: `/jewelry/platinum/${item.id}`
      }))
  ];

  // If we don't have enough jewelry items, use hardcoded fallbacks
  if (featuredJewelry.length < 3) {
    const fallbackJewelry = [
      {
        id: "bs-ring-01",
        name: "Royal Ceylon Sapphire Ring",
        description: "A stunning 2.5 carat oval blue sapphire set in 18kt white gold with diamond halo.",
        image: "/assets/images/collections/jewelry/sapphire-ring.jpg",
        link: "/jewelry/gold/18kt-white/sapphire-ring"
      },
      {
        id: "bs-necklace-01",
        name: "Ceylon Sapphire Pendant",
        description: "Elegant 1.8 carat round sapphire pendant in 18kt yellow gold with diamond accents.",
        image: "/assets/images/collections/jewelry/sapphire-pendant.jpg",
        link: "/jewelry/gold/18kt-yellow/sapphire-pendant"
      },
      {
        id: "bs-earrings-01",
        name: "Classic Sapphire Studs",
        description: "Timeless 2.0 carat total weight round sapphire stud earrings in 18kt white gold.",
        image: "/assets/images/collections/jewelry/sapphire-studs.jpg",
        link: "/jewelry/gold/18kt-white/sapphire-studs"
      }
    ];

    // Fill in any missing items
    for (let i = featuredJewelry.length; i < 3; i++) {
      featuredJewelry.push(fallbackJewelry[i]);
    }
  }

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Ceylon Blue Sapphires" 
        subtitle="The iconic deep blue gemstone that has captivated royalty and gem connoisseurs for centuries"
        backgroundImage={BlueSapphireHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="The Crown Jewel of Ceylon" 
            subtitle="SIGNATURE GEMSTONE" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              {blueSapphireData.description}
            </p>
            <p className="text-gray-700">
              At Harrico, we specialize in sourcing the finest Ceylon blue sapphires directly from our own 
              mines, ensuring unmatched quality, ethical sourcing, and authentic provenance for each gem 
              in our collection.
            </p>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Blue Sapphire Characteristics" 
            subtitle="QUALITY FACTORS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
            {characteristics.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-md flex"
              >
                <div className="text-4xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Available Shapes */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Available Cuts & Shapes" 
            subtitle="STYLE OPTIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-8 md:mt-12">
            {shapes.map((shape, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md text-center"
              >
                <div className="h-24 md:h-28 overflow-hidden">
                  <img 
                    src={shape.image} 
                    alt={`${shape.name} cut sapphire`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-3 px-2">
                  <h3 className="text-sm font-medium">{shape.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 text-sm">
              Our Ceylon blue sapphires are available in a variety of cuts and shapes to suit your design 
              preferences. Each shape highlights different aspects of the sapphire's color and brilliance. 
              Our gemologists can help you select the perfect cut for your jewelry design.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />
      
      {/* Featured Jewelry - using the shared component */}
      <FeaturedJewelry
        title="Blue Sapphire Jewelry"
        subtitle="FEATURED PIECES"
        items={emeraldJewelry}
        viewAllLink="/jewelry"
        viewAllText="VIEW ALL BLUE SAPPHIRE JEWELRY"
      />
            
      {/* Custom Jewelry CTA - using the shared component */}
      <CustomJewelryCTA
        title="Create Your Blue Sapphire Masterpiece"
        description="Design a custom blue sapphire piece that perfectly reflects your style and personality.Our design team will work with you to select the perfect sapphire and create a bespoke setting that showcases its beauty. Custom designs delivered within 3 weeks."
      />
    </div>
  );
};

export default BlueSapphire;