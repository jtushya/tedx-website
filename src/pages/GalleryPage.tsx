import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryItem from '../components/gallery/GalleryItem';
import LightboxModal from '../components/gallery/LightboxModal';
import { Helmet } from 'react-helmet';

// Mock data for gallery
const galleryData = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Speaker presenting on stage',
    year: 2024,
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Audience during a talk',
    year: 2024,
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Panel discussion',
    year: 2023,
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Networking session',
    year: 2023,
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Keynote speaker',
    year: 2023,
  },
  {
    id: 6,
    imageUrl: 'https://images.pexels.com/photos/2277784/pexels-photo-2277784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Event venue setup',
    year: 2022,
  },
  {
    id: 7,
    imageUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Workshop session',
    year: 2022,
  },
  {
    id: 8,
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Speaker with audience',
    year: 2022,
  },
  {
    id: 9,
    imageUrl: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'TEDx stage design',
    year: 2021,
  },
  {
    id: 10,
    imageUrl: 'https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Backstage preparations',
    year: 2021,
  },
  {
    id: 11,
    imageUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Interactive exhibit',
    year: 2020,
  },
  {
    id: 12,
    imageUrl: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Audience engagement',
    year: 2020,
  },
];

const GalleryPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = Array.from(new Set(galleryData.map(item => item.year))).sort((a, b) => b - a);
  
  const filteredGallery = selectedYear 
    ? galleryData.filter(item => item.year === selectedYear)
    : galleryData;

  const openLightbox = (index: number) => {
    const filteredIndex = filteredGallery.findIndex(item => item.id === filteredGallery[index].id);
    setCurrentImageIndex(filteredIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < filteredGallery.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
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
        <title>Gallery | TEDx BITS Hyderabad 2025</title>
        <meta name="description" content="Explore visual highlights from past TEDx BITS Hyderabad events, featuring speakers, audience moments, and behind-the-scenes glimpses." />
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
                <span className="text-tedx-red">Gallery</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Relive the moments from past TEDx BITS Hyderabad events through our curated collection of photographs capturing the essence of ideas worth spreading.
              </p>
            </motion.div>
            
            {/* Year filter */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              <button
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedYear === null ? 'bg-tedx-red text-white' : 'bg-tedx-gray/50 text-gray-300 hover:bg-tedx-gray'
                }`}
                onClick={() => setSelectedYear(null)}
              >
                All Years
              </button>
              {years.map(year => (
                <button
                  key={year}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedYear === year ? 'bg-tedx-red text-white' : 'bg-tedx-gray/50 text-gray-300 hover:bg-tedx-gray'
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
            
            {/* Gallery grid with Masonry layout */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredGallery.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className={`${
                    index % 5 === 0 ? 'row-span-2 col-span-2' : 
                    index % 7 === 0 ? 'row-span-2' : ''
                  } overflow-hidden`}
                >
                  <GalleryItem
                    imageUrl={item.imageUrl}
                    alt={item.alt}
                    year={item.year}
                    onClick={() => openLightbox(index)}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {filteredGallery.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No images found for the selected year.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {filteredGallery.length > 0 && (
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          currentImage={filteredGallery[currentImageIndex]}
          onPrev={goToPrevImage}
          onNext={goToNextImage}
          hasPrev={currentImageIndex > 0}
          hasNext={currentImageIndex < filteredGallery.length - 1}
        />
      )}
    </>
  );
};

export default GalleryPage;