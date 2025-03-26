import { useState, useEffect } from 'react';
import { Calendar, Clock, Search, Video, MapPin, Filter, Phone, AlertTriangle } from 'lucide-react';
import FloatingActionButton from '../components/FloatingActionButton';

const SymptomCheckerModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto animate-fade-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-display font-semibold text-indigo-300">
              AI Symptom Checker
            </h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-slate-300 mb-2">Where are you experiencing discomfort?</h4>
              <div className="aspect-[2/3] bg-slate-700/50 rounded-xl flex items-center justify-center">
                <img src="/placeholder.svg" alt="Body Map" className="max-h-full" />
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-300 mb-2">Describe your symptoms</h4>
              <textarea
                className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-xl h-24 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"
                placeholder="e.g., I've been having a dull pain in my lower abdomen since yesterday morning..."
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <button className="p-2 rounded-full bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 transition-colors mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </button>
              <span className="text-sm text-slate-400">Enable voice input in हिन्दी, বাংলা, or 6 other languages</span>
            </div>
            
            <div className="pt-4 border-t border-slate-700">
              <button className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
                Check Symptoms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmergencyProtocolModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 border border-rose-700/30 rounded-2xl max-w-lg w-full animate-fade-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-display font-semibold text-rose-400">
              Emergency Protocol
            </h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="bg-rose-900/20 p-4 rounded-xl mb-6 flex items-start">
            <AlertTriangle className="text-rose-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-rose-300 mb-1">This may require immediate attention</h4>
              <p className="text-sm text-slate-300">
                Based on your inputs, we recommend immediate medical attention. We're here to help you connect with emergency care.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center bg-rose-600 hover:bg-rose-500 text-white py-3 px-4 rounded-xl transition-colors shadow-lg hover:shadow-rose-500/20">
              <Phone className="mr-2" size={18} />
              Call Emergency Helpline
            </button>
            
            <button className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 rounded-xl transition-colors shadow-lg hover:shadow-indigo-500/20">
              <Video className="mr-2" size={18} />
              Connect to On-Call OB-GYN
            </button>
            
            <button className="w-full flex items-center justify-center bg-slate-700 border border-slate-600 text-white py-3 px-4 rounded-xl hover:bg-slate-600 transition-colors">
              <MapPin className="mr-2" size={18} />
              Navigate to Nearest Hospital
            </button>
          </div>
          
          <div className="text-sm text-slate-400 italic">
            Your location and medical profile will be shared with the emergency responder for faster assistance.
          </div>
        </div>
      </div>
    </div>
  );
};

