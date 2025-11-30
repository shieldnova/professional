import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Scissors, Brush } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";
import BookingForm from "@/sections/BookingForm";

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToServices = () => {
    const el = document.getElementById("services");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-shimmer">
      
      {/* Background Image + overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* 🌸 Floating Beauty Elements */}
      <motion.div
        className="absolute top-32 left-10 text-primary/40"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Scissors className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute top-56 right-16 text-primary/30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Brush className="w-10 h-10" />
      </motion.div>

      {/* Petal (soft pink) */}
      <motion.div
        className="absolute bottom-24 left-20 w-4 h-4 rounded-full bg-secondary opacity-70"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow Bokeh Circle */}
      <motion.div
        className="absolute bottom-10 right-24 w-20 h-20 bg-primary/10 rounded-full blur-2xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sparkles */}
      <motion.div
        className="absolute top-20 left-10 text-primary/30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      {/* Medium Red-to-Gold Blob Behind Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-gradient-to-r from-red-500 via-pink-400 to-red-300 opacity-20 filter blur-3xl z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4 leading-tight relative z-10">
            Where Beauty Meets{" "}
            <span className="text-primary relative">
              Perfection
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Experience the ultimate pampering at our salon — offering bridal, party, and everyday beauty services tailored to your unique style.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="
                bg-gradient-primary 
                text-primary-foreground 
                hover:shadow-glow 
                transition-all 
                text-lg 
                px-8 
                group
              "
            >
              <Calendar className="mr-2 group-hover:rotate-12 transition-transform" />
              Book Appointment
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="
                border-2 
                border-primary 
                text-primary 
                hover:bg-primary 
                hover:text-primary-foreground 
                transition-all 
                text-lg 
                px-8
              "
            >
              View Services
            </Button>
          </motion.div>

          {/* Floating Scroll Down Button */}
          <motion.button
            onClick={scrollToServices}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary z-10"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm uppercase tracking-widest">Scroll Down</span>
            <motion.div
              className="w-4 h-4 border-b-2 border-r-2 border-primary rotate-45"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};

export default Hero;
