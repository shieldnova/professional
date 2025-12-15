import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import BookingForm from "@/sections/BookingForm";
import herobg from "@/assets/herobg.jpg";

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional blur overlay (commented out) */}
      {/* <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]"></div> */}

      {/* MAIN CONTENT */}
      <div className="relative container mx-auto px-4 text-center pt-24 z-10">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            text-4xl 
            md:text-6xl 
            lg:text-7xl 
            font-display 
            font-bold 
            text-foreground 
            mb-6
            drop-shadow-lg
          "
        >
          Where Beauty Meets{" "}
          <span className="relative inline-block text-primary drop-shadow-lg">
            Perfection
            {/* Elegant underline animation */}
            <motion.span
              className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="
            text-lg 
            md:text-xl 
            text-foreground/70 
            max-w-2xl 
            mx-auto 
            mb-10
            drop-shadow-md
          "
        >
          Experience refined beauty services crafted to enhance your natural
          elegance — bridal, party, and everyday looks tailored just for you.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Button
            size="lg"
            onClick={() => setIsBookingOpen(true)}
            className="
              bg-gradient-primary 
              text-primary-foreground 
              px-10 
              text-lg 
              shadow-elegant 
              hover:shadow-glow 
              transition-all 
              duration-300
            "
          >
            <Calendar className="mr-2" />
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
              px-10 
              text-lg 
              hover:bg-primary 
              hover:text-primary-foreground 
              transition-all 
              duration-300
            "
          >
            View Services
          </Button>
        </motion.div>
      </div>

      {/* BOOKING MODAL */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};

export default Hero;
