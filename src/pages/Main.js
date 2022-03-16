import React, { useState, useEffect } from 'react';
import '../componentsStyles/mainStyles.css';

export default function Main() {
  const [selection, setSelection] = useState('');
  const [inputError, setInputError] = useState('none');
  const [userInfo, setUserInfo] = useState({});

  const handlePageChange = () => {
    switch(selection){
      case '1':
        window.location.href = 'values';
        break;
      case '2':
        window.location.href = 'transactions';
        break;
      case '3':
        window.location.href = 'change-pin';
        break;
      case '4':
        window.location.href = 'withdraw';
        break;
      case '5':
        window.location.href = 'deposit';
        break;
      case '6':
        window.location.href = 'transfer';
        break;
      case '7':
        window.sessionStorage.removeItem('dollarsBankToken');
        window.sessionStorage.removeItem('dollarsBankUser');
        window.sessionStorage.removeItem('dollarsBankTransactions');
        window.location.href = 'login';
        break
      default:
        setInputError('block');
    }
  }

  const handleChange = (event) => {
    setSelection(event.target.value);
  }

  useEffect(() => {
    const user = window.sessionStorage.getItem('dollarsBankUser');
    setUserInfo(JSON.parse(user));
  }, [selection])

  return(
    <React.Fragment>
      <div className='main-div'>
        <h2>Welcome {userInfo.name}!</h2>
        <h2>Please make your selection.</h2>
      </div>
      <div className='main-selection-div'>
        <p>Enter 1: Account Balances</p>
        <p>Enter 2: Print Transactions</p>
        <p>Enter 3: Update PIN</p>
        <p>Enter 4: Withdraw</p>
        <p>Enter 5: Deposit</p>
        <p>Enter 6: Transfer</p>
        <p>Enter 7: Logout</p>
      </div>
      <input className='main-userInput' onChange={handleChange} placeholder='Number' />
      <button className='main-submit-btn' onClick={() => handlePageChange()} >ENTER</button>
      <h3 style={{display: inputError}} className='main-invalid'>Incorrect selection. Please try again.</h3>
    </React.Fragment>
  );
}