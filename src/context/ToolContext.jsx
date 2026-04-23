import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TOOLS } from '../data/seed';

const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
  const [tools, setTools] = useState(() => {
    const savedTools = localStorage.getItem('toolbox_tools');
    const localTools = savedTools ? JSON.parse(savedTools) : [];
    
    // Always merge INITIAL_TOOLS to ensure the latest curated directory is visible
    // We use URL as the unique identifier for merging
    const merged = [...localTools];
    INITIAL_TOOLS.forEach(tool => {
      const exists = merged.some(t => t.url.toLowerCase().replace(/\/$/, '') === tool.url.toLowerCase().replace(/\/$/, ''));
      if (!exists) {
        merged.push(tool);
      }
    });
    
    return merged;
  });

  useEffect(() => {
    localStorage.setItem('toolbox_tools', JSON.stringify(tools));
  }, [tools]);

  return (
    <ToolContext.Provider value={{ tools }}>
      {children}
    </ToolContext.Provider>
  );
};

export const useTools = () => {
  const context = useContext(ToolContext);
  if (!context) {
    throw new Error('useTools must be used within a ToolProvider');
  }
  return context;
};
