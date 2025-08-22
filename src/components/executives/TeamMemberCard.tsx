import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-vanilla-tilt';
import { Linkedin, Twitter, Globe, Instagram } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  photoUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  photoUrl,
  socialLinks = {},
}) => {
  return (
    <Tilt
      className="h-full"
      options={{
        scale: 1.05,
        speed: 1000,
        max: 15,
        glare: true,
        'max-glare': 0.1,
      }}
    >
      <motion.div 
        className="h-full glass rounded-xl overflow-hidden"
        whileHover={{ y: -5 }}
      >
        {photoUrl ? (
          <div className="aspect-square overflow-hidden">
            <img 
              src={photoUrl} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ) : (
          <div className="aspect-square bg-tedx-gray/30 flex items-center justify-center">
            <div className="w-16 h-16 bg-tedx-red/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-tedx-red">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-tedx-red text-sm">{role}</p>
          
          {(socialLinks.linkedin || socialLinks.twitter || socialLinks.instagram || socialLinks.website) && (
            <div className="mt-3 flex space-x-3">
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
              )}
              {socialLinks.instagram && (
                <a 
                  href={socialLinks.instagram} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
              )}
              {socialLinks.website && (
                <a 
                  href={socialLinks.website} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Globe size={18} />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default TeamMemberCard;