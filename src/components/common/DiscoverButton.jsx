// src/components/common/DiscoverButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverButton = ({ to = "/", className = "" }) => {
  return (
    <Link
      to={to}
      className={`inline-block border border-[#cbb472] text-[#b9a16b] px-16 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300 ${className}`}
    >
      DISCOVER
    </Link>
  );
};

export default DiscoverButton;