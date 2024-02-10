import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import {Auth} from './pages/auth';
import {Transactions} from './pages/transactions';
import {Goals} from './pages/goals';
import {Market} from './pages/market';
import {New} from './pages/news';
import {Cards} from './pages/cards';
import {Education} from './pages/education';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavButtons/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/transactions' element={<Transactions/>}/>
      <Route path='/goals' element={<Goals/>}/>
      <Route path='/market' element={<Market/>}/>
      <Route path='/news' element={<New/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/education' element={<Education/>}/>
    </Routes>
  );
}

export default App;

function NavButtons(){
  const navigate = useNavigate()
  return(
    <>
    {/* Navigation Buttons */}
    <div className="navigation">
        <button onClick={()=>{
          navigate('/transactions')
        }} className="navigation-button">Transactions</button>
        <button onClick={()=>{
          navigate('/goals')
        }} className="navigation-button">Goals</button>
        <button onClick={()=>{
          navigate('/market')
        }} className="navigation-button">Market</button>
        <button onClick={()=>{
          navigate('/news')
        }} className="navigation-button">News</button>
        <button onClick={()=>{
          navigate('/cards')
        }} className="navigation-button">Credit Cards</button>
        <button onClick={()=>{
          navigate('/education')
        }} className="navigation-button">Education</button>
        <button onClick={()=>{
          navigate('/auth')
        }} className="navigation-button">Login</button>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>MoneyTracker</h1>
        <div className="card">
          <p>
            Welcome to my website!
          </p>
        </div>
      </div>
    </>
  )
}