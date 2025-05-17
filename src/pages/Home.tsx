import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Code, Star, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-darkBlue rounded-full text-neonCyan text-sm font-medium mb-6">
                Web Developer
              </span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Hi, I'm <span className="gradient-text">Samson</span> <br />
                Oluwadamilare Dada
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Crafting elegant web solutions with modern technologies. I build responsive, 
                user-friendly web applications with clean code.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/projects" className="group">
                  View Projects
                  <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
                </Button>
                <Button to="/contact" variant="outline">
                  Get In Touch
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-darkBlue border-2 border-darkBlue shadow-xl group">
                <img 
                  src="/developer.jpg"
                  alt="Samson Oluwadamilare Dada"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-darkBlue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-2xl font-poppins font-bold text-center text-white">
                    Samson Oluwadamilare Dada<br />
                    <span className="text-neonCyan">Developer</span>
                  </h3>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-10 -right-5 md:-right-10 p-3 bg-darkBlue rounded-lg shadow-lg"
              >
                <div className="text-neonCyan">
                  <Code size={24} />
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-10 -left-5 md:-left-10 p-3 bg-darkBlue rounded-lg shadow-lg"
              >
                <div className="text-neonPink">
                  <Star size={24} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">Technical <span className="text-neonCyan">Skills</span></h2>
            <p className="text-gray-400">
              I specialize in building modern web applications using the latest technologies and best practices.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'HTML & CSS', icon: <Code />, color: 'bg-neonBlue', delay: 0 },
              { name: 'JavaScript', icon: <Code />, color: 'bg-neonCyan', delay: 0.1 },
              { name: 'React.js', icon: <Code />, color: 'bg-neonPink', delay: 0.2 },
              { name: 'Responsive Design', icon: <Zap />, color: 'bg-neonBlue', delay: 0.3 },
            ].map((skill, index) => (
              <AnimatedSection key={index} delay={skill.delay} className="group">
                <div className="bg-darkBlue p-6 rounded-xl h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-neonBlue/10 hover:-translate-y-1">
                  <div className={`p-3 rounded-lg w-fit ${skill.color} bg-opacity-10 mb-4`}>
                    <span className={`text-2xl ${skill.color === 'bg-neonBlue' ? 'text-neonBlue' : skill.color === 'bg-neonCyan' ? 'text-neonCyan' : 'text-neonPink'}`}>
                      {skill.icon}
                    </span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-2 group-hover:text-neonCyan transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-darkBlue bg-opacity-30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-4">Featured <span className="text-neonCyan">Projects</span></h2>
              <p className="text-gray-400 max-w-lg">
                A selection of my recent work. These projects showcase my skills and experience.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button to="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'SPA Agency Website',
                description: 'A modern single-page application for a digital agency with smooth animations and responsive design.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1RRHbrQ9_93IdZxzjqwP8Jxm0NtyxiPv5Q&s',
                technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
                url: 'https://genuine-longma-b9cb37.netlify.app',
              },
              {
                title: 'AI Agent App',
                description: 'An artificial intelligence agent application with natural language processing capabilities.',
                image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                technologies: ['React', 'Node.js', 'API Integration'],
                url: 'https://w-5322.lovable.app',
              },
            ].map((project, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <div className="bg-darkBlue rounded-xl overflow-hidden group">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-transparent to-transparent opacity-80"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-neonCyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-darkBg text-neonCyan"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-neonCyan hover:text-white transition-colors font-medium"
                    >
                      View Project <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-gradient-to-r from-darkBlue to-darkBg p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-72 h-72 bg-neonBlue rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-neonCyan rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
                Ready to bring your <span className="text-neonCyan">ideas</span> to life?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm currently available for freelance work. If you have a project that needs some creative touch, I'd love to hear about it.
              </p>
              <Button to="/contact">Let's work together</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;