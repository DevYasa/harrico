// src/components/about/MobileTimeline.jsx
import React, { useState } from 'react';

const MobileTimeline = ({ events }) => {
  const [activeYear, setActiveYear] = useState(events[0].year);

  // Find the active event
  const activeEvent = events.find(event => event.year === activeYear);

  return (
    <div className="w-full">
      {/* Navigation - Years */}
      <div className="mb-8 overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
        <div className="flex items-center justify-center space-x-4 md:space-x-8 min-w-max mx-auto">
          {events.map((event) => (
            <button
              key={event.year}
              className={`text-lg md:text-xl transition-all duration-300 ${
                activeYear === event.year 
                ? 'text-[#b9a16b] font-bold scale-110' 
                : 'text-gray-500'
              }`}
              onClick={() => setActiveYear(event.year)}
            >
              {event.year}
            </button>
          ))}
        </div>
      </div>

      {/* Active year in large format */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-serif text-[#b9a16b]">{activeYear}</h2>
      </div>

      {/* Event content */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif mb-4">{activeEvent.title}</h3>
        <p className="text-gray-700 max-w-lg mx-auto">
          {activeEvent.description}
        </p>
      </div>

      {/* Visual timeline indicator */}
      <div className="relative w-full flex items-center justify-center my-8">
        {/* Timeline line */}
        <div className="absolute w-full h-px bg-gray-300"></div>
        
        {/* Active point */}
        <div className="relative z-10">
          <div className="w-16 h-16 bg-[#08081a] rounded-full border-4 border-[#b9a16b] flex items-center justify-center">
            <span className="text-white text-lg font-bold">{activeYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTimeline;