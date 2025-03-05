
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { Photographer } from "./PhotographerCard";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  photographers: Photographer[];
  selectedPhotographerId?: string;
}

const TimeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const BookingForm = ({ photographers, selectedPhotographerId }: BookingFormProps) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [photographerId, setPhotographerId] = useState<string>(selectedPhotographerId || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!photographerId || !date || !time || !name || !email || !phone || !sessionType) {
      toast.error("Please fill out all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your appointment has been booked successfully!", {
        description: "You will receive a confirmation email shortly.",
      });
      setIsSubmitting(false);
      navigate("/appointment/confirmation");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="space-y-2">
        <Label htmlFor="photographer">Select Photographer</Label>
        <Select 
          value={photographerId} 
          onValueChange={setPhotographerId}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a photographer" />
          </SelectTrigger>
          <SelectContent>
            {photographers.map((photographer) => (
              <SelectItem key={photographer.id} value={photographer.id}>
                {photographer.name} - {photographer.specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="date">Select Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? date.toLocaleDateString() : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 3))}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Select Time</Label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a time slot">
                {time ? (
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {time}
                  </div>
                ) : (
                  "Choose a time slot"
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {TimeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sessionType">Session Type</Label>
        <Select value={sessionType} onValueChange={setSessionType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select session type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="portrait">Portrait Photography</SelectItem>
            <SelectItem value="wedding">Wedding Photography</SelectItem>
            <SelectItem value="event">Event Coverage</SelectItem>
            <SelectItem value="family">Family Photography</SelectItem>
            <SelectItem value="commercial">Commercial Photography</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
        <Textarea 
          id="specialRequests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Any specific requirements or preferences for your photoshoot..."
          rows={4}
        />
      </div>

      <div className="flex items-start gap-2 rounded-md bg-muted/50 p-3">
        <Info size={18} className="mt-0.5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          A confirmation email will be sent to you after booking. You can reschedule or cancel your appointment up to 48 hours before the session.
        </p>
      </div>

      <Button type="submit" className="w-full button-shine" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Book Appointment"}
      </Button>
    </form>
  );
};

export default BookingForm;
