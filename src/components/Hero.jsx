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
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://rytmapp.netlify.app/public/Cover.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.7) 0%, rgba(20, 20, 20, 0.9) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.img
            src={logo}
            alt="RYTM Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 mb-4 mx-auto"
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
            }}
          />
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.h1
              key={index}
              variants={letterVariants}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-white tracking-tight"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 0, 0, 0.3)'
              }}
            >
              {letter}
            </motion.h1>
          ))}
        </motion.div>

        <motion.p
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 max-w-3xl mx-auto"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
          }}
        >
          Ad-free YouTube watching, your way
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;