import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Sparkles, Heart, Star } from "lucide-react";
import bridalImg from "@/assets/bridal-makeup.jpg";

const bridalServices = [
  {
    title: "HD / Ultra HD Bridal Makeup",
    icon: Crown,
  },
  {
    title: "Bridal Hairstyling",
    icon: Sparkles,
  },
  {
    title: "Saree Draping & Styling",
    icon: Heart,
  },
  {
    title: "Full Pre-Bridal Skin Care",
    icon: Star,
  },
  {
    title: "Haldi / Engagement / Reception Looks",
    icon: Sparkles,
  },
  {
    title: "Long-Lasting Waterproof Makeup",
    icon: Crown,
  },
];

const Bridal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bridal" className="py-20 bg-gradient-shimmer relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <Crown className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Heart className="w-24 h-24 text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Crown className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Bridal Grooming
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Make your special day unforgettable with our premium bridal services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bridalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-glow group cursor-pointer">
                    <CardContent className="p-6 flex items-start gap-3">
                      <div className="p-2 rounded-full bg-gradient-gold group-hover:scale-110 transition-transform">
                        <service.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-lg overflow-hidden shadow-elegant group">
              <img
                src={bridalImg}
                alt="Bridal Makeup"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Floating sparkles on image */}
              <motion.div
                className="absolute top-10 right-10"
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-white drop-shadow-glow" />
              </motion.div>
              <motion.div
                className="absolute bottom-20 left-10"
                animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Star className="w-6 h-6 text-white drop-shadow-glow" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bridal;
