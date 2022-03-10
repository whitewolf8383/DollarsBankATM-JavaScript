import React, { useState, useEffect } from 'react';
import '../componentsStyles/loginStyles.css';

export default function Login() {
  const [warning, setWarning] = useState('none');

  const checkUserData = () => {
    (warning == 'none') ? setWarning('block') : setWarning('none');
  }

  useEffect(() => {}, [warning])

  return(
    <React.Fragment>
      <div className='login-div'>
        <h2>Welcome to Dollars Bank!</h2>
        <h2>Please enter your information.</h2>
      </div>
      <div className='login-userDiv'>
        <h4>UserID</h4>
        <input className='login-userInput' type='input' id='userid' />
        <h4>PIN</h4>
        <input className='login-userInput' type='input' id='pin' />
        <button className='login-enter-btn' onClick={() => checkUserData()}>ENTER</button>
      </div>
      <h3 style={{display: warning}} className='login-invalid'>Incorrect UserID and PIN combination! Please try again.</h3>
    </React.Fragment>
  );
}