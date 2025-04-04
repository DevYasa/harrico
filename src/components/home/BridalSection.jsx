// src/components/home/BridalSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BridalGuideImage from '../../assets/images/home/mobile/mbg9.gif'; 
import EngagementRingImage from '../../assets/images/home/mobile/mbg8.gif';
import WeddingRingImage from '../../assets/images/home/mobile/mbg7.gif';

const BridalSection = () => {
  const bridalCategories = [
    {
      id: 'bridal-guide',
      title: 'The Harrico Bridal Guide',
      description: 'Discover the exacting standards that make a Harrico gem one of the most rare, valuable and beautiful in the world.',
      image: BridalGuideImage,
      link: '/bridal/guide'
    },
    {
      id: 'engagement-rings',
      title: 'Engagement Rings',
      description: 'Mark your once-in-a-lifetime moment with a Harrico Ceylon gem engagement ring, the rarest symbol of true love.',
      image: EngagementRingImage,
      link: '/collections/engagement'
    },
    {
      id: 'wedding-rings',
      title: 'Wedding Rings',
      description: 'Celebrate forever together with a Harrico diamond wedding ring, a sparkling reminder of your great love story.',
      image: WeddingRingImage,
      link: '/collections/wedding-bands'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Harrico Bridal</h2>
        
        {/* Divider line */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
        
        <p className="text-base text-gray-700 mb-10 max-w-3xl mx-auto">
          For the promise of a lifetime, Harrico offers the ultimate engagement and wedding rings, 
          handcrafted using the rarest and most exceptional Ceylon gems in the world. 
          Fall brilliantly in love with the House's unparalleled bridal jewelry offering.
        </p>
        
        {/* Bridal categories - Three columns with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {bridalCategories.map(category => (
            <div key={category.id} className="flex flex-col items-center">
              <Link to={category.link} className="block mb-8">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-auto"
                />
              </Link>
              <h3 className="text-2xl font-serif mb-4">{category.title}</h3>
              <p className="text-sm text-gray-600 mb-6">
                {category.description}
              </p>
              <Link 
                to={category.link} 
                className="text-sm text-[#b9a16b] tracking-wider uppercase relative group"
              >
                EXPLORE <span className="ml-2">›</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#b9a16b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BridalSection;