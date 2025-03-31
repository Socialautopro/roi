import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "AI Automation That Pays For Itself",
  subtitle = "Custom AI solutions for small businesses that deliver real results without the enterprise price tag",
  ctaText = "Book Your Free 15-Minute Consultation",
  backgroundImage = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-screen max-h-[800px] overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      {/* Glassmorphic Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full bg-purple-500/20 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-[30%] right-[15%] w-32 h-32 rounded-full bg-purple-500/10 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-[40%] right-[25%] w-16 h-16 rounded-full bg-purple-500/15 backdrop-blur-md"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              {title}
            </span>
            <span className="text-purple-400">
              {" "}
              Without The Enterprise Price Tag
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/20 backdrop-blur-sm"
            >
              {ctaText} <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 text-white hover:bg-purple-500/20 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
            >
              See Our Results
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 backdrop-blur-md flex items-center justify-center">
                <span className="text-purple-300">✓</span>
              </div>
              <span>No technical knowledge required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 backdrop-blur-md flex items-center justify-center">
                <span className="text-purple-300">✓</span>
              </div>
              <span>Results in 2-4 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 backdrop-blur-md flex items-center justify-center">
                <span className="text-purple-300">✓</span>
              </div>
              <span>Proven ROI</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
