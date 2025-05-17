import React from 'react';
import { Code, Globe, Database, Brush, Download } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SkillProgress from '../components/SkillProgress';
import Button from '../components/Button';

const About = () => {
  const skills = [
    { name: 'HTML & CSS', percentage: 95, color: 'bg-neonBlue' },
    { name: 'Tailwind CSS', percentage: 90, color: 'bg-neonCyan' },
    { name: 'JavaScript', percentage: 85, color: 'bg-neonPink' },
    { name: 'React.js', percentage: 90, color: 'bg-neonBlue' },
    { name: 'Responsive Design', percentage: 80, color: 'bg-neonCyan' },
    { name: 'Node.js', percentage: 75, color: 'bg-neonPink' },
  ];

  const experiences = [
    {
      year: '2022 - Present',
      position: 'Frontend Developer',
      company: 'Freelance',
      description: 'Working with clients to build responsive and user-friendly web applications.'
    },
    {
      year: '2020 - 2022',
      position: 'Web Developer',
      company: 'Tech Agency',
      description: 'Developed and maintained websites and web applications for various clients.'
    },
    {
      year: '2018 - 2020',
      position: 'Junior Developer',
      company: 'Digital Solutions Inc.',
      description: 'Started my career as a junior developer working on HTML, CSS and JavaScript projects.'
    },
  ];

  const services = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Creating responsive websites with clean, optimized code'
    },
    {
      icon: <Globe size={24} />,
      title: 'Single Page Applications',
      description: 'Building fast, interactive SPAs using modern frameworks'
    },
    {
      icon: <Database size={24} />,
      title: 'API Integration',
      description: 'Connecting your application to third-party services'
    },
    {
      icon: <Brush size={24} />,
      title: 'Backend Development',
      description: 'Using Node Js for Backend Integration'
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <section className="mb-20">
          <AnimatedSection className="max-w-4xl">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              About <span className="text-neonCyan">Me</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              I'm a passionate web developer with a strong focus on creating elegant, intuitive, and 
              high-performance web applications. My journey in web development began several years ago, 
              and I've been honing my skills ever since.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <AnimatedSection direction="left">
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
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <h2 className="font-poppins font-semibold text-2xl md:text-3xl mb-4">
                Frontend Developer <span className="text-neonCyan">&</span> UI Designer
              </h2>
              <p className="text-gray-400">
                I specialize in building modern web applications using React.js and other cutting-edge technologies. 
                My approach combines technical expertise with an eye for design, ensuring that the end product is 
                not only functional but also visually appealing and user-friendly.
              </p>
              <p className="text-gray-400">
                With a focus on writing clean, maintainable code, I strive to create solutions that are not only 
                effective today but also adaptable for future growth. I'm constantly learning and exploring new 
                technologies to enhance my skill set.
              </p>
              <div className="pt-4">
                <Button variant="outline" icon={<Download size={16} />}>
                  Download Resume
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">Technical <span className="text-neonCyan">Skills</span></h2>
            <p className="text-gray-400">
              Here's an overview of my technical skills and proficiency levels.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <SkillProgress
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">Work <span className="text-neonCyan">Experience</span></h2>
            <p className="text-gray-400">
              My professional journey and career path in the industry.
            </p>
          </AnimatedSection>

          <div className="relative border-l-2 border-neonBlue ml-4 md:ml-8 pl-8 space-y-12">
            {experiences.map((experience, index) => (
              <AnimatedSection key={index} direction="left" delay={index * 0.2}>
                <div className="relative">
                  <div className="absolute -left-[40px] w-6 h-6 bg-darkBg border-2 border-neonCyan rounded-full"></div>
                  <span className="inline-block px-3 py-1 bg-darkBlue rounded-full text-neonCyan text-sm font-medium mb-2">
                    {experience.year}
                  </span>
                  <h3 className="font-poppins font-semibold text-xl">
                    {experience.position} <span className="text-gray-400">at {experience.company}</span>
                  </h3>
                  <p className="text-gray-400 mt-2">{experience.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section>
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">My <span className="text-neonCyan">Services</span></h2>
            <p className="text-gray-400">
              Here are the services I offer to help bring your digital ideas to life.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="group">
                <div className="bg-darkBlue p-6 rounded-xl h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-neonBlue/10 hover:-translate-y-1">
                  <div className="p-3 rounded-lg w-fit bg-neonBlue bg-opacity-10 mb-4">
                    <span className="text-neonBlue">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-2 group-hover:text-neonCyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;