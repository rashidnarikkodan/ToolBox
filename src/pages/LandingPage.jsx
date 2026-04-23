import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Sparkles, Code, Compass, Briefcase, Feather, Globe, User, Github, Linkedin, Mail, Heart } from 'lucide-react';
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
            <span>Discover the best developer tools in one place</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            The Ultimate <br />
            <span className="bg-gradient-to-r from-primary-400 to-blue-500 bg-clip-text text-transparent">Developer Directory.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop searching across a dozen tabs. ToolBox is a high-performance, curated directory designed to streamline your workflow with instant access to 75+ professional tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/tools" 
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary-500/20 transition-all flex items-center gap-2"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="#how-it-works" 
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

      {/* Feature Grid */}
      <section className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-colors group">
            <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-slate-400 leading-relaxed">
              Experience zero-lag navigation and instant filtering. Built with Vite and React for maximum performance.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Curated Selection</h3>
            <p className="text-slate-400 leading-relaxed">
              We've handpicked 75+ tools across 18 categories, from AI and Design to Security and Mobile Dev.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-colors group">
            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Professional Grade</h3>
            <p className="text-slate-400 leading-relaxed">
              A clean, distraction-free environment focused entirely on tool discovery and workflow efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mt-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Master Your Workflow</h2>
          <p className="text-slate-400">Navigating the modern developer landscape simplified.</p>
        </div>
        
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-3xl hover:bg-slate-900/30 transition-colors">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-400 shrink-0 border border-slate-800">1</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Explore 18+ Categories</h4>
              <p className="text-slate-400">From Frontend to Security, our directory covers the entire development lifecycle.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-3xl hover:bg-slate-900/30 transition-colors">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-400 shrink-0 border border-slate-800">2</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Advanced Keyword Search</h4>
              <p className="text-slate-400">Search by related terms like "javascript" or "hosting" to find relevant tools instantly, even without exact matches.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-3xl hover:bg-slate-900/30 transition-colors">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-400 shrink-0 border border-slate-800">3</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Instant Tool Access</h4>
              <p className="text-slate-400">Click to visit any platform in a new tab. Fast, clean, and efficient discovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center text-center overflow-hidden relative">
          <div className="w-32 h-32 rounded-full bg-primary-500 mb-8 flex items-center justify-center shadow-2xl shadow-primary-500/50 text-white relative z-10">
            <User className="w-16 h-16" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4 relative z-10">Meet Rashid Narikkodan</h2>
          <p className="text-xl text-primary-400 font-bold mb-6 relative z-10">Software Engineer & Visionary</p>
          <p className="text-slate-400 max-w-2xl mb-10 relative z-10 leading-relaxed">
            I built ToolBox to solve the noise of the modern web. My goal is to create high-performance, aesthetically pleasing tools that help developers focus on what they do best: building the future.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a 
              href="https://github.com/rashidnarikkodan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-primary-500 text-white rounded-2xl font-bold transition-all border border-slate-700"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-blue-600 text-white rounded-2xl font-bold transition-all border border-slate-700"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="mailto:contact@rashidnarikkodan.com" 
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all border border-slate-700"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2 text-slate-500 relative z-10">
             <Heart className="w-4 h-4 text-red-500 fill-red-500" />
             <span className="text-sm font-medium">Handcrafted with precision by Rashid</span>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 blur-[100px] -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[100px] -z-0" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="bg-primary-600 rounded-[3rem] p-12 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Launch your next project today</h2>
            <Link 
              to="/tools" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary-600 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-black/20"
            >
              Launch ToolBox
              <Zap className="w-6 h-6 fill-primary-600" />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white rounded-full group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
