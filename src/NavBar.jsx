import { useNavigate } from 'react-router-dom';
import website_logo from './assets/website_logo.png'

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      {/* Navigation Buttons */}
      {/* Website Logo */}
      <div
        className="website-logo"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }} 
      >
        <img src={website_logo} alt="Website Logo" /> 
      </div>
      <button
        onClick={() => navigate('/transactions')}
        className="navigation-button"
      >
        Transactions
      </button>
      <button
        onClick={() => navigate('/goals')}
        className="navigation-button"
      >
        Goals
      </button>
      <button
        onClick={() => navigate('/market')}
        className="navigation-button"
      >
        Market
      </button>
      <button
        onClick={() => navigate('/news')}
        className="navigation-button"
      >
        News
      </button>
      <button
        onClick={() => navigate('/cards')}
        className="navigation-button"
      >
        Credit Cards
      </button>
      <button
        onClick={() => navigate('/education')}
        className="navigation-button"
      >
        Education
      </button>
      <button
        onClick={() => navigate('/auth')}
        className="navigation-button"
      >
        Login
      </button>
    </div>
  );
}

export default NavBar;