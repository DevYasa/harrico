// src/components/common/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center', 
  divider = true, 
  maxWidth = 'xl' 
}) => {
  // Alignment class mapping
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto'
  };
  
  // Max width class mapping
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    full: 'max-w-full'
  };
  
  return (
    <div className={`${alignmentClasses[alignment]} ${maxWidthClasses[maxWidth]}`}>
      {subtitle && (
        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">{subtitle}</p>
      )}
      
      <h2 className="text-2xl sm:text-3xl font-serif tracking-wider mb-4">{title}</h2>
      
      {divider && (
        <div className={`w-12 h-px bg-gray-400 ${alignment === 'center' ? 'mx-auto' : ''} mb-6`}></div>
      )}
    </div>
  );
};

export default SectionTitle;