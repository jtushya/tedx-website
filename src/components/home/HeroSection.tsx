import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../ui/ParticleBackground';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the event date (example: December 10, 2025)
    const eventDate = new Date('November 01, 2025 09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold mb-4">
              <span className="text-white">TEDx</span>
              <span className="text-tedx-red"> BITS Hyderabad</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
              Ideas Worth Spreading
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl italic mb-10 text-gray-300">
              "The future belongs to those who believe in the beauty of their dreams."
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-3xl mx-auto"
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="glass rounded-xl p-4">
                <motion.div
                  key={item.value}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-3xl md:text-5xl font-bold text-white"
                >
                  {item.value}
                </motion.div>
                <div className="text-sm md:text-base text-gray-300 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <a 
              href="#tickets" 
              className="btn-3d"
            >
              Get Tickets
            </a>
            <a 
              href="#newsletter" 
              className="px-6 py-3 border border-white/20 hover:border-white/50 rounded-lg transition-all duration-300"
            >
              Subscribe to Newsletter
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;