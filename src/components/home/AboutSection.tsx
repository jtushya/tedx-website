import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-tedx-gray/20 to-black -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="text-tedx-red">About</span> TEDx
            </h2>
            
            <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 neon-white">What is TED?</h3>
                <p className="text-gray-300 mb-4">
                  TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives.
                </p>
                <p className="text-gray-300">
                  The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 neon-white">What is TEDx?</h3>
                <p className="text-gray-300 mb-4">
                  In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
                </p>
                <p className="text-gray-300">
                  At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event.
                </p>
              </div>
            </div>
            
            <div className="mt-12 glass p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 neon-white">TEDx BITS Hyderabad</h3>
              <p className="text-gray-300 mb-4">
                TEDx BITS Hyderabad is a celebration of ideas that has been organized by BITS Pilani Hyderabad Campus students for the past several years. It brings together the brightest minds to share ideas that matter in technology, entertainment, design, science, humanities, business, and development.
              </p>
              <p className="text-gray-300">
                Our goal is to create a platform where speakers from various fields can share their innovative ideas and inspire the audience to think differently. We believe in the power of ideas to change attitudes, lives, and ultimately, the world.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <motion.a 
                href="/tlog"
                className="btn-3d inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Journey
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;