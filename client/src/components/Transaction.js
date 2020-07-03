import React, {useContext} from 'react';
import { TransactionContext } from '../TransactionState';
import {numberWithCommas} from '../utils/format';
import { ListItem, ListItemText } from '@material-ui/core'

export const Transaction = ({transaction}) => {

  const { delTransaction } = useContext(TransactionContext);

  const sign= transaction.transactionAmount > 0 ? '+' : '-';
  const transactionType= transaction.transactionAmount > 0 ? 'plus' : 'minus';

  return (
    <ListItem className={transactionType}>
    <ListItemText> {transaction.description}
  <span>{sign}${numberWithCommas(Math.abs(transaction.transactionAmount))}</span>
    <button className="delete-btn"
            onClick={()=> delTransaction(transaction._id)}
    >X
    </button>
    </ListItemText>
    </ListItem>
  );
}
