import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-2">RYTM</h3>
          <p className="text-gray-400 mb-6">Ad-free YouTube watching, your way</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a
              href="https://riccardoventurini.dev/privacy/rytm"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} RYTM. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;