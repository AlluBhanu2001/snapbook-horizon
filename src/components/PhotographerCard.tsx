
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MessageSquare, Camera, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Photographer {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  available: boolean;
}

interface PhotographerCardProps {
  photographer: Photographer;
}

const PhotographerCard = ({ photographer }: PhotographerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white dark:bg-black/30 rounded-xl overflow-hidden shadow-lg transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Availability Badge */}
      {photographer.available && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-green-500 text-white text-xs rounded-full">
          Available Today
        </div>
      )}
      
      {/* Image */}
      <div className="h-64 overflow-hidden">
        <img 
          src={photographer.imageUrl} 
          alt={photographer.name}
          loading="lazy" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{photographer.name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{photographer.rating}</span>
            <span className="ml-1 text-xs text-muted-foreground">({photographer.reviewCount})</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">{photographer.specialty} • {photographer.location}</p>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Camera size={16} className="mr-1" />
            <span>Portfolio</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MessageSquare size={16} className="mr-1" />
            <span>Reviews</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1 rounded-full" 
            asChild
          >
            <Link to={`/photographers/${photographer.id}`}>View Profile</Link>
          </Button>
          <Button 
            className="flex-1 rounded-full button-shine" 
            asChild
          >
            <Link to={`/appointment?photographer=${photographer.id}`}>
              <CalendarCheck size={16} className="mr-2" /> Book
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />
    </div>
  );
};

export default PhotographerCard;
