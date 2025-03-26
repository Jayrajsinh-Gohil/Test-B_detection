import { useState, useEffect } from 'react';
import { Search, Filter, ScanLine, ShoppingBag, Heart, Tag, Bookmark, ChevronDown, Check, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

// Sample product images array for better visual representation
const productImages = [
  "https://images.unsplash.com/photo-1563865436874-9aef32095fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Pregnancy tea
  "https://images.unsplash.com/photo-1616485432572-e4b8fef29f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Maternity belt
  "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Stretch mark cream
  "https://images.unsplash.com/photo-1594817143584-9246949b8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Postpartum bath
  "https://images.unsplash.com/photo-1598662285945-280c7d5c95fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Pregnancy pillow
  "https://images.unsplash.com/photo-1598662285145-074ce0a9a3fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Prenatal vitamins
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Nursing pads
  "https://images.unsplash.com/photo-1616486338812-3dadae405b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Nipple cream
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Contraction timer
];

// Sample products data with enhanced content
const products = [
  {
    id: 1,
    image: productImages[0],
    title: 'Organic Pregnancy Wellness Tea - Caffeine Free',
    description: 'Specially formulated blend of herbs to support pregnancy wellness and relieve common discomforts.',
    price: 599,
    certified: true,
    ashaRecommended: true,
    rating: 4.8,
    reviewCount: 352,
    trimester: 1,
    discount: 15,
    brand: 'Mother Nature',
    stock: 43,
    tags: ['organic', 'caffeine-free', 'wellness']
  },
  {
    id: 2,
    image: productImages[1],
    title: 'Maternity Support Belt with Adjustable Compression',
    description: 'Ergonomically designed support belt to relieve back pain and provide abdominal support during pregnancy.',
    price: 1299,
    certified: true,
    ashaRecommended: false,
    rating: 4.6,
    reviewCount: 211,
    trimester: 2,
    discount: 0,
    brand: 'ComfortFit',
    stock: 19,
    tags: ['back-support', 'adjustable', 'comfort']
  },
  {
    id: 3,
    image: productImages[2],
    title: 'Natural Stretch Mark Prevention Cream - 250ml',
    description: 'Enriched with shea butter, vitamin E and collagen to prevent and reduce the appearance of stretch marks.',
    price: 899,
    certified: true,
    ashaRecommended: true,
    rating: 4.7,
    reviewCount: 189,
    trimester: 3,
    discount: 10,
    brand: 'SkinCare+',
    stock: 56,
    tags: ['natural', 'skin-care', 'prevention']
  },
  {
    id: 4,
    image: productImages[3],
    title: 'Postpartum Recovery Herbal Bath Mix - Set of 6',
    description: 'Soothing blend of herbs for postpartum recovery baths to promote healing and relaxation.',
    price: 1199,
    certified: false,
    ashaRecommended: false,
    rating: 4.5,
    reviewCount: 127,
    trimester: 'postpartum',
    discount: 0,
    brand: 'Herbal Essence',
    stock: 12,
    tags: ['postpartum', 'recovery', 'herbal']
  },
  {
    id: 5,
    image: productImages[4],
    title: 'Foldable Pregnancy Body Pillow for Back Support',
    description: 'Full body pillow designed specifically for pregnant women to provide comfort and support.',
    price: 2499,
    certified: true,
    ashaRecommended: false,
    rating: 4.9,
    reviewCount: 276,
    trimester: 2,
    discount: 20,
    brand: 'DreamSleep',
    stock: 8,
    tags: ['pillow', 'sleep', 'support']
  },
  {
    id: 6,
    image: productImages[5],
    title: 'Prenatal Vitamins with Iron & Folate - 90 Tablets',
    description: 'Complete prenatal vitamin formula with essential nutrients for mother and baby health.',
    price: 799,
    certified: true,
    ashaRecommended: true,
    rating: 4.7,
    reviewCount: 412,
    trimester: 1,
    discount: 0,
    brand: 'VitaHealth',
    stock: 89,
    tags: ['vitamins', 'nutrition', 'health']
  },
  {
    id: 7,
    image: productImages[6],
    title: 'Bamboo Nursing Pads - Reusable Set of 8',
    description: 'Ultra-soft, eco-friendly nursing pads made from sustainable bamboo fiber.',
    price: 499,
    certified: false,
    ashaRecommended: true,
    rating: 4.4,
    reviewCount: 153,
    trimester: 'postpartum',
    discount: 5,
    brand: 'EcoMom',
    stock: 37,
    tags: ['nursing', 'eco-friendly', 'reusable']
  },
  {
    id: 8,
    image: productImages[7],
    title: 'Organic Nipple Cream for Breastfeeding - 50g',
    description: 'Soothing, lanolin-free nipple cream safe for both mother and baby during breastfeeding.',
    price: 399,
    certified: true,
    ashaRecommended: true,
    rating: 4.6,
    reviewCount: 208,
    trimester: 'postpartum',
    discount: 0,
    brand: 'PureOrganics',
    stock: 64,
    tags: ['breastfeeding', 'organic', 'sensitive']
  },
  {
    id: 9,
    image: productImages[8],
    title: 'Digital Contraction Timer & Tracker',
    description: 'Smart device to accurately time and track contractions during labor.',
    price: 999,
    certified: true,
    ashaRecommended: false,
    rating: 4.3,
    reviewCount: 87,
    trimester: 3,
    discount: 12,
    brand: 'TechMom',
    stock: 22,
    tags: ['tech', 'labor', 'tracking']
  }
];

const ProductCard = ({ product, onAddToCart, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(product.id);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
    >
      {product.discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-mother-pink/90 text-white text-xs font-semibold py-1.5 px-3 rounded-full shadow-md">
          {product.discount}% OFF
        </div>
      )}
      
      <div className="relative overflow-hidden h-60">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {product.certified && (
          <div className="absolute bottom-4 left-4 bg-mother-green/90 text-gray-900 text-xs font-semibold py-1.5 px-3 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5">
            <Check size={12} />
            Certified
          </div>
        )}
        
        {product.ashaRecommended && (
          <div className="absolute bottom-4 right-4 bg-mother-yellow/90 text-gray-900 text-xs font-semibold py-1.5 px-3 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5">
            <Bookmark size={12} />
            ASHA's Choice
          </div>
        )}
        
        <button
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all 
            ${isFavorite ? 'bg-mother-pink text-white' : 'bg-gray-900/60 text-gray-200 backdrop-blur-md'}`}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="bg-gray-800/70 border-gray-700 text-mother-blue-light px-3 py-1 text-xs rounded-full">
            {typeof product.trimester === 'string' 
              ? 'Postpartum' 
              : `Trimester ${product.trimester}`}
          </Badge>
          
          <Badge variant="outline" className="bg-gray-800/70 border-gray-700 text-mother-pink-dark px-3 py-1 text-xs rounded-full flex items-center gap-1">
            <Tag size={10} />
            {product.brand}
          </Badge>
        </div>
        
        <h3 className="font-medium text-lg text-white mb-2 line-clamp-2 h-14">{product.title}</h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2 h-10">{product.description}</p>
        
        <div className="flex items-center mb-3 gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-xs">({product.reviewCount})</span>
          <span className="text-green-400 text-xs ml-2">{product.stock} in stock</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {product.discount > 0 ? (
              <>
                <span className="text-gray-400 text-sm line-through">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-white font-semibold text-lg">
                  ₹{Math.round(product.price * (1 - product.discount / 100)).toLocaleString('en-IN')}
                </span>
              </>
            ) : (
              <span className="text-white font-semibold text-lg">₹{product.price.toLocaleString('en-IN')}</span>
            )}
          </div>
          
          <Button 
            onClick={() => onAddToCart(product.id)}
            className="bg-gradient-to-r from-mother-blue-dark to-mother-blue text-white rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-1.5 hover:from-mother-blue hover:to-mother-blue-light transition-all duration-300"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const FilterPanel = ({ filters, onFilterChange, onReset }) => {
  return (
    <div className="sticky top-20 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-5 shadow-lg">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg text-white flex items-center gap-2">
          <Filter size={18} className="text-mother-blue" />
          Filters
        </h2>
        
        <Button 
          onClick={onReset}
          variant="outline" 
          size="sm"
          className="text-gray-400 hover:text-white border-gray-700 hover:bg-gray-800 text-xs"
        >
          Reset
        </Button>
      </div>
      
      <div className="space-y-6">
        {/* Trimester Filter */}
        <div>
          <h3 className="text-white text-sm font-medium mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-mother-blue/30 flex items-center justify-center text-xs text-mother-blue-light font-bold">T</span>
            Pregnancy Stage
          </h3>
          
          <div className="space-y-2.5">
            {['all', '1', '2', '3', 'postpartum'].map((trimester) => (
              <label key={trimester} className="flex items-center gap-3 group cursor-pointer">
                <div className="relative w-5 h-5 rounded border border-gray-600 flex items-center justify-center group-hover:border-mother-blue transition-colors">
                  {filters.trimester === trimester && (
                    <div className="w-3 h-3 rounded-sm bg-mother-blue"></div>
                  )}
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {trimester === 'all' ? 'All Stages' : 
                   trimester === 'postpartum' ? 'Postpartum' : 
                   `Trimester ${trimester}`}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Certification Filters */}
        <div>
          <h3 className="text-white text-sm font-medium mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-mother-green/30 flex items-center justify-center text-xs text-mother-green font-bold">C</span>
            Certification
          </h3>
          
          <div className="space-y-2.5">
            <label className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-5 h-5 rounded border border-gray-600 flex items-center justify-center group-hover:border-mother-green transition-colors">
                {filters.certified && (
                  <div className="w-3 h-3 rounded-sm bg-mother-green"></div>
                )}
              </div>
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                Govt-Certified Only
              </span>
            </label>
            
            <label className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-5 h-5 rounded border border-gray-600 flex items-center justify-center group-hover:border-mother-yellow transition-colors">
                {filters.ashaRecommended && (
                  <div className="w-3 h-3 rounded-sm bg-mother-yellow"></div>
                )}
              </div>
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                ASHA's Choice Only
              </span>
            </label>
          </div>
        </div>
        
        {/* Price Range Filter */}
        <div>
          <h3 className="text-white text-sm font-medium mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-mother-pink/30 flex items-center justify-center text-xs text-mother-pink font-bold">₹</span>
            Price Range
          </h3>
          
          <div className="space-y-2.5">
            {[
              { label: 'Under ₹500', value: '0-500' },
              { label: '₹500 - ₹1,000', value: '500-1000' },
              { label: '₹1,000 - ₹2,000', value: '1000-2000' },
              { label: '₹2,000+', value: '2000+' }
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-3 group cursor-pointer">
                <div className="relative w-5 h-5 rounded border border-gray-600 flex items-center justify-center group-hover:border-mother-pink transition-colors">
                  {filters.priceRange === option.value && (
                    <div className="w-3 h-3 rounded-sm bg-mother-pink"></div>
                  )}
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Brands Filter */}
        <div>
          <h3 className="text-white text-sm font-medium mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-mother-blue-light/30 flex items-center justify-center text-xs text-mother-blue-light font-bold">B</span>
            Brands
          </h3>
          
          <div className="space-y-2.5 max-h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pr-2">
            {['All Brands', 'Mother Nature', 'ComfortFit', 'SkinCare+', 'Herbal Essence', 'DreamSleep', 'VitaHealth', 'EcoMom', 'PureOrganics', 'TechMom'].map((brand) => (
              <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                <div className="relative w-5 h-5 rounded border border-gray-600 flex items-center justify-center group-hover:border-mother-blue-light transition-colors">
                  {filters.brand === brand && (
                    <div className="w-3 h-3 rounded-sm bg-mother-blue-light"></div>
                  )}
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Marketplace = () => {
  const [selectedTrimester, setSelectedTrimester] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCertifiedOnly, setShowCertifiedOnly] = useState(false);
  const [showAshaOnly, setShowAshaOnly] = useState(false);
  const [priceRange, setPriceRange] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartItems, setCartItems] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState(0);
  const [isCounterfeitWarningVisible, setIsCounterfeitWarningVisible] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortOption, setSortOption] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedTrimester, searchQuery, showCertifiedOnly, showAshaOnly, priceRange, selectedBrand, sortOption]);

  const filterProducts = () => {
    let filtered = [...products];
    
    // Filter by trimester
    if (selectedTrimester !== 'all') {
      filtered = filtered.filter(product => {
        if (selectedTrimester === 'postpartum') {
          return product.trimester === 'postpartum';
        }
        return product.trimester === parseInt(selectedTrimester);
      });
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by certification
    if (showCertifiedOnly) {
      filtered = filtered.filter(product => product.certified);
    }
    
    // Filter by ASHA recommendation
    if (showAshaOnly) {
      filtered = filtered.filter(product => product.ashaRecommended);
    }
    
    // Filter by price range
    if (priceRange) {
      if (priceRange === '0-500') {
        filtered = filtered.filter(product => product.price < 500);
      } else if (priceRange === '500-1000') {
        filtered = filtered.filter(product => product.price >= 500 && product.price <= 1000);
      } else if (priceRange === '1000-2000') {
        filtered = filtered.filter(product => product.price > 1000 && product.price <= 2000);
      } else if (priceRange === '2000+') {
        filtered = filtered.filter(product => product.price > 2000);
      }
    }
    
    // Filter by brand
    if (selectedBrand !== 'All Brands') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }
    
    // Sort products
    if (sortOption === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'discount') {
      filtered.sort((a, b) => b.discount - a.discount);
    }
    
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (productId) => {
    setCartItems(cartItems + 1);
    // Add notification toast here
  };

  const handleToggleFavorite = (productId) => {
    setFavoriteItems(favoriteItems + 1);
    // Add notification toast here
  };

  const resetFilters = () => {
    setSelectedTrimester('all');
    setSearchQuery('');
    setShowCertifiedOnly(false);
    setShowAshaOnly(false);
    setPriceRange('');
    setSelectedBrand('All Brands');
    setSortOption('popularity');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-16 bg-gradient-to-b from-gray-900 to-gray-950"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Page Header with Search and Cart */}
      <div className="pt-16 pb-8 bg-gradient-to-b from-gray-800/70 to-transparent backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Counterfeit Warning Banner - Moved here */}
          {isCounterfeitWarningVisible && (
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 shadow-md rounded-lg mb-6"
            >
              <div className="flex justify-between items-center px-4">
                <div className="text-sm md:text-base font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.3-.921 1.603-.921 1.902 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Caution: 38% of Maternal Products Sold Online are Counterfeit - We Verify Everything
                </div>
                <button
                  onClick={() => setIsCounterfeitWarningVisible(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          )}
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-display font-bold bg-gradient-to-r from-mother-blue-light via-mother-blue to-mother-pink bg-clip-text text-transparent"
              >
                MotherCare Marketplace
              </motion.h1>
              <motion.p 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 mt-2"
              >
                Discover medically verified products for a safe motherhood journey
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <Button 
                variant="ghost" 
                className="relative text-white bg-gray-800/70 hover:bg-gray-700/70 backdrop-blur-sm border border-gray-700/60 h-11 w-11 rounded-full p-0"
              >
                <Heart size={18} />
                {favoriteItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-mother-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {favoriteItems}
                  </span>
                )}
              </Button>
              
              <Button 
                variant="ghost" 
                className="relative text-white bg-gray-800/70 hover:bg-gray-700/70 backdrop-blur-sm border border-gray-700/60 h-11 w-11 rounded-full p-0"
              >
                <ShoppingBag size={18} />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-mother-blue text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-col md:flex-row gap-4"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands, or conditions..."
                className="w-full h-12 bg-gray-800/70 text-white backdrop-blur-sm border border-gray-700/60 rounded-xl pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-mother-blue/50 focus:border-transparent transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                className="h-12 bg-gray-800/70 text-white backdrop-blur-sm border border-gray-700/60 hover:bg-gray-700 hover:border-gray-600 flex items-center gap-2 px-4"
                onClick={() => setShowMobileFilters(true)}
              >
                <Filter size={16} /> Filters
              </Button>
              
              <Button 
                className="h-12 bg-gradient-to-r from-mother-blue-dark to-mother-blue text-white flex items-center gap-2 px-4 hover:from-mother-blue hover:to-mother-blue-light transition-all duration-300"
              >
                <ScanLine size={16} /> Scan Product
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center"
            >
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-l-lg ${viewMode === 'grid' 
                  ? 'bg-mother-blue text-white' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-r-lg ${viewMode === 'list' 
                  ? 'bg-mother-blue text-white' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center text-gray-400"
            >
              <span className="text-sm hidden md:inline">Sort by:</span>
              <div className="relative ml-2">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none bg-gray-800 border border-gray-700 text-white py-1.5 pl-3 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-mother-blue focus:border-mother-blue text-sm"
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Highest Discount</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} />
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 text-sm"
          >
            {filteredProducts.length} products
          </motion.div>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Desktop Filters (Hidden on Mobile) */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block md:col-span-3"
          >
            <FilterPanel
              filters={{
                trimester: selectedTrimester,
                certified: showCertifiedOnly,
                ashaRecommended: showAshaOnly,
                priceRange: priceRange,
                brand: selectedBrand
              }}
              onFilterChange={{
                trimester: setSelectedTrimester,
                certified: setShowCertifiedOnly,
                ashaRecommended: setShowAshaOnly,
                priceRange: setPriceRange,
                brand: setSelectedBrand
              }}
              onReset={resetFilters}
            />
          </motion.div>
          
          {/* Products Grid or List */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="col-span-12 md:col-span-9"
          >
            {/* Featured section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-mother-pink/20 flex items-center justify-center">
                  <Bookmark className="text-mother-pink" size={20} />
                </div>
                <h2 className="ml-3 text-xl font-display font-bold text-white">Featured Products</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products
                  .filter(product => product.ashaRecommended)
                  .slice(0, 3)
                  .map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
              </div>
            </div>
            
            {/* All Products section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-mother-blue/20 flex items-center justify-center">
                  <ShoppingBag className="text-mother-blue" size={20} />
                </div>
                <h2 className="ml-3 text-xl font-display font-bold text-white">All Products</h2>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className={viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" 
                  : "space-y-6"
                }>
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700/60 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-700/60 rounded-full flex items-center justify-center mb-4">
                    <Search size={24} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">No products found</h3>
                  <p className="text-gray-400 mb-6">We couldn't find any products matching your criteria.</p>
                  <Button 
                    onClick={resetFilters}
                    className="bg-mother-blue hover:bg-mother-blue-dark text-white transition-colors"
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-gray-700 bg-gray-800/70 text-white hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </Button>
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-gray-700 bg-mother-blue text-white hover:bg-mother-blue-dark border-none">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-gray-700 bg-gray-800/70 text-white hover:bg-gray-700">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-gray-700 bg-gray-800/70 text-white hover:bg-gray-700">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-gray-700 bg-gray-800/70 text-white hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="py-10 bg-gray-800/50 backdrop-blur-md border-t border-gray-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Verified Products', desc: 'All products medically verified' },
              { icon: '🔒', title: 'Secure Shopping', desc: 'End-to-end encrypted payments' },
              { icon: '🏆', title: 'Quality Assured', desc: 'Stringent quality control' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'Same-day in select locations' }
            ].map((badge, index) => (
              <motion.div 
                key={badge.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h3 className="text-white font-medium mb-1">{badge.title}</h3>
                <p className="text-gray-400 text-sm">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Expert Shoppers */}
      <div className="py-10 bg-gradient-to-r from-gray-900 to-gray-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-white mb-3">Need Help Deciding?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our maternal health experts can help you choose the right products for your journey</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Dr. Priya Shah', role: 'OB-GYN', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
              { name: 'Anita Sharma', role: 'Senior ASHA Worker', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'Dr. Rajiv Singh', role: 'Pediatrician', image: 'https://randomuser.me/api/portraits/men/32.jpg' }
            ].map((expert, index) => (
              <motion.div 
                key={expert.name}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <Avatar className="w-16 h-16 ring-2 ring-mother-blue/50 mb-3">
                  <AvatarImage src={expert.image} alt={expert.name} />
                  <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-white font-medium">{expert.name}</h3>
                <p className="text-gray-400 text-sm">{expert.role}</p>
                <Button variant="outline" size="sm" className="mt-2 border-gray-700 text-mother-blue hover:text-white hover:bg-mother-blue/20 text-xs">
                  Ask for Advice
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Filters Dialog (Shows when mobile filter button is clicked) */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto md:hidden">
          <div className="min-h-screen flex items-end justify-center">
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-gray-900 w-full rounded-t-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-700">
                <h2 className="text-white font-bold text-lg">Filters</h2>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800"
                >
                  <X size={18} className="text-gray-400" />
                </button>
              </div>
              
              <div className="p-5">
                <FilterPanel
                  filters={{
                    trimester: selectedTrimester,
                    certified: showCertifiedOnly,
                    ashaRecommended: showAshaOnly,
                    priceRange: priceRange,
                    brand: selectedBrand
                  }}
                  onFilterChange={{
                    trimester: setSelectedTrimester,
                    certified: setShowCertifiedOnly,
                    ashaRecommended: setShowAshaOnly,
                    priceRange: setPriceRange,
                    brand: setSelectedBrand
                  }}
                  onReset={resetFilters}
                />
              </div>
              
              <div className="p-5 border-t border-gray-700 flex gap-3">
                <Button 
                  onClick={resetFilters}
                  variant="outline" 
                  className="flex-1 border-gray-700 text-white hover:bg-gray-800"
                >
                  Reset
                </Button>
                <Button 
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 bg-mother-blue text-white hover:bg-mother-blue-dark"
                >
                  See {filteredProducts.length} Results
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Marketplace;
