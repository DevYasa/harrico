// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Contact = () => {
  const { section } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [inputFocus, setInputFocus] = useState(null);

  // Initial page load animation
  useEffect(() => {
    // Set a small delay for dramatic effect
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    // Set overall animations after page load
    const animTimer = setTimeout(() => {
      setAnimateIn(true);
    }, 600);

    return () => {
      clearTimeout(timer);
      clearTimeout(animTimer);
    };
  }, []);
  
  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Handle input focus for animation effects
  const handleFocus = (input) => {
    setInputFocus(input);
  };

  const handleBlur = () => {
    setInputFocus(null);
  };

  // Contact options for card display
  const contactOptions = [
    {
      title: "Book Appointment",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
      description: "Schedule a private consultation",
      link: "/contact/appointment",
      color: "bg-[#08081a]"
    },
    {
      title: "Find a Boutique",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      description: "Visit our locations",
      link: "/contact/boutiques",
      color: "bg-[#b9a16b]"
    }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Elegant background pattern overlay */}
      <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none z-0" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b9a16b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      ></div>

      {/* Header Section with Logo Lines */}
      <header className={`bg-[#08081a] text-white pb-8 relative ${pageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Logo Lines */}
        <div className="flex items-center justify-center pt-3 pb-2">
          <div className="w-24 h-px bg-[#b9a16b] transform transition-transform duration-1000 ease-out scale-x-0 origin-right" 
               style={{transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></div>
          <div className="mx-2 transition-transform duration-700 ease-out delay-300" 
               style={{transform: pageLoaded ? 'scale(1)' : 'scale(0)'}}>
          </div>
          <div className="w-24 h-px bg-[#b9a16b] transform transition-transform duration-1000 ease-out scale-x-0 origin-left" 
               style={{transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></div>
        </div>
        
        {/* Page Title with text reveal animation */}
        <h1 className="text-3xl md:text-4xl font-serif text-center pt-2 overflow-hidden">
          <span className="block transform transition-transform duration-700 delay-700" 
                style={{transform: pageLoaded ? 'translateY(0)' : 'translateY(100%)'}}>
            Contact Us
          </span>
        </h1>
      </header>

      {/* Contact options with reveal animations */}
      <section className="py-8 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          {contactOptions.map((option, index) => (
            <Link 
              key={index}
              to={option.link}
              className={`${option.color} text-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 relative overflow-hidden transform ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${300 + (index * 150)}ms`,
              }}
            >
              {/* Animated background hover effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-white transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="mb-3 transform transition-transform duration-500 hover:scale-110">
                {option.icon}
              </div>
              <h2 className="text-lg font-serif mb-1">{option.title}</h2>
              <p className="text-xs opacity-80">{option.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Elegant gold divider */}
      <div className="flex justify-center py-6 opacity-0 transform transition-all duration-1000 delay-800"
           style={{opacity: animateIn ? '1' : '0'}}>
        <div className="relative w-full max-w-xs mx-auto h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b9a16b] to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#b9a16b] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b9a16b]"></div>
          </div>
        </div>
      </div>

      {/* Quick Contact Form with elegant animations */}
      <section className="pt-4 pb-8 px-4 max-w-md mx-auto relative z-10">
        <h2 className="text-2xl font-serif mb-8 text-center transform transition-all duration-700 delay-1000"
            style={{opacity: animateIn ? '1' : '0', transform: animateIn ? 'translateY(0)' : 'translateY(20px)'}}>
          Send a Message
        </h2>
        
        {formSubmitted ? (
          <div className="text-center py-4 animate-fadeIn">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#08081a] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#b9a16b] animate-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-xl font-serif mb-3">Thank You</h2>
            <p className="text-gray-600 mb-6">
              We've received your message and will respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 transform transition-all duration-700 delay-1000"
                style={{opacity: animateIn ? '1' : '0', transform: animateIn ? 'translateY(0)' : 'translateY(20px)'}}>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                placeholder="Your Name"
                required
                className={`w-full border-b py-2 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
                  inputFocus === 'name' ? 'border-[#b9a16b]' : 'border-gray-300'
                }`}
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                inputFocus === 'name' ? 'scale-x-100' : 'scale-x-0'
              }`} style={{width: '100%'}}></div>
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                placeholder="Email Address"
                required
                className={`w-full border-b py-2 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
                  inputFocus === 'email' ? 'border-[#b9a16b]' : 'border-gray-300'
                }`}
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                inputFocus === 'email' ? 'scale-x-100' : 'scale-x-0'
              }`} style={{width: '100%'}}></div>
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                placeholder="Your Message"
                required
                rows="4"
                className={`w-full border py-2 px-3 mt-2 focus:outline-none bg-transparent transition-all duration-300 ${
                  inputFocus === 'message' ? 'border-[#b9a16b]' : 'border-gray-300'
                }`}
              ></textarea>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                inputFocus === 'message' ? 'scale-x-100' : 'scale-x-0'
              }`} style={{width: '100%'}}></div>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#08081a] text-white py-3 uppercase text-sm tracking-wider hover:bg-[#0f0f2b] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-[#b9a16b] opacity-20 transition-all duration-300 group-hover:h-full"></span>
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Elegant gold divider */}
      <div className="flex justify-center py-6 opacity-0 transform transition-all duration-1000 delay-1200"
           style={{opacity: animateIn ? '1' : '0'}}>
        <div className="relative w-full max-w-xs mx-auto h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b9a16b] to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#b9a16b] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b9a16b]"></div>
          </div>
        </div>
      </div>

      {/* Quick Contact Info with refined animation */}
      <section className="py-8 px-4 text-center transform transition-all duration-700 delay-1400"
               style={{opacity: animateIn ? '1' : '0', transform: animateIn ? 'translateY(0)' : 'translateY(20px)'}}>
        <p className="text-sm text-gray-600 mb-1">
          For immediate assistance, call us at
        </p>
        <a href="tel:+60321814473" className="text-[#b9a16b] font-medium relative inline-block overflow-hidden group">
          <span className="relative z-10">+60 3-2181 4473</span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-[#b9a16b] transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
        </a>
      </section>

      {/* Add premium animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes success {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 1.2s ease-out forwards;
        }
        
        .animate-success {
          animation: success 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;