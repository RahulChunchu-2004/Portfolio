'use client';

import { motion } from 'framer-motion';

const About = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.p
            variants={paragraphVariants}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-600 mb-6"
          >
            I am a final year Computer Science Engineering student at Jesav Memorial College,
            passionate about creating innovative solutions through technology. My journey in
            software development has equipped me with a strong foundation in various programming
            languages and modern web technologies.
          </motion.p>
          <motion.p
  variants={paragraphVariants}
  transition={{ duration: 0.5 }}
  className="text-lg text-gray-600 mb-6"
>
  During my academic journey, {`I've`} focused on developing practical skills through
  hands-on projects, particularly in web development and data manipulation. I have
  experience working with Python for data scraping and handling duplicate data,
  demonstrating my ability to solve real-world problems through code.
</motion.p>
<motion.p
  variants={paragraphVariants}
  transition={{ duration: 0.5 }}
  className="text-lg text-gray-600"
>
  {`I'm`} constantly learning and staying updated with the latest technologies,
  always eager to take on new challenges and contribute to meaningful projects.
  My goal is to create efficient, user-friendly solutions that make a positive
  impact.
</motion.p>

        </motion.div>
      </div>
    </section>
  );
};

export default About; 