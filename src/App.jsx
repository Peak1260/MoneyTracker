import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; 
import { Auth } from './pages/auth';
import { Transactions } from './pages/transactions';
import { Goals } from './pages/goals';
import { Market } from './pages/market';
import { New } from './pages/news';
import { Cards } from './pages/cards';
import { Education } from './pages/education';
import Profile from './assets/Profile.jpg';

// Main page content
function MainPage() {
  return (
    <div className="main-page">
      {/* Top section with text and financial image */}
      <div className="top-section">
        <div className="left-column">
          <h1>Unlock Your Path <br></br> to Financial Success <br></br> Without Sacrificing Comfort</h1>
          <p>When you want to boost your quality of life without boosting your expenses, use MoneyTracker to enjoy more without paying more</p>
        </div>
        <div className="right-column">
          <img src='https://st4.depositphotos.com/10325396/20155/i/450/depositphotos_201554746-stock-photo-double-exposure-image-stock-market.jpg' alt="Financial Chart" />
        </div>
      </div>

      {/* Description section with text and image */}
      <div className="description-section">
        <h2>We can help you manage your finances, track expenses, and plan investments. Our goal is to make financial management accessible and enjoyable.</h2>
        <img src='https://www.arthurstatebank.com/wp-content/uploads/2024/01/23-ARTHUR-3268-December_content-Blog_1-FInancial_Checkup-GettyImages-1129810557-F-Web.jpg' alt="Finance Illustration" />
      </div>

      {/* About Me section with image and text */}
      <div className="about-me-section">
        <div className="left-column">
          <img src={Profile} alt="Profile Picture" />
        </div>
        <div className="right-column">
          <h2>About Me</h2>
          <p>
          Hi! I'm Peak, the creator of MoneyTracker. I have a passion for helping people manage their finances and make smarter financial decisions. My goal is to share my knowledge and experience to assist you on your financial journey. As a current computer engineering student in college, I felt there was a significant lack of financial education, despite its importance, especially for those experiencing leaving home for the first time and having to manage money independently.
          </p>
        </div>
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
