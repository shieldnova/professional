import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisha R.",
    text: "Best parlour experience ever! My bridal makeup was flawless.",
    rating: 5,
  },
  {
    name: "Komal S.",
    text: "Loved the service! The staff was very polite and professional.",
    rating: 5,
  },
  {
    name: "Pooja M.",
    text: "My go-to place for grooming. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya K.",
    text: "Amazing party makeup! I received so many compliments.",
    rating: 5,
  },
  {
    name: "Neha T.",
    text: "Professional service with attention to detail. Love it!",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read the love and trust from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-elegant group h-full">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <p className="text-primary font-semibold">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
