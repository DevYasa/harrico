// src/components/products/LuxuryProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LuxuryProductCard = ({ 
  product, 
  variant = 'default',
  showPrice = true,
  showCta = true, 
  ctaText = 'View Details',
  animation = true,
  index = 0
}) => {
  // Helper to get border color based on gem type
  const getBorderColor = (type) => {
    if (!type) return 'border-amber-300';
    
    const gemType = type.toLowerCase();
    if (gemType.includes('sapphire')) return 'border-blue-500';
    if (gemType.includes('ruby')) return 'border-red-600';
    if (gemType.includes('emerald')) return 'border-emerald-600';
    if (gemType.includes('yellow')) return 'border-yellow-500';
    if (gemType.includes('pink')) return 'border-pink-500';
    return 'border-amber-300';
  };
  
  // Helper to get background accent color based on gem type
  const getAccentColor = (type) => {
    if (!type) return 'bg-blue-600';
    
    const gemType = type.toLowerCase();
    if (gemType.includes('sapphire')) return 'bg-blue-600';
    if (gemType.includes('ruby')) return 'bg-red-600';
    if (gemType.includes('emerald')) return 'bg-emerald-600';
    if (gemType.includes('yellow')) return 'bg-yellow-500';
    if (gemType.includes('pink')) return 'bg-pink-500';
    return 'bg-amber-500';
  };
  
  // Animation delay based on index
  const animationDelay = `${index * 150}ms`;
  
  // Render product card based on variant
  const renderProductCard = () => {
    switch (variant) {
      case 'minimal':
        return (
          <div 
            className={`group relative ${animation ? 'animate-fade-in' : ''}`} 
            style={{ animationDelay }}
          >
            <Link to={`/collections/${product.id}`} className="block">
              <div className="relative overflow-hidden rounded bg-white">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-64 object-contain transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            
            <div className="mt-4 text-center">
              <h3 className="font-heading text-lg text-amber-900 mb-1">{product.name}</h3>
              <p className="text-gray-500 text-xs mb-2">{product.type}</p>
              {showPrice && (
                <p className="text-amber-800 font-medium">${product.price?.toLocaleString()}</p>
              )}
            </div>
          </div>
        );
        
      case 'elegant':
        return (
          <div 
            className={`group relative ${animation ? 'animate-fade-in' : ''}`} 
            style={{ animationDelay }}
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-amber-200 rounded-sm transform translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              <Link to={`/collections/${product.id}`} className="block relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {showCta && (
                        <span className="inline-block bg-white text-amber-900 px-4 py-2 text-sm tracking-wider uppercase font-medium">
                          {ctaText}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
              
              <div className="pt-5 pb-2 px-2">
                <h3 className="font-heading text-xl text-amber-900 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.type}</p>
                {showPrice && (
                  <p className="text-amber-800 font-medium">${product.price?.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>
        );
      
      default: // Luxury bordered card
        return (
          <div 
            className={`group ${animation ? 'animate-fade-in' : ''}`} 
            style={{ animationDelay }}
          >
            <div className={`p-1.5 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rounded-md transition-transform duration-500 group-hover:scale-[1.02]`}>
              <div className="bg-white p-1 rounded-sm">
                <Link to={`/collections/${product.id}`} className="block relative">
                  <div className="overflow-hidden rounded-sm">
                    <div className="aspect-w-1 aspect-h-1 bg-gradient-to-t from-gray-50 to-white">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                      {showCta && (
                        <span className="inline-block bg-white/90 text-amber-900 px-6 py-2.5 text-sm tracking-wider uppercase font-medium rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                          {ctaText}
                        </span>
                      )}
                    </div>
                    
                    {/* Color accent */}
                    <div className={`absolute inset-x-0 bottom-0 h-1 ${getAccentColor(product.type)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Product details */}
            <div className="pt-6 px-2 text-center">
              <h3 className="font-heading text-xl text-amber-900 mb-1 transition-colors duration-300 group-hover:text-amber-700">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3 font-medium tracking-wide">{product.type}</p>
              {showPrice && (
                <p className="text-amber-800 font-medium">${product.price?.toLocaleString()}</p>
              )}
            </div>
          </div>
        );
    }
  };
  
  return renderProductCard();
};

export default LuxuryProductCard;