import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Users } from "lucide-react";
import ownerImg from "@/assets/owner-portrait.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-shimmer" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            About Professional Parlour
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
              
              <div className="relative rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={ownerImg}
                  alt="Md. Pari - Owner"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                      Md. Pari
                    </h3>
                    <p className="text-primary font-medium">Owner & Beauty Expert</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              Professional is a luxury ladies beauty parlour dedicated to enhancing natural beauty with premium care and expert techniques.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience in beauty, styling, and grooming, we ensure every client feels confident, elegant, and refreshed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {[
                { icon: Heart, label: "Premium Care", value: "100%" },
                { icon: Award, label: "Expert Team", value: "5+ Years" },
                { icon: Users, label: "Happy Clients", value: "1000+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-background shadow-soft hover:shadow-elegant transition-shadow"
                >
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-lg bg-secondary border-l-4 border-primary"
            >
              <p className="text-foreground italic">
                "A passionate beauty expert delivering flawless services with love, care, and professionalism."
              </p>
              <p className="text-sm text-primary font-semibold mt-2">- Md. Pari</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
