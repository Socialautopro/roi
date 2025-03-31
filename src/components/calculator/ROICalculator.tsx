import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calculator, DollarSign, Clock, Users } from "lucide-react";

interface ROICalculatorProps {
  title?: string;
  subtitle?: string;
}

const ROICalculator = ({
  title = "Calculate Your AI Automation ROI",
  subtitle = "See how much time and money your business could save with our AI solutions",
}: ROICalculatorProps) => {
  // State for calculator inputs
  const [employeeCost, setEmployeeCost] = useState<number>(25);
  const [hoursSpent, setHoursSpent] = useState<number>(20);
  const [leadValue, setLeadValue] = useState<number>(500);
  const [leadIncrease, setLeadIncrease] = useState<number>(30);

  // State for calculated results
  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [yearlyRevenue, setYearlyRevenue] = useState<number>(0);
  const [totalROI, setTotalROI] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);

  // Recalculate whenever inputs change
  useEffect(() => {
    // Calculate time savings (monthly)
    const weeklySavings = employeeCost * hoursSpent;
    const calculatedMonthlySavings = weeklySavings * 4;

    // Calculate additional revenue from increased leads
    const additionalMonthlyLeads = (leadIncrease / 100) * 10; // Assuming 10 leads per month as baseline
    const calculatedYearlyRevenue = additionalMonthlyLeads * leadValue * 12;

    // Calculate total ROI (assuming $5000 implementation cost)
    const implementationCost = 5000;
    const annualSavings = calculatedMonthlySavings * 12;
    const totalAnnualBenefit = annualSavings + calculatedYearlyRevenue;
    const calculatedROI = (totalAnnualBenefit / implementationCost) * 100;

    // Calculate payback period in months
    const calculatedPaybackPeriod =
      implementationCost / (totalAnnualBenefit / 12);

    setMonthlySavings(calculatedMonthlySavings);
    setYearlyRevenue(calculatedYearlyRevenue);
    setTotalROI(calculatedROI);
    setPaybackPeriod(calculatedPaybackPeriod);
  }, [employeeCost, hoursSpent, leadValue, leadIncrease]);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-purple-950/20 to-black">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-lg bg-black/40 border-purple-500/20 text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold">
                    Customize Your Calculation
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="employeeCost" className="text-gray-300">
                        Hourly employee cost ($/hour)
                      </Label>
                      <span className="text-purple-400 font-medium">
                        ${employeeCost}
                      </span>
                    </div>
                    <Slider
                      id="employeeCost"
                      min={15}
                      max={100}
                      step={1}
                      value={[employeeCost]}
                      onValueChange={(value) => setEmployeeCost(value[0])}
                      className="py-4"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="hoursSpent" className="text-gray-300">
                        Weekly hours spent on manual tasks
                      </Label>
                      <span className="text-purple-400 font-medium">
                        {hoursSpent} hours
                      </span>
                    </div>
                    <Slider
                      id="hoursSpent"
                      min={5}
                      max={40}
                      step={1}
                      value={[hoursSpent]}
                      onValueChange={(value) => setHoursSpent(value[0])}
                      className="py-4"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="leadValue" className="text-gray-300">
                        Average value per customer ($)
                      </Label>
                      <span className="text-purple-400 font-medium">
                        ${leadValue}
                      </span>
                    </div>
                    <Slider
                      id="leadValue"
                      min={100}
                      max={5000}
                      step={100}
                      value={[leadValue]}
                      onValueChange={(value) => setLeadValue(value[0])}
                      className="py-4"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label
                        htmlFor="leadIncrease"
                        className="text-gray-300 flex items-center"
                      >
                        <span className="mr-2">
                          Expected number of leads increase per month
                        </span>
                        <span role="img" aria-label="sports car">
                          🏎️
                        </span>
                      </Label>
                      <span className="text-purple-400 font-medium">
                        {leadIncrease}%
                      </span>
                    </div>
                    <Slider
                      id="leadIncrease"
                      min={10}
                      max={100}
                      step={5}
                      value={[leadIncrease]}
                      onValueChange={(value) => setLeadIncrease(value[0])}
                      className="py-4"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-lg bg-purple-900/20 border-purple-500/30 text-white h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold">Your Potential ROI</h3>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-purple-400" />
                        <h4 className="text-sm font-medium text-gray-300">
                          Monthly Time Savings
                        </h4>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        ${monthlySavings.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Based on {hoursSpent} hours/week at ${employeeCost}/hour
                      </p>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-purple-400" />
                        <h4 className="text-sm font-medium text-gray-300">
                          Additional Annual Revenue
                        </h4>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        ${yearlyRevenue.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        From {leadIncrease}% more leads at ${leadValue}/customer
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-2">
                      <h4 className="text-lg font-medium text-white">
                        Total ROI
                      </h4>
                      <div className="w-full bg-black/30 rounded-full h-4 mt-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-purple-400 h-4 rounded-full"
                          style={{ width: `${Math.min(totalROI / 10, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">0%</span>
                      <span className="text-gray-400">250%</span>
                      <span className="text-gray-400">500%+</span>
                    </div>
                    <p className="text-3xl font-bold text-white mt-4">
                      {totalROI.toFixed(0)}%
                    </p>
                    <p className="text-sm text-gray-300 mt-1">
                      Return on investment in the first year
                    </p>
                  </div>

                  <div className="bg-green-900/20 p-4 rounded-lg mt-6">
                    <h4 className="text-lg font-medium text-white mb-2">
                      Payback Period
                    </h4>
                    <p className="text-3xl font-bold text-white">
                      {paybackPeriod.toFixed(1)} months
                    </p>
                    <p className="text-sm text-gray-300 mt-1">
                      Your investment pays for itself in less than{" "}
                      {Math.ceil(paybackPeriod)} months
                    </p>
                  </div>

                  <div className="bg-yellow-900/20 p-4 rounded-lg mt-6">
                    <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                      <span className="mr-2">Lamborghinis Per Year</span>
                      <span role="img" aria-label="sports car">
                        🏎️
                      </span>
                    </h4>
                    <p className="text-3xl font-bold text-white">
                      {((monthlySavings * 12 + yearlyRevenue) / 250000).toFixed(
                        2,
                      )}
                    </p>
                    <p className="text-sm text-gray-300 mt-1">
                      Number of Lamborghinis you could buy annually with your
                      savings
                    </p>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6">
                    Book a Consultation to Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
