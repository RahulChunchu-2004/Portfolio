'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl, liveUrl, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative h-48 w-full"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
      />
    </motion.div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, techIndex) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <div className="flex gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          GitHub
        </motion.a>
        {liveUrl && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Live Demo
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Data Scraping Tool",
      description: "A Python-based web scraping tool that extracts and processes data from various sources, handling duplicate entries efficiently.",
      technologies: ["Python", "BeautifulSoup", "Pandas"],
      imageUrl: "/projects/data-scraping.jpg",
      githubUrl: "https://github.com/RahulChunchu-2004/data-scraping-tool",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and TailwindCSS, featuring responsive design and smooth animations.",
      technologies: ["Next.js", "React", "TailwindCSS"],
      imageUrl: "/projects/portfolio.jpg",
      githubUrl: "https://github.com/RahulChunchu-2004/portfolio",
      liveUrl: "https://rahulchunchu.vercel.app",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 