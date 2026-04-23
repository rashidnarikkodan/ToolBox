import React from 'react';
import ToolCard from './ToolCard';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ToolList = ({ tools }) => {
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-800">
          <Search className="w-10 h-10 text-primary-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No tools found</h3>
        <p className="text-slate-400">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <AnimatePresence mode='popLayout'>
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToolList;
