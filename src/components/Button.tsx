import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  external,
  className = '',
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkBg';
  
  const variantStyles = {
    primary: 'bg-neonBlue hover:bg-neonBlue/90 text-white focus:ring-neonBlue',
    secondary: 'bg-neonCyan hover:bg-neonCyan/90 text-darkBg focus:ring-neonCyan',
    outline: 'bg-transparent border border-neonCyan text-neonCyan hover:bg-neonCyan/10 focus:ring-neonCyan',
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );
  
  if (to) {
    if (external) {
      return (
        <motion.a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.a>
      );
    }
    
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={to} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;