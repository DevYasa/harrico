// src/pages/about/History.jsx
import React, { useState, useEffect } from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import TimelineComponent from '../../components/about/TimelineComponent';

// Import data
import { historyData } from '../../data/mockdata';

// Import hero image
import HistoryHeroImage from '../../assets/images/about/bg12.jpg';

const History = () => {
  // State to track if we're in mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { introduction, timelineEvents, heritageValues } = historyData;

  return (
    <div className="bg-white">
      {/* Simple Image Header */}
      <div className="w-full h-96 relative">
        <img 
          src={HistoryHeroImage} 
          alt="Harrico History" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Our History Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title={introduction.title} 
            subtitle={introduction.subtitle} 
            alignment="center"
            maxWidth="3xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8">
            {introduction.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 md:mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Timeline Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Journey Through Time" 
            subtitle="HARRICO TIMELINE" 
            alignment="center"
            maxWidth="2xl"
          />
          
          {/* Mobile Timeline */}
          {isMobile && (
            <div className="mt-8">
              <TimelineComponent events={timelineEvents} />
            </div>
          )}
          
          {/* Desktop Timeline */}
          {!isMobile && (
            <div className="relative mt-16">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#b9a16b]"></div>
              
              {/* Timeline events */}
              <div className="relative z-10">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center mb-16 last:mb-0 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content box - alternating sides */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div 
                        className={`inline-block transition-transform duration-500 hover:scale-105 
                        ${index % 2 === 0 ? 'origin-right' : 'origin-left'}`}
                      >
                        <h3 className="text-xl md:text-2xl font-serif mb-2">{event.title}</h3>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Center marker with year */}
                    <div className="w-2/12 flex justify-center relative">
                      <div className="w-12 h-12 rounded-full bg-[#08081a] flex items-center justify-center border-4 border-[#b9a16b]">
                        <span className="text-white text-sm font-bold">{event.year}</span>
                      </div>
                    </div>
                    
                    {/* Empty space on opposite side */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <GoldDivider />

      {/* Heritage Values Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Heritage Values" 
            subtitle="TIMELESS PRINCIPLES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {heritageValues.map((value, index) => (
              <div key={index} className="text-center p-6 md:p-8 border border-transparent hover:border-[#b9a16b] transition-colors duration-500">
                <div className="w-16 h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  {value.icon === "excellence" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 md:w-12 h-10 md:h-12 text-[#b9a16b]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  )}
                  {value.icon === "heritage" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 md:w-12 h-10 md:h-12 text-[#b9a16b]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.83 2.83m-2.83-2.83a48.454 48.454 0 00-7.86 0L5.25 7.8m13.5-2.82L12 21.75 5.25 7.8m13.5-2.82A49.18 49.18 0 0115.75 8m-7.5-5.82A49.18 49.18 0 018.25 8m5.5-5.82a48.394 48.394 0 00-5.5 0m5.5 0a48.394 48.394 0 010 5.82m0-5.82v5.82" />
                    </svg>
                  )}
                  {value.icon === "integrity" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 md:w-12 h-10 md:h-12 text-[#b9a16b]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-3 md:mb-4">{value.title}</h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;