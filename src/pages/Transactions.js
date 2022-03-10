import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyles/transactionsStyles.css';

export default function Transactions() {
  const [user, setUser] = useState('User');

  return(
    <React.Fragment>
      <div className='transactions-div'>
        <h2>Welcome {user}!</h2>
        <h2>Your Recent Transactions.</h2>
      </div>
      <div className='transactions-transactionBox'>
        <div className='transactions-trans-div'>
          <p>Transfered funds, checking to savings Amount of $200.00 on March 10, 2022.</p>
        </div>
        <div className='transactions-trans-div'>
          <p>Transfered funds, checking to savings Amount of $200.00 on March 10, 2022.</p>
        </div>
        <div className='transactions-trans-div'>
          <p>Transfered funds, checking to savings Amount of $200.00 on March 10, 2022.</p>
        </div>
        <div className='transactions-trans-div'>
          <p>Transfered funds, checking to savings Amount of $200.00 on March 10, 2022.</p>
        </div>
        <div className='transactions-trans-div'>
          <p>Transfered funds, checking to savings Amount of $200.00 on March 10, 2022.</p>
        </div>
      </div>
      <Link className='transactions-btn' to='/main'>RETURN</Link>
    </React.Fragment>
  );
}