import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star, PartyPopper } from "lucide-react";
import partyImg from "@/assets/party-glam.jpg";

const partyServices = [
  "Party Makeup (Light, Glam, Bold)",
  "Festive Hairstyling",
  "Saree/Lehenga Draping",
  "Cocktail Look Enhancements",
  "Glitter, Glow, and HD options",
];

const Party = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="party" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 animate-float">
          <Star className="w-20 h-20 text-primary" />
        </div>
        <div className="absolute bottom-20 right-1/4 animate-float" style={{ animationDelay: "1s" }}>
          <PartyPopper className="w-24 h-24 text-primary" />
        </div>
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
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PartyPopper className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Party Grooming
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Shine at every celebration with our glamorous party looks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-elegant group">
              <img
                src={partyImg}
                alt="Party Makeup"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Animated sparkles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {partyServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-glow group cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform">
                        <Star className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {service}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Party;
