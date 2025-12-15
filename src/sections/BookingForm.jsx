import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Facial Treatment",
  "Hair Styling",
  "Bridal Makeup",
  "Party Makeup",
  "Manicure & Pedicure",
  "Nail Art",
  "Waxing",
  "Hair Spa",
  "Eyebrow Threading",
];

const BookingForm = ({ isOpen, onClose }) => {
  const [date, setDate] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    time: "",
  });

  const { toast } = useToast();

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.service ||
      !date ||
      !formData.time
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to book your appointment.",
        variant: "destructive",
      });
      return;
    }

    const message = `
Hello Pari Makeup Studio 👋

I would like to book an appointment.

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
💄 Service: ${formData.service}
📅 Date: ${format(date, "PPP")}
⏰ Time: ${formData.time}
    `;

    const whatsappURL = `https://wa.me/919182497775?text=${encodeURIComponent(
      message
    )}`;

    setShowSuccess(true);

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setShowSuccess(false);
      onClose();
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        time: "",
      });
      setDate(undefined);
    }, 1200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center text-gray-900">
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-10 text-center"
            >
              <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">
                Redirecting to WhatsApp…
              </h3>
              <p className="text-gray-600 mt-2">
                Please confirm your booking in chat 💬
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <Label>Name *</Label>
                <Input
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>

              {/* Phone */}
              <div>
                <Label>Phone *</Label>
                <Input
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <Label>Email *</Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              {/* Service */}
              <div>
                <Label>Service *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    handleChange("service", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div>
                <Label>Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time */}
              <div>
                <Label>Time *</Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) =>
                    handleChange("time", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "10:00 AM",
                      "11:00 AM",
                      "12:00 PM",
                      "2:00 PM",
                      "3:00 PM",
                      "4:00 PM",
                      "5:00 PM",
                    ].map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-primary text-white text-lg py-5"
              >
                Confirm on WhatsApp
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
