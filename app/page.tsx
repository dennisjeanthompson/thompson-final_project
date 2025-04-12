"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutMe from "@/components/AboutMe";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Github, Twitter, Linkedin, Sun, Moon, ChevronDown } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set dark mode as default on initial load
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    
    // Add CSS variables for the sticky header background
    document.documentElement.style.setProperty('--current-bg-rgb', '10, 25, 47');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
    
    // Update CSS variables for the sticky header background
    if (darkMode) {
      document.documentElement.style.setProperty('--current-bg-rgb', '10, 25, 47');
    } else {
      document.documentElement.style.setProperty('--current-bg-rgb', '255, 255, 255');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "projects", text: "Projects" },
    { id: "journey", text: "Journey" },
    { id: "skills", text: "Skills" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'sticky-header' : ''}`}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-[#00f7ff]"
          >
            Thompson.
          </motion.h1>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex gap-2 md:gap-6 overflow-x-auto whitespace-nowrap">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-current-text-primary hover:text-[#00f7ff] transition-colors text-xs md:text-sm font-medium px-2"
                >
                  {link.text}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-[#00f7ff]/10 transition-colors flex items-center justify-center flex-shrink-0"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[#00f7ff]" />
              ) : (
                <Moon className="w-5 h-5 text-[#00f7ff]" />
              )}
            </motion.button>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section id="home" className="min-h-[80vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left side with text - 50% width on desktop */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Welcome to My <span className="text-[#00f7ff]">Portfolio</span>
                </h2>
                <p className="text-current-text-secondary text-lg max-w-md mb-8">
                  A showcase of my projects and skills in web development
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="glow-button"
                  >
                    About Me
                  </button>
                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="glow-button"
                  >
                    Contact
                  </button>
                </div>
              </motion.div>
              
              {/* Right side with image - 50% width on desktop */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full md:w-1/2 flex justify-center p-4 mt-8 md:mt-0"
              >
                {/* Removed circular container, using regular container with glow effect */}
                <div className="relative max-w-lg border-2 border-[#00f7ff]/30">
                  <div className="absolute inset-0 shadow-lg shadow-[#00f7ff]/20"></div>
                  <img 
                    src="/photos/profile_aboutP.png" 
                    alt="Profile" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollToSection("about")}
              className="scroll-down-btn text-[#00f7ff] mt-12 mx-auto block"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.button>
          </div>
        </section>
        
        <div className="max-w-6xl mx-auto px-4">
          <AboutMe />
          <Projects />
          <Journey />
          <Skills />
          <Contact />
        </div>
      </main>

      <footer className="text-center py-8 text-current-text-secondary">
        <p>© {new Date().getFullYear()} Thompson | All Rights Reserved</p>
      </footer>
    </div>
  );
}