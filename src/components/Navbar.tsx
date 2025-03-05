
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu when location changes (page navigation)
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-semibold font-heading"
        >
          <span className="text-primary">Snap</span>
          <span className="text-foreground">book</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`navbar-link ${isActive("/") ? "navbar-link-active" : ""}`}>
            Home
          </Link>
          <Link to="/photographers" className={`navbar-link ${isActive("/photographers") ? "navbar-link-active" : ""}`}>
            Photographers
          </Link>
          <Link to="/appointment" className={`navbar-link ${isActive("/appointment") ? "navbar-link-active" : ""}`}>
            Appointment
          </Link>
          <Link to="/albums" className={`navbar-link ${isActive("/albums") ? "navbar-link-active" : ""}`}>
            Albums
          </Link>
          <Link to="/contact" className={`navbar-link ${isActive("/contact") ? "navbar-link-active" : ""}`}>
            Contact
          </Link>
          <Button size="sm" className="ml-4 rounded-full px-6 button-shine">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10 text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col pt-20 pb-6 px-6 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col gap-4 text-lg font-medium">
          <Link 
            to="/" 
            className={`py-3 border-b border-border ${isActive("/") ? "text-primary" : ""}`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/photographers" 
            className={`py-3 border-b border-border ${isActive("/photographers") ? "text-primary" : ""}`}
            onClick={toggleMobileMenu}
          >
            Photographers
          </Link>
          <Link 
            to="/appointment" 
            className={`py-3 border-b border-border ${isActive("/appointment") ? "text-primary" : ""}`}
            onClick={toggleMobileMenu}
          >
            Appointment
          </Link>
          <Link 
            to="/albums" 
            className={`py-3 border-b border-border ${isActive("/albums") ? "text-primary" : ""}`}
            onClick={toggleMobileMenu}
          >
            Albums
          </Link>
          <Link 
            to="/contact" 
            className={`py-3 border-b border-border ${isActive("/contact") ? "text-primary" : ""}`}
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <Button size="lg" className="mt-4 w-full rounded-full button-shine">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
