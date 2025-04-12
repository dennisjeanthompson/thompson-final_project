"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Journey() {
  const education = [
    {
      year: "2024 - 2026",
      degree: "Bachelor of Science in Information Technology - University",
      description: "currently enrolled in the University of Cordilleras, studying Information Technology."
    },
    {
      year: "2022 - 2024",
      degree: "Senior High School Diploma - Cordillera Career Development College",
      description: "Studied Humanities and Social Sciences at Cordillera Career Development College."
    },
    {
      year: "2019 - 2022",
      degree: "High School Diploma - Cordillera Career Development College",
      description: "Graduated from Cordillera Career Development College during high school."
    }
  ];

  const experience = [
    {
      year: "2025 - Present",
      role: "Developer",
      description: "Made a personal-porftolio website using Next.js and Tailwind CSS. I am currently working on a personal project that involves building a web application using React and Next.js."
    },
    {
      year: "2024 - 2025",
      role: "OOP Developer",
      description: "Learned the basics of Object-Oriented Programming (OOP) and created simple applications using Csharp. I also worked on a few personal projects to enhance my skills."
    },
    {
      year: "2024 - 2025",
      role: "HTML/CSS Developer",
      description: "Learned the basics of HTML and CSS, and created simple web pages. I also worked on a few personal projects to enhance my skills."
    }
  ];

  const TimelineItem = ({ data, index, type }: { data: any; index: number; type: 'education' | 'experience' }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="timeline-item"
      >
        <div className="bg-current-darker-bg p-6 rounded-lg border border-[#00f7ff]/20">
          <span className="text-[#00f7ff] text-sm">{data.year}</span>
          <h4 className="text-xl font-bold mt-2">
            {type === 'education' ? data.degree : data.role}
          </h4>
          <p className="text-current-text-secondary mt-2">{data.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="journey" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-[#00f7ff]">Journey</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          <div className="timeline-container">
            {education.map((edu, index) => (
              <TimelineItem key={index} data={edu} index={index} type="education" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Experience</h3>
          <div className="timeline-container">
            {experience.map((exp, index) => (
              <TimelineItem key={index} data={exp} index={index} type="experience" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}