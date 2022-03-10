import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DollarsBankDB from '../dollarsBankDB';
import '../componentsStyles/accountBalanceStyles.css';

export default function AccountBalance() {
  const [user, setUser] = useState('User');
  const [checking, setChecking] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    setUser(window.sessionStorage.getItem('dollarsBankUser'));
    let userID = window.sessionStorage.getItem('dollarsBankToken').substring(8, 14)

    DollarsBankDB.map((user) => {
      if(userID === user.userID) {
        setChecking(user.checking.accountBalance);
        setSavings(user.savings.accountBalance);
      }
    })
  }, [])

  return(
    <React.Fragment>
      <div className='AB-div'>
      <h2>Welcome {user}!</h2>
      <h2>You Account Balances.</h2>
    </div>
    <div className='AB-display-div'>
      <h3>Checking: ${checking}</h3>
      <h3>Savings: ${savings}</h3>
    </div>
    <Link className='AB-btn' to='/main'>RETURN</Link>
    </React.Fragment>
  );
}