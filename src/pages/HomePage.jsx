import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>RYTM - Ad-free YouTube Watching, Your Way</title>
        <meta 
          name="description" 
          content="Experience YouTube without interruptions. RYTM offers ad-free viewing, picture-in-picture mode, and sleep timer for the ultimate YouTube experience." 
        />
      </Helmet>

      <div className="scroll-smooth">
        <Hero />
        <Features />
        <CallToActionSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;