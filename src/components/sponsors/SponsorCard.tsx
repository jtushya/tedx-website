import React from 'react';
import { motion } from 'framer-motion';

interface SponsorCardProps {
  name: string;
  tier: 'platinum' | 'gold' | 'silver';
  logoUrl: string;
  websiteUrl: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  name,
  tier,
  logoUrl,
  websiteUrl,
}) => {
  const tierColors = {
    platinum: 'border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]',
    gold: 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]',
    silver: 'border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.2)]',
  };

  return (
    <motion.a
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 rounded-xl glass border ${tierColors[tier]} transition-all duration-500`}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="h-40 flex items-center justify-center p-4">
        <img
          src={logoUrl}
          alt={name}
          className="max-h-full max-w-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <div className="mt-2">
          <span 
            className={`inline-block px-3 py-1 rounded-full text-xs uppercase font-medium 
            ${tier === 'platinum' ? 'bg-white/20 text-white' : 
              tier === 'gold' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-gray-400/20 text-gray-300'}`}
          >
            {tier} Sponsor
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default SponsorCard;