import React from 'react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ className }) => {
  return (
    <div className={cn(
      "min-h-screen w-full relative overflow-hidden",
      className
    )}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Liquid Glass Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className={cn(
          "w-full max-w-2xl mx-auto",
          "bg-gradient-to-br from-white/70 via-white/60 to-white/50 backdrop-blur-3xl",
          "border border-white/60 rounded-3xl",
          "shadow-2xl shadow-black/15",
          "p-6 sm:p-8 md:p-12 lg:p-16",
          "relative overflow-hidden",
          "hover:shadow-3xl hover:shadow-black/25 hover:scale-[1.02]",
          "transition-all duration-700 ease-out",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:rounded-3xl",
          "after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/20 after:via-transparent after:to-transparent after:rounded-3xl"
        )}>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Moon Icon */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/90 to-white/70 rounded-full flex items-center justify-center backdrop-blur-md border border-white/80 shadow-xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 drop-shadow-sm relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
              </svg>
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <span className="text-gray-600 font-black text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg tracking-wide text-center">
                  An MVP in 3 weeks for
                </span>
                
                {/* Dropdown Arrow */}
                <div className="flex flex-col gap-0.5 group">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800 drop-shadow-sm group-hover:text-gray-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z"/>
                  </svg>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800 drop-shadow-sm group-hover:text-gray-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
              </div>
              
              {/* Price Display */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Original Price (Strikethrough) */}
                <span className="text-gray-400 font-semibold text-base sm:text-xl md:text-2xl line-through drop-shadow-sm opacity-75">
                  $8333
                </span>
                
                {/* Current Price */}
                <span className="text-red-600 font-black text-2xl sm:text-3xl md:text-4xl drop-shadow-lg bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  $5000
                </span>
              </div>
              
              {/* Limited Time Chip */}
              <div className="mt-3 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-xl border border-red-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Just for this month
              </div>
            </div>
          </div>
          
          {/* Decorative highlights */}
          <div className="absolute top-3 left-3 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-3 right-3 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-3 right-3 w-1 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
