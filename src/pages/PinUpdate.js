import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyles/pinUpdateStyles.css';

export default function PinUpdate() {
  const [userInfo, setUserInfo] = useState({});
  const [newPin, setNewPin] = useState('0');
  const [pinError, setPinError] = useState('none');
  

  const handleUpdate = () => {
    (newPin.length === 6) 
    ? updatePin()
    : setPinError('block');
  }

  const handleNewPin = (event) => {
    setNewPin(event.target.value);
  }

  const updatePin = () => {
    userInfo.userPin = newPin;
    sessionStorage.setItem('dollarsBankUser', JSON.stringify(userInfo));
    let transactions = JSON.parse(sessionStorage.getItem('dollarsBankTransactions'));
    const date = new Date().toLocaleDateString();
    transactions.push('User PIN has been changed on ' + date);
    sessionStorage.setItem('dollarsBankTransactions', JSON.stringify(transactions));
    alert('Pin has been changed');
    window.location.href = 'main';
  }

  useEffect(() => {
    const user = window.sessionStorage.getItem('dollarsBankUser');
    setUserInfo(JSON.parse(user));
  }, [newPin])

  return(
    <React.Fragment>
      <div className='pinupdate-div'>
      <h2>Welcome {userInfo.name}!</h2>
      <h2>Please enter your NEW PIN.</h2>
    </div>
    <div className='pinupdate-display-div'>
      <input className='pinupdate-newpin-input' onChange={handleNewPin} placeholder='New PIN' />
      <p>PINS must be 6 digits long.</p>
      <button className='pinupdate-update-btn' type='submit' onClick={() => handleUpdate()}>UPDATE</button>
      <p style={{display: pinError}} className='pinupdate-error'>Error in pin update. Pins MUST be 6 digits in length only.</p>
    </div>
    <Link className='pinupdate-cancel-btn' to='/main'>CANCEL</Link>
    </React.Fragment>
  );
}