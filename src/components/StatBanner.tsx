
import { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const StatBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const banner = document.getElementById('stat-banner');
      if (banner) {
        banner.style.height = banner.scrollHeight + 'px';
        setIsAnimated(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const closeBanner = () => {
    setIsAnimated(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      id="stat-banner"
      className={`relative overflow-hidden transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 z-50 shadow-xl border-b border-white/10 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
      style={{ height: 0 }}
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60')] bg-cover bg-center opacity-10"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-mother-pink-dark to-mother-blue-dark opacity-95"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative">
        <div className="flex items-center justify-center text-center text-sm sm:text-base font-medium">
          <div className="relative z-10 flex items-center justify-center text-white">
            <AlertTriangle className="mr-2 h-5 w-5 animate-pulse text-mother-pink" />
            <span className="drop-shadow-sm">Every 7 minutes, an Indian mother dies from preventable pregnancy complications - Together, we can change this</span>
          </div>
        </div>
        <button
          onClick={closeBanner}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors hover:rotate-90 transition-transform duration-300 z-20"
          aria-label="Close banner"
        >
          <X className="h-5 w-5 drop-shadow-md" />
        </button>
      </div>
    </div>
  );
};

export default StatBanner;
