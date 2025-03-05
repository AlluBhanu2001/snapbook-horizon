
import { useState } from "react";

export interface Album {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  photoCount: number;
}

interface AlbumCardProps {
  album: Album;
  onClick: () => void;
}

const AlbumCard = ({ album, onClick }: AlbumCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="group cursor-pointer relative overflow-hidden rounded-xl aspect-[4/5] bg-muted"
      onClick={onClick}
    >
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Image */}
      <img 
        src={album.imageUrl} 
        alt={album.title}
        loading="lazy" 
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-xs text-white/80 mb-1 font-medium">{album.category}</span>
        <h3 className="text-xl font-semibold text-white mb-1">{album.title}</h3>
        <p className="text-sm text-white/70">{album.photoCount} Photos</p>
      </div>
    </div>
  );
};

export default AlbumCard;
