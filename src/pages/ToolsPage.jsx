import React, { useState, useMemo } from 'react';
import { useTools } from '../context/ToolContext';
import ToolList from '../components/ToolList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { SlidersHorizontal, Share2, Check, X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ToolsPage = () => {
  const { tools } = useTools();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isShareFeedback, setIsShareFeedback] = useState(false);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

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

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen relative">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Explore Tools</h1>
          <p className="text-slate-400">Discover your next favorite developer tool.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-2xl font-bold transition-all border border-slate-800 relative shadow-xl shadow-black/20"
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
                  <span>Share Toolset</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Controls Row */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        <button
          onClick={() => setIsFilterSidebarOpen(true)}
          className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold border border-slate-800 transition-all shadow-xl shadow-black/20"
        >
          <Filter className="w-5 h-5 text-primary-400" />
          <span>Filter by Category</span>
          {activeCategory !== 'All' && (
            <span className="ml-1 px-2 py-0.5 bg-primary-500 text-white text-[10px] rounded-full uppercase">
              {activeCategory}
            </span>
          )}
        </button>
      </section>

      {/* Main Listing */}
      <main>
        <ToolList tools={filteredTools} />
      </main>

      {/* Filter Sidebar Overlay */}
      <AnimatePresence>
        {isFilterSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterSidebarOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-slate-900 border-l border-slate-800 shadow-2xl z-[101] p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-500/10 rounded-xl">
                    <SlidersHorizontal className="w-6 h-6 text-primary-400" />
                  </div>
                  <h2 className="text-2xl font-black text-white">Filters</h2>
                </div>
                <button
                  onClick={() => setIsFilterSidebarOpen(false)}
                  className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 ml-1">
                    Categories
                  </label>
                  <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={(cat) => {
                      setActiveCategory(cat);
                      // Optional: Close on selection for mobile-friendly feel
                      // setIsFilterSidebarOpen(false);
                    }}
                    layout="vertical"
                  />
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800">
                 <button
                  onClick={() => {
                    setActiveCategory('All');
                    setIsFilterSidebarOpen(false);
                  }}
                  className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToolsPage;
