"use client";

import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
}

const projects: ProjectProps[] = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "/photos/portfolio.jpg",
    liveUrl: "https://portfolio-example.com",
    sourceUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product catalog, cart and checkout.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/photos/ecommerce.jpg",
    liveUrl: "https://ecommerce-example.com",
    sourceUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts.",
    technologies: ["JavaScript", "OpenWeather API", "CSS"],
    imageUrl: "https://ibb.co/KzX8vfkZ",
    liveUrl: "https://weather-example.com",
    sourceUrl: "https://github.com/yourusername/weather-app",
  },
  { 
    title: "Text Based RPG Game",
    description: "A text-based RPG game built with C# and Windows Forms.",
    technologies: ["CSHARP", "Visual Studio", "Windows Forms"],
    imageUrl: "https://i.ibb.co/gF3cKfp1/Screenshot-110.png",
    liveUrl: "https://jumpshare.com/s/qvhIMuR61K43fAL6PVWw",
    sourceUrl: "https://github.com/dennisjeanthompson/CC31N-SNOOKERS./blob/CompleteProject/README.md",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-2">
        My <span className="text-[#00f7ff]">Projects</span>
      </h2>
      <p className="text-current-text-secondary max-w-2xl mx-auto mb-12">
        Here are some of my recent projects. Each project was built with the goal of learning new technologies and solving real-world problems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-current-darker-bg rounded-lg overflow-hidden shadow-lg border border-[#00f7ff]/10 hover:shadow-[#00f7ff]/10 hover:border-[#00f7ff]/30 transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-current-text-secondary mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-3 py-1 bg-[#00f7ff]/10 text-[#00f7ff] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glow-button text-sm py-2 px-4"
                >
                  Live Demo
                </a>
                <a 
                  href={project.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glow-button text-sm py-2 px-4"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}