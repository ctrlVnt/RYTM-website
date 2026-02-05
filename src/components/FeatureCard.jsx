import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      className="duration-300 p-8 group"
    >
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 duration-300"
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;