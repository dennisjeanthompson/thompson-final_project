"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const Skills = [
    { name: "HTML/CSS", level: 54 },
    { name: "Csharp", level: 30 },
    { name: "JavaScript", level: 49 },
    { name: "Python", level: 22 }
  ];

  const professionalSkills = [
    { name: " Communication & Collaboration", level: 75 },
    { name: "Web Development", level: 53 },
    { name: "Problem-Solving & Analysis", level: 62 },
    { name: "Network Troubleshooting", level: 14 }
  ];

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="flex justify-between mb-2">
          <span>{skill.name}</span>
          <span className="text-[#00f7ff]">{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div 
            className="skill-progress"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-[#00f7ff]">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8">Coding Skills</h3>
          <div className="space-y-6">
            {Skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Professional Skills</h3>
          <div className="space-y-6">
            {professionalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}