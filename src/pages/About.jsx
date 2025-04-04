// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import GoldDivider from '../components/common/GoldDivider';

// Import images
import HeroImage from '../assets/images/hero-bg.gif';
import CEOImage from '../assets/images/about/haris.gif'; 

const About = () => {
  // About page sections
  const aboutSections = [
    {
      id: 'history',
      title: 'History & Heritage',
      description: 'From our humble beginnings in Sri Lanka\'s gem trade in 1970 to our current standing as a diversified international conglomerate.',
      link: '/about/history',
      linkText: 'EXPLORE OUR HISTORY'
    },
    {
      id: 'story',
      title: 'Our Story',
      description: 'Harrico Group\'s journey has been guided by unwavering commitment to quality and authenticity across our jewelry, education, food, and beverage divisions.',
      link: '/about/story',
      linkText: 'READ OUR STORY'
    },
    {
      id: 'team',
      title: 'Our Team',
      description: 'Meet the dedicated professionals and artisans who bring our vision to life through exceptional craftsmanship and innovation.',
      link: '/about/team',
      linkText: 'MEET OUR TEAM'
    },
    {
      id: 'locations',
      title: 'Our Locations',
      description: 'Visit us at our flagship store in Kuala Lumpur, our Penang showroom, or our London office, where our experts await to assist you.',
      link: '/about/locations',
      linkText: 'FIND OUR LOCATIONS'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with direct image */}
      <div className="relative h-[50vh] bg-[#08081a]">
        {/* Image as separate element instead of background */}
        <img 
          src={HeroImage} 
          alt="Harrico hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => {
            console.error('Failed to load hero image');
            // Keep the background color as fallback
            e.target.style.display = 'none';
          }}
        />
        
        {/* Content overlay */}
        <div className="relative h-full z-10 flex items-center justify-center">
          <div className="container text-white text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">About Harrico</h1>
            <p className="max-w-2xl mx-auto">
              A legacy of excellence in Ceylon gemstones and fine jewelry since 1970
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Message from CEO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#b9a16b]">
                <img 
                  src={CEOImage} 
                  alt="Haris Yusuf - CEO & Managing Director" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    // Fallback to a solid background if image fails
                    e.target.parentNode.style.backgroundColor = '#08081a';
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-serif mb-6">Welcome Message</h2>
              <h3 className="font-serif text-xl mb-4">Haris Yusuf</h3>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">CEO & Managing Director</p>
              
              <div className="space-y-4 text-gray-700">
                <p>Dear Valued Partners,</p>
                <p>
                  I am pleased to present Harrico Group's vision and commitment to excellence.
                </p>
                <p>
                  From our humble beginnings in Sri Lanka's gem trade in 1970 to our 
                  current standing as a diversified international conglomerate, our 
                  journey has been guided by unwavering commitment to quality and authenticity.
                </p>
                <p>
                  Today, across our jewelry, education, food, and beverage divisions, 
                  we continue to honor our heritage while embracing innovation. Our 
                  vertically integrated approach ensures exceptional value for our 
                  customers and partners worldwide.
                </p>
                <p>
                  We look forward to potential collaborations as we continue our growth journey.
                </p>
                <p>Sincerely,</p>
                <p className="font-serif italic">Mohamed Haris Yusuf</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Vision & Mission" 
            subtitle="" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-6">Our Vision</h3>
              <div className="w-12 h-1 bg-[#b9a16b] mx-auto mb-6"></div>
              <p className="text-gray-700">
                To be a globally recognized leader in our core industries, 
                delivering exceptional quality and value while honoring our 
                heritage and embracing sustainable innovation.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-6">Our Mission</h3>
              <div className="w-12 h-1 bg-[#b9a16b] mx-auto mb-6"></div>
              <p className="text-gray-700">
                To deliver exceptional quality across our diverse business 
                divisions while honoring our heritage, embracing innovation, 
                and creating sustainable value for our customers, communities, 
                and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />
      
      {/* Explore About Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Discover More About Harrico" 
            subtitle="" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {aboutSections.map((section) => (
              <div key={section.id} className="border border-gray-200 p-8 hover:border-[#b9a16b] transition-colors duration-300">
                <h3 className="text-2xl font-serif mb-4">{section.title}</h3>
                <p className="text-gray-700 mb-6">{section.description}</p>
                <Link 
                  to={section.link} 
                  className="inline-block text-[#b9a16b] text-sm tracking-wider uppercase relative group"
                >
                  {section.linkText} <span className="ml-1">›</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#b9a16b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;