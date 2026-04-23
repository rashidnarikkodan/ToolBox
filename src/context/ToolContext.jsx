import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TOOLS } from '../data/seed';

const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
  const [tools] = useState(() => {
    const savedTools = localStorage.getItem('toolbox_tools');
    return savedTools ? JSON.parse(savedTools) : INITIAL_TOOLS;
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
