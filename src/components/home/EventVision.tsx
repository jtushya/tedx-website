import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EventVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const visionItems = [
    {
      title: "Innovation",
      description: "Showcasing cutting-edge ideas that push boundaries and challenge conventional thinking."
    },
    {
      title: "Diversity",
      description: "Bringing together voices from varied backgrounds, disciplines, and perspectives."
    },
    {
      title: "Community",
      description: "Creating meaningful connections among attendees, speakers, and the broader TEDx community."
    },
    {
      title: "Impact",
      description: "Inspiring action and positive change through powerful ideas and storytelling."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-tedx-red/10 via-black to-black -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            <span className="text-white">Our</span> <span className="text-tedx-red">Vision</span> <span className="text-white">for 2025</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-center text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            TEDx BITS Hyderabad 2025 aims to create a platform for revolutionary ideas that will shape our collective future, connecting innovators with an audience eager for positive change.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {visionItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl transition-all duration-300 hover:bg-tedx-red/10 hover:border-tedx-red/30"
              >
                <h3 className="text-2xl font-semibold mb-3 neon-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center neon-red">2025 Theme: "Redefining Boundaries"</h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto">
              In a world where traditional limitations are constantly being challenged, "Redefining Boundaries" explores how innovators, thinkers, and doers are breaking barriers in technology, society, science, and human potential. Join us as we discover ideas that transcend conventional boundaries and reimagine what's possible.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventVision;