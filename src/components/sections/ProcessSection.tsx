import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { ArrowRight, Zap, Settings, CheckCircle } from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const ProcessStep = ({
  icon = <Zap className="h-8 w-8 text-purple-500" />,
  title = "Step Title",
  description = "Step description goes here",
  stepNumber = 1,
}: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: stepNumber * 0.1 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <Card className="h-full p-6 bg-black/40 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center">
        <div className="rounded-full bg-purple-900/30 p-3 mb-4">{icon}</div>
        <div className="text-xl font-bold mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-sm">{description}</p>
      </Card>
    </motion.div>
  );
};

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStepProps[];
}

const ProcessSection = ({
  title = "Simple Implementation Process",
  subtitle = "We handle all the technical details so you can focus on your business",
  steps = [
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Discovery Call",
      description:
        "We learn about your business needs and identify automation opportunities",
      stepNumber: 1,
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Custom Solution Design",
      description:
        "We design a tailored AI solution using make.com, ChatGPT, and other tools",
      stepNumber: 2,
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-purple-500" />,
      title: "Implementation",
      description:
        "We build and deploy your solution with minimal disruption to your workflow",
      stepNumber: 3,
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-500" />,
      title: "Results & Refinement",
      description:
        "We measure the impact and continuously improve your automation",
      stepNumber: 4,
    },
  ],
}: ProcessSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-purple-950/20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={step.stepNumber}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#consultation"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors duration-300 backdrop-blur-sm"
          >
            Start Your AI Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
