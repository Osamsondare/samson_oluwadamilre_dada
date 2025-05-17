import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'WhatsApp',
      details: '+234 803 825 9848',
      link: 'https://wa.me/+2348038259848'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'samsonoluwadamilaredada@gmail.com',
      link: 'mailto:samsonoluwadamilaredada@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'Lagos, Nigeria',
      link: 'https://maps.google.com/?q=Lagos,Nigeria'
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      link: 'https://github.com/samwise247',
      color: 'hover:text-white'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/samwise247',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      link: 'https://x.com/samson_o_dada',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Facebook size={24} />,
      name: 'Facebook',
      link: 'https://www.facebook.com/osamsondare247',
      color: 'hover:text-blue-600'
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mb-12">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Get In <span className="text-neonCyan">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind or want to chat? Feel free to reach out through any of the channels below
            or use the contact form. I'm always open to new opportunities and collaborations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left">
            <div className="bg-darkBlue p-8 rounded-xl">
              <h2 className="font-poppins font-semibold text-2xl mb-6">
                Contact <span className="text-neonCyan">Information</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start gap-4 p-4 rounded-lg bg-darkBg hover:bg-darkBg/70 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-2 bg-neonBlue bg-opacity-10 rounded-lg text-neonCyan">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <h3 className="font-poppins font-medium text-xl mb-4">
                Follow <span className="text-neonCyan">Me</span>
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-darkBg rounded-lg text-gray-400 transition-all transform hover:-translate-y-1 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-darkBlue p-8 rounded-xl">
              <h2 className="font-poppins font-semibold text-2xl mb-6">
                Send A <span className="text-neonCyan">Message</span>
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;