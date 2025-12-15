import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scissors, HandMetal, Paintbrush, Flower2, Users, Eye } from "lucide-react";
import facialImg from "@/assets/facial-treatment.jpg";
import hairImg from "@/assets/hair-styling.jpg";
import manicureImg from "@/assets/manicure-pedicure.jpg";
import nailArtImg from "@/assets/nail-art.jpg";
import threadImg from "@/assets/threading.png";

const services = [
  {
    title: "Facial Treatments",
    description: "Deep cleansing, glow facials, skin rejuvenation",
    icon: Sparkles,
    image: facialImg,
  },
  {
    title: "Hair Styling",
    description: "Straightening, curls, waves, smoothening",
    icon: Scissors,
    image: hairImg,
  },
  {
    title: "Manicure & Pedicure",
    description: "Spa, nail care, cuticle treatment",
    icon: HandMetal,
    image: manicureImg,
  },
  {
    title: "Nail Art",
    description: "Designer nails, gel polish, creative designs",
    icon: Paintbrush,
    image: nailArtImg,
  },
  {
    title: "Waxing",
    description: "Full body, arms, legs, underarms, painless strips",
    icon: Flower2,
  },
  {
    title: "Hair Spa",
    description: "Relaxing, nourishing scalp treatments",
    icon: Users,
  },
  {
    title: "Eyebrow Threading",
    description: "Perfectly shaped brows",
    icon:Eye,
    image:threadImg,
  },
    {
    title: "Home Services",
    description: "All Services Near Your Door Steps",
    icon: Eye,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience luxury beauty treatments tailored to perfection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary/50 transition-all hover:shadow-elegant">
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-secondary group-hover:bg-primary transition-colors">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
