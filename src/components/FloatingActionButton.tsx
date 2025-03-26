
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, X } from 'lucide-react';

const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${isScrolled ? 'translate-y-0' : 'translate-y-20'}`}>
      {isExpanded && (
        <div className="flex flex-col gap-3 mb-4">
          <Link
            to="/chat"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-mother-blue-dark to-blue-600 text-white shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in"
            onClick={() => setIsExpanded(false)}
            style={{ animationDelay: '0.1s' }}
          >
            <MessageCircle size={20} className="drop-shadow-md" />
          </Link>
          <Link
            to="/consultation"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emergency to-red-600 text-white shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in"
            onClick={() => setIsExpanded(false)}
            style={{ animationDelay: '0.2s' }}
          >
            <Phone size={20} className="drop-shadow-md" />
          </Link>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-500 ${
          isExpanded 
            ? 'bg-gradient-to-r from-mother-gray-dark to-gray-700 rotate-45' 
            : 'bg-gradient-to-r from-mother-blue-dark to-blue-600 animate-pulse-gentle'
        } hover:shadow-xl hover:scale-105`}
      >
        {isExpanded ? (
          <X size={24} className="text-white drop-shadow-md" />
        ) : (
          <MessageCircle size={24} className="text-white drop-shadow-md" />
        )}
      </button>
    </div>
  );
};

export default FloatingActionButton;
