import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = ({ onBookingClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu on link click
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Professional
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection("bridal")} className="text-foreground hover:text-primary transition-colors">Bridal</button>
            <button onClick={() => scrollToSection("party")} className="text-foreground hover:text-primary transition-colors">Party</button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">About</button>
            <Button onClick={onBookingClick} size="sm" className="bg-gradient-primary hover:shadow-glow transition-all">
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button onClick={onBookingClick} size="sm" className="bg-gradient-primary">
              Book Now
            </Button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden flex flex-col items-center gap-4 mt-4"
          >
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection("bridal")} className="text-foreground hover:text-primary transition-colors">Bridal</button>
            <button onClick={() => scrollToSection("party")} className="text-foreground hover:text-primary transition-colors">Party</button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">About</button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
