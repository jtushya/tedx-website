import React from 'react';
import { motion } from 'framer-motion';

interface GalleryItemProps {
  imageUrl: string;
  alt: string;
  year: number;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  imageUrl,
  alt,
  year,
  onClick,
}) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
        <div className="p-4 w-full">
          <p className="text-white font-medium">{alt}</p>
          <p className="text-tedx-red text-sm">TEDx BITS Hyderabad {year}</p>
        </div>
      </div>
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </motion.div>
  );
};

export default GalleryItem;