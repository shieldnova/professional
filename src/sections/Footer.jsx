import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Instagram
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Pari <span className="text-primary">Makeup Studio</span>
            </h3>

            <p className="text-muted-foreground mb-5 leading-relaxed">
              A premium beauty destination in Guntur, specializing in bridal,
              party, and everyday makeup — crafted with elegance and care.
            </p>

            <a
              href="https://www.instagram.com/parimakeupstudio777"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-muted-foreground hover:text-primary
                transition-colors
              "
            >
              <Instagram className="w-5 h-5" />
              <span>@parimakeupstudio777</span>
            </a>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["services", "bridal", "party", "about"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="
                      text-muted-foreground hover:text-primary
                      transition-colors capitalize
                    "
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Lakshmipuram Main Road, opp. Sri Patibandla Sitaramaiah High School,
                  Beside Bajaj Electronics, Guntur.
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919182497775"
                  className="hover:text-primary transition-colors"
                >
                  +91 91824 97775
                </a>
              </li>
            </ul>
          </motion.div>

          {/* OPENING HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">
              Opening Hours
            </h4>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">
                    Monday – Saturday
                  </p>
                  <p>10:00 AM – 8:00 PM</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">
                    Sunday
                  </p>
                  <p>11:00 AM – 6:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            border-t border-border pt-6
            text-center text-sm text-muted-foreground
          "
        >
          <p>
            © {currentYear} Pari Makeup Studio. All rights reserved.
          </p>
          <p className="mt-2">
            Designed with care for timeless beauty ✨
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
