import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TOOLS } from '../data/seed';

const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
  const [tools, setTools] = useState(() => {
    const savedTools = localStorage.getItem('toolbox_tools');
    const localTools = savedTools ? JSON.parse(savedTools) : [];
    
    // Merge logic: Start with local tools, add initial tools that aren't there yet (by URL)
    const merged = [...localTools];
    INITIAL_TOOLS.forEach(tool => {
      if (!merged.some(t => t.url.toLowerCase().replace(/\/$/, '') === tool.url.toLowerCase().replace(/\/$/, ''))) {
        merged.push(tool);
      }
    });
    
    return merged;
  });

  useEffect(() => {
    localStorage.setItem('toolbox_tools', JSON.stringify(tools));
  }, [tools]);

  const addTool = (newTool) => {
    const normalizedUrl = newTool.url.toLowerCase().replace(/\/$/, '');
    
    if (tools.some(t => t.url.toLowerCase().replace(/\/$/, '') === normalizedUrl)) {
      return { success: false, error: 'This tool is already in your list!' };
    }
    
    const toolWithId = { ...newTool, id: Date.now().toString() };
    setTools((prev) => [...prev, toolWithId]);
    return { success: true };
  };

  const removeTool = (id) => {
    setTools((prev) => prev.filter(t => t.id !== id));
  };

  const importTools = (jsonString) => {
    try {
      const imported = JSON.parse(jsonString);
      if (!Array.isArray(imported)) throw new Error('Invalid format');
      
      setTools(prev => {
        const next = [...prev];
        imported.forEach(tool => {
          if (!next.some(t => t.url === tool.url)) {
            next.push({ ...tool, id: tool.id || Date.now().toString() + Math.random() });
          }
        });
        return next;
      });
      return { success: true };
    } catch (e) {
      return { success: false, error: 'Failed to import. Invalid JSON.' };
    }
  };

  return (
    <ToolContext.Provider value={{ tools, addTool, removeTool, importTools }}>
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
