// src/pages/contact/Appointment.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    interest: ''
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
  
  // Handle input focus for animation effects
  const handleFocus = (input) => {
    setInputFocus(input);
  };

  const handleBlur = () => {
    setInputFocus(null);
  };
  
  // Trigger animation on step change
  useEffect(() => {
    setAnimateIn(false);
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeStep]);
  
  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment form submitted:', formData);
    // Normally send data to backend here
    setFormSubmitted(true);
  };

  // Navigate between steps
  const goToNextStep = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setActiveStep(prevStep => prevStep + 1);
      window.scrollTo(0, 0);
    }, 300);
  };
  
  const goToPrevStep = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setActiveStep(prevStep => prevStep - 1);
      window.scrollTo(0, 0);
    }, 300);
  };

  // Calculate minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Simple location and time data
  const locations = [
    { id: 'kl', name: 'Kuala Lumpur' },
    { id: 'penang', name: 'Penang' },
    { id: 'london', name: 'London' }
  ];
  
  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const interests = [
    'Blue Sapphires', 'Ruby', 'Emerald', 'Diamond',
    'Custom Design', 'Wedding Jewelry', 'Engagement Rings'
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
            Book an Appointment
          </span>
        </h1>
      </header>

      {/* Form Section */}
      <section className="py-8 px-4 max-w-md mx-auto">
        {/* Progress indicator with animations */}
        <div className="flex justify-center mb-8 opacity-0 transform transition-all duration-700 delay-800"
             style={{opacity: pageLoaded ? '1' : '0'}}>
          {[1, 2, 3].map((step) => (
            <div key={step} className="relative mx-2">
              <div 
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  activeStep === step ? 'bg-[#b9a16b] scale-125' : 
                  activeStep > step ? 'bg-gray-400' : 'bg-gray-200'
                }`}
              ></div>
              {/* Connecting line for steps */}
              {step < 3 && (
                <div className="absolute top-1/2 left-full w-6 h-px bg-gray-200 -translate-y-1/2"></div>
              )}
              {/* Animated fill line */}
              {step < 3 && activeStep > step && (
                <div 
                  className="absolute top-1/2 left-full w-6 h-px bg-[#b9a16b] -translate-y-1/2 transform origin-left transition-transform duration-500"
                  style={{transform: 'scaleX(1)'}}
                ></div>
              )}
            </div>
          ))}
        </div>
        
        {formSubmitted ? (
          <div className={`text-center p-6 ${animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700`}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#08081a] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#b9a16b] animate-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-xl font-serif mb-3">Thank You</h2>
            <p className="text-gray-600 mb-8">
              We've received your appointment request and will contact you shortly to confirm the details.
            </p>
            <Link 
              to="/collections"
              className="inline-block bg-[#08081a] text-white text-sm uppercase tracking-wider py-3 px-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Browse Collections</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#b9a16b] opacity-20 transition-all duration-300 group-hover:h-full"></span>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Step 1: Location & Date */}
            {activeStep === 1 && (
              <div className={`space-y-6 ${animateIn ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'} transition-all duration-700`}>
                <h2 className="text-xl font-serif text-center mb-6">Select Your Details</h2>
                
                <div className="relative">
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    onFocus={() => handleFocus('location')}
                    onBlur={handleBlur}
                    className={`w-full border-b py-3 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
                      inputFocus === 'location' ? 'border-[#b9a16b]' : 'border-gray-300'
                    }`}
                  >
                    <option value="" disabled>Select Location</option>
                    {locations.map(location => (
                      <option key={location.id} value={location.id}>{location.name}</option>
                    ))}
                  </select>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                    inputFocus === 'location' ? 'scale-x-100' : 'scale-x-0'
                  }`} style={{width: '100%'}}></div>
                </div>
                
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={minDate}
                    required
                    onFocus={() => handleFocus('date')}
                    onBlur={handleBlur}
                    className={`w-full border-b py-3 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
                      inputFocus === 'date' ? 'border-[#b9a16b]' : 'border-gray-300'
                    }`}
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                    inputFocus === 'date' ? 'scale-x-100' : 'scale-x-0'
                  }`} style={{width: '100%'}}></div>
                </div>
                
                <div className="relative">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    onFocus={() => handleFocus('time')}
                    onBlur={handleBlur}
                    className={`w-full border-b py-3 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
                      inputFocus === 'time' ? 'border-[#b9a16b]' : 'border-gray-300'
                    }`}
                  >
                    <option value="" disabled>Select Time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                    inputFocus === 'time' ? 'scale-x-100' : 'scale-x-0'
                  }`} style={{width: '100%'}}></div>
                </div>
                
                <div className="pt-8">
                  <button
                    type="button"
                    onClick={goToNextStep}
                    className="w-full bg-[#08081a] text-white py-3 uppercase text-sm tracking-wider hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Next</span>
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-[#b9a16b] opacity-20 transition-all duration-300 group-hover:h-full"></span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Personal Details */}
            {activeStep === 2 && (
              <div className={`space-y-6 ${animateIn ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'} transition-all duration-700`}>
                <h2 className="text-xl font-serif text-center mb-6">Your Information</h2>
                
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`w-full border-b py-3 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
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
                    placeholder="Email Address"
                    required
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`w-full border-b py-3 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
                      inputFocus === 'email' ? 'border-[#b9a16b]' : 'border-gray-300'
                    }`}
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                    inputFocus === 'email' ? 'scale-x-100' : 'scale-x-0'
                  }`} style={{width: '100%'}}></div>
                </div>
                
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className={`w-full border-b py-3 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
                      inputFocus === 'phone' ? 'border-[#b9a16b]' : 'border-gray-300'
                    }`}
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                    inputFocus === 'phone' ? 'scale-x-100' : 'scale-x-0'
                  }`} style={{width: '100%'}}></div>
                </div>
                
                <div className="pt-8 flex space-x-3">
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    className="flex-1 border border-gray-300 py-3 text-gray-700 uppercase text-sm tracking-wider hover:bg-gray-50 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={goToNextStep}
                    className="flex-1 bg-[#08081a] text-white py-3 uppercase text-sm tracking-wider hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Next</span>
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-[#b9a16b] opacity-20 transition-all duration-300 group-hover:h-full"></span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Interest */}
            {activeStep === 3 && (
              <div className={`space-y-6 ${animateIn ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'} transition-all duration-700`}>
                <h2 className="text-xl font-serif text-center mb-6">Your Interests</h2>
                
                <div className="relative">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    onFocus={() => handleFocus('interest')}
                    onBlur={handleBlur}
                    className={`w-full border-b py-3 px-1 focus:outline-none bg-transparent transition-all duration-300 ${
                      inputFocus === 'interest' ? 'border-[#b9a16b]' : 'border-gray-300'
                    }`}
                  >
                    <option value="" disabled>Select Your Interest</option>
                    {interests.map(interest => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </select>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#b9a16b] transform origin-left transition-transform duration-500 ${
                    inputFocus === 'interest' ? 'scale-x-100' : 'scale-x-0'
                  }`} style={{width: '100%'}}></div>
                </div>
                
                <div className="pt-8 flex space-x-3">
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    className="flex-1 border border-gray-300 py-3 text-gray-700 uppercase text-sm tracking-wider hover:bg-gray-50 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#b9a16b] text-white py-3 uppercase text-sm tracking-wider hover:shadow-md transition-all duration-300 hover:bg-[#a88f55]"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            )}
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

      {/* Assistance Info */}
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

export default Appointment;