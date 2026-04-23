import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative group max-w-md w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
      </div>
      <input
        type="text"
        placeholder="Search tools or categories..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-11 pr-11 py-3.5 bg-slate-900 border border-slate-800 text-white rounded-2xl leading-5 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-600"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
