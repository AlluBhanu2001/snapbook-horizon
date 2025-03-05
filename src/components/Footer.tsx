
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-16">
      <div className="container mx-auto">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Join Our Newsletter</h3>
            <p className="text-white/70 mb-6">Get exclusive offers, photography tips, and updates on our latest collections.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Button size="lg" className="shrink-0 bg-white text-black hover:bg-white/90 h-12 button-shine">
                Subscribe <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block text-2xl font-semibold mb-2">
              <span className="text-white">Snap</span>
              <span className="text-white/80">book</span>
            </Link>
            <p className="text-white/70 text-sm max-w-xs">
              Connecting clients with professional photographers for stunning photoshoots and unforgettable moments.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors inline-block">Home</Link>
              </li>
              <li>
                <Link to="/photographers" className="text-white/70 hover:text-white transition-colors inline-block">Photographers</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-white/70 hover:text-white transition-colors inline-block">Book Appointment</Link>
              </li>
              <li>
                <Link to="/albums" className="text-white/70 hover:text-white transition-colors inline-block">Photo Albums</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors inline-block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Photography Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors inline-block">Wedding Photography</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors inline-block">Portrait Sessions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors inline-block">Commercial Shoots</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors inline-block">Event Coverage</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors inline-block">Travel Photography</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-white/70 mt-1" />
                <span className="text-white/70">123 Photography Lane, Creative City, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-white/70" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-white/70" />
                <span className="text-white/70">info@snapbook.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {currentYear} Snapbook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
