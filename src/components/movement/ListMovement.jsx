import React, {useContext, useEffect, useState, useCallback} from 'react';
import { DataContext } from '../../context/DataContext';
import axiosFunction from '../../helpers/axios';
import RegisterMovement from '../modal/RegisterMovement';
import SeeMovement from '../modal/SeeMovement';
import Bills from './Bills';
import './listMovement.css';



const ListMovement = () => {
  
  const { user } = useContext(DataContext);
  const [data, setData] = useState([]); // to save the data in an empty array
  const [isActiveModalSee, setIsActiveModalSee] =  useState(false);   // initial state of the ModalSee is false (Closed)
  const [isActiveModalRegister, setIsActiveModalRegister] =  useState(false); // initial state of the ModalRegister is false (Closed)

  
  // method get using the endpoint to take all the data of the user
  const callbackGetDataBills = useCallback(
    () => {
      const getDataUserBills = async () => {
        const dataBills = await axiosFunction(`users/${user.username}/bills`);
        //console.log(dataBills.data)
        setData(dataBills.data); // accesing to the object
      } 
      getDataUserBills(); 
    },
    [user.username],
  );

  // to render in the page only once 
  useEffect(() => {
    callbackGetDataBills();
  }, [callbackGetDataBills]);
  
  // function to open the modal to register a new movement from the (+) button
  const buttonRegisterMovement = () => {
    setIsActiveModalRegister(true);
}



  return (
    <>
    <div className="hero halfheight">
     
    <div className='hero-body' >

    <button className="button is-rounded is right addMovement-btn" onClick={buttonRegisterMovement}><strong> + </strong> </button>

    <div className='table-container is-centered'>

      <table className="table is-striped is-fullwidth">
        <thead className='is-size-3 '>
            <tr>
              <th id='title-color'>ID</th>
              <th id='title-color'>FECHA</th>
              <th id='title-color'>DESCRIPCIÓN MOVIMIENTO</th>
              <th id='title-color'> VALOR $ </th>
              <th id='title-color'> ACCIÓN </th>
            
            </tr>
        </thead>
 
  <tbody className='is-size-4'>

    {data?.map(element => (

     <Bills  
        key={element.id}
        element= {element}
        setIsActiveModalSee={setIsActiveModalSee}
      />
    ))}

    </tbody>
  </table>
        
        </div>
    </div>
  </div>
   <SeeMovement 
    isActiveModalSee={isActiveModalSee}
    setIsActiveModalSee={setIsActiveModalSee}
    callbackGetDataBills={callbackGetDataBills}
   />

   <RegisterMovement
    isActiveModalRegister={isActiveModalRegister}
    setIsActiveModalRegister={setIsActiveModalRegister}
    callbackGetDataBills={callbackGetDataBills}
   />
  </>
  )
}

export default ListMovement