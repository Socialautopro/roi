import React from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import ProblemSolutionSection from "./sections/ProblemSolutionSection";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import CaseStudiesSection from "./sections/CaseStudiesSection";
import ROICalculator from "./calculator/ROICalculator";
import ConsultationBooking from "./booking/ConsultationBooking";
import Footer from "./layout/Footer";
import { useTheme } from "./theme/ThemeProvider";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />
      <main className="pt-16">
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <ROICalculator />
        <ProcessSection />
        <CaseStudiesSection />
        <ConsultationBooking />
      </main>
      <Footer />
    </div>
  );
};

const HomeWithTheme = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default HomeWithTheme;
