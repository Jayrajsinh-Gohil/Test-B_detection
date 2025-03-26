
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChatAssistant from "./pages/ChatAssistant";
import UserAccount from "./pages/UserAccount";
import Marketplace from "./pages/Marketplace";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  // Apply the dark theme to the document body
  useEffect(() => {
    // Add dark theme classes to body
    document.body.classList.add('bg-slate-900', 'text-slate-100');
    
    // Apply custom scrollbar
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #1e293b;
      }
      ::-webkit-scrollbar-thumb {
        background: #3b4c63;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #4b5c73;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.body.classList.remove('bg-slate-900', 'text-slate-100');
      document.head.removeChild(style);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner theme="dark" />
        <BrowserRouter>
          <div className="min-h-screen bg-slate-900 text-slate-100 relative">
            {/* Background gradients */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black pointer-events-none"></div>
            <div className="fixed inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chat" element={<ChatAssistant />} />
              <Route path="/account" element={<UserAccount />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/consultation" element={<Consultation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
