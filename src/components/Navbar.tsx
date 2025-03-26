
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Bell, Menu, X, ShoppingBag, User, AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const location = useLocation();
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const showNotifications = () => {
    toast({
      title: "New Notifications",
      description: (
        <div className="mt-2 space-y-3">
          <div className="flex items-start p-2 bg-slate-800 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
            <div>
              <p className="text-sm font-medium">Your next appointment is tomorrow</p>
              <p className="text-xs text-slate-400 mt-1">Dr. Priya Sharma at 10:30 AM</p>
            </div>
          </div>
          <div className="flex items-start p-2 bg-slate-800 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></div>
            <div>
              <p className="text-sm font-medium">Your test results are in</p>
              <p className="text-xs text-slate-400 mt-1">Click to view your latest blood work</p>
            </div>
          </div>
          <div className="flex items-start p-2 bg-slate-800 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></div>
            <div>
              <p className="text-sm font-medium">New article recommendation</p>
              <p className="text-xs text-slate-400 mt-1">5 foods to boost your iron intake</p>
            </div>
          </div>
        </div>
      ),
      variant: "default",
    });
    setNotificationCount(0);
  };

  const handleEmergency = () => {
    toast({
      title: "Emergency Services",
      description: (
        <div className="mt-3 space-y-3">
          <div className="flex items-center justify-between p-3 bg-rose-900/30 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="text-rose-400 mr-2" size={18} />
              <span className="text-sm font-medium">Emergency Helpline</span>
            </div>
            <button className="bg-rose-600 hover:bg-rose-500 text-white px-3 py-1 rounded-md text-sm transition-colors">
              Call Now
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-indigo-900/30 rounded-lg">
            <div className="flex items-center">
              <MessageCircle className="text-indigo-400 mr-2" size={18} />
              <span className="text-sm font-medium">Connect to On-Call Doctor</span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded-md text-sm transition-colors">
              Connect
            </button>
          </div>
          <div className="text-xs text-slate-400 text-center mt-2">
            Your location will be shared with emergency services
          </div>
        </div>
      ),
      variant: "destructive",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-1 transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-display font-bold text-2xl px-2">mAI</span>
            </div>
            <span className="text-white font-display font-medium text-xl bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Motherhood</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800 hover:text-white ${isActive('/') ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className={`nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800 hover:text-white ${isActive('/marketplace') ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
            >
              Marketplace
            </Link>
            <Link
              to="/consultation"
              className={`nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800 hover:text-white ${isActive('/consultation') ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
            >
              Consultation
            </Link>
            <Link
              to="/account"
              className={`nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800 hover:text-white ${isActive('/account') ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
            >
              My Account
            </Link>
            
            <div className="ml-4 flex items-center space-x-3">
              <Link
                to="/chat"
                className="p-2 bg-indigo-600/20 text-indigo-300 rounded-full hover:bg-indigo-600/30 transition-colors relative group"
                aria-label="Chat Assistant"
              >
                <MessageCircle size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="absolute inset-0 rounded-full border border-indigo-500/50 scale-125 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></span>
              </Link>
              <button
                onClick={showNotifications}
                className="p-2 bg-purple-600/20 text-purple-300 rounded-full hover:bg-purple-600/30 transition-colors relative group"
                aria-label="Notifications"
              >
                <Bell size={20} />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full text-xs text-white flex items-center justify-center">{notificationCount}</span>
                )}
                <span className="absolute inset-0 rounded-full border border-purple-500/50 scale-125 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></span>
              </button>
              <Link to="/marketplace" className="p-2 bg-blue-600/20 text-blue-300 rounded-full hover:bg-blue-600/30 transition-colors relative group">
                <ShoppingBag size={20} />
                <span className="absolute inset-0 rounded-full border border-blue-500/50 scale-125 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></span>
              </Link>
              <button 
                onClick={handleEmergency}
                className="py-2 px-4 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1"
              >
                <AlertCircle size={16} />
                <span>Emergency</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className={`block py-3 px-4 rounded-lg ${
                isActive('/') ? 'bg-indigo-900/50 text-indigo-300' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className={`block py-3 px-4 rounded-lg ${
                isActive('/marketplace') ? 'bg-indigo-900/50 text-indigo-300' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Marketplace
            </Link>
            <Link
              to="/consultation"
              className={`block py-3 px-4 rounded-lg ${
                isActive('/consultation') ? 'bg-indigo-900/50 text-indigo-300' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Consultation
            </Link>
            <Link
              to="/account"
              className={`block py-3 px-4 rounded-lg ${
                isActive('/account') ? 'bg-indigo-900/50 text-indigo-300' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              My Account
            </Link>
            <Link
              to="/chat"
              className="block py-3 px-4 rounded-lg bg-indigo-900/30 text-indigo-300 flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Chat Assistant</span>
              <span className="w-2 h-2 bg-indigo-500 rounded-full ml-1"></span>
            </Link>
            <button 
              onClick={handleEmergency}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 text-white font-medium flex items-center justify-center space-x-2"
            >
              <AlertCircle size={18} />
              <span>Emergency Connect</span>
            </button>
          </div>
          
          <div className="px-4 py-4 border-t border-slate-800 flex justify-between">
            <button onClick={showNotifications} className="flex items-center space-x-2 text-slate-300">
              <Bell size={18} />
              <span>Notifications</span>
              {notificationCount > 0 && (
                <span className="bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{notificationCount}</span>
              )}
            </button>
            
            <Link to="/account" className="flex items-center space-x-2 text-slate-300">
              <User size={18} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
