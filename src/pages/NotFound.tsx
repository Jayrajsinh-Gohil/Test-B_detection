
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-mother-blue/10 via-white to-mother-pink/10 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-mother-blue/20 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-mother-pink/10 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="relative">
        <div className="glassmorphism p-12 text-center rounded-2xl max-w-md mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-mother-blue to-mother-blue-dark rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            404
          </div>
          
          <h1 className="text-3xl font-display font-bold gradient-text mb-4">Page Not Found</h1>
          
          <p className="text-mother-gray-dark mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="btn-primary flex items-center justify-center w-full sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="bg-transparent border border-mother-blue-dark text-mother-blue-dark rounded-xl px-6 py-3 font-medium hover:bg-mother-blue/10 transition-colors w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-mother-blue/30 rounded-full animate-morph"></div>
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-mother-pink/30 rounded-full animate-morph" style={{animationDelay: "2s"}}></div>
      </div>
    </div>
  );
};

export default NotFound;
