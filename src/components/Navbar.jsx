import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Compass } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary-500 rounded-xl group-hover:rotate-12 transition-transform">
              <Box className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ToolBox</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-primary-400' : 'text-slate-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/tools" 
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                location.pathname === '/tools' 
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              Explore
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
