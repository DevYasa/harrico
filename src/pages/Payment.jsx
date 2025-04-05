// src/pages/Payment.jsx
import React, { useState, useEffect } from 'react';

const Payment = () => {
  // State variables
  const [pageLoaded, setPageLoaded] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [amount, setAmount] = useState('');
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('initial'); // 'initial', 'processing', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [showCurrency, setShowCurrency] = useState(false);
  const [currency, setCurrency] = useState('MYR');
  
  // Common currencies
  const currencies = [
    { code: 'MYR', symbol: 'RM' },
    { code: 'USD', symbol: '$' },
    { code: 'GBP', symbol: '£' },
    { code: 'EUR', symbol: '€' },
    { code: 'SGD', symbol: 'S$' }
  ];
  
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
  
  // Handle amount input change
  const handleAmountChange = (e) => {
    // Allow only numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    
    // Validate decimal format (only one decimal point, maximum 2 decimal places)
    if (value === '' || 
        (value.match(/\./g) || []).length <= 1 && 
        (/^\d*\.?\d{0,2}$/).test(value)) {
      setAmount(value);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      setErrorMessage('Please enter a valid amount');
      return;
    }
    
    // Clear any previous errors
    setErrorMessage('');
    
    // Set payment status to processing (this would show loading state)
    setPaymentStatus('processing');
    
    // Simulate payment intent creation (in a real app, this would be a call to your backend)
    setTimeout(() => {
      // This is a placeholder for the actual payment processing
      // In a real application, you would call your backend to create a payment intent
      setPaymentIntent({
        id: 'pi_' + Math.random().toString(36).substr(2, 9),
        amount: parseFloat(amount),
        currency: currency
      });
      
      // For demo purposes, we'll just show the Stripe form after a delay
      // In a real application, you would initialize Stripe with the client secret
      // and render the Stripe Elements form
    }, 1000);
  };
  
  // Simulate a successful payment (in a real app, this would be handled by Stripe)
  const simulateSuccessfulPayment = () => {
    setPaymentStatus('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };
  
  // Simulate a failed payment (in a real app, this would be handled by Stripe)
  const simulateFailedPayment = () => {
    setPaymentStatus('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('error');
      setErrorMessage('Your card was declined. Please try another payment method.');
    }, 2000);
  };
  
  // Reset payment form
  const resetPayment = () => {
    setPaymentStatus('initial');
    setPaymentIntent(null);
    setAmount('');
    setErrorMessage('');
  };
  
  // Toggle currency selector
  const toggleCurrencySelector = () => {
    setShowCurrency(!showCurrency);
  };
  
  // Select currency
  const selectCurrency = (currencyCode) => {
    setCurrency(currencyCode);
    setShowCurrency(false);
  };
  
  // Get currency symbol
  const getCurrencySymbol = (currencyCode) => {
    const found = currencies.find(c => c.code === currencyCode);
    return found ? found.symbol : currencyCode;
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Elegant background pattern overlay */}
      <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none z-0" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b9a16b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      ></div>

      {/* Header Section */}
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
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-serif text-center pt-2 overflow-hidden">
          <span className="block transform transition-transform duration-700 delay-700" 
                style={{transform: pageLoaded ? 'translateY(0)' : 'translateY(100%)'}}>
            Payment
          </span>
        </h1>
      </header>

      {/* Payment Form Section */}
      <section className="py-12 px-4 max-w-md mx-auto">
        {paymentStatus === 'success' ? (
          // Success message
          <div className={`text-center p-6 ${animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700`}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#08081a] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#b9a16b] animate-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-xl font-serif mb-3">Payment Successful</h2>
            <p className="text-gray-600 mb-3">
              Thank you for your payment of {getCurrencySymbol(currency)}{paymentIntent?.amount.toFixed(2)}.
            </p>
            <p className="text-gray-600 mb-8">
              Your transaction ID is: {paymentIntent?.id}
            </p>
            <button
              onClick={resetPayment}
              className="inline-block bg-[#08081a] text-white text-sm uppercase tracking-wider py-3 px-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Make Another Payment</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#b9a16b] opacity-20 transition-all duration-300 group-hover:h-full"></span>
            </button>
          </div>
        ) : paymentStatus === 'error' ? (
          // Error message
          <div className={`text-center p-6 ${animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700`}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h2 className="text-xl font-serif mb-3">Payment Failed</h2>
            <p className="text-gray-600 mb-8">
              {errorMessage || 'There was an error processing your payment. Please try again.'}
            </p>
            <button
              onClick={resetPayment}
              className="inline-block bg-[#08081a] text-white text-sm uppercase tracking-wider py-3 px-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Try Again</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#b9a16b] opacity-20 transition-all duration-300 group-hover:h-full"></span>
            </button>
          </div>
        ) : paymentIntent ? (
          // Payment form (Stripe simulation)
          <div className={`bg-white p-6 rounded-md shadow-md border border-gray-200 ${animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700`}>
            <h2 className="text-xl font-serif mb-6 text-center">Complete Your Payment</h2>
            
            <div className="mb-6 text-center">
              <p className="text-lg font-medium">
                Amount: {getCurrencySymbol(currency)}{parseFloat(amount).toFixed(2)}
              </p>
            </div>
            
            {/* Simulated Card Form */}
            <div className="space-y-4 mb-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  disabled={paymentStatus === 'processing'}
                  placeholder="4242 4242 4242 4242"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#b9a16b] focus:border-[#b9a16b]"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    disabled={paymentStatus === 'processing'}
                    placeholder="MM/YY"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#b9a16b] focus:border-[#b9a16b]"
                  />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input
                    type="text"
                    disabled={paymentStatus === 'processing'}
                    placeholder="123"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#b9a16b] focus:border-[#b9a16b]"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                <input
                  type="text"
                  disabled={paymentStatus === 'processing'}
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#b9a16b] focus:border-[#b9a16b]"
                />
              </div>
            </div>
            
            {/* Payment Actions */}
            <div className="flex flex-col space-y-2">
              {paymentStatus === 'processing' ? (
                <div className="flex justify-center items-center py-3 bg-gray-100 text-gray-500 rounded-md">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#b9a16b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                <>
                  <button
                    onClick={simulateSuccessfulPayment}
                    className="py-3 bg-[#08081a] text-white rounded-md text-sm uppercase tracking-wider hover:bg-[#0f0f2b] transition-colors duration-300"
                  >
                    Pay {getCurrencySymbol(currency)}{parseFloat(amount).toFixed(2)}
                  </button>
                  
                  <div className="text-center text-xs text-gray-500">
                    This is a demo. For testing, click the button to simulate a successful payment.
                  </div>
                  
                  <button
                    onClick={simulateFailedPayment}
                    className="py-2 text-xs text-gray-500 hover:text-red-500 transition-colors duration-300"
                  >
                    Simulate Failed Payment
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          // Payment amount form
          <div className={`bg-white p-6 rounded-md shadow-md border border-gray-200 ${animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700`}>
            <h2 className="text-xl font-serif mb-6 text-center">Make a Payment</h2>
            
            {errorMessage && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4 text-sm">
                {errorMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount</label>
                <div className="flex">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={toggleCurrencySelector}
                      className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-700 hover:text-[#b9a16b] transition-colors"
                    >
                      {getCurrencySymbol(currency)}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <input
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="0.00"
                      className="w-full pl-12 pr-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#b9a16b] focus:border-[#b9a16b]"
                    />
                  </div>
                </div>
                
                {/* Currency Selector */}
                {showCurrency && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg py-1">
                    {currencies.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => selectCurrency(c.code)}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none ${
                          currency === c.code ? 'bg-gray-100 text-[#b9a16b] font-medium' : 'text-gray-700'
                        }`}
                      >
                        {c.symbol} {c.code}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Payment Method</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {/* Accepted payment methods logos */}
                  <div className="h-7 w-12 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">Visa</span>
                  </div>
                  <div className="h-7 w-12 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">MC</span>
                  </div>
                  <div className="h-7 w-12 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">Amex</span>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-[#08081a] text-white rounded-md text-sm uppercase tracking-wider hover:bg-[#0f0f2b] transition-colors duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Continue</span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-[#b9a16b] opacity-20 transition-all duration-300 group-hover:h-full"></span>
              </button>
              
              <div className="mt-6 text-xs text-center text-gray-500">
                <p>Secure payment processing powered by Stripe.</p>
                <p className="mt-1">Your payment information is encrypted and secure.</p>
              </div>
            </form>
          </div>
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

      {/* Payment Information */}
      <section className="py-8 px-4 text-center max-w-md mx-auto transform transition-all duration-700 delay-1400"
               style={{opacity: animateIn ? '1' : '0', transform: animateIn ? 'translateY(0)' : 'translateY(20px)'}}>
        <h3 className="text-xl font-serif mb-4">Accepted Payment Methods</h3>
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-1">
            <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-xs font-medium text-blue-800">VISA</span>
            </div>
            <span className="text-xs text-gray-500">Credit/Debit</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-12 h-8 bg-red-100 rounded flex items-center justify-center">
              <span className="text-xs font-medium text-red-800">MC</span>
            </div>
            <span className="text-xs text-gray-500">Credit/Debit</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-medium text-gray-800">AMEX</span>
            </div>
            <span className="text-xs text-gray-500">Credit/Debit</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          For assistance with payments, please contact our customer service team.
        </p>
        
        <p className="text-sm">
          <a href="tel:+60321814473" className="text-[#b9a16b] font-medium inline-block group">
            <span className="relative">
              +60 3-2181 4473
              <span className="absolute left-0 bottom-0 w-full h-px bg-[#b9a16b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
        </p>
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

export default Payment;