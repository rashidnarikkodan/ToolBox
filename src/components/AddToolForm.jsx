import React, { useState, useEffect, useCallback } from 'react';
import { X, Link as LinkIcon, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { extractToolMeta } from '../utils/toolMeta';
import { motion, AnimatePresence } from 'framer-motion';

const AddToolForm = ({ isOpen, onClose, onAdd, categories }) => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    category: '',
    description: '',
    icon: ''
  });
  const [isAutoFilling, setIsAutoFilling] = useState(false);
  const [error, setError] = useState('');

  // Handle URL change with auto-fill
  useEffect(() => {
    if (!formData.url || formData.url.length < 5) return;

    const timer = setTimeout(() => {
      const meta = extractToolMeta(formData.url);
      if (meta) {
        setIsAutoFilling(true);
        // Simulate a slight delay for better UX "magic" feel
        setTimeout(() => {
          setFormData(prev => ({
            ...prev,
            name: prev.name || meta.name,
            icon: meta.icon,
            description: prev.description || `A powerful tool for ${prev.category || 'your workflow'}.`
          }));
          setIsAutoFilling(false);
        }, 600);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.url || !formData.category) {
      setError('Please fill in all required fields.');
      return;
    }
    
    try {
      new URL(formData.url.startsWith('http') ? formData.url : `https://${formData.url}`);
    } catch (e) {
      setError('Please enter a valid URL.');
      return;
    }

    onAdd(formData);
    setFormData({ name: '', url: '', category: '', description: '', icon: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        />
        
        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white">Add New Tool</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* URL Input */}
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2 ml-1 uppercase tracking-wider">Tool URL *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LinkIcon className="w-5 h-5 text-slate-600" />
                </div>
                <input
                  type="text"
                  placeholder="https://example.com"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-800 text-white rounded-2xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-700"
                />
                {isAutoFilling && (
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <Loader2 className="w-5 h-5 text-primary-500 animate-spin" />
                  </div>
                )}
              </div>
            </div>

            {/* Name and Icon Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 ml-1 uppercase tracking-wider">Tool Name *</label>
                <div className="relative">
                   <input
                    type="text"
                    placeholder="e.g. Figma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="block w-full px-4 py-3.5 bg-slate-950 border border-slate-800 text-white rounded-2xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-700"
                  />
                  {formData.name && !isAutoFilling && (
                     <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <Sparkles className="w-4 h-4 text-primary-500" />
                     </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 ml-1 uppercase tracking-wider">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="block w-full px-4 py-3.5 bg-slate-950 border border-slate-800 text-white rounded-2xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2 ml-1 uppercase tracking-wider">Description</label>
              <textarea
                placeholder="What does this tool do?"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                className="block w-full px-4 py-3.5 bg-slate-950 border border-slate-800 text-white rounded-2xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-700 resize-none"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-500/20 active:scale-95"
            >
              Save Tool
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddToolForm;
