// src/pages/gemstones/precious/Ruby.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/common/SectionTitle';
import GoldDivider from '../../../components/common/GoldDivider';
import AnimatedPageHeader from '../../../components/common/AnimatedPageHeader';
import RubyHeroImage from '../../../assets/images/collections/gems/blue-sapphire-hero.png';
// Import the gemstone data
import { gemstoneData, jewelryData } from '../../../data/mockdata';
import FeaturedJewelry from '../../../components/gemstones/FeaturedJewelry';
import CustomJewelryCTA from '../../../components/gemstones/CustomJewelryCTA';

const Ruby = () => {
  // Find the ruby data from the mockdata
  const rubyData = gemstoneData.preciousGemstones.find(gem => gem.id === 'ruby');

  // Properties and characteristics
  const characteristics = [
    {
      title: "Color",
      description: "Ceylon rubies are treasured for their raspberry to vivid red hues with subtle purple undertones, distinguishing them from rubies of other origins.",
      icon: "❤️"
    },
    {
      title: "Clarity",
      description: "Our ethically sourced rubies come directly from our mines in Sri Lanka, offering excellent transparency and a silky luster.",
      icon: "✨"
    },
    {
      title: "Durability",
      description: `With a hardness of ${rubyData?.properties.hardness || "9 on Mohs scale"}, rubies are among the most durable gemstones, ideal for everyday wear.`,
      icon: "💪"
    },
    {
      title: "Origin",
      description: `Our rubies are sourced directly from our own mines in ${rubyData?.properties.origin || "Sri Lanka (Ceylon)"}, ensuring authentic provenance and ethical practices.`,
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

  // Find jewelry with rubies - this is a simplified approach
  // In a real implementation, you might have more specific tagging in your data
  const featuredJewelry = [
    // Find items from gold jewelry
    ...jewelryData.goldJewelry.collections
      .flatMap(collection => collection.items)
      .filter(item => item.name.toLowerCase().includes('ruby') || item.description.toLowerCase().includes('ruby'))
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
      .filter(item => item.name.toLowerCase().includes('ruby') || item.description.toLowerCase().includes('ruby'))
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
        id: "ruby-ring-01",
        name: "Royal Ceylon Ruby Ring",
        description: "A stunning 1.8 carat oval ruby set in 18kt rose gold with diamond halo.",
        image: "/assets/images/collections/jewelry/ruby-ring.jpg",
        link: "/jewelry/gold/18kt-rose/ruby-ring"
      },
      {
        id: "ruby-necklace-01",
        name: "Ceylon Ruby Pendant",
        description: "Elegant 1.5 carat round ruby pendant in 18kt yellow gold with diamond accents.",
        image: "/assets/images/collections/jewelry/ruby-pendant.jpg",
        link: "/jewelry/gold/18kt-yellow/ruby-pendant"
      },
      {
        id: "ruby-earrings-01",
        name: "Classic Ruby Studs",
        description: "Timeless 1.6 carat total weight round ruby stud earrings in 18kt white gold.",
        image: "/assets/images/collections/jewelry/ruby-studs.jpg",
        link: "/jewelry/gold/18kt-white/ruby-studs"
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
        title="Ceylon Rubies" 
        subtitle="The vibrant red gemstone symbolizing passion, power, and prosperity"
        backgroundImage={RubyHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="The Heart of Ceylon" 
            subtitle="SIGNATURE GEMSTONE" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              {rubyData?.description || "Ceylon rubies are treasured for their raspberry to vivid red hues with subtle purple undertones. Our ethically sourced rubies come directly from our mines in Sri Lanka, offering excellent transparency and a silky luster that distinguishes them from rubies of other origins."}
            </p>
            <p className="text-gray-700">
              At Harrico, we specialize in sourcing the finest Ceylon rubies directly from our own 
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
            title="Ruby Characteristics" 
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
                    alt={`${shape.name} cut ruby`} 
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
              Our Ceylon rubies are available in a variety of cuts and shapes to suit your design 
              preferences. Each shape highlights different aspects of the ruby's color and brilliance. 
              Our gemologists can help you select the perfect cut for your jewelry design.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />
      
      {/* Featured Jewelry - using the shared component */}
      <FeaturedJewelry
        title="Ruby Jewelry"
        subtitle="FEATURED PIECES"
        items={emeraldJewelry}
        viewAllLink="/jewelry"
        viewAllText="VIEW ALL RUBY JEWELRY"
      />
            
      {/* Custom Jewelry CTA - using the shared component */}
      <CustomJewelryCTA
        title="Create Your Ruby Masterpiece"
        description="Design a custom ruby piece that perfectly reflects your style and personality. Our design team will work with you to select the perfect ruby and create a bespoke setting that showcases its verdant beauty. Custom designs delivered within 3 weeks."
      />
    </div>
  );
};

export default Ruby;