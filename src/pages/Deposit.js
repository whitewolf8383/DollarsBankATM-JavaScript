import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyles/transactionStyles.css';

export default function Deposit() {
  const [user, setUser] = useState('User');
  const [errorMessage, setErrorMessage] = useState('');
  const [withdrawError, setWithdrawError] = useState('block');
  const [number, setNumber] = useState('0');
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    console.log('Submit handled');
  }

  const handleNumber = (event) => {
    setNumber(event.target.value);
    console.log('Number ' + number);
  }

  const handleAmount = (event) => {
    setAmount(event.target.value);
    console.log('Amount ' + amount);
  }

  useEffect(() => {}, [number, amount])

  return(
    <React.Fragment>
      <div className='transaction-div'>
      <h2>Welcome {user}!</h2>
      <h2>Please make your deposit selection.</h2>
    </div>
    <div className='transaction-display-div'>
      <div className='transaction-options'>
        <p>ENTER 1: Checking</p>
        <p>ENTER 2: Savings</p>
      </div>
      <input style={{width: '164px'}} className='transaction-input' onChange={handleNumber} placeholder='Number' />
      <input style={{width: '250px'}} className='transaction-input' onChange={handleAmount} placeholder='Amount' />
      <button className='transaction-submit-btn' type='submit' onClick={() => handleSubmit()}>SUBMIT</button>
      <p style={{display: withdrawError}} className='transaction-error'>{errorMessage}</p>
    </div>
    <Link className='transaction-cancel-btn' to='/main'>CANCEL</Link>
    </React.Fragment>
  );
}