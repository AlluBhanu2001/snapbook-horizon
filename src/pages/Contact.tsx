
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, CheckCircle, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send the data to a backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible."
    });
    
    setIsSubmitted(true);
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
                Get in Touch
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Have questions about our services? Want to learn more about how Snapbook works?
                We're here to help. Reach out to our team using the form below.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Information Cards */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Our friendly team is here to help
                    </p>
                    <a href="mailto:hello@snapbook.com" className="text-primary font-medium hover:underline">
                      hello@snapbook.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Come say hello at our office
                    </p>
                    <address className="not-italic text-center">
                      123 Photography Lane<br />
                      Suite 101<br />
                      San Francisco, CA 94103
                    </address>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Mon-Fri from 8am to 5pm
                    </p>
                    <a href="tel:+1-555-123-4567" className="text-primary font-medium hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-6">Send Us a Message</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">General Inquiries</h3>
                      <p className="text-muted-foreground text-sm">
                        Questions about how our platform works, pricing, or general information.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Camera className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">For Photographers</h3>
                      <p className="text-muted-foreground text-sm">
                        Interested in joining our platform as a photographer? We'd love to hear from you.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-muted-foreground text-sm">
                        We respond to all inquiries within 24 hours during business days (Monday-Friday).
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <iframe 
                    title="Snapbook Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0976317514987!2d-122.41941702392136!3d37.77492971456601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858093e8d8c2c7%3A0x71c1def07d25b481!2sCivic%20Center%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1704992049314!5m2!1sen!2sus" 
                    width="100%" 
                    height="250" 
                    className="rounded-xl border border-border"
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl p-6 shadow-sm border">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is your message about?"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className="resize-none"
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="rounded-full button-shine w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                ) : (
                  <div className="bg-card rounded-xl p-8 shadow-sm border text-center h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      Thank you for contacting us. We've received your message and will 
                      get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                      Send Another Message
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
