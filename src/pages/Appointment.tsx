
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarIcon, Clock, Camera, CheckCircle, Calendar } from "lucide-react";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Dummy photographer data
const photographers = [
  { id: "ph1", name: "Jessica Chen" },
  { id: "ph2", name: "Marcus Johnson" },
  { id: "ph3", name: "Sophia Rivera" },
  { id: "ph4", name: "David Kim" },
  { id: "ph5", name: "Emma Thompson" },
  { id: "ph6", name: "James Wilson" },
];

const appointmentTypes = [
  "Wedding Photography",
  "Portrait Session",
  "Family Photos",
  "Corporate Event",
  "Product Photography",
  "Real Estate",
  "Fashion Photography",
  "Other"
];

const Appointment = () => {
  const [searchParams] = useSearchParams();
  const preselectedId = searchParams.get("photographer") || "";
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    photographerId: preselectedId,
    date: null as Date | null,
    time: "",
    appointmentType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send the data to a backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Appointment request submitted successfully!", {
      description: "We'll get back to you shortly to confirm your booking."
    });
    
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Book Your Photography Session
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to schedule a session with one of our professional photographers.
              We'll get back to you shortly to confirm your appointment.
            </p>
          </motion.div>

          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8 bg-card rounded-xl p-6 md:p-8 shadow-sm border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="photographerId">Select Photographer</Label>
                      <Select 
                        value={formData.photographerId} 
                        onValueChange={(value) => handleSelectChange("photographerId", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a photographer" />
                        </SelectTrigger>
                        <SelectContent>
                          {photographers.map((photographer) => (
                            <SelectItem key={photographer.id} value={photographer.id}>
                              {photographer.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Appointment Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="date">Session Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.date ? format(formData.date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="center">
                          <Calendar
                            mode="single"
                            selected={formData.date || undefined}
                            onSelect={handleDateChange}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select 
                        value={formData.time} 
                        onValueChange={(value) => handleSelectChange("time", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="appointmentType">Session Type</Label>
                      <Select 
                        value={formData.appointmentType} 
                        onValueChange={(value) => handleSelectChange("appointmentType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select session type" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Special Requests</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about any special requirements or questions you have"
                        className="resize-none"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full md:w-auto rounded-full button-shine" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Request Appointment
                  </Button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-10 shadow-sm border text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Booking Request Received!</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Thank you for booking with us. We've received your appointment request and will 
                contact you shortly to confirm the details.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                Make Another Booking
              </Button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Appointment;
