import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/logo.png';

const Hero = () => {
  const letters = "RYTM".split("");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated rotating gradient background - YouTube Music style */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 animate-gradient-rotate"
          style={{
            background: 'linear-gradient(135deg, #1a0000 0%, #ff0000 20%, #8b0000 40%, #ff4500 60%, #c41e3a 80%, #1a0000 100%)',
            backgroundSize: '400% 400%',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="RYTM Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 mb-8 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))'
          }}
        />

        {/* RYTM Title */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-white tracking-tight"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 0, 0, 0.3)'
            }}
          >
            RYTM
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
          }}
        >
          Ad-free YouTube watching, your way
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://play.google.com/store/apps/details?id=com.ctrlvnt.rytm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <img 
            className="w-48 h-auto mx-auto hover:scale-105 transition-transform duration-300" 
            src="https://rytmapp.netlify.app/play_badge.png" 
            alt="Get it on Google Play"
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;