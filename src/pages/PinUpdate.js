import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyles/pinUpdateStyles.css';

export default function PinUpdate() {
  const [user, setUser] = useState('User');
  const [newPin, setNewPin] = useState('000000');
  const [pinError, setPinError] = useState('none');

  const handleUpdate = () => {
    (newPin.length !== 6) 
    ? setPinError('block') 
    : console.log('Pin has been changed');
  }

  const handleNewPin = (event) => {
    setNewPin(event.target.value);
  }

  useEffect(() => {}, [newPin])

  return(
    <React.Fragment>
      <div className='pinupdate-div'>
      <h2>Welcome {user}!</h2>
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