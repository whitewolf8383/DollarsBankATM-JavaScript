import React, { useState, useEffect } from 'react';
import '../componentsStyles/mainStyles.css';

export default function Main() {
  const [user, setUser] = useState('User');
  const [selection, setSelection] = useState('');
  const [inputError, setInputError] = useState('none');

  const handlePageChange = () => {
    switch(selection){
      case '1':
        console.log('Selected 1');
        break;
      case '2':
        console.log('Selected 2');
        break;
      case '3':
        console.log('Selected 3');
        break;
      case '4':
        console.log('Selected 4');
        break;
      case '5':
        console.log('Selected 5');
        break;
      case '6':
        console.log('Selected 6');
        break;
      default:
        setInputError('block');
    }
  }

  const handleChange = (event) => {
    setSelection(event.target.value);
  }

  useEffect(() => {}, [selection])

  return(
    <React.Fragment>
      <div className='main-div'>
        <h2>Welcome {user}!</h2>
        <h2>Please make your selection.</h2>
      </div>
      <div className='main-selection-div'>
        <p>Enter 1: Account Balances</p>
        <p>Enter 2: Print Transactions</p>
        <p>Enter 3: Update PIN</p>
        <p>Enter 4: Withdraw</p>
        <p>Enter 5: Deposit</p>
        <p>Enter 6: Transfer</p>
      </div>
      <input className='main-userInput' onChange={handleChange} placeholder='Number' />
      <button className='main-submit-btn' onClick={() => handlePageChange()} >ENTER</button>
      <h3 style={{display: inputError}} className='main-invalid'>Incorrect selection. Please try again.</h3>
    </React.Fragment>
  );
}