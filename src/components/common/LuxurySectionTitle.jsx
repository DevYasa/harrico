// src/components/common/LuxurySectionTitle.jsx
import React from 'react';

const LuxurySectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  alignment = 'center', 
  color = 'amber',
  size = 'default',
  animation = 'fade',
  dividerStyle = 'gem'
}) => {
  
  // Helper to generate alignment classes
  const getAlignment = () => {
    switch (alignment) {
      case 'left':
        return 'text-left items-start';
      case 'right':
        return 'text-right items-end';
      default:
        return 'text-center items-center';
    }
  };
  
  // Helper to generate color classes
  const getColorClasses = () => {
    const colors = {
      amber: {
        subtitle: 'text-amber-800',
        title: 'text-amber-900',
        line: 'bg-amber-400',
        dot: 'border-amber-400 bg-amber-200'
      },
      white: {
        subtitle: 'text-amber-300',
        title: 'text-white',
        line: 'bg-amber-300',
        dot: 'border-amber-300 bg-amber-100/20'
      },
      gold: {
        subtitle: 'text-amber-600',
        title: 'gold-gradient-text',
        line: 'bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300',
        dot: 'border-amber-500 bg-amber-100'
      }
    };
    
    return colors[color] || colors.amber;
  };
  
  // Helper to generate title size classes
  const getTitleSize = () => {
    switch (size) {
      case 'small':
        return 'text-2xl md:text-3xl';
      case 'large':
        return 'text-5xl md:text-6xl';
      default:
        return 'text-4xl md:text-5xl';
    }
  };
  
  // Helper to generate animation classes
  const getAnimationClasses = () => {
    switch (animation) {
      case 'slide-up':
        return 'animate-fade-in';
      case 'slide-right':
        return 'animate-fade-in-right';
      case 'slide-left':
        return 'animate-fade-in-left';
      case 'scale':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in';
    }
  };
  
  // Helper to render divider based on style
  const renderDivider = () => {
    const colorClasses = getColorClasses();
    
    switch (dividerStyle) {
      case 'line':
        return (
          <div className="w-24 h-px mb-8 mt-4 transition-all duration-500 group-hover:w-36" style={{ backgroundColor: 'currentColor' }}></div>
        );
      case 'double':
        return (
          <div className="mb-8 mt-4">
            <div className={`w-16 h-px ${colorClasses.line} mb-1.5`}></div>
            <div className={`w-24 h-px ${colorClasses.line}`}></div>
          </div>
        );
      case 'ornate':
        return (
          <div className="flex justify-center items-center mb-8 mt-4">
            <div className="flex items-center">
              <div className={`h-px w-12 ${colorClasses.line}`}></div>
              <div className="mx-3 text-amber-500">❖</div>
              <div className={`h-px w-12 ${colorClasses.line}`}></div>
            </div>
          </div>
        );
      case 'gem':
      default:
        return (
          <div className="flex justify-center items-center mb-10 mt-4">
            <div className={`w-16 h-px ${colorClasses.line}`}></div>
            <div className={`w-4 h-4 mx-3 rounded-full border-2 ${colorClasses.dot}`}></div>
            <div className={`w-16 h-px ${colorClasses.line}`}></div>
          </div>
        );
    }
  };
  
  const alignmentClasses = getAlignment();
  const colorClasses = getColorClasses();
  const titleSize = getTitleSize();
  const animationClasses = getAnimationClasses();
  
  return (
    <div className={`flex flex-col ${alignmentClasses} group ${animationClasses}`}>
      {subtitle && (
        <p className={`${colorClasses.subtitle} tracking-[0.3em] text-xs md:text-sm mb-3 font-medium uppercase`}>
          {subtitle}
        </p>
      )}
      
      {title && (
        <h2 className={`font-heading ${titleSize} mb-4 ${colorClasses.title} leading-tight`}>
          {title}
        </h2>
      )}
      
      {renderDivider()}
      
      {description && (
        <p className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default LuxurySectionTitle;