import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const Navbar = ({
  onThemeToggle = () => {},
  isDarkMode = true,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-purple-500/20 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              AI Automation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/process"
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/case-studies"
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full bg-purple-900/30 hover:bg-purple-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-purple-300" />
              )}
            </button>

            {/* CTA Button */}
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md"
              size="lg"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full bg-purple-900/30 hover:bg-purple-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-purple-300" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md bg-purple-900/30 hover:bg-purple-800/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-black/90 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-screen py-4" : "max-h-0",
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="text-white/80 hover:text-purple-400 transition-colors py-2 border-b border-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-white/80 hover:text-purple-400 transition-colors py-2 border-b border-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/process"
            className="text-white/80 hover:text-purple-400 transition-colors py-2 border-b border-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            to="/case-studies"
            className="text-white/80 hover:text-purple-400 transition-colors py-2 border-b border-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-white/80 hover:text-purple-400 transition-colors py-2 border-b border-purple-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md w-full mt-4"
            size="lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
