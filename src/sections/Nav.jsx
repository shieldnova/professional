import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message =
      "Hello Pari Makeup Studio 👋 I would like to know more about your beauty services.";
    const url = `https://wa.me/919182497775?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer select-none"
        >
          <h1 className="text-xl md:text-2xl font-display font-bold text-foreground">
            Pari{" "}
            <span className="text-primary font-semibold">
              Makeup Studio
            </span>
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {["services", "bridal", "party", "about"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="
                relative text-sm font-medium text-foreground/80 
                hover:text-primary transition-colors
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
                after:w-0 after:bg-primary after:transition-all
                hover:after:w-full
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <Button
            onClick={openWhatsApp}
            className="
              bg-gradient-primary 
              text-primary-foreground 
              px-6 
              shadow-elegant 
              hover:shadow-glow 
              transition-all
            "
          >
            Contact
          </Button>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="md:hidden flex items-center gap-3">
          <Button
            onClick={openWhatsApp}
            size="sm"
            className="bg-gradient-primary text-primary-foreground"
          >
            Contact
          </Button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden bg-background/95 backdrop-blur-md 
              border-t border-border
            "
          >
            <nav className="flex flex-col items-center gap-6 py-6">
              {["services", "bridal", "party", "about"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="
                    text-base font-medium text-foreground/80 
                    hover:text-primary transition-colors
                  "
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}

              <Button
                onClick={openWhatsApp}
                className="
                  mt-2 bg-gradient-primary 
                  text-primary-foreground 
                  w-[80%]
                "
              >
                Contact on WhatsApp
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
