
// Fix the ProductCard component to handle missing images gracefully
// Implement proper fallback for product images

import { useState } from 'react';
import { ShoppingCart, Heart, Shield, Info, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  verified: boolean;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  
  const fallbackImage = "/placeholder.svg"; // Use placeholder image as fallback

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-slate-700">
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
          />
        </div>
        
        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
        
        {/* Verified badge */}
        {product.verified && (
          <div className="absolute top-3 right-3 bg-emerald-600/80 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
            <Shield size={12} className="mr-1" />
            Verified
          </div>
        )}
        
        {/* Quick actions */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-3 flex justify-end space-x-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-pink-400 transition-colors">
            <Heart size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-indigo-400 transition-colors">
            <Info size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-1 text-xs font-medium text-slate-400">
          {product.category}
        </div>
        
        <h3 className="font-display text-lg font-medium text-white mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <span className="text-xs text-slate-400 ml-2">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through ml-2">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <button
            onClick={onAddToCart}
            className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors shadow-lg hover:shadow-indigo-500/20"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
        
        {!product.verified && (
          <div className="mt-3 text-xs flex items-start text-amber-400 bg-amber-900/20 p-2 rounded-lg">
            <AlertTriangle size={14} className="mr-1 flex-shrink-0 mt-0.5" />
            <span>This product hasn't been verified by healthcare specialists</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
