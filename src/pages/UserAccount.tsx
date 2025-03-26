
import { useState, useEffect } from 'react';
import { Calendar, Heart, LineChart, Clock, Bell, Settings, ChevronRight, RefreshCw, BarChart, Shield, Activity, Droplets, MoonStar, Clipboard } from 'lucide-react';
import FloatingActionButton from '../components/FloatingActionButton';
import { motion } from 'framer-motion';
import { toast } from "@/components/ui/use-toast";

const UserAccount = () => {
  const [currentWeek, setCurrentWeek] = useState(24);
  const [riskLevel, setRiskLevel] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { id: 1, type: 'Regular Checkup', doctor: 'Dr. Priya Sharma', date: '2023-05-15', time: '10:00 AM', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { id: 2, type: 'Ultrasound Scan', doctor: 'Dr. Rajesh Kumar', date: '2023-05-28', time: '02:30 PM', image: 'https://randomuser.me/api/portraits/men/32.jpg' }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRefreshData = () => {
    toast({
      title: "Data refreshed",
      description: "Your health metrics have been updated",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-slate-900">
      <FloatingActionButton />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-display font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">My Dashboard</h1>
              <p className="text-slate-400">Track your pregnancy journey and health metrics</p>
            </motion.div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl px-4 py-2 flex items-center mr-4 shadow-lg">
                <span className="text-sm text-slate-400 mr-2">Current Week:</span>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{currentWeek}</span>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-2 px-4 bg-slate-800 border border-slate-700/50 text-slate-300 rounded-lg shadow-lg hover:bg-slate-700 transition-all duration-300 flex items-center"
              >
                <Settings size={16} className="mr-2" />
                Settings
              </motion.button>
            </div>
          </div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content area - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pregnancy Progress Tracker */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-display font-bold text-white">
                  Pregnancy Progress
                </h2>
                <motion.button 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                  onClick={handleRefreshData}
                  className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-700 transition-colors"
                >
                  <RefreshCw size={14} className="text-slate-400" />
                </motion.button>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/30 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-400">Week 1</span>
                  <span className="text-slate-400">Week 40</span>
                </div>
                
                <div className="relative h-4 bg-slate-700/50 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"
                    style={{ width: `${(currentWeek / 40) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent bg-[length:500%_500%] animate-[pulse_3s_ease-in-out_infinite]"></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-slate-500">First Trimester</span>
                  <span className="text-xs text-slate-500">Second Trimester</span>
                  <span className="text-xs text-slate-500">Third Trimester</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/30 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-800/80">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30 flex items-center justify-center text-emerald-400 mr-3">
                      <Heart size={20} />
                    </div>
                    <h3 className="font-medium text-white">Baby Development</h3>
                  </div>
                  
                  <p className="text-sm text-slate-400 mb-3">
                    Your baby is the size of a cantaloupe and weighs about 1.3 pounds. Their face is fully formed and they're developing taste buds.
                  </p>
                  
                  <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors flex items-center">
                    See detailed development
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/30 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-800/80">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400/30 to-rose-400/30 flex items-center justify-center text-pink-400 mr-3">
                      <Calendar size={20} />
                    </div>
                    <h3 className="font-medium text-white">Key Milestones</h3>
                  </div>
                  
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-slate-400">Anatomy Scan Completed</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                      <span className="text-slate-400">Glucose Test (Upcoming)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-slate-500 mr-2"></span>
                      <span className="text-slate-400">Third Trimester Checkup</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>
            
            {/* Health Metrics */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-display font-bold text-white">
                  Health Metrics
                </h2>
                <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">View All</button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/30 p-3 rounded-xl shadow-md text-center group hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-xs text-slate-400 mb-1 flex items-center justify-center">
                    <Activity size={12} className="mr-1" />
                    Blood Pressure
                  </div>
                  <div className="text-xl font-semibold text-white group-hover:scale-110 transition-transform duration-300">110/70</div>
                  <div className="text-xs text-emerald-400">Normal</div>
                </div>
                
                <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/30 p-3 rounded-xl shadow-md text-center group hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-xs text-slate-400 mb-1 flex items-center justify-center">
                    <BarChart size={12} className="mr-1" />
                    Weight
                  </div>
                  <div className="text-xl font-semibold text-white group-hover:scale-110 transition-transform duration-300">58 kg</div>
                  <div className="text-xs text-emerald-400">+4.2 kg</div>
                </div>
                
                <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/30 p-3 rounded-xl shadow-md text-center group hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-xs text-slate-400 mb-1 flex items-center justify-center">
                    <Droplets size={12} className="mr-1" />
                    Hydration
                  </div>
                  <div className="text-xl font-semibold text-white group-hover:scale-110 transition-transform duration-300">1.8 L</div>
                  <div className="text-xs text-amber-400">Need more</div>
                </div>
                
                <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/30 p-3 rounded-xl shadow-md text-center group hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-xs text-slate-400 mb-1 flex items-center justify-center">
                    <MoonStar size={12} className="mr-1" />
                    Sleep
                  </div>
                  <div className="text-xl font-semibold text-white group-hover:scale-110 transition-transform duration-300">7.2 hrs</div>
                  <div className="text-xs text-emerald-400">Good</div>
                </div>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-4 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-white">Weekly Trends</h3>
                  <div className="flex space-x-2">
                    <button className="text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 py-1 rounded-md shadow-md">Weight</button>
                    <button className="text-xs bg-slate-700/70 text-slate-300 hover:bg-slate-700 px-2 py-1 rounded-md transition-colors">BP</button>
                    <button className="text-xs bg-slate-700/70 text-slate-300 hover:bg-slate-700 px-2 py-1 rounded-md transition-colors">Sleep</button>
                  </div>
                </div>
                
                <div className="h-40 bg-slate-900/50 rounded-lg flex items-center justify-center border border-slate-700/30">
                  <LineChart className="text-slate-500" size={32} />
                  <span className="ml-2 text-sm text-slate-400">Tracking data visualization</span>
                </div>
              </div>
            </motion.section>
          </div>
          
          {/* Sidebar - 1/3 width on large screens */}
          <div className="space-y-6">
            {/* Risk Assessment */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Shield size={18} className="text-indigo-400 mr-2" />
                <h2 className="text-xl font-display font-bold text-white">
                  AI Risk Assessment
                </h2>
              </div>
              
              <div className={`p-4 rounded-xl mb-4 ${
                riskLevel === 'Low' ? 'bg-emerald-900/20 border border-emerald-700/30' : 
                riskLevel === 'Medium' ? 'bg-amber-900/20 border border-amber-700/30' : 
                'bg-rose-900/20 border border-rose-700/30'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-300">Current Risk Level</span>
                  <span className={`text-sm font-bold ${
                    riskLevel === 'Low' ? 'text-emerald-400' : 
                    riskLevel === 'Medium' ? 'text-amber-400' : 
                    'text-rose-400'
                  }`}>
                    {riskLevel}
                  </span>
                </div>
                
                <div className="mt-2 text-xs text-slate-400">
                  Based on your recent health data and check-ups
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-3 rounded-lg shadow-md hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">Blood Pressure</span>
                    <span className="text-sm font-medium text-emerald-400">Normal</span>
                  </div>
                </div>
                
                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-3 rounded-lg shadow-md hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">Weight Gain</span>
                    <span className="text-sm font-medium text-emerald-400">Normal</span>
                  </div>
                </div>
                
                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-3 rounded-lg shadow-md hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">Swelling</span>
                    <span className="text-sm font-medium text-amber-400">Mild</span>
                  </div>
                </div>
                
                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-3 rounded-lg shadow-md hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">Fetal Movement</span>
                    <span className="text-sm font-medium text-emerald-400">Active</span>
                  </div>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium py-3 rounded-xl mt-4 shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Clipboard size={16} className="mr-2" />
                Complete Today's Check-in
              </motion.button>
            </motion.section>
            
            {/* Upcoming Appointments */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Calendar size={18} className="text-indigo-400 mr-2" />
                  <h2 className="text-xl font-display font-bold text-white">
                    Upcoming Appointments
                  </h2>
                </div>
                <button className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">
                  Schedule New
                </button>
              </div>
              
              <div className="space-y-3">
                {upcomingAppointments.map(appointment => (
                  <motion.div 
                    key={appointment.id} 
                    className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-800/70 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-slate-700">
                        <img
                          src={appointment.image}
                          alt={appointment.doctor}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-white">{appointment.type}</h3>
                        <p className="text-sm text-slate-400">{appointment.doctor}</p>
                        <div className="mt-2 flex items-center">
                          <Calendar size={14} className="text-indigo-400 mr-1" />
                          <span className="text-xs text-slate-400">
                            {new Date(appointment.date).toLocaleDateString('en-US', { 
                              month: 'short', day: 'numeric', year: 'numeric'
                            })} at {appointment.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex space-x-2">
                      <button className="flex-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1.5 rounded-lg font-medium transition-colors shadow-md">
                        Reschedule
                      </button>
                      <button className="flex-1 text-xs bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-3 py-1.5 rounded-lg font-medium transition-all shadow-md">
                        Confirm
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4">
                <button className="w-full text-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium flex items-center justify-center">
                  View All Appointments
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
