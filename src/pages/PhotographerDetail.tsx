
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Calendar, Star, MessageSquare, Camera, Award, 
  Clock, MapPin, CheckCircle, Mail, Share2 
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

// Dummy data for a photographer
const getDummyPhotographer = (id: string) => {
  const photographers = {
    "ph1": {
      id: "ph1",
      name: "Jessica Chen",
      specialty: "Wedding | Portrait",
      location: "New York, NY",
      rating: 4.9,
      reviewCount: 124,
      bio: "Award-winning photographer with over 10 years of experience specializing in weddings and portraits. My style blends traditional portraiture with candid photojournalism to capture authentic moments and emotions.",
      experience: "10+ years",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      portfolio: [
        "https://images.unsplash.com/photo-1537907510278-a4d3dfe3f37c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551063557-c09c8dc0cb42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1553364852-900af27eba52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      packages: [
        {
          name: "Basic Portrait Session",
          price: "$250",
          description: "1-hour photo session, 5 edited digital images, 1 location",
          features: ["Professional editing", "Online gallery", "Print release"]
        },
        {
          name: "Wedding Essentials",
          price: "$1,800",
          description: "6 hours of wedding day coverage, 300+ edited digital images",
          features: ["Second photographer", "Engagement session", "Online gallery", "Print release"]
        },
        {
          name: "Complete Wedding Experience",
          price: "$2,800",
          description: "Full-day wedding coverage (10 hours), 600+ edited digital images",
          features: ["Second photographer", "Engagement session", "Premium album", "Online gallery", "Print release"]
        }
      ],
      reviews: [
        {
          name: "Michael & Sarah",
          date: "March 15, 2023",
          rating: 5,
          text: "Jessica captured our wedding day perfectly! Her attention to detail and ability to capture candid moments exceeded our expectations. We're so grateful for the memories she preserved for us."
        },
        {
          name: "Jennifer L.",
          date: "February 3, 2023",
          rating: 5,
          text: "I booked Jessica for professional headshots and was blown away by the results. She made me feel comfortable throughout the session and delivered stunning images that I'm proud to use for my business."
        },
        {
          name: "Robert K.",
          date: "December 12, 2022",
          rating: 4,
          text: "Great family photo session with Jessica. She was patient with our kids and captured beautiful natural shots. Would recommend for family portraits."
        }
      ],
      available: true,
    },
    // Add other photographers here with similar structure
  };
  
  return photographers[id as keyof typeof photographers] || photographers.ph1;
};

const PhotographerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const photographer = getDummyPhotographer(id || "ph1");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/3"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border-4 border-white dark:border-gray-800 shadow-xl">
                  <img 
                    src={photographer.imageUrl} 
                    alt={photographer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-2/3"
              >
                <div className="flex items-center gap-3 mb-3">
                  {photographer.available && (
                    <Badge className="bg-green-500 hover:bg-green-600">Available for Booking</Badge>
                  )}
                  <Badge variant="outline">{photographer.experience} Experience</Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{photographer.name}</h1>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span>{photographer.location}</span>
                  <span className="mx-2">•</span>
                  <span>{photographer.specialty}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      size={18} 
                      className={i < Math.floor(photographer.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                    />
                  ))}
                  <span className="ml-2 font-semibold">{photographer.rating}</span>
                  <span className="ml-1 text-muted-foreground">({photographer.reviewCount} reviews)</span>
                </div>
                
                <p className="text-muted-foreground mb-6">{photographer.bio}</p>
                
                <div className="flex flex-wrap gap-3">
                  <Button className="gap-2 rounded-full" asChild>
                    <Link to={`/appointment?photographer=${photographer.id}`}>
                      <Calendar size={18} />
                      Book a Session
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2 rounded-full">
                    <MessageSquare size={18} />
                    Contact
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Share2 size={18} />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {photographer.portfolio.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className="aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                      >
                        <img 
                          src={image} 
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              
              {/* Packages Tab */}
              <TabsContent value="packages" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {photographer.packages.map((pkg, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                            <div className="text-2xl font-bold mb-3">{pkg.price}</div>
                            <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                            <Separator className="my-4" />
                            <ul className="space-y-2">
                              {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <CheckCircle size={16} className="text-green-500" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-6 bg-muted mt-4">
                            <Button className="w-full rounded-full">Book This Package</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              
              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">Client Reviews</h3>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i}
                            size={18} 
                            className={i < Math.floor(photographer.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                          />
                        ))}
                        <span className="ml-2 font-semibold">{photographer.rating}</span>
                        <span className="ml-1 text-muted-foreground">({photographer.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2 rounded-full">
                      <MessageSquare size={16} />
                      Write a Review
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {photographer.reviews.map((review, index) => (
                      <div key={index} className="p-6 rounded-lg border border-border">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">{review.name}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i}
                              size={14} 
                              className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Portfolio full view"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographerDetail;
