
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Users, Award, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PhotographerCard, { Photographer } from "@/components/PhotographerCard";
import AlbumCard, { Album } from "@/components/AlbumCard";
import GalleryModal from "@/components/GalleryModal";

// Sample Data
const featuredPhotographers: Photographer[] = [
  {
    id: "1",
    name: "Alex Morgan",
    specialty: "Wedding Photography",
    location: "New York",
    rating: 4.9,
    reviewCount: 128,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    available: true
  },
  {
    id: "2",
    name: "Sara Johnson",
    specialty: "Portrait Photography",
    location: "Los Angeles",
    rating: 4.8,
    reviewCount: 95,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
    available: false
  },
  {
    id: "3",
    name: "Michael Chen",
    specialty: "Travel Photography",
    location: "San Francisco",
    rating: 4.7,
    reviewCount: 87,
    imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    available: true
  }
];

const featuredAlbums: Album[] = [
  {
    id: "1",
    title: "Urban Weddings",
    category: "Wedding",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    photoCount: 48
  },
  {
    id: "2",
    title: "Natural Portraits",
    category: "Portrait",
    imageUrl: "https://images.unsplash.com/photo-1604004215402-e0be233f39be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    photoCount: 32
  },
  {
    id: "3",
    title: "Vibrant Events",
    category: "Event",
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    photoCount: 56
  },
  {
    id: "4",
    title: "Nature Escapes",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    photoCount: 64
  }
];

// Sample photos for the gallery modal
const samplePhotos = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Wedding photo"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80",
    alt: "Wedding photo"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    alt: "Wedding photo"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1512979797859-170fcf162240?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    alt: "Wedding photo"
  }
];

const Index = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);

  const openGallery = (albumId: string) => {
    setSelectedAlbumId(albumId);
    setGalleryOpen(true);
  };

  return (
    <>
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Snapbook</h2>
            <p className="text-muted-foreground">
              We connect clients with talented photographers to create stunning visual memories that will last forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="h-10 w-10 text-primary" />,
                title: "Professional Photographers",
                description: "Our platform features carefully vetted professional photographers with years of experience."
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Easy Booking Process",
                description: "Book your photography session in minutes with our simple and intuitive booking system."
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Quality Guaranteed",
                description: "We ensure the highest quality of service and customer satisfaction with every booking."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-border bg-background/50 hover:shadow-lg hover:bg-background transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photographers Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Photographers</h2>
              <p className="text-muted-foreground max-w-2xl">
                Browse our selection of talented professional photographers ready to capture your special moments.
              </p>
            </div>
            <Button 
              variant="outline" 
              size="lg" 
              className="mt-4 md:mt-0"
              asChild
            >
              <Link to="/photographers">
                View All Photographers <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhotographers.map((photographer, index) => (
              <motion.div
                key={photographer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PhotographerCard photographer={photographer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-white/70">
              Don't just take our word for it — hear from some of our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with Snapbook was a dream. They matched us with the perfect photographer for our wedding.",
                author: "Emily & David",
                role: "Wedding Clients",
                rating: 5
              },
              {
                quote: "The booking process was seamless, and the photographer was incredibly professional and talented.",
                author: "Michael Turner",
                role: "Corporate Event",
                rating: 5
              },
              {
                quote: "Our family portraits turned out beautifully. We'll definitely be using Snapbook again!",
                author: "Sarah Johnson",
                role: "Family Session",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-white/90 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Albums</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our collection of beautiful photography albums across various categories.
              </p>
            </div>
            <Button 
              variant="outline" 
              size="lg" 
              className="mt-4 md:mt-0"
              asChild
            >
              <Link to="/albums">
                Browse All Albums <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAlbums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AlbumCard album={album} onClick={() => openGallery(album.id)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1566583285501-9de4d0b4821b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Capture Your Special Moments?</h2>
            <p className="text-white/80 text-lg mb-8">
              Book a professional photographer today and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-white text-black hover:bg-white/90 button-shine"
                asChild
              >
                <Link to="/appointment">Book a Photographer</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Gallery Modal */}
      <GalleryModal 
        isOpen={galleryOpen} 
        onClose={() => setGalleryOpen(false)} 
        photos={samplePhotos}
      />
    </>
  );
};

export default Index;
