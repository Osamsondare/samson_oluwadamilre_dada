import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-poppins font-semibold text-xl mb-2">Samson<span className="text-neonCyan">.</span>Dada</h3>
            <p className="text-gray-400 max-w-xs">
              Crafting elegant web solutions with modern technologies.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-center md:text-right">
            <h4 className="font-poppins font-medium text-neonCyan mb-2">Quick Links</h4>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-2 text-center md:text-right">
            <h4 className="font-poppins font-medium text-neonCyan mb-2">Social Media</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://github.com/samwise247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neonCyan transition-all transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/samwise247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neonCyan transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/samson_o_dada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neonCyan transition-all transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/osamsondare247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neonCyan transition-all transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:samsonoluwadamilaredada@gmail.com"
                className="text-gray-400 hover:text-neonCyan transition-all transform hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Samson Oluwadamilare Dada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;