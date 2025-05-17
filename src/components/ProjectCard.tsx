import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  githubUrl,
  index,
}) => {
  return (
    <motion.div
      className="bg-darkBlue rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-neonCyan transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-darkBg text-neonCyan"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-neonCyan transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-neonCyan transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;