import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Users, X, Check } from "lucide-react";

interface ProblemSolutionItem {
  problem: string;
  solution: string;
  icon: React.ReactNode;
}

interface ProblemSolutionSectionProps {
  title?: string;
  subtitle?: string;
  items?: ProblemSolutionItem[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const ProblemSolutionSection = ({
  title = "Business Challenges Solved With AI",
  subtitle = "See how our AI automation solutions address the most common pain points for small businesses",
  items = [
    {
      problem: "Manual customer service taking 40+ hours weekly",
      solution: "AI chatbots handling 80% of inquiries automatically",
      icon: <Users className="h-8 w-8" />,
    },
    {
      problem: "Hours spent on repetitive administrative tasks",
      solution: "Automated workflows saving 20+ hours per week",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      problem: "Inconsistent lead follow-up causing lost sales",
      solution: "24/7 lead qualification and nurturing on autopilot",
      icon: <DollarSign className="h-8 w-8" />,
    },
  ],
  ctaText = "See How It Works",
  onCtaClick = () => {},
}: ProblemSolutionSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-black bg-opacity-90">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden backdrop-blur-lg bg-black/40 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="rounded-full bg-purple-900/30 p-3 mb-6 inline-block">
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className: "h-8 w-8 text-purple-400",
                    })}
                  </div>

                  <div className="mb-6 bg-red-900/20 p-4 rounded-lg">
                    <div className="flex items-start">
                      <X className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-medium text-red-300 mb-1">
                          THE PROBLEM
                        </h4>
                        <p className="text-white">{item.problem}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-900/20 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-medium text-green-300 mb-1">
                          OUR SOLUTION
                        </h4>
                        <p className="text-white">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            onClick={onCtaClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
          >
            {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
