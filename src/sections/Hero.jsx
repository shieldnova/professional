import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";
import BookingForm from "@/sections/BookingForm"; // import the form

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-shimmer">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating Sparkles */}
      <motion.div
        className="absolute top-20 left-10 text-primary/30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      {/* ... other sparkles and content ... */}

      <div className="container mx-auto px-4 z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
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

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 group"
            >
              <Calendar className="mr-2 group-hover:rotate-12 transition-transform" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8"
            >
              View Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* BookingForm modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};

export default Hero;
