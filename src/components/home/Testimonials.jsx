// src/components/home/Testimonials.jsx
import React, { useState } from 'react';

const testimonials = [
  {
    quote: "The sapphire ring I purchased from Harrico is simply stunning. The color and brilliance are unmatched, and the craftsmanship is exceptional.",
    author: "Sarah Chen",
    title: "Kuala Lumpur"
  },
  {
    quote: "I've been collecting gemstones for over 20 years, and Harrico's Ceylon gems are among the finest I've ever seen. Their attention to quality and authenticity is remarkable.",
    author: "James Wilson",
    title: "Singapore"
  },
  {
    quote: "The bespoke necklace Harrico created for my wedding was beyond my expectations. The design process was seamless, and the result was a masterpiece that I'll cherish forever.",
    author: "Priya Sharma",
    title: "London"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-800 tracking-[0.3em] text-sm mb-3">TESTIMONIALS</p>
          <h2 className="font-heading text-4xl mb-8">Client Experiences</h2>
          <div className="w-24 h-px bg-amber-800 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl text-gray-700 font-light italic mb-8 font-subheading">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <div className="w-16 h-px bg-amber-800 mx-auto mb-4"></div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
            
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-amber-800 hover:bg-amber-800 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-amber-800 hover:bg-amber-800 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-amber-800' : 'bg-amber-300'
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

export default Testimonials;