import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = ({ onBookingClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("bridal")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Bridal
            </button>
            <button
              onClick={() => scrollToSection("party")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Party
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Button
              onClick={onBookingClick}
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all"
            >
              Book Now
            </Button>
          </nav>

          <Button onClick={onBookingClick} size="sm" className="md:hidden bg-gradient-primary">
            Book Now
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
