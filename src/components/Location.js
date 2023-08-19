import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary' style={{backgroundColor: 'green', width: '250px'}}> Currency ({
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)} style={{backgroundColor: 'green', color: 'black', padding: '6px', border: 'none'}}>
        <option value="$">$ Dollar</option>
        <option value="£ ">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹ ">₹ Ruppee</option>
    </select>	
      }	
    )</div>
    );
};

export default Location;