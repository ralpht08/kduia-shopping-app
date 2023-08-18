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


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={props.unitprice + 10}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={props.unitprice + 10}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;