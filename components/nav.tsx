"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Improved smooth scrolling function for better centering
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const element = document.querySelector(href);
    
    if (element) {
      const navHeight = 80; // Approximate height of your navigation bar
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.scrollY;
      const windowHeight = window.innerHeight;
      const elementHeight = elementRect.height;
      
      // Calculate scroll position to center the element in the viewport
      let scrollPosition;
      
      if (elementHeight < windowHeight) {
        // For smaller sections, center them in the viewport
        scrollPosition = elementTop - (windowHeight - elementHeight) / 2 - navHeight;
      } else {
        // For taller sections, scroll to the top with a small offset
        scrollPosition = elementTop - navHeight - 20;
      }
      
      // Smooth scroll to the calculated position
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Amal Binu
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}

            {/* Resume Button (External Link) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <a
                href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67dc2e04f474aed7a1d60369"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Resume
              </a>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Resume Button (External Link) */}
            <a
              href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67dc2e04f474aed7a1d60369"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}