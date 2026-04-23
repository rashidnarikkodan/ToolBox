import React, { useState, useMemo } from 'react';
import { useTools } from '../context/ToolContext';
import ToolList from '../components/ToolList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import AddToolForm from '../components/AddToolForm';
import { Plus, SlidersHorizontal } from 'lucide-react';

const ToolsPage = () => {
  const { tools, addTool, removeTool } = useTools();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamically extract unique categories
  const categories = useMemo(() => {
    const cats = tools.map(t => t.category);
    return [...new Set(cats)].sort();
  }, [tools]);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [tools, searchQuery, activeCategory]);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="animate-in fade-in slide-in-from-left duration-500">
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Explore Tools</h1>
          <p className="text-slate-400">Discover and manage your professional toolset.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-primary-500/20 active:scale-95 shrink-0"
        >
          <Plus className="w-5 h-5" />
          Add New Tool
        </button>
      </header>

      <section className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 shrink-0">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>
        </div>
      </section>

      <main>
        <ToolList tools={filteredTools} onDelete={removeTool} />
      </main>

      <AddToolForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={addTool}
        categories={categories}
      />
    </div>
  );
};

export default ToolsPage;
