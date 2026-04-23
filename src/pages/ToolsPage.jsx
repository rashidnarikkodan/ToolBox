import React, { useState, useMemo } from 'react';
import { useTools } from '../context/ToolContext';
import ToolList from '../components/ToolList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import AddToolForm from '../components/AddToolForm';
import { Plus, SlidersHorizontal, Share2, Download, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ToolsPage = () => {
  const { tools, addTool, removeTool, importTools } = useTools();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareFeedback, setIsShareFeedback] = useState(false);

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

  const handleShare = () => {
    const data = JSON.stringify(tools, null, 2);
    navigator.clipboard.writeText(data);
    setIsShareFeedback(true);
    setTimeout(() => setIsShareFeedback(false), 2000);
  };

  const handleImport = () => {
    const input = prompt('Paste the shared toolset JSON here:');
    if (input) {
      const result = importTools(input);
      if (!result.success) alert(result.error);
    }
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Explore Tools</h1>
          <p className="text-slate-400">Discover and manage your professional toolset.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-2xl font-bold transition-all border border-slate-800 relative"
            title="Export toolset to clipboard"
          >
            <AnimatePresence mode="wait">
              {isShareFeedback ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="flex items-center gap-2 text-green-400"
                >
                  <Check className="w-5 h-5" />
                  <span>Copied!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="share"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <button 
            onClick={handleImport}
            className="flex items-center gap-2 px-4 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-2xl font-bold transition-all border border-slate-800"
            title="Import toolset from JSON"
          >
            <Download className="w-5 h-5" />
            <span>Import</span>
          </button>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-primary-500/20 active:scale-95"
          >
            <Plus className="w-5 h-5" />
            <span>Add Tool</span>
          </button>
        </div>
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
