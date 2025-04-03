// src/components/home/EnhancedTestimonials.jsx
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "The sapphire ring I purchased from Harrico is simply stunning. The color and brilliance are unmatched, and the craftsmanship is exceptional.",
    author: "Sarah Chen",
    title: "Kuala Lumpur",
    image: "https://via.placeholder.com/80"
  },
  {
    quote: "I've been collecting gemstones for over 20 years, and Harrico's Ceylon gems are among the finest I've ever seen. Their attention to quality and authenticity is remarkable.",
    author: "James Wilson",
    title: "Singapore",
    image: "https://via.placeholder.com/80"
  },
  {
    quote: "The bespoke necklace Harrico created for my wedding was beyond my expectations. The design process was seamless, and the result was a masterpiece that I'll cherish forever.",
    author: "Priya Sharma",
    title: "London",
    image: "https://via.placeholder.com/80"
  }
];

const EnhancedTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      
      return () => clearTimeout(timer);
    }
  }, [currentTestimonial, isPaused]);
  
  const nextTestimonial = () => {
    setIsPaused(true);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsPaused(false), 6000);
  };
  
  const prevTestimonial = () => {
    setIsPaused(true);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsPaused(false), 6000);
  };
  
  const selectTestimonial = (index) => {
    setIsPaused(true);
    setCurrentTestimonial(index);
    setTimeout(() => setIsPaused(false), 6000);
  };

  return (
    <section className="py-28 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-800 tracking-[0.5em] text-sm mb-4 font-medium">TESTIMONIALS</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-amber-900">Client Experiences</h2>
          <div className="flex justify-center items-center mb-10">
            <div className="w-16 h-px bg-amber-300"></div>
            <div className="w-4 h-4 mx-3 rounded-full border-2 border-amber-400 bg-amber-200"></div>
            <div className="w-16 h-px bg-amber-300"></div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Large decorative quote marks */}
          <div className="absolute -top-16 left-0 text-amber-200 opacity-60 text-9xl font-serif">"</div>
          <div className="absolute -bottom-16 right-0 text-amber-200 opacity-60 text-9xl font-serif">"</div>
          
          {/* Testimonial content */}
          <div className="bg-white shadow-xl px-8 py-12 md:p-16 rounded-sm relative z-10 border border-amber-100">
            <div className="relative overflow-hidden h-64">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 flex flex-col items-center justify-center ${
                    index === currentTestimonial 
                      ? 'opacity-100 transform-none'
                      : index < currentTestimonial
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <blockquote>
                    <p className="text-xl md:text-2xl text-gray-700 font-light italic mb-8 text-center font-subheading leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  
                  <div className="mt-6 flex flex-col items-center">
                    <div className="w-20 h-px bg-amber-400 mb-6"></div>
                    <p className="font-medium text-amber-900 text-lg">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 -ml-6 rounded-full bg-white shadow-lg flex items-center justify-center text-amber-800 hover:bg-amber-800 hover:text-white transition-colors duration-300 border border-amber-100"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 -mr-6 rounded-full bg-white shadow-lg flex items-center justify-center text-amber-800 hover:bg-amber-800 hover:text-white transition-colors duration-300 border border-amber-100"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-10 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => selectTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-amber-500 w-10' 
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;