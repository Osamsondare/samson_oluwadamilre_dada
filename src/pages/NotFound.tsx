import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h1 className="font-poppins font-bold text-8xl mb-4 gradient-text">404</h1>
        <h2 className="font-poppins font-semibold text-2xl mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" icon={<Home size={18} />}>
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;