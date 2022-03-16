import React, { useState, useEffect } from 'react';
import DollarsBankDB from '../dollarsBankDB';
import '../componentsStyles/loginStyles.css';

export default function Login() {
  const [warning, setWarning] = useState('none');
  const [userID, setUserID] = useState('000000');
  const [pin, setPin] = useState('000000');

  const checkUserData = () => {
    let counter = 0;
    let approved = false;
    let currentUser = {};
    DollarsBankDB.map((user) => {
      
      if(userID === user.userID)
        if(pin === user.userPin) {
          approved = true;
          currentUser = user;
        }
        // Set warning if pin doesn't match
        else setWarning('block')
      else counter++;
      // Set warning if no user found
      if(counter === DollarsBankDB.length) setWarning('block');
    })
    if(approved) gotoMain(userID, pin, currentUser);
  }

  const gotoMain = (userID, pin, user) => {
    // Create session token
    const userToken = 'TK321654' + userID + pin + '456123';
    sessionStorage.setItem('dollarsBankToken', userToken);
    sessionStorage.setItem('dollarsBankUser', JSON.stringify(user));
    sessionStorage.setItem('dollarsBankTransactions', JSON.stringify([]));
    // Move to main
    window.location.href = 'main';
  }

  const handleUserID = (event) => {
    setUserID(event.target.value);
  }

  const handlePin = (event) => {
    setPin(event.target.value);
  }

  useEffect(() => {}, [warning, userID, pin]);

  return(
    <React.Fragment>
      <div className='login-div'>
        <h2>Welcome to Dollars Bank!</h2>
        <h2>Please enter your information.</h2>
      </div>
      <div className='login-userDiv'>
        <h4>UserID</h4>
        <input className='login-userInput' onChange={handleUserID} id='userid' />
        <h4>PIN</h4>
        <input className='login-userInput' onChange={handlePin} id='pin' />
        <button className='login-enter-btn' onClick={() => checkUserData()}>ENTER</button>
      </div>
      <h3 style={{display: warning}} className='login-invalid'>Incorrect UserID and PIN combination! Please try again.</h3>
    </React.Fragment>
  );
}