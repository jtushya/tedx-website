import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: {
    imageUrl: string;
    alt: string;
    year: number;
  };
  onPrev: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  currentImage,
  onPrev,
  onNext,
  hasNext,
  hasPrev,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, hasPrev, hasNext, onPrev, onNext]);

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <button
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-tedx-red/80 transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            {hasPrev && (
              <button
                className="p-2 rounded-full bg-black/50 hover:bg-tedx-red/80 transition-colors"
                onClick={onPrev}
              >
                <ChevronLeft size={30} />
              </button>
            )}
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center">
            {hasNext && (
              <button
                className="p-2 rounded-full bg-black/50 hover:bg-tedx-red/80 transition-colors"
                onClick={onNext}
              >
                <ChevronRight size={30} />
              </button>
            )}
          </div>

          {/* Image container */}
          <motion.div
            className="relative max-w-5xl max-h-[80vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <img
              src={currentImage.imageUrl}
              alt={currentImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70">
              <p className="text-white font-medium">{currentImage.alt}</p>
              <p className="text-tedx-red text-sm">TEDx BITS Hyderabad {currentImage.year}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LightboxModal;