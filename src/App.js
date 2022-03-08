import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  return (
    <div className='atm-screen'>
      <Header />
      <Login />
    </div>
  );
}

export default App;
