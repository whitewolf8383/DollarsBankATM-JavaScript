import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyles/accountBalanceStyles.css';

export default function Values() {
  const [user, setUser] = useState(window.sessionStorage.getItem('dollarsBankUser'));
  const [userInfo, setUserInfo] = useState(JSON.parse(user));

  return(
    <React.Fragment>
      <div className='AB-div'>
        <h2>Welcome {userInfo.name}!</h2>
        <h2>You Account Balances.</h2>
      </div>
      <div className='AB-display-div'>
       <h3>Checking: ${userInfo.checking.accountBalance}</h3>
        <h3>Savings: ${userInfo.savings.accountBalance}</h3>
      </div>
      <Link className='AB-btn' to='/main'>RETURN</Link>
    </React.Fragment>
  );
}