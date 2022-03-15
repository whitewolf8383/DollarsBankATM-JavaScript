import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

//Pages
import Login from './pages/Login';
import Main from './pages/Main';
import Values from './pages/Values';
import Transactions from './pages/Transactions';
import PinUpdate from './pages/PinUpdate';
import Withdraw from './pages/Withdraw';
import Deposit from './pages/Deposit';
import Transfer from './pages/Transfer';

function App() {
  return (
    <div className='atm-screen'>
      <Header />
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/main' element={<Main />} />
          <Route path='/values' element={<Values />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/change-pin' element={<PinUpdate />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/transfer' element={<Transfer />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
