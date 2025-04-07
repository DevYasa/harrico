// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import GoldDivider from '../components/common/GoldDivider';

// Import data
import { aboutData, companyInfo } from '../data/mockdata';

// Import images
import HeroImage from '../assets/images/about/bg11.jpeg';
import CEOImage from '../assets/images/about/haris.gif'; 

const About = () => {
  const { introduction, ceoMessage, sections } = aboutData;

  return (
    <div className="bg-white">
      {/* Simple Image Header */}
      <div className="w-full h-96 relative">
        <img 
          src={HeroImage} 
          alt="Harrico About" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Company Introduction - Brief Version */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="About Our Company" 
            subtitle="" 
            alignment="center"
            maxWidth="3xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8">
            <p className="text-gray-700 mb-4 md:mb-6">
              Incorporated on the 19th of March 2008 from a family generation based experience on Gems & Jewelleries 
              back in Sri Lanka since 1970, Harrico Ceylon Gems And Jewelry Hub Malaysia SDN BHD has grown into a 
              formidable entity today.
            </p>
            
            <div className="bg-[#f8da85] p-6 my-6">
              <p className="text-gray-800 font-medium">
                Since its incorporation, Harrico Ceylon Gems And Jewelry Hub Malaysia SDN BHD has maintained a record of not 
                only timely completion but also of quality works. Our objective is reflected in the company culture of encouraging 
                excellence through proper planning, quality & attention to detail.
              </p>
            </div>
            
            <p className="text-gray-700">
            Harrico Ceylon Gems And Jewelry Hub Malaysia SDN BHD owns their own Gem mines in Sri Lanka where our director is 
              originated & where Gemstones are popular. Most of our Gemstones are from our own mines where we guarantee the 
              quality & the original.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Welcome Message from CEO */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#b9a16b]">
                <img 
                  src={CEOImage} 
                  alt={`${ceoMessage.name} - ${ceoMessage.title}`} 
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
              <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">Welcome Message</h2>
              <h3 className="font-serif text-lg md:text-xl mb-3 md:mb-4">{ceoMessage.name}</h3>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 md:mb-6">{ceoMessage.title}</p>
              
              <div className="space-y-3 md:space-y-4 text-gray-700">
                <p>Dear Valued Partners,</p>
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
                <p>Sincerely,</p>
                <p className="font-serif italic">Mohamed Haris Yusuf</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />
      
      {/* Explore About Sections */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Discover More About Harrico" 
            subtitle="" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 p-6 md:p-8 hover:border-[#b9a16b] transition-colors duration-500">
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">{section.title}</h3>
                <p className="text-gray-700 mb-4 md:mb-6">{section.description}</p>
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