import React from 'react';
import { ExternalLink } from 'lucide-react';

const ToolCard = ({ tool }) => {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-6 transition-all hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-110 transition-transform">
          {tool.icon ? (
            <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
          ) : (
            <div className="text-xl font-bold text-primary-400">{tool.name[0]}</div>
          )}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors line-clamp-1">{tool.name}</h3>
        </div>
        <span className="inline-block px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider border border-slate-700">
          {tool.category}
        </span>
      </div>

      <p className="text-sm text-slate-400 line-clamp-2 mb-6 flex-grow">
        {tool.description}
      </p>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-primary-500 text-white rounded-xl text-sm font-bold transition-all group-hover:shadow-lg group-hover:shadow-primary-500/20"
      >
        Visit Tool
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default ToolCard;
