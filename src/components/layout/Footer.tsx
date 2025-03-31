import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";

interface FooterProps {
  logo?: string;
  companyName?: string;
  description?: string;
  navigationLinks?: Array<{ label: string; href: string }>;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  socialLinks?: Array<{
    platform: "facebook" | "twitter" | "instagram" | "linkedin";
    url: string;
  }>;
}

const Footer = ({
  logo = "/vite.svg",
  companyName = "AI Automation Solutions",
  description = "Providing cutting-edge AI automation solutions for small businesses that deliver real results without the enterprise price tag.",
  navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/process" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  contactInfo = {
    email: "hello@roigpt.com",
    phone: "+1 (438) 256-4612",
    address: "3455 Chem. de la Côte-Sainte-Catherine, Montréal, QC H3T 1C7",
  },
  socialLinks = [
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
  ],
}: FooterProps) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-5 w-5" />;
      case "twitter":
        return <Twitter className="h-5 w-5" />;
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-black/80 backdrop-blur-md border-t border-purple-500/20 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt={companyName} className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                {companyName}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-purple-900/30 hover:bg-purple-700/50 transition-colors"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-purple-400 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-purple-400 mt-0.5" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-purple-400 mt-0.5" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-6 text-purple-400">
              Opening Hours
            </h3>
            <p className="text-gray-300 mb-3">
              Our AI support is available to help you 24 hours a day. Our office
              is open:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>Mon – Fri : 08.00 am – 8.00 pm</li>
              <li>Saturday : 09.00 am – 8.00 pm</li>
              <li>Sunday : Closed</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest AI automation tips and
              insights.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-gray-800/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-purple-500/20 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link
              to="/privacy"
              className="hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
