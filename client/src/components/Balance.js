import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionState';
import {numberWithCommas} from '../utils/format';
import { Typography } from '@material-ui/core';

export const Balance = () => {

  const { transactions } = useContext(TransactionContext);
  const transactionAmounts = transactions.map( transaction => transaction.transactionAmount);
  const balance = transactionAmounts.reduce( (acc, item) => acc+=item, 0).toFixed(2);

  return (
    <div>
    <Typography variant="h6" gutterBottom>
        Current Balance
    </Typography>
    <Typography variant="h5" gutterBottom>
         ${numberWithCommas(balance)}
    </Typography>  
    </div>
  );
}
