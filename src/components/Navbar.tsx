import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-darkBlue/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-white font-poppins font-semibold text-xl">
          <Code className="text-neonCyan" size={28} />
          <span className="text-white">Samson<span className="text-neonCyan">.</span>Dada</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium text-sm tracking-wide transition-all hover:text-neonCyan relative ${
                  isActive ? 'text-neonCyan' : 'text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neonCyan"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-neonCyan transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden fixed inset-0 bg-darkBlue z-40 pt-20 px-4 ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: '-100%' }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `font-medium text-lg py-3 px-4 rounded-md transition-all ${
                  isActive ? 'text-neonCyan bg-darkBg/50' : 'text-white hover:bg-darkBg/20'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;