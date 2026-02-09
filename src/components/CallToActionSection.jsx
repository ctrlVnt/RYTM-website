import React from 'react';
import { motion } from 'framer-motion';
import { Download, Coffee } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const CallToActionSection = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download Ready!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleDonate = () => {
    toast({
      title: "Thank You!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated rotating gradient background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 animate-gradient-rotate"
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #4a0000 20%, #1a1a1a 40%, #8b0000 60%, #2a0000 80%, #0a0a0a 100%)',
            backgroundSize: '400% 400%',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            RYTM is an open-source project, so is free, ethical, and ad-free.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className='text-3xl text-white font-bold'>Download the app</h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://play.google.com/store/apps/details?id=com.ctrlvnt.rytm">
              <img className="w-48 h-auto" src="https://rytmapp.netlify.app/play_badge.png" alt="Get it on Google Play" />
            </a>
          </motion.div>

          <h3 className='text-3xl text-white font-bold mt-6'>Support the project</h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://www.buymeacoffee.com/v3ntuz">
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=v3ntuz&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" alt="Buy me a coffee" />
            </a>
          </motion.div>
          
          <h3 className='text-3xl text-white font-bold mt-6'>Contribute!</h3>  
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://github.com/ctrlVnt/Real-YT-Music">
              <img src="https://rytmapp.netlify.app/github.png" className="w-48 h-auto" alt="Contribute on GitHub" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;