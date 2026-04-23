import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToolProvider } from './context/ToolContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ToolProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-primary-500/30">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tools" element={<div className='pt-24 p-8 text-center text-4xl font-bold text-slate-400'>Tools Discovery Page Coming Soon</div>} />
          </Routes>
        </div>
      </Router>
    </ToolProvider>
  );
}

export default App;