const Consultation = () => {
  const [isSymptomCheckerOpen, setIsSymptomCheckerOpen] = useState(false);
  const [isEmergencyProtocolOpen, setIsEmergencyProtocolOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample doctors data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialty: 'Obstetrician & Gynecologist',
      experience: '15+ years',
      languages: ['English', 'Hindi', 'Bengali'],
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      nextAvailable: 'Today, 4:00 PM',
      rating: 4.9,
      reviewCount: 231
    },
    {
      id: 2,
      name: 'Dr. Anand Kumar',
      specialty: 'High-Risk Pregnancy Specialist',
      experience: '12+ years',
      languages: ['English', 'Hindi', 'Tamil'],
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      nextAvailable: 'Tomorrow, 10:30 AM',
      rating: 4.8,
      reviewCount: 187
    },
    {
      id: 3,
      name: 'Dr. Lakshmi Rao',
      specialty: 'Obstetrician & Fertility Specialist',
      experience: '10+ years',
      languages: ['English', 'Telugu', 'Kannada'],
      avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      nextAvailable: 'Today, 7:15 PM',
      rating: 4.7,
      reviewCount: 156
    }
  ];

  return (
    <div className="min-h-screen pt-16 pb-16 bg-slate-900 text-slate-100">
      <FloatingActionButton />
      
      {/* Emergency Banner */}
      <div className="bg-rose-900/20 border-b border-rose-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <button
            onClick={() => setIsEmergencyProtocolOpen(true)}
            className="w-full flex items-center justify-center md:justify-between bg-slate-800/80 border border-rose-700/30 rounded-xl p-4 hover:bg-slate-800 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-rose-900/30 flex items-center justify-center text-rose-400 mr-3">
                <AlertTriangle size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-rose-300">Bleeding/Contractions?</h3>
                <p className="text-sm text-slate-400">Click for Immediate Triage</p>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-medium">
                Emergency Protocol
              </span>
            </div>
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-display font-semibold text-white mb-2">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Get Expert Care</span>
          </h1>
          <p className="text-slate-300">
            Choose from our 3-tier system to get the right medical attention for your needs
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* AI Symptom Checker */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl font-display font-semibold text-white mb-2">
                AI Symptom Checker
              </h2>
              <p className="text-slate-300 text-sm mb-4">
                Describe your symptoms and get an initial assessment from our AI system. Available in 8 Indian languages.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-slate-300">Body Map Interface</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-slate-300">Multilingual Voice Input</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-slate-300">Preliminary Safety Assessment</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsSymptomCheckerOpen(true)}
              className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            >
              Check Symptoms
            </button>
          </div>
          
          {/* Instant Connect */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 mb-3">
                <Video size={24} />
              </div>
              <h2 className="text-xl font-display font-semibold text-white mb-2">
                Instant Connect
              </h2>
              <p className="text-slate-300 text-sm mb-4">
                Connect with a healthcare provider quickly. Choose between video consultation or an in-person appointment.
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between items-center mb-1">
                  <div className="font-medium text-white">Video Consult</div>
                  <div className="text-purple-300 font-bold">₹299</div>
                </div>
                <div className="text-xs text-slate-400 mb-3">Connect with a doctor within 15 minutes</div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-medium py-2 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  Book Now
                </button>
              </div>
              
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between items-center mb-1">
                  <div className="font-medium text-white">In-Person Visit</div>
                  <div className="text-purple-300 font-bold">Varies</div>
                </div>
                <div className="text-xs text-slate-400 mb-3">Find nearest empaneled clinic</div>
                <button className="w-full border border-purple-500/30 text-purple-300 text-sm font-medium py-2 rounded-lg hover:bg-purple-900/20 transition-all duration-300">
                  Find Clinic
                </button>
              </div>
            </div>
            
            <div className="text-xs text-slate-400 italic text-center">
              All video consultations include a 3-day follow-up period for questions
            </div>
          </div>
          
          {/* Specialist Booking */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 mb-3">
                <Calendar size={24} />
              </div>
              <h2 className="text-xl font-display font-semibold text-white mb-2">
                Specialist Booking
              </h2>
              <p className="text-slate-300 text-sm mb-4">
                Schedule an appointment with a specialist of your choice. Filter by language, specialty, and availability.
              </p>
            </div>
            
            <div className="flex mb-4">
              <div className="w-1/2 pr-1">
                <label className="block text-xs text-slate-400 mb-1">Specialty</label>
                <select className="w-full py-2 px-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white text-sm">
                  <option>Any Specialty</option>
                  <option>High-Risk Pregnancy</option>
                  <option>Fertility Specialist</option>
                  <option>Gynecologist</option>
                  <option>Pediatrician</option>
                </select>
              </div>
              <div className="w-1/2 pl-1">
                <label className="block text-xs text-slate-400 mb-1">Language</label>
                <select className="w-full py-2 px-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white text-sm">
                  <option>Any Language</option>
                  <option>Hindi</option>
                  <option>Bengali</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Marathi</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-xs text-slate-400 mb-1">Date</label>
              <button className="w-full flex justify-between items-center py-2 px-3 bg-slate-700 border border-slate-600 rounded-lg text-white">
                <span className="text-sm">
                  {selectedDate ? selectedDate.toLocaleDateString() : 'Select a date'}
                </span>
                <Calendar size={16} className="text-slate-400" />
              </button>
            </div>
            
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              Find Specialists
            </button>
          </div>
        </div>
        
        {/* Available Specialists */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-display font-semibold text-white">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Available Specialists</span>
            </h2>
            <div className="flex items-center space-x-2">
              <Search size={18} className="text-slate-400" />
              <Filter size={18} className="text-slate-400" />
            </div>
          </div>
          
          <div className="space-y-4">
            {doctors.map(doctor => (
              <div key={doctor.id} className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-4 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="mb-4 md:mb-0 md:mr-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-2 bg-slate-700 border border-slate-600">
                      <img 
                        src={doctor.avatar} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="text-xs font-bold ml-1 text-white">{doctor.rating}</span>
                      <span className="text-xs text-slate-400 ml-1">({doctor.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-display font-semibold text-white text-lg">{doctor.name}</h3>
                        <p className="text-purple-300 font-medium text-sm">{doctor.specialty}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-sm">
                        <span className="text-slate-300">{doctor.experience} experience</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {doctor.languages.map((language, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center">
                      <div className="flex items-center mb-3 sm:mb-0 sm:mr-6">
                        <Clock size={16} className="text-emerald-400 mr-1" />
                        <span className="text-sm text-slate-300">Next available: <span className="font-medium text-white">{doctor.nextAvailable}</span></span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 sm:flex-none bg-slate-700 border border-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-600 transition-colors">
                          View Profile
                        </button>
                        <button className="flex-1 sm:flex-none bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
              View More Specialists
            </button>
          </div>
        </section>
      </div>
      
      <SymptomCheckerModal 
        isOpen={isSymptomCheckerOpen} 
        onClose={() => setIsSymptomCheckerOpen(false)} 
      />
      
      <EmergencyProtocolModal
        isOpen={isEmergencyProtocolOpen}
        onClose={() => setIsEmergencyProtocolOpen(false)}
      />
    </div>
  );
};

export default Consultation;
