
import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Folder, Image, Grid3X3, Grid2X2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlbumCard from "@/components/AlbumCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Dummy data for albums
const dummyAlbums = [
  {
    id: "album1",
    title: "Wedding Collection",
    category: "Wedding",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 150
  },
  {
    id: "album2",
    title: "Urban Portraits",
    category: "Portrait",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 42
  },
  {
    id: "album3",
    title: "Summer Fashion",
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 86
  },
  {
    id: "album4",
    title: "City Landscapes",
    category: "Landscape",
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 64
  },
  {
    id: "album5",
    title: "Corporate Events",
    category: "Event",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 118
  },
  {
    id: "album6",
    title: "Travel Moments",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 95
  },
  {
    id: "album7",
    title: "Product Showcase",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 37
  },
  {
    id: "album8",
    title: "Family Portraits",
    category: "Portrait",
    imageUrl: "https://images.unsplash.com/photo-1580974852861-c381510bc98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 54
  },
  {
    id: "album9",
    title: "Beach Wedding",
    category: "Wedding",
    imageUrl: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    photoCount: 132
  },
];

const Albums = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [grid, setGrid] = useState<string>("3x3");
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  // Get unique categories
  const categories = ["All", ...new Set(dummyAlbums.map(album => album.category))];

  // Filter albums by search term and category
  const filteredAlbums = dummyAlbums.filter(album => {
    const matchesSearch = album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         album.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || selectedCategory === "All" || 
                           album.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAlbumClick = (albumId: string) => {
    setSelectedAlbum(albumId);
    // Here you would normally fetch the photos in the album
    // For now, we'll just open a modal with the album info
  };

  // Close the modal
  const closeModal = () => {
    setSelectedAlbum(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 py-16">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
                Photo Collections & Albums
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Browse our curated collection of professional photography albums across various styles and categories
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Image className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for albums..."
                  className="pl-10 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Filters Section */}
        <section className="py-8 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 mr-2">
                  <Filter size={16} className="text-muted-foreground" />
                  <span className="text-sm font-medium">Categories:</span>
                </div>
                
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category === "All" ? null : category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">View:</span>
                <ToggleGroup type="single" value={grid} onValueChange={(value) => value && setGrid(value)}>
                  <ToggleGroupItem value="2x2" aria-label="2x2 Grid">
                    <Grid2X2 className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="3x3" aria-label="3x3 Grid">
                    <Grid3X3 className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
        </section>
        
        {/* Albums Grid */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            {filteredAlbums.length > 0 ? (
              <div className={`grid grid-cols-1 ${grid === '2x2' ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                {filteredAlbums.map((album, index) => (
                  <motion.div
                    key={album.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AlbumCard album={album} onClick={() => handleAlbumClick(album.id)} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Folder size={40} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No albums found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Album Viewer Modal */}
      {selectedAlbum && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-card max-w-4xl w-full rounded-xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    {dummyAlbums.find(a => a.id === selectedAlbum)?.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {dummyAlbums.find(a => a.id === selectedAlbum)?.photoCount} Photos • 
                    {dummyAlbums.find(a => a.id === selectedAlbum)?.category}
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={closeModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* This would typically be populated with actual album photos */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={`https://source.unsplash.com/random/300x300?${dummyAlbums.find(a => a.id === selectedAlbum)?.category.toLowerCase()}&sig=${i}`} 
                      alt={`Album photo ${i+1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button variant="outline" className="gap-2 mr-2" onClick={closeModal}>
                  Close
                </Button>
                <Button className="gap-2 button-shine">
                  <Image className="h-4 w-4" />
                  View All Photos
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Albums;
