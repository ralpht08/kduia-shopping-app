import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleAddTen = () => {
        const item = {
            name: props.name,
            unitprice: props.unitprice + 10,
        };

        dispatch({
            type: 'UPDATE_UNIT_PRICE',
            payload: item,
        });
    };

    const handleSubtractTen = () => {
        const updatedUnitPrice = Math.max(props.unitprice - 10, 0); // Ensure price doesn't go below 0

        const item = {
            name: props.name,
            unitprice: updatedUnitPrice,
        };

        dispatch({
            type: 'UPDATE_UNIT_PRICE',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddTen}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleSubtractTen}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;