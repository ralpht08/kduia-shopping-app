import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, Location, budget, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.unitprice);
    }, 0);

    const [editedBudget, setEditedBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setEditedBudget(event.target.value);
    };

    const handleBudgetUpdate = () => {
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: parseFloat(editedBudget),
        });
    };

    return (
        <div className="d-flex">
        <div className='alert alert-primary mr-2'>
            <span>Budget: </span> <input
                        required='required'
                        type='number'
                        value={editedBudget}
                        onChange={handleBudgetChange}
                        step={10}
                        >
                            
                       
                        </input>          
        </div>
        <div className='alert alert-success mr-2' style={{margin: '10px'}}>
            <span>Remaining: {Location}{editedBudget - totalExpenses}</span>
        </div>
        <div className='alert alert-info mr-2' style={{margin: '10px'}}>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>

        </div>
    );
};

export default CartValue;