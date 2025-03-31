import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    before: string;
    after: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  image: string;
}

interface CaseStudiesSectionProps {
  title?: string;
  subtitle?: string;
  caseStudies?: CaseStudy[];
}

const defaultCaseStudies: CaseStudy[] = [
  {
    id: "1",
    company: "RetailTech Solutions",
    industry: "E-commerce",
    challenge:
      "Manual customer support taking 40+ hours weekly with slow response times",
    solution: "Implemented AI chatbot with product recommendation engine",
    results: [
      { metric: "Response Time", before: "24 hours", after: "2 minutes" },
      {
        metric: "Support Hours",
        before: "40 hours/week",
        after: "5 hours/week",
      },
      { metric: "Customer Satisfaction", before: "72%", after: "94%" },
    ],
    testimonial: {
      quote:
        "The AI chatbot has transformed our customer service. We're saving thousands in labor costs while providing better service.",
      author: "Sarah Johnson",
      position: "Operations Director",
    },
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: "2",
    company: "MarketPro Agency",
    industry: "Marketing",
    challenge: "Inconsistent social media posting and low engagement rates",
    solution: "Deployed AI content generation and scheduling system",
    results: [
      {
        metric: "Content Creation Time",
        before: "15 hours/week",
        after: "2 hours/week",
      },
      {
        metric: "Post Frequency",
        before: "3 posts/week",
        after: "12 posts/week",
      },
      { metric: "Engagement Rate", before: "1.2%", after: "4.8%" },
    ],
    testimonial: {
      quote:
        "Our social media presence has exploded since implementing the AI automation. We're reaching more customers with less effort.",
      author: "Michael Chen",
      position: "Marketing Director",
    },
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  },
  {
    id: "3",
    company: "HealthServe Clinic",
    industry: "Healthcare",
    challenge: "Appointment scheduling bottlenecks and high no-show rates",
    solution: "Implemented AI scheduling assistant with automated reminders",
    results: [
      {
        metric: "Scheduling Time",
        before: "12 min/patient",
        after: "2 min/patient",
      },
      { metric: "No-show Rate", before: "22%", after: "7%" },
      {
        metric: "Staff Hours on Scheduling",
        before: "25 hours/week",
        after: "5 hours/week",
      },
    ],
    testimonial: {
      quote:
        "The AI scheduling system has been a game-changer for our clinic. Our staff can focus on patient care instead of administrative tasks.",
      author: "Dr. Lisa Patel",
      position: "Clinic Director",
    },
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
];

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  title = "Real Results for Real Businesses",
  subtitle = "See how small businesses like yours are transforming operations with our AI automation solutions",
  caseStudies = defaultCaseStudies,
}) => {
  return (
    <section className="w-full py-16 bg-black bg-opacity-90 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden backdrop-blur-lg bg-white/10 border-purple-500/20 border hover:border-purple-500/50 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-white">
                        {study.company}
                      </CardTitle>
                      <CardDescription className="text-purple-300">
                        {study.industry}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Challenge:
                    </h4>
                    <p className="text-gray-200">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Solution:
                    </h4>
                    <p className="text-gray-200">{study.solution}</p>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Results:
                    </h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="grid grid-cols-3 text-sm">
                          <div className="font-medium text-purple-300">
                            {result.metric}
                          </div>
                          <div className="text-gray-400">
                            <span className="line-through">
                              {result.before}
                            </span>
                          </div>
                          <div className="text-green-400 font-medium">
                            {result.after}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {study.testimonial && (
                    <div className="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/20">
                      <p className="text-sm italic text-gray-300 mb-2">
                        "{study.testimonial.quote}"
                      </p>
                      <p className="text-xs text-purple-300">
                        {study.testimonial.author}, {study.testimonial.position}
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30 p-0 flex items-center gap-1"
                  >
                    Read full case study <ChevronRight size={16} />
                  </Button>
                </CardFooter>
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
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
            <span>See more success stories</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
