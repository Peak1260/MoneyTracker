import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import the new Layout component
import { Auth } from './pages/auth';
import { Transactions } from './pages/transactions';
import { Goals } from './pages/goals';
import Market from './pages/market';
import { New } from './pages/news';
import { Cards } from './pages/cards';
import { Education } from './pages/education';
import Profile from './assets/Profile.jpg';
import './index.css';

// Main page content
function MainPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top section with text and financial image */}
      <div className="flex justify-between bg-gray-200 w-full pt-10">
        <div className="flex-1 p-2">
          <h1 className="text-center text-5xl font-medium mb-8">Unlock Your Path <br /> to Financial Success <br /> Without Sacrificing Comfort</h1>
          <p className="text-center text-xl">When you want to boost your quality of life without boosting your expenses, use MoneyTracker to enjoy more without paying more</p>
        </div>
        <div className="flex-1 text-center">
          <img className="ml-12 mb-10 w-2/3" src='https://st4.depositphotos.com/10325396/20155/i/450/depositphotos_201554746-stock-photo-double-exposure-image-stock-market.jpg' alt="Financial Chart" />
        </div>
      </div>

      {/* Description section with text and image */}
      <div className="w-full text-center">
        <h2 className="w-3/4 mx-auto my-10 text-3xl">We can help you manage your finances, track expenses, and plan investments. Our goal is to make financial management accessible and enjoyable.</h2>
        <img src='https://www.arthurstatebank.com/wp-content/uploads/2024/01/23-ARTHUR-3268-December_content-Blog_1-FInancial_Checkup-GettyImages-1129810557-F-Web.jpg' alt="Finance Illustration" />
      </div>

      {/* About Me section with image and text */}
      <div className="flex relative items-center p-5">
        <div className="flex-1">
          <img src={Profile} alt="Profile Picture" />
        </div>
        <div className="flex-1 p-2 pl-8">
          <h2 className="text-2xl">About Me</h2>
          <p>
            Hi! my name is Peak, the creator of MoneyTracker. I have a passion for helping people budget and make smarter financial decisions. My goal is to share my knowledge and experience to assist you on your journey towards financial freedom. As a computer engineering student in college, I felt there was a significant lack of financial education despite its importance, especially for those experiencing leaving home for the first time and having to manage money independently.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Layout> {/* Wrap Routes with Layout */}
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
      </Layout>
    </div>
  );
}

export default App;