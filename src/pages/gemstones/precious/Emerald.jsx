// src/pages/gemstones/precious/Emerald.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/common/SectionTitle';
import GoldDivider from '../../../components/common/GoldDivider';
import AnimatedPageHeader from '../../../components/common/AnimatedPageHeader';
import EmeraldHeroImage from '../../../assets/images/collections/gems/emerald-hero.jpg';
// Import the gemstone data
import { gemstoneData, jewelryData } from '../../../data/mockdata';
// Import shared components
import FeaturedJewelry from '../../../components/gemstones/FeaturedJewelry';
import CustomJewelryCTA from '../../../components/gemstones/CustomJewelryCTA';

const Emerald = () => {
  // Find the emerald data from the mockdata
  const emeraldData = gemstoneData.preciousGemstones.find(gem => gem.id === 'emerald');

  // Properties and characteristics
  const characteristics = [
    {
      title: "Color",
      description: "Ceylon emeralds display a unique bluish-green color with excellent transparency. They have a distinctive color profile that sets them apart from emeralds of other origins.",
      icon: "💚"
    },
    {
      title: "Clarity",
      description: "Our emeralds are selected for their exceptional clarity, though natural inclusions (or 'jardin') are part of the emerald's character and identity.",
      icon: "✨"
    },
    {
      title: "Durability",
      description: `With a hardness of ${emeraldData?.properties.hardness || "7.5-8 on Mohs scale"}, emeralds are durable but require more careful handling than sapphires or rubies.`,
      icon: "💪"
    },
    {
      title: "Origin",
      description: `Our emeralds are sourced directly from our own mines in ${emeraldData?.properties.origin || "Sri Lanka (Ceylon)"}, ensuring authentic provenance and ethical practices.`,
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

  // Find jewelry with emeralds
  const emeraldJewelry = [
    // Find items from gold jewelry
    ...jewelryData.goldJewelry.collections
      .flatMap(collection => collection.items)
      .filter(item => item.name.toLowerCase().includes('emerald') || item.description.toLowerCase().includes('emerald'))
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
      .filter(item => item.name.toLowerCase().includes('emerald') || item.description.toLowerCase().includes('emerald'))
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
  if (emeraldJewelry.length < 3) {
    const fallbackJewelry = [
      {
        id: "emerald-ring-01",
        name: "Ceylon Emerald Ring",
        description: "A stunning 1.5 carat emerald-cut emerald set in 18kt yellow gold with diamond accents.",
        image: "/assets/images/collections/jewelry/emerald-ring.jpg",
        link: "/jewelry/gold/18kt-yellow/emerald-ring"
      },
      {
        id: "emerald-necklace-01",
        name: "Ceylon Emerald Pendant",
        description: "Elegant 1.2 carat emerald pendant in platinum with diamond halo.",
        image: "/assets/images/collections/jewelry/emerald-pendant.jpg",
        link: "/jewelry/platinum/emerald-pendant"
      },
      {
        id: "emerald-earrings-01",
        name: "Classic Emerald Studs",
        description: "Timeless 1.4 carat total weight emerald stud earrings in 18kt white gold.",
        image: "/assets/images/collections/jewelry/emerald-studs.jpg",
        link: "/jewelry/gold/18kt-white/emerald-studs"
      }
    ];

    // Fill in any missing items
    for (let i = emeraldJewelry.length; i < 3; i++) {
      emeraldJewelry.push(fallbackJewelry[i]);
    }
  }

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Ceylon Emeralds" 
        subtitle="The mesmerizing green gemstone symbolizing renewal, growth, and prosperity"
        backgroundImage={EmeraldHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Nature's Perfect Green" 
            subtitle="SIGNATURE GEMSTONE" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              {emeraldData?.description || "Our Ceylon emeralds display a unique bluish-green color with excellent transparency. While less common than Sri Lankan sapphires and rubies, these emeralds are highly sought after by collectors for their distinctive color profile and clarity."}
            </p>
            <p className="text-gray-700">
              At Harrico, we specialize in sourcing the finest Ceylon emeralds directly from our own 
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
            title="Emerald Characteristics" 
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
                    alt={`${shape.name} cut emerald`} 
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
              Our Ceylon emeralds are available in a variety of cuts and shapes to suit your design 
              preferences. The emerald cut was specifically developed to showcase the beauty of this gemstone, 
              but other shapes can highlight different aspects of the emerald's color and clarity.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Featured Jewelry - using the shared component */}
      <FeaturedJewelry
        title="Emerald Jewelry"
        subtitle="FEATURED PIECES"
        items={emeraldJewelry}
        viewAllLink="/jewelry"
        viewAllText="VIEW ALL EMERALD JEWELRY"
      />

      {/* Custom Jewelry CTA - using the shared component */}
      <CustomJewelryCTA
        title="Create Your Emerald Masterpiece"
        description="Design a custom emerald piece that perfectly reflects your style and personality. Our design team will work with you to select the perfect emerald and create a bespoke setting that showcases its verdant beauty. Custom designs delivered within 3 weeks."
      />
    </div>
  );
};

export default Emerald;