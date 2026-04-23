import React, { useState } from 'react';
import { useTools } from '../context/ToolContext';
import ToolList from '../components/ToolList';
import { Plus } from 'lucide-react';

const ToolsPage = () => {
  const { tools, removeTool } = useTools();
  
  // These will be implemented in the next feature branch
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Explore Tools</h1>
          <p className="text-slate-400">Discover and manage your professional toolset.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-primary-500/20">
          <Plus className="w-5 h-5" />
          Add New Tool
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {/* Placeholders for search and filter */}
        <div className="h-12 bg-slate-900/50 rounded-2xl border border-slate-800 animate-pulse" />
        
        <ToolList tools={filteredTools} onDelete={removeTool} />
      </div>
    </div>
  );
};

export default ToolsPage;
