import React, { useContext } from 'react';

import { TransactionContext } from '../TransactionState'
import {numberWithCommas} from '../utils/format';
import { Typography } from '@material-ui/core';

export const AccountSummary = () => {

  const { transactions } = useContext(TransactionContext);
  const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const income = Math.abs(transactionAmounts
    .filter(transaction => transaction > 0)
    .reduce((acc, transaction) => (acc+=transaction), 0)
    .toFixed(2));

    const expense = Math.abs(transactionAmounts
    .filter(transaction => transaction < 0)
    .reduce((acc, transaction) => (acc+=transaction), 0)
    .toFixed(2));
  
  return (
    <div className="inc-exp-container">
        <div>
          <Typography variant="h6" display="flex" gutterBottom>
          Income
          </Typography>
            <p className="money plus">${numberWithCommas(income)}</p>
        </div>
        <div> 
          <Typography variant="h6" display="flex" gutterBottom>
            Expense
          </Typography>
            <p className="money minus">${numberWithCommas(expense)}</p>
        </div>
    </div>
  );
}
