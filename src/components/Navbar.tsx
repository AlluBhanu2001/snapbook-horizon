
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  // Determine navbar background color based on scroll position and current page
  const getNavbarBackground = () => {
    if (isScrolled) {
      return "bg-white/95 backdrop-blur-sm shadow-sm";
    } else if (isHomePage) {
      return "bg-transparent";
    } else {
      return "bg-white";
    }
  };

  // Determine text color based on scroll position and current page
  const getTextColor = () => {
    if (!isScrolled && isHomePage) {
      return "text-white";
    } else {
      return "text-foreground";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className={`flex items-center gap-2 text-2xl font-semibold font-heading ${getTextColor()}`}
        >
          <span className="text-primary">Snap</span>
          <span className={getTextColor()}>book</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`navbar-link ${getTextColor()} ${isActive("/") ? "navbar-link-active" : ""}`}
          >
            Home
          </Link>
          <Link 
            to="/photographers" 
            className={`navbar-link ${getTextColor()} ${isActive("/photographers") ? "navbar-link-active" : ""}`}
          >
            Photographers
          </Link>
          <Link 
            to="/appointment" 
            className={`navbar-link ${getTextColor()} ${isActive("/appointment") ? "navbar-link-active" : ""}`}
          >
            Appointment
          </Link>
          <Link 
            to="/albums" 
            className={`navbar-link ${getTextColor()} ${isActive("/albums") ? "navbar-link-active" : ""}`}
          >
            Albums
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${getTextColor()} ${isActive("/contact") ? "navbar-link-active" : ""}`}
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${getTextColor()} ${isActive("/about") ? "navbar-link-active" : ""}`}
          >
            About
          </Link>
          <Button 
            size="sm" 
            variant="ghost" 
            asChild 
            className={`ml-4 rounded-full px-6 ${
              !isScrolled && isHomePage ? "text-white hover:text-white/90 hover:bg-white/10" : "text-foreground"
            }`}
          >
            <Link to="/login">Login</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex items-center justify-center h-10 w-10 ${getTextColor()}`}
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
          <Link 
            to="/about" 
            className={`py-3 border-b border-border ${isActive("/about") ? "text-primary" : ""}`}
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link 
            to="/login" 
            className={`py-3 border-b border-border ${isActive("/login") ? "text-primary" : ""}`}
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
