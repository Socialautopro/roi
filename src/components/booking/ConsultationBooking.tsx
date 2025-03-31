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
    phone: "",
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

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNextStep = () => {
    setFormStep(2);
  };

  const handlePrevStep = () => {
    setFormStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      ...formData,
      date: date ? format(date, "PPP") : "",
      time: selectedTime,
    });
    setIsSubmitted(true);
  };

  return (
    <section
      id="consultation"
      className="py-20 px-4 md:px-8 bg-black bg-opacity-90"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="backdrop-blur-lg bg-black/40 border-purple-500/20 text-white h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-purple-400">
                  What to Expect in Your Consultation
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-purple-900/30 p-2 mt-1">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        Understand Your Needs
                      </h4>
                      <p className="text-gray-300 text-sm">
                        We'll discuss your business challenges and identify
                        automation opportunities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-purple-900/30 p-2 mt-1">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        Explore Solutions
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Learn about specific AI tools and approaches that could
                        benefit your business
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-purple-900/30 p-2 mt-1">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        Get a Custom Roadmap
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Receive a high-level implementation plan with estimated
                        timeline and ROI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-purple-900/30 p-2 mt-1">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        No Pressure
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Zero obligation consultation focused on providing value
                        and insights
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                  <p className="text-sm text-gray-300 italic">
                    "The consultation was eye-opening. We implemented the
                    suggested AI automation and saved over 30 hours per week in
                    manual tasks."
                  </p>
                  <p className="text-sm text-purple-300 mt-2">
                    — Sarah Johnson, Marketing Director
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="backdrop-blur-lg bg-black/40 border-purple-500/20 text-white overflow-hidden">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="rounded-full bg-green-900/30 p-4 mx-auto w-16 h-16 flex items-center justify-center mb-6">
                      <Check className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Booking Confirmed!
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Thanks for scheduling your consultation. We've sent a
                      confirmation to your email with all the details.
                    </p>
                    <div className="bg-purple-900/20 p-4 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarIcon className="h-5 w-5 text-purple-400" />
                        <span className="text-white font-medium">
                          {date ? format(date, "EEEE, MMMM d, yyyy") : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-purple-400" />
                        <span className="text-white font-medium">
                          {selectedTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formStep === 1 ? (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-6">
                          Select a Date & Time
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label
                              htmlFor="date"
                              className="text-gray-300 mb-2 block"
                            >
                              Date
                            </Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal border-gray-700 bg-black/20 text-white hover:bg-black/30 hover:text-white"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? (
                                    format(date, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0 bg-black/90 border-gray-700">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  initialFocus
                                  disabled={(date) => {
                                    // Disable past dates and weekends
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    return (
                                      date < today ||
                                      date.getDay() === 0 ||
                                      date.getDay() === 6
                                    );
                                  }}
                                  className="bg-black text-white"
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div>
                            <Label
                              htmlFor="time"
                              className="text-gray-300 mb-2 block"
                            >
                              Time
                            </Label>
                            <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto pr-2">
                              {timeSlots.map((time) => (
                                <Button
                                  key={time}
                                  type="button"
                                  variant="outline"
                                  className={`border-gray-700 ${selectedTime === time ? "bg-purple-600 text-white" : "bg-black/20 text-white hover:bg-black/30"}`}
                                  onClick={() => handleTimeSelect(time)}
                                >
                                  {time}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button
                            type="button"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                            disabled={!date || !selectedTime}
                            onClick={handleNextStep}
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold mb-6">
                          Your Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                              required
                              className="bg-black/20 border-gray-700 text-white"
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
                              required
                              className="bg-black/20 border-gray-700 text-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label
                              htmlFor="phone"
                              className="text-gray-300 mb-2 block"
                            >
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="bg-black/20 border-gray-700 text-white"
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
                              className="bg-black/20 border-gray-700 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <Label
                            htmlFor="message"
                            className="text-gray-300 mb-2 block"
                          >
                            What are your main business challenges? (Optional)
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            className="bg-black/20 border-gray-700 text-white"
                          />
                        </div>

                        <div className="bg-purple-900/20 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <CalendarIcon className="h-5 w-5 text-purple-400" />
                            <span className="text-white font-medium">
                              {date ? format(date, "EEEE, MMMM d, yyyy") : ""}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-purple-400" />
                            <span className="text-white font-medium">
                              {selectedTime}
                            </span>
                          </div>
                        </div>

                        <div className="pt-4 flex gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            className="flex-1 border-gray-700 text-white hover:bg-black/30"
                            onClick={handlePrevStep}
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                          >
                            Confirm Booking
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;
