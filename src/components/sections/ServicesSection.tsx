import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Bot,
  MessageSquare,
  RefreshCw,
  Share2,
  Zap,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  beforeText: string;
  afterText: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const ServiceCard = ({
  title = "AI Service",
  description = "Streamline your business operations with our AI solutions.",
  icon = <Bot size={24} />,
  beforeText = "Manual processes taking hours of your time",
  afterText = "Automated workflows saving 20+ hours per week",
  ctaText = "Learn More",
  onCtaClick = () => {},
}: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden backdrop-blur-lg bg-[#0A0A0A]/70 border border-[#6C2BD9]/30 text-white h-full flex flex-col shadow-lg shadow-[#6C2BD9]/10">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-[#6C2BD9] mb-2">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div className="bg-[#FF3CAC]/10 backdrop-blur-sm p-4 rounded-lg border border-[#FF3CAC]/20">
            <h4 className="text-sm font-medium text-[#FF3CAC] mb-1">BEFORE</h4>
            <p className="text-gray-300">{beforeText}</p>
          </div>
          <div className="bg-[#00FF9C]/10 backdrop-blur-sm p-4 rounded-lg border border-[#00FF9C]/20">
            <h4 className="text-sm font-medium text-[#00FF9C] mb-1">AFTER</h4>
            <p className="text-gray-300">{afterText}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onCtaClick}
          className="w-full bg-gradient-to-r from-[#6C2BD9] to-[#3A86FF] hover:from-[#6C2BD9] hover:to-[#6C2BD9] text-white transition-all duration-300"
        >
          {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  const services: ServiceCardProps[] = [
    {
      title: "AI Chatbots",
      description:
        "Intelligent conversational agents that handle customer inquiries 24/7.",
      icon: <MessageSquare className="h-6 w-6" />,
      beforeText: "Missed leads and delayed responses to customer inquiries",
      afterText:
        "Instant responses at any time, qualifying leads while you sleep",
      ctaText: "Explore Chatbot Solutions",
      onCtaClick: () => {},
    },
    {
      title: "Social Media Automation",
      description:
        "Consistent content delivery and engagement across all your platforms.",
      icon: <Share2 className="h-6 w-6" />,
      beforeText: "Hours spent manually creating and posting content",
      afterText:
        "Scheduled, optimized content that drives engagement automatically",
      ctaText: "Automate Your Social Media",
      onCtaClick: () => {},
    },
    {
      title: "Workflow Automation",
      description:
        "Streamline repetitive tasks and business processes with custom AI solutions.",
      icon: <RefreshCw className="h-6 w-6" />,
      beforeText: "Manual data entry and repetitive administrative tasks",
      afterText: "Automated workflows that reduce errors and free up your team",
      ctaText: "Streamline Your Workflow",
      onCtaClick: () => {},
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Turn your business data into actionable insights and predictions.",
      icon: <Zap className="h-6 w-6" />,
      beforeText: "Struggling to make sense of your business data",
      afterText:
        "Clear insights and predictions that guide better business decisions",
      ctaText: "Get Data Insights",
      onCtaClick: () => {},
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-purple-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            AI Automation <span className="text-purple-400">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Our AI solutions deliver measurable business outcomes without the
            technical complexity. See the before and after impact on your
            operations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#6C2BD9] to-[#3A86FF] hover:from-[#6C2BD9] hover:to-[#6C2BD9] text-white transition-all duration-300 px-8"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
