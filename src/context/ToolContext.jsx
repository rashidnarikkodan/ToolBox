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
    setTools((prev) => {
      // Check for duplicates by URL
      if (prev.some(t => t.url === newTool.url)) {
        alert('This tool is already in your list!');
        return prev;
      }
      return [...prev, { ...newTool, id: Date.now().toString() }];
    });
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
