import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Transaction from './Transaction';
import '../componentsStyles/transactionsStyles.css';

export default function Transactions() {
  const [user, setUser] = useState(window.sessionStorage.getItem('dollarsBankUser'));
  const [userInfo, setUserInfo] = useState(JSON.parse(user));
  const [transactions, setTransactions] = useState(JSON.parse(window.sessionStorage.getItem('dollarsBankTransactions')));

  return(
    <React.Fragment>
      <div className='transactions-div'>
        <h2>Welcome {userInfo.name}!</h2>
        <h2>Your Recent Transactions.</h2>
      </div>
      <div className='transactions-transactionBox'>
        {
          transactions.map((transData, index) => {
            return(
              <div className='transactions-trans-div' key={index}>
                <Transaction transData={transData}/>
              </div>
            )
          })
        }
      </div>
      <Link className='transactions-btn' to='/main'>RETURN</Link>
    </React.Fragment>
  );
}