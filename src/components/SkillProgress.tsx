import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ name, percentage, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-darkBg rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;