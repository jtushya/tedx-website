import React from 'react';
import { motion } from 'framer-motion';
import SponsorCard from '../components/sponsors/SponsorCard';
import { Helmet } from 'react-helmet';

// Mock data for sponsors
const sponsorsData = {
  platinum: [
    {
      id: 1,
      name: 'TechNova',
      tier: 'platinum' as const,
      logoUrl: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
    {
      id: 2,
      name: 'Quantum Industries',
      tier: 'platinum' as const,
      logoUrl: 'https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
  ],
  gold: [
    {
      id: 3,
      name: 'Future Finance',
      tier: 'gold' as const,
      logoUrl: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
    {
      id: 4,
      name: 'GreenTech Solutions',
      tier: 'gold' as const,
      logoUrl: 'https://images.pexels.com/photos/5865312/pexels-photo-5865312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
    {
      id: 5,
      name: 'InnovateLabs',
      tier: 'gold' as const,
      logoUrl: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
  ],
  silver: [
    {
      id: 6,
      name: 'CloudNet',
      tier: 'silver' as const,
      logoUrl: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
    {
      id: 7,
      name: 'Urban Mobility',
      tier: 'silver' as const,
      logoUrl: 'https://images.pexels.com/photos/5926388/pexels-photo-5926388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
    {
      id: 8,
      name: 'EduTech',
      tier: 'silver' as const,
      logoUrl: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
    {
      id: 9,
      name: 'HealthPlus',
      tier: 'silver' as const,
      logoUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      websiteUrl: 'https://example.com',
    },
  ],
};

const SponsorsPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        damping: 15
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sponsors | TEDx BITS Hyderabad 2025</title>
        <meta name="description" content="Meet the organizations that make TEDx BITS Hyderabad possible through their generous support and shared vision." />
      </Helmet>
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-tedx-red">Our</span> <span className="text-white">Sponsors</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                TEDx BITS Hyderabad is made possible by the generous support of our sponsors who share our vision of spreading powerful ideas and fostering innovation.
              </p>
            </motion.div>
            
            {/* Platinum Sponsors */}
            <div className="mb-16">
              <motion.div 
                className="glass rounded-xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-center mb-8">
                  <span className="text-white">Platinum</span> <span className="text-tedx-red">Sponsors</span>
                </h2>
                
                <motion.div 
                  className="grid sm:grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {sponsorsData.platinum.map(sponsor => (
                    <motion.div key={sponsor.id} variants={itemVariants}>
                      <SponsorCard
                        name={sponsor.name}
                        tier={sponsor.tier}
                        logoUrl={sponsor.logoUrl}
                        websiteUrl={sponsor.websiteUrl}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            
            {/* Gold Sponsors */}
            <div className="mb-16">
              <motion.div 
                className="glass rounded-xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-center mb-8">
                  <span className="text-white">Gold</span> <span className="text-yellow-500">Sponsors</span>
                </h2>
                
                <motion.div 
                  className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {sponsorsData.gold.map(sponsor => (
                    <motion.div key={sponsor.id} variants={itemVariants}>
                      <SponsorCard
                        name={sponsor.name}
                        tier={sponsor.tier}
                        logoUrl={sponsor.logoUrl}
                        websiteUrl={sponsor.websiteUrl}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            
            {/* Silver Sponsors */}
            <div>
              <motion.div 
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-center mb-8">
                  <span className="text-white">Silver</span> <span className="text-gray-400">Sponsors</span>
                </h2>
                
                <motion.div 
                  className="grid sm:grid-cols-2 md:grid-cols-4 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {sponsorsData.silver.map(sponsor => (
                    <motion.div key={sponsor.id} variants={itemVariants}>
                      <SponsorCard
                        name={sponsor.name}
                        tier={sponsor.tier}
                        logoUrl={sponsor.logoUrl}
                        websiteUrl={sponsor.websiteUrl}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            
            {/* Become a Sponsor */}
            <motion.div 
              className="mt-16 text-center glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">Become a</span> <span className="text-tedx-red">Sponsor</span>
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Join us in spreading ideas worth sharing. As a sponsor, you'll receive brand visibility, engage with our diverse audience, and support the mission of TEDx in fostering innovation and inspiration.
              </p>
              <a 
                href="/contact" 
                className="btn-3d"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsPage;