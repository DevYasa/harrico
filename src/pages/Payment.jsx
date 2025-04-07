// src/pages/Payment.jsx
import React, { useState, useEffect } from 'react';

const Payment = () => {
  // State variables for animations
  const [pageLoaded, setPageLoaded] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  
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

    // Load Stripe Buy Button script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      clearTimeout(timer);
      clearTimeout(animTimer);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Elegant background pattern overlay */}
      <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none z-0" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b9a16b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      ></div>

      {/* Header Section */}
      <header className={`bg-[#08081a] text-white pb-8 relative ${pageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Logo Lines */}
        <div className="flex items-center justify-center pt-4 pb-2">
          <div className="w-24 h-px bg-[#b9a16b] transform transition-transform duration-1000 ease-out scale-x-0 origin-right" 
               style={{transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></div>
          <div className="mx-2 transition-transform duration-700 ease-out delay-300" 
               style={{transform: pageLoaded ? 'scale(1)' : 'scale(0)'}}>
          </div>
          <div className="w-24 h-px bg-[#b9a16b] transform transition-transform duration-1000 ease-out scale-x-0 origin-left" 
               style={{transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></div>
        </div>
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-serif text-center pt-2 overflow-hidden">
          <span className="block transform transition-transform duration-700 delay-700" 
                style={{transform: pageLoaded ? 'translateY(0)' : 'translateY(100%)'}}>
            Payment
          </span>
        </h1>
      </header>

      {/* Stripe Payment Button Section */}
      <section className={`py-12 px-4 flex justify-center items-center ${animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700 delay-300`}>
        {/* Stripe Buy Button */}
        <div className="stripe-button-container flex justify-center items-center w-full max-w-xs mx-auto">
          <stripe-buy-button
            buy-button-id="buy_btn_1RBCwPCmv3s4FZUerz7XmjDL"
            publishable-key="pk_live_51RB4UrCmv3s4FZUeBEVNkVtcfRjJgCtu9CVtuXle2cgjtvO5zssZRE1VI5ktimYAhDaBSEhlwv3Z8CXRpd5jIcNk009E1p8cJU"
          >
          </stripe-buy-button>
        </div>
      </section>

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 1.2s ease-out forwards;
        }
        
        /* Custom styling for Stripe button container */
        .stripe-button-container {
          max-width: 100%;
          margin: 0 auto;
        }
        
        /* Additional styling to center the Stripe button */
        stripe-buy-button {
          display: block !important;
          margin: 0 auto !important;
        }
      `}</style>
    </div>
  );
};

export default Payment;