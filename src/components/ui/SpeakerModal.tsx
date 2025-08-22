import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  title: string;
  talkTitle: string;
  photoUrl: string;
  bio: string;
  year: number;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({
  isOpen,
  onClose,
  name,
  title,
  talkTitle,
  photoUrl,
  bio,
  year
}) => {
  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative max-w-3xl w-full bg-tedx-gray rounded-xl overflow-hidden glass"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button
              className="absolute top-4 right-4 z-10 p-1 rounded-full bg-black/50 hover:bg-tedx-red/80 transition-colors"
              onClick={onClose}
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto relative gradient-overlay">
                <img
                  src={photoUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <div className="inline-block px-3 py-1 mb-2 bg-tedx-red text-white text-sm rounded-full">
                    TEDx {year}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{name}</h3>
                <p className="text-tedx-red font-medium">{title}</p>
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <h4 className="text-xl font-semibold text-white mb-2">"{talkTitle}"</h4>
                  <p className="text-gray-300 mb-4">{bio}</p>
                  
                  <div className="flex gap-4">
                    <a 
                      href="#watch-talk" 
                      className="btn-3d"
                    >
                      Watch Talk
                    </a>
                    <a 
                      href="#speaker-profile" 
                      className="px-4 py-2 border border-white/20 hover:border-white/50 rounded-lg transition-all duration-300"
                    >
                      Full Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpeakerModal;