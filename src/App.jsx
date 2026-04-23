import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToolProvider } from './context/ToolContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ToolsPage from './pages/ToolsPage';

function App() {
  return (
    <ToolProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-primary-500/30">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tools" element={<ToolsPage />} />
          </Routes>
        </div>
      </Router>
    </ToolProvider>
  );
}

export default App;
