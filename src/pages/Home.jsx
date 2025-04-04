// src/pages/Home.jsx
import React from 'react';
import ShowcaseSections from '../components/home/ShowcaseSections';
import BridalSection from '../components/home/BridalSection';
import SalonSection from '../components/home/SalonSection';

const Home = () => {
  return (
    <>
      {/* Main showcase sections */}
      <ShowcaseSections />
      
      {/* Bridal Section */}
      <BridalSection />
      
      {/* Find a Salon Section */}
      <SalonSection />
    </>
  );
};

export default Home;