'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  skills: string[];
  index: number;
}

const SkillCard = ({ category, skills, index }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, skillIndex) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true }}
          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillsets = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "TailwindCSS"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "VS Code", "MongoDB", "REST APIs", "Web Scraping"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsets.map((skillset, index) => (
            <SkillCard
              key={skillset.category}
              category={skillset.category}
              skills={skillset.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 