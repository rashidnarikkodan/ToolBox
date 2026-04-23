import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
      <button
        onClick={() => onCategoryChange('All')}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap shrink-0 border",
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
            "px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap shrink-0 border",
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
