
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotographerCard, { Photographer } from "@/components/PhotographerCard";

// Sample Data
const photographers: Photographer[] = [
  {
    id: "1",
    name: "Alex Morgan",
    specialty: "Wedding Photography",
    location: "New York",
    rating: 4.9,
    reviewCount: 128,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    available: true
  },
  {
    id: "2",
    name: "Sara Johnson",
    specialty: "Portrait Photography",
    location: "Los Angeles",
    rating: 4.8,
    reviewCount: 95,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1361&q=80",
    available: false
  },
  {
    id: "3",
    name: "Michael Chen",
    specialty: "Travel Photography",
    location: "San Francisco",
    rating: 4.7,
    reviewCount: 87,
    imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    available: true
  },
  {
    id: "4",
    name: "Emma Wilson",
    specialty: "Fashion Photography",
    location: "Miami",
    rating: 4.9,
    reviewCount: 112,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    available: true
  },
  {
    id: "5",
    name: "Daniel Smith",
    specialty: "Event Photography",
    location: "Chicago",
    rating: 4.6,
    reviewCount: 73,
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    available: false
  },
  {
    id: "6",
    name: "Olivia Brown",
    specialty: "Family Photography",
    location: "Boston",
    rating: 4.8,
    reviewCount: 104,
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    available: true
  }
];

const specialties = [
  "Wedding Photography",
  "Portrait Photography",
  "Travel Photography",
  "Fashion Photography",
  "Event Photography",
  "Family Photography"
];

const locations = [
  "New York",
  "Los Angeles",
  "San Francisco",
  "Miami",
  "Chicago",
  "Boston"
];

const Photographers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("rating");
  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSpecialties([]);
    setSelectedLocations([]);
    setSortBy("rating");
  };

  const filteredPhotographers = photographers
    .filter(photographer => 
      (searchTerm === "" || 
        photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photographer.specialty.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedSpecialties.length === 0 || selectedSpecialties.includes(photographer.specialty)) &&
      (selectedLocations.length === 0 || selectedLocations.includes(photographer.location))
    )
    .sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      } else if (sortBy === "reviews") {
        return b.reviewCount - a.reviewCount;
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const hasActiveFilters = searchTerm !== "" || selectedSpecialties.length > 0 || selectedLocations.length > 0;

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Photographer</h1>
            <p className="text-muted-foreground text-lg">
              Browse our network of professional photographers specializing in various photography styles.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Photographers */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Mobile Toggle */}
            <div className="lg:hidden w-full flex justify-between items-center mb-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setFiltersVisible(!filtersVisible)}
              >
                <Filter size={18} />
                {filtersVisible ? "Hide Filters" : "Show Filters"}
              </Button>
              
              {hasActiveFilters && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-muted-foreground"
                >
                  <X size={16} className="mr-2" /> Clear All
                </Button>
              )}
            </div>

            {/* Filters - Sidebar */}
            <aside 
              className={`w-full lg:w-64 shrink-0 space-y-6 ${filtersVisible ? 'block' : 'hidden lg:block'}`}
            >
              <div className="sticky top-24">
                <div className="pb-6 mb-6 border-b">
                  <h2 className="text-xl font-semibold mb-4">Search & Filters</h2>
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search photographers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["specialties", "locations"]} className="space-y-4">
                  <AccordionItem value="specialties" className="border-b">
                    <AccordionTrigger className="text-base font-medium">Specialties</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        {specialties.map((specialty) => (
                          <div key={specialty} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`specialty-${specialty}`}
                              checked={selectedSpecialties.includes(specialty)}
                              onCheckedChange={() => toggleSpecialty(specialty)}
                            />
                            <Label 
                              htmlFor={`specialty-${specialty}`}
                              className="text-sm cursor-pointer"
                            >
                              {specialty}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="locations" className="border-b">
                    <AccordionTrigger className="text-base font-medium">Locations</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        {locations.map((location) => (
                          <div key={location} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`location-${location}`}
                              checked={selectedLocations.includes(location)}
                              onCheckedChange={() => toggleLocation(location)}
                            />
                            <Label 
                              htmlFor={`location-${location}`}
                              className="text-sm cursor-pointer flex items-center"
                            >
                              <MapPin size={14} className="mr-1 text-muted-foreground" />
                              {location}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Clear Filters - Desktop */}
                {hasActiveFilters && (
                  <Button 
                    variant="outline" 
                    className="mt-6 w-full justify-center text-muted-foreground hidden lg:flex"
                    onClick={resetFilters}
                  >
                    <X size={16} className="mr-2" /> Clear All Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Photographers List */}
            <div className="flex-1">
              {/* Sort Controls */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-muted-foreground">
                  {filteredPhotographers.length} photographer{filteredPhotographers.length !== 1 ? 's' : ''} found
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                      <SelectItem value="reviews">Most Reviews</SelectItem>
                      <SelectItem value="name">Name (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Photographers Grid */}
              {filteredPhotographers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPhotographers.map((photographer, index) => (
                    <motion.div
                      key={photographer.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <PhotographerCard photographer={photographer} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">No photographers found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Photographers;
