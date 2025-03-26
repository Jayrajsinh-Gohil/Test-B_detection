import { Shield, Award, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustIndicators = () => {
  const trustItems = [
    {
      icon: <Shield size={24} className="text-indigo-400" />,
      title: "Government Certified",
      description: "All features and recommendations follow ICMR guidelines"
    },
    {
      icon: <Award size={24} className="text-purple-400" />,
      title: "AI Safety Verified",
      description: "Our AI models have undergone rigorous clinical testing"
    },
    {
      icon: <CheckCircle size={24} className="text-emerald-400" />,
      title: "Privacy Focused",
      description: "Your data is encrypted and never shared with third parties"
    },
    {
      icon: <Zap size={24} className="text-amber-400" />,
      title: "24/7 Support",
      description: "Our team is always available to assist you"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-950/70 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-900/50 to-purple-900/50 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
