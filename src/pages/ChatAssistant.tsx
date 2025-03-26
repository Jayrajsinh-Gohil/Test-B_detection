import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Image, Volume2, Plus, Settings, RefreshCw, UserCircle, Bot, Clock, Check, X } from 'lucide-react';
import FloatingActionButton from '../components/FloatingActionButton';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

const ChatAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Namaste! I'm your maternal health AI companion. How can I help you today with your pregnancy or motherhood questions?",
      timestamp: new Date(),
      status: 'sent'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSimplified, setIsSimplified] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  // Sample conversation history
  const conversationHistory = [
    { id: 1, topic: "Morning Sickness Remedies", date: "Today" },
    { id: 2, topic: "Baby Kicking Patterns", date: "Yesterday" },
    { id: 3, topic: "Nutrition During Third Trimester", date: "2 days ago" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Define your API key and model parameters
  const API_KEY = "AIzaSyACQFHJCbMOZUIECJ_YaxbAyEEvgyOPGNQ" ;
  const MODEL_NAME = "gemini-1.5-flash";

  const formatResponse = (text: string) => {
    // First, extract and format sections
    let formattedText = text
      // Remove section headers with asterisks
      .replace(/\*\*(.*?):\*\*/g, '$1:')
      // Remove bold formatting from items
      .replace(/\*\*(.*?)\*\*/g, '$1')
      // Convert asterisk bullets to proper bullet points
      .replace(/^\s*\*\s*/gm, '• ')
      // Remove any remaining asterisks
      .replace(/\*/g, '')
      // Add proper spacing after bullets
      .replace(/•\s*/g, '• ')
      // Add proper spacing after colons
      .replace(/:/g, ': ')
      // Add line breaks before sections
      .replace(/([A-Za-z\s]+):/g, '\n$1:')
      // Remove extra spaces
      .replace(/\s+/g, ' ')
      // Fix multiple line breaks
      .replace(/\n\s*\n/g, '\n')
      // Trim extra whitespace
      .trim();

    // Split into paragraphs and format each
    formattedText = formattedText
      .split('\n')
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0)
      .join('\n\n');

    return formattedText;
  };

  // Function to call AI API
  const callAIAPI = async (userMessages: Message[]) => {
    try {
      // Format messages for API
      const formattedMessages = userMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      // API request
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: formattedMessages,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      let responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                         "I'm sorry, I couldn't process your request. Please try again.";
      
      // Always format the response
      responseText = formatResponse(responseText);
      
      return responseText;
    } catch (error) {
      console.error("API error:", error);
      return "I'm having trouble connecting to my services. Please try again later.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Update message status to sent after a short delay
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === userMessage.id ? { ...msg, status: 'sent' } : msg
        )
      );
    }, 500);

    try {
      // Get all messages to maintain context
      const allMessages = [...messages, userMessage];
      
      // Call AI API and get response
      const aiResponse = await callAIAPI(allMessages);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date(),
        status: 'sent'
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      toast({
        title: "New message from MoAI Assistant",
        description: "Your AI companion has responded to your query",
        variant: "default",
      });
    } catch (error) {
      console.error("Error getting response:", error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
        status: 'error'
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Error",
        description: "Failed to get a response from the assistant",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      <FloatingActionButton />
      
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"></div>
      <div className="fixed inset-0 -z-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <header className="py-6 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-display font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            MoAI Assistant
          </motion.h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm text-slate-400 mr-2">Simplified Mode</span>
              <button 
                onClick={() => setIsSimplified(!isSimplified)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isSimplified ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-slate-700'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isSimplified ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>
            
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
            >
              <Settings size={18} />
            </button>
          </div>
        </header>
        
        <main className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-3xl border-2 border-slate-700/50 p-6 mb-20 shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
          
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <span className="font-bold">AI</span>
            </div>
            <div className="ml-3">
              <h2 className="font-medium text-white">MoAI Assistant</h2>
              <p className="text-xs text-slate-400">Your Maternal Health Companion • Multilingual support</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-4 max-h-[60vh] overflow-y-auto px-2 py-2 rounded-xl bg-slate-900/50 border border-slate-700/50">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-lg ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'bg-slate-800 border border-slate-700/50 text-slate-300'
                    }`}
                  >
                    <div className="text-sm">{message.content}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      
                      {message.role === 'user' && message.status && (
                        <span className="text-xs flex items-center ml-2">
                          {message.status === 'sending' && <RefreshCw size={10} className="animate-spin mr-1" />}
                          {message.status === 'sent' && <Check size={10} className="mr-1" />}
                          {message.status === 'error' && <X size={10} className="mr-1 text-rose-400" />}
                          {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-slate-800 border border-slate-700/50 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messageEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="mt-6 relative">
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="p-3 rounded-full bg-slate-800 border border-slate-700/50 text-indigo-300 hover:bg-slate-700 transition-colors shadow-lg"
              >
                <Plus size={20} />
              </motion.button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full py-3 px-4 pr-12 bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  disabled={!inputValue.trim()}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
                    inputValue.trim() 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-slate-700 text-slate-500'
                  }`}
                >
                  <Send size={16} className={inputValue.trim() ? 'animate-pulse-gentle' : ''} />
                </motion.button>
              </div>
            </div>
            
            <div className="flex justify-center mt-4 space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="p-2 rounded-full bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-700/30 text-indigo-300 hover:from-indigo-800/80 hover:to-purple-800/80 transition-colors shadow-lg"
              >
                <Mic size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="p-2 rounded-full bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-700/30 text-indigo-300 hover:from-indigo-800/80 hover:to-purple-800/80 transition-colors shadow-lg"
              >
                <Image size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="p-2 rounded-full bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-700/30 text-indigo-300 hover:from-indigo-800/80 hover:to-purple-800/80 transition-colors shadow-lg"
              >
                <Volume2 size={20} />
              </motion.button>
            </div>
          </form>
          
          {/* Conversation History Sidebar */}
          <AnimatePresence>
            {isSidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/70 z-50"
                  onClick={() => setIsSidebarOpen(false)}
                />
                
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  className="fixed top-0 right-0 bottom-0 w-80 bg-slate-800 border-l border-slate-700 shadow-2xl z-50 p-6 overflow-y-auto"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-medium text-white">History</h3>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-1 rounded-full hover:bg-slate-700"
                    >
                      <X size={20} className="text-slate-400" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {conversationHistory.map(convo => (
                      <div key={convo.id} className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:bg-slate-900 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-white">{convo.topic}</h4>
                          <span className="text-xs text-slate-500 flex items-center">
                            <Clock size={12} className="mr-1" />
                            {convo.date}
                          </span>
                        </div>
                        <div className="flex items-center text-xs text-slate-400">
                          <Bot size={12} className="mr-1" />
                          <span>4 messages</span>
                          
                          <span className="flex ml-auto text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            Continue →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 border-t border-slate-700 pt-6 space-y-4">
                    <h4 className="text-sm font-medium text-white">Settings</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Voice Mode</span>
                        <button 
                          className={`relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700`}
                        >
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Read Aloud Responses</span>
                        <button 
                          className={`relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700`}
                        >
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Language</span>
                        <select className="bg-slate-900 border border-slate-700 text-slate-300 rounded-md text-sm p-1">
                          <option>English</option>
                          <option>Hindi</option>
                          <option>Bengali</option>
                        </select>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">API Temperature</span>
                        <input 
                          type="range" 
                          min="0" 
                          max="1" 
                          step="0.1" 
                          defaultValue="0.7"
                          className="w-24 accent-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </main>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent h-20 pointer-events-none" />
    </div>
  );
};

export default ChatAssistant;
