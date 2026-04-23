import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, layout = 'horizontal' }) => {
  return (
    <div className={cn(
      "gap-2",
      layout === 'horizontal' 
        ? "flex items-center overflow-x-auto pb-2 scrollbar-hide no-scrollbar" 
        : "flex flex-col w-full"
    )}>
      <button
        onClick={() => onCategoryChange('All')}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all border shrink-0",
          activeCategory === 'All'
            ? "bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/20"
            : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
        )}
      >
        <LayoutGrid className="w-4 h-4" />
        All Tools
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-3 rounded-2xl text-sm font-bold transition-all border shrink-0 text-left",
            activeCategory === category
              ? "bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/20"
              : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
