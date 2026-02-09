import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, image, delay = 0 }) => {
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
      className="duration-300 group rounded-2xl overflow-hidden flex flex-col"
    >
      {/* App Screenshot */}
      {image && (
        <div className="relative overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={title}
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110"
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;