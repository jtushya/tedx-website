import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import EventVision from '../components/home/EventVision';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TEDx BITS Hyderabad 2025 | Ideas Worth Spreading</title>
        <meta name="description" content="TEDx BITS Hyderabad 2025 is a celebration of ideas that brings together the brightest minds to share ideas that matter in technology, entertainment, design, science, humanities, business, and development." />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <EventVision />
    </>
  );
};

export default HomePage;