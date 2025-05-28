'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
  >
    <Icon className="w-6 h-6" />
    <span>{label}</span>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            {`I'm`} always open to new opportunities and collaborations. 
            Feel free to connect with me on LinkedIn or check out my projects on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/rahulchunchu/"
              icon={FaLinkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/RahulChunchu-2004"
              icon={FaGithub}
              label="GitHub"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
