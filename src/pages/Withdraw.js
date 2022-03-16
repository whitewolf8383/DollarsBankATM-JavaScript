import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyles/transactionStyles.css';

export default function Withdraw() {
  const [userInfo, setUserInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [withdrawError, setWithdrawError] = useState('block');
  const [number, setNumber] = useState('0');
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    switch(number) {
      case '1':
        let tempCheckingAmount = parseFloat(userInfo.checking.accountBalance);
        tempCheckingAmount -= parseFloat(amount);
        if(tempCheckingAmount < 0){
          setErrorMessage('Insufficient funds, Enter a different amount.');
          setWithdrawError('block');
        } else {
          userInfo.checking.accountBalance = tempCheckingAmount;
          sessionStorage.setItem('dollarsBankUser', JSON.stringify(userInfo));

          // Save transaction
          let transactions = JSON.parse(sessionStorage.getItem('dollarsBankTransactions'));
          const date = new Date().toLocaleDateString();
          transactions.push('Withdraw from checking, Amount of $' + amount +' on ' + date);
          sessionStorage.setItem('dollarsBankTransactions', JSON.stringify(transactions));

          alert("Your transaction has processed. Checking account: $" + userInfo.checking.accountBalance);
        }
        break;
      case '2':
        let tempSavingsAmount = parseFloat(userInfo.savings.accountBalance);
        tempSavingsAmount -= parseFloat(amount);
        if(tempSavingsAmount < 0){
          setErrorMessage('Insufficient funds, Enter a different amount.');
          setWithdrawError('block');
        } else {
          userInfo.savings.accountBalance = tempSavingsAmount;
          sessionStorage.setItem('dollarsBankUser', JSON.stringify(userInfo));

          // Save transaction
          let transactions = JSON.parse(sessionStorage.getItem('dollarsBankTransactions'));
          const date = new Date().toLocaleDateString();
          transactions.push('Withdraw from savings, Amount of $' + amount +' on ' + date);
          sessionStorage.setItem('dollarsBankTransactions', JSON.stringify(transactions));

          alert("Your transaction has processed. Savings account: $" + userInfo.savings.accountBalance);
        }
        break;
      default:
        setErrorMessage('Incorrect option selection, must be "1" or "2"');
        setWithdrawError('block');
    }
  }

  const handleNumber = (event) => {
    setNumber(event.target.value);
  }

  const handleAmount = (event) => {
    setAmount(event.target.value);
  }

  useEffect(() => {
    const user = window.sessionStorage.getItem('dollarsBankUser');
    setUserInfo(JSON.parse(user));
  }, [number, amount])

  return(
    <React.Fragment>
      <div className='transaction-div'>
      <h2>Welcome {userInfo.name}!</h2>
      <h2>Please make your withdraw selection.</h2>
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
    <Link className='transaction-cancel-btn' to='/main'>RETURN</Link>
    </React.Fragment>
  );
}