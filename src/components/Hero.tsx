
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const heroImages = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
  "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
  "https://images.unsplash.com/photo-1581452844957-c3eaeb5fba1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image Slider */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full container mx-auto flex flex-col justify-center">
        <div className="max-w-2xl px-4 md:px-0 mt-16 animate-slide-up">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm"
          >
            Capture Your Perfect Moments
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Professional Photography for Every Occasion
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-white/80 mb-8 max-w-lg"
          >
            Connect with top photographers in your area. Book, shoot, and receive stunning photos with just a few clicks.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-6 bg-white text-black hover:bg-transparent hover:text-white border-white transition-colors"
            >
              Explore Portfolios
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
