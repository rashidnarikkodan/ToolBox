import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TOOLS } from '../data/seed';

const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
  const [tools, setTools] = useState(() => {
    const savedTools = localStorage.getItem('toolbox_tools');
    return savedTools ? JSON.parse(savedTools) : INITIAL_TOOLS;
  });

  useEffect(() => {
    localStorage.setItem('toolbox_tools', JSON.stringify(tools));
  }, [tools]);

  const addTool = (newTool) => {
    // Normalize URL for comparison
    const normalizedUrl = newTool.url.toLowerCase().replace(/\/$/, '');
    
    if (tools.some(t => t.url.toLowerCase().replace(/\/$/, '') === normalizedUrl)) {
      return { success: false, error: 'This tool is already in your list!' };
    }
    
    setTools((prev) => [...prev, { ...newTool, id: Date.now().toString() }]);
    return { success: true };
  };

  const removeTool = (id) => {
    setTools((prev) => prev.filter(t => t.id !== id));
  };

  return (
    <ToolContext.Provider value={{ tools, addTool, removeTool }}>
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
