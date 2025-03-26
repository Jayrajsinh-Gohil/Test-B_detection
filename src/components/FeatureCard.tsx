
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  imageUrl?: string;
}

const FeatureCard = ({ title, description, icon, className = '', imageUrl }: FeatureCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`relative overflow-hidden rounded-2xl border-2 border-slate-800/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl shadow-2xl p-6 ${className}`}
      style={{
        backgroundImage: imageUrl ? `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.98)), url(${imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Colorful accent line with gradient */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      {/* Content container */}
      <div className="relative z-10">
        <div className="text-indigo-300 mb-4 flex items-center justify-center w-16 h-16 rounded-xl 
          bg-gradient-to-br from-indigo-500/20 to-purple-500/20 shadow-xl backdrop-blur-md
          transform transition-all duration-500 hover:rotate-6">
          {icon}
        </div>
        
        <h3 className="text-2xl font-display font-semibold text-white mb-3 tracking-tight">
          {title}
        </h3>
        
        <p className="text-slate-300 transition-colors duration-300">
          {description}
        </p>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"></div>
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
