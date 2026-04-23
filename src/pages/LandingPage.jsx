import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Sparkles, Code, Briefcase, Feather, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3 h-3" />
            <span>Discover the best developer tools</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            All Your Tools. <br />
            <span className="bg-gradient-to-r from-primary-400 to-blue-500 bg-clip-text text-transparent">One Single Place.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop searching across tabs. ToolBox is a curated directory system that centralizes your discovery and access to the best tools on the web.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/tools" 
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary-500/20 transition-all flex items-center gap-2"
            >
              Explore Tools
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="#how-to-use" 
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg border border-slate-800 transition-all"
            >
              How it works
            </a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* What is this? */}
      <section className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-colors">
            <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Access</h3>
            <p className="text-slate-400 leading-relaxed">
              Find and launch your favorite platforms from a single, unified dashboard. No more bookmarks mess.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Curated Directory</h3>
            <p className="text-slate-400 leading-relaxed">
              Discover tools categorized by use-case: Freelance, Jobs, Coding, Content, and more.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Local Privacy</h3>
            <p className="text-slate-400 leading-relaxed">
              Your tools stay your tools. We use localStorage to persist your data right in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section id="how-to-use" className="mt-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">How to use ToolBox</h2>
          <p className="text-slate-400">Streamline your workflow in three simple steps.</p>
        </div>
        
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-400 shrink-0 border border-slate-800">1</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Explore the Directory</h4>
              <p className="text-slate-400">Browse our seeded collection of top-tier tools across various professional domains.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-400 shrink-0 border border-slate-800">2</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Search and Filter</h4>
              <p className="text-slate-400">Use the real-time search and dynamic category filters to find exactly what you need in seconds.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-400 shrink-0 border border-slate-800">3</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Add Your Own</h4>
              <p className="text-slate-400">Paste any URL to automatically extract metadata and add your custom tools to the platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900 pt-32">
        <div className="p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-primary-500 mb-8 flex items-center justify-center text-4xl shadow-2xl shadow-primary-500/50">
            👨‍💻
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Built by a Visionary</h2>
          <p className="text-slate-400 max-w-xl mb-8">
            ToolBox was created to solve the "too many tabs" problem. It's a clean, production-grade discovery platform built with modern React and Tailwind.
          </p>
          <div className="flex items-center gap-4">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-blue-500 flex items-center justify-center"><Code className="w-4 h-4 text-white" /></div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-green-500 flex items-center justify-center"><Briefcase className="w-4 h-4 text-white" /></div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-orange-500 flex items-center justify-center"><Feather className="w-4 h-4 text-white" /></div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-purple-500 flex items-center justify-center"><Globe className="w-4 h-4 text-white" /></div>
             </div>
             <span className="text-sm text-slate-500">Handcrafted with precision</span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="bg-primary-600 rounded-[3rem] p-12 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ready to simplify your flow?</h2>
            <Link 
              to="/tools" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary-600 rounded-2xl font-black text-xl hover:scale-105 transition-transform"
            >
              Launch ToolBox
              <Zap className="w-6 h-6 fill-primary-600" />
            </Link>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white rounded-full group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
