
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotographerCard from "@/components/PhotographerCard";
import { Input } from "@/components/ui/input";
import { Search, Filter, Camera } from "lucide-react";

// Dummy data for photographers
const dummyPhotographers = [
  {
    id: "ph1",
    name: "Jessica Chen",
    specialty: "Wedding | Portrait",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 124,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    available: true,
  },
  {
    id: "ph2",
    name: "Marcus Johnson",
    specialty: "Fashion | Commercial",
    location: "Los Angeles, CA",
    rating: 4.7,
    reviewCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    available: true,
  },
  {
    id: "ph3",
    name: "Sophia Rivera",
    specialty: "Travel | Landscape",
    location: "Miami, FL",
    rating: 4.8,
    reviewCount: 112,
    imageUrl: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    available: false,
  },
  {
    id: "ph4",
    name: "David Kim",
    specialty: "Event | Corporate",
    location: "Chicago, IL",
    rating: 4.6,
    reviewCount: 78,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    available: true,
  },
  {
    id: "ph5",
    name: "Emma Thompson",
    specialty: "Portrait | Family",
    location: "Seattle, WA",
    rating: 4.9,
    reviewCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    available: true,
  },
  {
    id: "ph6",
    name: "James Wilson",
    specialty: "Architecture | Real Estate",
    location: "Denver, CO",
    rating: 4.7,
    reviewCount: 92,
    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    available: false,
  },
];

const Photographers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredPhotographers = dummyPhotographers.filter(
    (photographer) =>
      photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
                  Find Your Perfect <span className="text-primary">Photographer</span>
                </h1>
                <p className="text-muted-foreground max-w-[700px] mb-8">
                  Browse our curated selection of professional photographers ready to capture your special moments
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-md"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, specialty, or location..."
                    className="pl-10 pr-4 py-6 rounded-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-muted-foreground" />
                <span className="font-medium">Filters:</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Wedding
                </button>
                <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  Portrait
                </button>
                <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  Event
                </button>
                <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  Commercial
                </button>
                <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  Travel
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Photographers Grid */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            {filteredPhotographers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPhotographers.map((photographer, index) => (
                  <motion.div
                    key={photographer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <PhotographerCard photographer={photographer} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Camera size={40} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No photographers found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Photographers;
