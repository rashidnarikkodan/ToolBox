import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToolProvider } from './context/ToolContext';

function App() {
  return (
    <ToolProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-primary-500/30">
          <Routes>
            <Route path="/" element={<div className='p-20 text-center text-4xl font-bold text-slate-400'>Landing Page Coming Soon</div>} />
            <Route path="/tools" element={<div className='p-20 text-center text-4xl font-bold text-slate-400'>Tools Discovery Page Coming Soon</div>} />
          </Routes>
        </div>
      </Router>
    </ToolProvider>
  );
}

export default App;
