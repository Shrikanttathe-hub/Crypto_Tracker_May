import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage1 from './pages/ComparePage1';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/DashBoard" element={<DashboardPage/>} />
      <Route path="/coin/:id" element={<CoinPage />} />
      <Route path="/compare" element={<ComparePage1 />} />

      {/* <Route path="/watchlist" element={<WatchList/>} /> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
