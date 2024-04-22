import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Import the NavBar component
import { Auth } from './pages/auth';
import { Transactions } from './pages/transactions';
import { Goals } from './pages/goals';
import { Market } from './pages/market';
import { New } from './pages/news';
import { Cards } from './pages/cards';
import { Education } from './pages/education';

// Main page content
function MainPage() {
  return (
    <div className="main-content">
      <h1>Welcome to MoneyTracker!</h1>
      <div className="card">
        <p>Make budgeting and investing fun!</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <NavBar /> {/* Ensure this appears on all pages */}

      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Main page content */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/market" element={<Market />} />
        <Route path="/news" element={<New />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
