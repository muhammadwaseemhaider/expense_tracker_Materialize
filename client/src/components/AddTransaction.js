import React, { useState, useContext } from 'react';
import { TransactionContext } from '../TransactionState';
import { Button, TextField } from '@material-ui/core';

export const AddTransaction = () => {

const [description, setDescription] = useState('');
const  [transactionAmount, setTransactionAmount] = useState(0);

const { addTransaction } = useContext(TransactionContext);

const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
        id: new Date().getTime(),
        description,
        transactionAmount: +transactionAmount
    }

    addTransaction(newTransaction);
}

return (
<div>
    <h3>Add Transaction</h3>
    <form onSubmit={onSubmit} >
        <div className="form-control">

            <TextField  type="text"
                    label="Description"
                    placeholder="Detail of transaction"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}>
            </TextField>
        </div>
        <div className="form-control">
            <TextField  type="text"
                    label="Transaction amount"
                    placeholder="Enter transaction amount"
                    color="primary"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={transactionAmount}
                    onChange={(e)=> setTransactionAmount(e.target.value)}>
            </TextField>
        </div>
        <Button fullWidth variant="contained" color="primary" >
            Add Transaction
        </Button>            
    </form>
</div>
);
}
