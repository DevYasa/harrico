// src/components/about/TimelineComponent.jsx
import React, { useState, useRef, useEffect } from 'react';

const TimelineComponent = ({ events }) => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const scrollRef = useRef(null);

  // The active event
  const activeEvent = events[activeYearIndex];
  
  // Set active year and scroll to it
  const setActiveYear = (index) => {
    setActiveYearIndex(index);
    
    // Scroll the year into view if we have a ref
    if (scrollRef.current) {
      const yearElements = scrollRef.current.querySelectorAll('.year-item');
      if (yearElements[index]) {
        const container = scrollRef.current;
        const element = yearElements[index];
        
        // Calculate scroll position to center the element
        const containerWidth = container.offsetWidth;
        const elementWidth = element.offsetWidth;
        const elementLeft = element.offsetLeft;
        const scrollPosition = elementLeft - (containerWidth / 2) + (elementWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  
  // Previous and next handlers
  const handlePrevious = () => {
    if (activeYearIndex > 0) {
      setActiveYear(activeYearIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (activeYearIndex < events.length - 1) {
      setActiveYear(activeYearIndex + 1);
    }
  };

  // Prevent body scrolling when scrolling the years horizontally
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current && scrollRef.current.contains(e.target)) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          scrollRef.current.scrollLeft += e.deltaY;
        }
      }
    };
    
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Years scrollable row */}
      <div 
        ref={scrollRef}
        className="mb-6 overflow-x-auto whitespace-nowrap py-4 flex items-center scrollbar-hide px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.map((event, index) => (
          <button
            key={event.year}
            className={`year-item px-4 md:px-6 text-base md:text-lg transition-all duration-300 ${
              index === activeYearIndex 
                ? 'text-[#b9a16b] font-medium scale-110' 
                : 'text-gray-500'
            }`}
            onClick={() => setActiveYear(index)}
          >
            {event.year}
          </button>
        ))}
      </div>

      {/* Active year in large format */}
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-3xl md:text-4xl font-serif text-[#b9a16b]">{activeEvent.year}</h2>
      </div>

      {/* Event title and description */}
      <div className="text-center mb-6 md:mb-8 px-4">
        <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">{activeEvent.title}</h3>
        <p className="text-gray-700 max-w-lg mx-auto">
          {activeEvent.description}
        </p>
      </div>

      {/* Timeline vertical presentation */}
      <div className="w-full relative mt-8 md:mt-12 px-4 md:px-6">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#b9a16b]"></div>
        
        {/* Current event marker */}
        <div className="relative flex justify-center mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#08081a] flex items-center justify-center border-2 border-[#b9a16b] z-10">
            <span className="text-white text-xs md:text-sm font-bold">{activeEvent.year}</span>
          </div>
        </div>
        
        {/* Previous/Next navigation */}
        <div className="flex justify-between mt-6 md:mt-8">
          <button 
            onClick={handlePrevious} 
            className={`px-3 py-2 flex items-center text-xs md:text-sm ${
              activeYearIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[#b9a16b]'
            }`}
            disabled={activeYearIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            PREVIOUS
          </button>
          
          <button 
            onClick={handleNext} 
            className={`px-3 py-2 flex items-center text-xs md:text-sm ${
              activeYearIndex === events.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#b9a16b]'
            }`}
            disabled={activeYearIndex === events.length - 1}
          >
            NEXT
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;