"use client";

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiGithub, SiFramer } from 'react-icons/si';
import { RiCodeSSlashLine } from 'react-icons/ri';

interface TechCardProps {
  title: string;
  description: string;
  icon: IconType;
  gradient: string;
}

const TechCard = ({ title, description, icon: Icon, gradient }: TechCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group h-[200px]"
    >
      <div className={`absolute inset-0 ${gradient} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
      <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 h-full flex flex-col">
        <div className="flex items-center space-x-4 mb-4">
          <Icon className="w-8 h-8 text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400">{title}</h3>
        </div>
        <p className="text-white/70 flex-1 flex items-center">{description}</p>
      </div>
    </motion.div>
  );
};

const technologies = [
  {
    title: 'Next.js & TypeScript',
    description: 'Modern React framework with type safety for robust web applications',
    icon: SiNextdotjs,
    gradient: 'bg-gradient-to-br from-blue-500/20 via-white/10 to-purple-500/20'
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    icon: SiTailwindcss,
    gradient: 'bg-gradient-to-br from-cyan-500/20 via-white/10 to-blue-500/20'
  },
  {
    title: 'Firebase',
    description: 'Scalable backend infrastructure and hosting platform',
    icon: SiFirebase,
    gradient: 'bg-gradient-to-br from-yellow-500/20 via-white/10 to-orange-500/20'
  },
  {
    title: 'GitHub',
    description: 'Version control and collaborative development platform',
    icon: SiGithub,
    gradient: 'bg-gradient-to-br from-purple-500/20 via-white/10 to-pink-500/20'
  },
  {
    title: 'Framer Motion',
    description: 'Production-ready animation library for React applications',
    icon: SiFramer,
    gradient: 'bg-gradient-to-br from-pink-500/20 via-white/10 to-red-500/20'
  },
  {
    title: 'Aceternity UI',
    description: 'Modern UI components library for creating stunning interactive interfaces',
    icon: RiCodeSSlashLine,
    gradient: 'bg-gradient-to-br from-green-500/20 via-white/10 to-emerald-500/20'
  }
];

export const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <TechCard {...tech} />
        </motion.div>
      ))}
    </div>
  );
};