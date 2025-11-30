import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.service || !date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to book your appointment.",
        variant: "destructive",
      });
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      setFormData({ name: "", phone: "", email: "", service: "", time: "" });
      setDate(undefined);
    }, 3000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-white text-gray-800 rounded-xl shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center text-gray-900 mb-4">
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-20 h-20 text-[#C21833] mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600">
                Your appointment was successfully booked. We can't wait to enhance your beauty!
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
              {/* Name, Phone, Email Cards */}
              {[
                { id: "name", label: "Name *", placeholder: "Your full name", type: "text" },
                { id: "phone", label: "Phone Number *", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                { id: "email", label: "Email *", placeholder: "your.email@example.com", type: "email" },
              ].map((field) => (
                <div
                  key={field.id}
                  className="bg-white p-4 rounded-lg shadow-sm space-y-2"
                >
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    required
                    className="border-gray-300 focus:border-[#C21833] focus:ring-[#C21833]"
                  />
                </div>
              ))}

              {/* Service Select */}
              <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                <Label htmlFor="service">Select Service *</Label>
                <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-[#C21833] focus:ring-[#C21833]">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded-lg shadow-md p-2">
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Picker */}
              <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                <Label>Choose Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-gray-300 focus:border-[#C21833] focus:ring-[#C21833]",
                        !date && "text-gray-400"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-4 bg-white rounded-lg shadow-md"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Select */}
              <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                <Label htmlFor="time">Preferred Time *</Label>
                <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-[#C21833] focus:ring-[#C21833]">
                    <SelectValue placeholder="Choose time slot" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded-lg shadow-md p-2">
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                    <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                    <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                    <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                    <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#C21833] hover:bg-[#A0172B] text-white text-lg py-4 rounded-lg transition-colors"
              >
                Confirm Booking
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
