import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';


const Bills = ({element,  setIsActiveModalSee}) => {

    const {setDataBillModal} = useContext(DataContext);

    // function to open the modal from "Ver" button
    const buttonSeeMovement = () => {
        setIsActiveModalSee(true);
        setDataBillModal(element); 
    }

  return (
    <tr>
      {/*rendering the table information of the movement */ }
        <th> {element.id} </th>
        <td> {element.date_bill} </td>
        <td> {element.observation} </td>
        <td> $ {element.type === '2' && '-'}{element.value} </td>
        <td> <button className='button is-light' onClick={buttonSeeMovement}><strong> VER </strong> </button> </td>
    </tr>

  )
}

export default Bills
