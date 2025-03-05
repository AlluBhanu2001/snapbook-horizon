
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: string;
  src: string;
  alt: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  initialPhotoIndex?: number;
}

const GalleryModal = ({ isOpen, onClose, photos, initialPhotoIndex = 0 }: GalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialPhotoIndex);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentIndex(initialPhotoIndex);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, initialPhotoIndex]);

  if (!isOpen) return null;

  const currentPhoto = photos[currentIndex];

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext(e as unknown as React.MouseEvent);
    if (e.key === "ArrowLeft") goToPrevious(e as unknown as React.MouseEvent);
    if (e.key === "Escape") onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <button 
        className="absolute top-6 right-6 z-10 text-white/80 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X size={28} />
      </button>

      {/* Navigation Buttons */}
      {photos.length > 1 && (
        <>
          <button 
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-colors"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-colors"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image Container */}
      <div 
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={currentPhoto.src} 
          alt={currentPhoto.alt} 
          className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full text-white/80 text-sm">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default GalleryModal;
