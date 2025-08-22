import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-vanilla-tilt';

interface SpeakerCardProps {
  name: string;
  title: string;
  talkTitle: string;
  year: number;
  photoUrl: string;
  bio: string;
  onClick: () => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  talkTitle,
  photoUrl,
  onClick
}) => {
  return (
    <Tilt
      className="h-full"
      options={{
        scale: 1.05,
        speed: 1000,
        max: 15,
        glare: true,
        'max-glare': 0.2,
      }}
    >
      <motion.div 
        className="h-full rounded-xl overflow-hidden cursor-pointer gradient-overlay relative group"
        whileHover={{ y: -5 }}
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={photoUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-tedx-red font-medium">{title}</p>
          <div className="mt-2 pt-2 border-t border-white/20">
            <p className="text-white italic">"{talkTitle}"</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SpeakerCard;