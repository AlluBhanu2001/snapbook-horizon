
import { motion } from "framer-motion";
import { Camera, Clock, Award, ShieldCheck, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Photography enthusiast with 15+ years of experience who founded Snapbook to connect talented photographers with clients."
  },
  {
    name: "Michael Chen",
    role: "Head of Photography",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Award-winning photographer with expertise in multiple styles who curates our photographer selection process."
  },
  {
    name: "Olivia Rodriguez",
    role: "Customer Experience",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Dedicated to ensuring clients and photographers have seamless, positive experiences on our platform."
  },
  {
    name: "James Wilson",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Tech expert who built and maintains our booking platform to ensure a smooth experience for everyone."
  }
];

const values = [
  {
    icon: Camera,
    title: "Artistic Excellence",
    description: "We believe in the power of photography to tell stories and create lasting memories through artistic expression."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We're committed to punctuality, consistency, and following through on every commitment we make."
  },
  {
    icon: Award,
    title: "Quality",
    description: "We maintain the highest standards for our photographers and ensure exceptional quality in every session."
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "We build relationships based on transparency, honesty, and delivering on our promises."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're driven by our love for photography and helping people capture their most precious moments."
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive community of photographers and clients who share a love for visual storytelling."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 text-center md:text-left"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6">
                  The Story Behind <span className="text-primary">Snapbook</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  We're on a mission to connect talented photographers with people who want 
                  to capture life's most precious moments through professional photography.
                </p>
                <Button className="rounded-full" size="lg">
                  Join Our Community
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-1/2"
              >
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Photography team at work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 rounded-lg bg-primary text-primary-foreground p-4 shadow-lg">
                    <p className="text-sm font-medium">Founded in 2018</p>
                    <p className="text-xs opacity-80">5+ years connecting moments</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission & Vision</h2>
              <p className="text-muted-foreground text-lg">
                At Snapbook, we believe everyone deserves access to professional photography 
                that captures life's special moments. Our platform makes it easy to find and 
                book the perfect photographer for any occasion.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Why We Started</h3>
                <p className="text-muted-foreground mb-4">
                  Snapbook was born from a simple observation: finding and booking the right 
                  photographer was unnecessarily complicated. Our founder, Sarah Johnson, 
                  experienced this firsthand when planning her wedding.
                </p>
                <p className="text-muted-foreground mb-4">
                  After hours of searching online, reading reviews, and trying to coordinate 
                  schedules with photographers who were often slow to respond, she realized there 
                  had to be a better way.
                </p>
                <p className="text-muted-foreground">
                  That's when the idea for Snapbook was born — a platform that makes it simple 
                  to discover talented photographers, view their work, read verified reviews, 
                  and book them instantly.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">Where We're Going</h3>
                <p className="text-muted-foreground mb-4">
                  Our vision is to become the world's largest and most trusted photography booking 
                  platform. We're constantly adding new features and expanding our network of 
                  photographers to serve more clients in more locations.
                </p>
                <p className="text-muted-foreground mb-4">
                  We're also dedicated to empowering photographers to grow their businesses by 
                  connecting them with clients who value their work and providing tools to 
                  manage their bookings efficiently.
                </p>
                <p className="text-muted-foreground">
                  Above all, we measure our success by the moments we help preserve — the weddings, 
                  family reunions, graduations, and everyday milestones that become cherished 
                  memories through the lens of a skilled photographer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
              <p className="text-muted-foreground text-lg">
                These principles guide everything we do at Snapbook, from how we build our platform 
                to how we interact with photographers and clients.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg">
                The passionate people behind Snapbook who are dedicated to connecting photographers 
                with clients and preserving special moments.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-background shadow-md">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
