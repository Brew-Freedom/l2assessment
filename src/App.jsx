import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AnalyzePage from './pages/AnalyzePage'
import HistoryPage from './pages/HistoryPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
const getPriority = (message) => {
  const text = message.toLowerCase();

  const urgentKeywords = [
    "urgent",
    "immediately",
    "asap",
    "refund",
    "cancel",
    "account locked",
    "can’t login",
    "cannot log in",
    "down",
    "outage",
    "broken"
  ];

  if (urgentKeywords.some(word => text.includes(word))) {
    return "High";
  }

  return "Normal";
};
