
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ActivitySquare, Calendar, Heart, MessageCircle, ShieldCheck, Users, ArrowRight, ChevronRight, Star, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import StatBanner from '../components/StatBanner';
import FeatureCard from '../components/FeatureCard';
import TrustIndicators from '../components/TrustIndicators';
import LanguageSelector from '../components/LanguageSelector';
import FloatingActionButton from '../components/FloatingActionButton';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Example images for cards
  const cardImages = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=60'
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "First-time Mother",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      testimonial: "mAI Motherhood has been a lifesaver during my pregnancy. The AI predicted my preeclampsia risk two weeks before symptoms appeared!"
    },
    {
      name: "Ananya Patel",
      role: "Mother of Two",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      testimonial: "The 24/7 expert support helped me through postpartum depression. I don't know how I would have managed without it."
    },
    {
      name: "Rohan Das",
      role: "New Father",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      testimonial: "We use the app together as a family. The nutrition advice and product recommendations have been incredibly helpful."
    }
  ];

  // Animation variants
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
    <>
      <StatBanner />
      <FloatingActionButton />
      
      <main className="min-h-screen pt-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900/95 to-indigo-950/90"></div>
        <div className="fixed inset-0 -z-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="fixed top-0 left-0 w-full h-full -z-5">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full filter blur-3xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-600/20 to-transparent rounded-full filter blur-3xl" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Hero Section with modern gradient background */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/30 z-0 opacity-80"></div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-emerald-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-32 -right-40 w-80 h-80 bg-pink-600/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
              >
                Your <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Companion</span> for Safe Pregnancy & Motherhood
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-300 mb-8"
              >
                Expert guidance, personalized care, and community support for every stage of your motherhood journey
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link to="/chat" className="w-full sm:w-auto py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity"></span>
                  <span className="relative flex items-center justify-center z-10">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask mAI Assistant
                  </span>
                </Link>
                
                <Link to="/consultation" className="w-full sm:w-auto py-3 px-6 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white rounded-xl font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity"></span>
                  <span className="relative z-10">
                    Emergency Connect
                  </span>
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6"
              >
                <Link to="/marketplace" className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center justify-center">
                  Browse Trusted Products
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-4xl mx-auto mt-16 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform perspective-1000 hover:rotate-1 transition-transform duration-500 border-2 border-slate-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80" 
                  alt="Mother and child using the app" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-semibold mb-2">Trusted by Mothers Across India</h3>
                  <p className="text-slate-300">Join thousands of mothers who trust our platform for their pregnancy journey</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full animate-morph opacity-70"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full animate-morph opacity-70" style={{ animationDelay: "2s" }}></div>
            </motion.div>
            
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8">
              <LanguageSelector />
            </div>
          </div>
        </section>
        
        {/* Key Features Section with glass cards */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900 z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block mb-4">
                Complete Care Throughout Your Journey
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our comprehensive platform provides everything you need for a healthy pregnancy and motherhood experience
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={itemVariants}>
                <FeatureCard
                  title="Real-time Health Monitoring"
                  description="Track your vitals, symptoms, and baby's growth with our AI-powered dashboard that alerts you to any concerning changes."
                  icon={<ActivitySquare size={28} className="text-indigo-300" />}
                  imageUrl={cardImages[0]}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard
                  title="AI Risk Prediction"
                  description="Our advanced algorithm analyzes your health data to identify potential complications before they become serious."
                  icon={<ShieldCheck size={28} className="text-indigo-300" />}
                  imageUrl={cardImages[1]}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard
                  title="24/7 Expert Support"
                  description="Connect with qualified OB-GYNs and pediatricians via video call whenever you need medical guidance."
                  icon={<MessageCircle size={28} className="text-indigo-300" />}
                  imageUrl={cardImages[2]}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard
                  title="Community Support Network"
                  description="Join a community of mothers from your region to share experiences and get emotional support."
                  icon={<Users size={28} className="text-indigo-300" />}
                  imageUrl={cardImages[3]}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard
                  title="Verified Product Marketplace"
                  description="Shop for government-certified and community-validated pregnancy and baby products."
                  icon={<Heart size={28} className="text-indigo-300" />}
                  imageUrl={cardImages[4]}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FeatureCard
                  title="Milestone Tracking"
                  description="Never miss an important checkup or vaccination with personalized reminders and schedules."
                  icon={<Calendar size={28} className="text-indigo-300" />}
                  imageUrl={cardImages[5]}
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <Link to="/account" className="py-3 px-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity"></span>
                <span className="relative z-10">Create Your Health Dashboard</span>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-indigo-950/70 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block mb-4">
                Stories from Our Community
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Hear from mothers who have transformed their pregnancy and motherhood journey with our platform
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-600/30">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-white">{testimonial.name}</h3>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 text-slate-300 relative">
                    <span className="absolute -top-2 -left-2 text-4xl text-indigo-600/30">"</span>
                    <p className="relative z-10 pl-3">{testimonial.testimonial}</p>
                    <span className="absolute -bottom-4 -right-2 text-4xl text-indigo-600/30">"</span>
                  </div>
                  
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Health Dashboard Preview with glass effect */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900 z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10 lg:mb-0"
              >
                <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block mb-6">
                  Your Personalized Health Dashboard
                </h2>
                <p className="text-slate-400 mb-6">
                  Track your pregnancy journey with our intuitive dashboard that keeps all your health information in one secure place.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Week-by-week development tracking with visualization",
                    "Vital signs monitoring with smart alerts",
                    "Nutrition and hydration tracking",
                    "Appointment reminders with direct booking",
                    "Medication and supplement management"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5 mr-3 shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <Link to="/account" className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center">
                    Access Your Dashboard
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border-2 border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(79,70,229,0.3)] transition-all duration-500 transform hover:scale-105"
              >
                <div className="bg-slate-800 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
                  <div className="h-8 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                        alt="Dashboard interface" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="bg-indigo-900/30 p-3 rounded-lg hover:bg-indigo-900/40 transition-colors duration-300 shadow-md border border-indigo-800/30 group">
                        <div className="text-xs text-slate-400 mb-1">Week</div>
                        <div className="text-2xl font-bold text-indigo-300 group-hover:scale-110 transition-transform duration-300">24</div>
                      </div>
                      <div className="bg-emerald-900/30 p-3 rounded-lg hover:bg-emerald-900/40 transition-colors duration-300 shadow-md border border-emerald-800/30 group">
                        <div className="text-xs text-slate-400 mb-1">Risk Score</div>
                        <div className="text-2xl font-bold text-emerald-300 group-hover:scale-110 transition-transform duration-300">Low</div>
                      </div>
                      <div className="bg-rose-900/30 p-3 rounded-lg hover:bg-rose-900/40 transition-colors duration-300 shadow-md border border-rose-800/30 group">
                        <div className="text-xs text-slate-400 mb-1 flex items-center">
                          <Clock size={10} className="mr-1" />
                          Next Checkup
                        </div>
                        <div className="text-lg font-bold text-rose-300 group-hover:scale-110 transition-transform duration-300">May 15</div>
                      </div>
                      <div className="bg-amber-900/30 p-3 rounded-lg hover:bg-amber-900/40 transition-colors duration-300 shadow-md border border-amber-800/30 group">
                        <div className="text-xs text-slate-400 mb-1 flex items-center">
                          <Heart size={10} className="mr-1" />
                          Baby Size
                        </div>
                        <div className="text-lg font-bold text-amber-300 group-hover:scale-110 transition-transform duration-300">Papaya</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Trust Indicators */}
        <TrustIndicators />
        
        {/* Call to Action with gradient background */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80" 
              alt="Background texture" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Start Your Safe Motherhood Journey Today
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-300 max-w-2xl mx-auto mb-8"
            >
              Join thousands of Indian mothers who are receiving personalized care, expert guidance, and community support through our platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/account" className="py-3 px-6 bg-white text-slate-900 rounded-xl font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Create Your Account
              </Link>
              <Link to="/chat" className="py-3 px-6 bg-transparent border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-colors hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                <MessageSquare size={18} className="mr-2" />
                Try mAI Assistant
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
