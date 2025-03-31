import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Check } from "lucide-react";

interface ConsultationBookingProps {
  title?: string;
  subtitle?: string;
}

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
];

const ConsultationBooking = ({
  title = "Book Your Free 15-Minute Consultation",
  subtitle = "Discover how AI automation can transform your business operations",
}: ConsultationBookingProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNextStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { date, selectedTime, ...formData });
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300">{subtitle}</p>
      </motion.div>

      {isSubmitted ? (
        <Card className="bg-black/40 backdrop-blur-lg border border-purple-500/30 shadow-xl">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="rounded-full bg-green-500 p-3">
                <Check className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Consultation Booked!
            </h3>
            <p className="text-gray-300 mb-6">
              Thank you for scheduling your consultation. We've sent a
              confirmation to your email with all the details.
            </p>
            <div className="bg-black/30 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Date:</span>
                <span className="text-white font-medium">
                  {date ? format(date, "PPP") : "Not selected"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Time:</span>
                <span className="text-white font-medium">
                  {selectedTime || "Not selected"}
                </span>
              </div>
            </div>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setIsSubmitted(false)}
            >
              Book Another Consultation
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-black/40 backdrop-blur-lg border border-purple-500/30 shadow-xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              {formStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Select a Date & Time
                  </h3>
                  <div className="mb-6">
                    <Label htmlFor="date" className="text-gray-300 mb-2 block">
                      Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-black/50 border-purple-500/30 text-white hover:bg-black/70"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-black/90 border border-purple-500/30">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={handleDateSelect}
                          initialFocus
                          className="bg-transparent text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {date && (
                    <div className="mb-6">
                      <Label className="text-gray-300 mb-2 block">Time</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant="outline"
                            className={`flex items-center justify-center py-2 px-3 ${
                              selectedTime === time
                                ? "bg-purple-600 text-white border-purple-600"
                                : "bg-black/50 border-purple-500/30 text-white hover:bg-black/70"
                            }`}
                            onClick={() => handleTimeSelect(time)}
                          >
                            <Clock className="mr-2 h-4 w-4" />
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end mt-6">
                    <Button
                      type="button"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={handleNextStep}
                      disabled={!date || !selectedTime}
                    >
                      Next Step
                    </Button>
                  </div>
                </motion.div>
              )}

              {formStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Your Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-300 mb-2 block"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-gray-300 mb-2 block"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="company"
                        className="text-gray-300 mb-2 block"
                      >
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Inc."
                        className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-300 mb-2 block"
                      >
                        What would you like to discuss?
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Brief description of your automation needs..."
                        className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevStep}
                      className="border-purple-500/30 text-white hover:bg-black/70"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Book Consultation
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ConsultationBooking;
