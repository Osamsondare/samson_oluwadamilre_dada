import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'SPA Agency Website',
      description: 'A modern single-page application for a digital agency with smooth animations and responsive design.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1RRHbrQ9_93IdZxzjqwP8Jxm0NtyxiPv5Q&s',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveUrl: 'https://genuine-longma-b9cb37.netlify.app',
      githubUrl: 'https://github.com/Osamsondare/spa_agency.git',
    },
    {
      title: 'Naija Delight',
      description: 'A Nigerian food cusine app, that focuses on the richness of Nigerian delicacies. Simple web app that is responsive and reactive.',
      imageUrl: 'naija delight.png',
      technologies: ['React', 'Vite', 'API Integration'],
      liveUrl: 'https://naija-delight-app.vercel.app/',
      githubUrl: 'https://github.com/Osamsondare/naija_delight_app.git',
    },
    {
      title: 'School Website',
      description: 'A comprehensive website for an educational institution featuring course catalog and student portal.',
      imageUrl: 'https://media.istockphoto.com/id/534576365/photo/elementary-school-children-wearing-blue-school-uniforms-raising-hands-in-classroom.jpg?s=612x612&w=0&k=20&c=LEdI0qaduUMsCWw32y0OASviPJvo8vrE1hYSE0GBEX8=',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      liveUrl: 'https://dancing-starburst-3b0f78.netlify.app',
      githubUrl: 'https://github.com',
    },
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce platform with product listings, cart functionality, and secure checkout.',
      imageUrl: 'https://www.terawork.com/blog/wp-content/uploads/2022/11/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a-1-1.png',
      technologies: ['React', 'Node.js', ],
      liveUrl: 'https://gleaming-blini-6a8665.netlify.app',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for designers and developers to showcase their work.',
      imageUrl: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      title: ' EnioluwabunminFashion Hub',
      description: 'A simple web application for a fashion hub, showcasing various fashion items and styles.',
      imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Vite', 'Node JS'],
      liveUrl: 'https://enioluwabunmi-fashion-hub.vercel.app/',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mb-16">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            My <span className="text-neonCyan">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Here's a collection of my work. Each project represents my skills, creativity, and attention to detail.
            Take a look around and explore what I've built.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;