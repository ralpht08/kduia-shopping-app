import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const CartValue = () => {
    const { expenses, Location, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.unitprice);
    }, 0);

    const [editedBudget, setEditedBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        //setEditedBudget(event.target.value);

        if (editedBudget >= totalExpenses){
            setEditedBudget(event.target.value);
        } else {
            alert("You cannot reduce the budget lower than spending")
        }
    };

    return (
        <div className="d-flex">
        <div className='alert alert-primary mr-2' style={{width: '300px'}}>
            <span>Budget: {Location}</span> <input
                        required='required'
                        type='number'
                        value={editedBudget}
                        onChange={handleBudgetChange}
                        step={10}
                        >
                            
                       
                        </input>          
        </div>
        <div className='alert alert-success mr-2' style={{margin: '10px', width: '300px'}}>
            <span>Remaining: {Location}{budget - totalExpenses}</span>
        </div>
        <div className='alert alert-info mr-2' style={{margin: '10px', width: '300px'}}>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>

        </div>
    );
};

export default CartValue;