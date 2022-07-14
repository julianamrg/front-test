import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataContext';
import axiosFunction from '../../helpers/axios';
import './modals.css';
import swal from 'sweetalert';

const RegisterMovement = ({isActiveModalRegister, setIsActiveModalRegister, callbackGetDataBills}) => {


  const { user } = useContext(DataContext);

  // function to close the modal with the x button or Cancelar button
  const handleCloseModal = () => {
    setIsActiveModalRegister(false);
    // setting the modal to false state
  }

  // empty object to save the information of the new movement
  const billInit = {
    "type": "",
    "value": 0,
    "observation": ""
   }

   // initial state of the new movement
   const [newBill, setNewBill] = useState(billInit);

// function to catch the information of the user from the inputs 
   const handleChange = ({target}) => {
      const { name, value } = target;
      setNewBill({ ...newBill, [name]: value });
  }

// Alert that shows successful registration Movement
const showSuccessfulRegisterMovement =() =>{
  swal({
    title: "Registro exitoso",
    icon: "success",
    button: "Aceptar",
  });
}

// Alert that shows an error when the user is registrating a new movement
const showErrorRegisterMovement =() =>{
  swal({
    title: "No se pudo registrar :(",
    text: "Intentalo de nuevo",
    icon: "error",
    button: "Aceptar",
  });
}


  // asynchronous request to add the new register 
    const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      await axiosFunction(`users/${user.username}/bills` , newBill, 'post');
      // success response
      showSuccessfulRegisterMovement();
    } catch (error) {
      console.log(error);
      showErrorRegisterMovement(); // error response
    }
    handleCloseModal(); // function to close modal after the response
    callbackGetDataBills();
  }


  return (
  
<div className={isActiveModalRegister ? 'is-active modal' : 'modal'}>
  <div className="modal-background"></div>
    <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title is-size-3 title-new-color"><strong>Registro de movimiento </strong> </p>
      <button className="delete" aria-label="close" onClick={handleCloseModal}></button>
    </header>

    <section className="modal-card-body">
      <form>
        <div className="field">
          <p className="modal-card-title"> Descripción:</p>
     
          <div className='control'>
            <textarea 
            className ="textarea" 
            placeholder="Ejemplo: 'Compra de perro caliente' "
            value={newBill.observation}
            name="observation"
            onChange={handleChange}
            >

            </textarea>
          </div>
        </div>
      
      <div className="field">
        <p className="modal-card-title"> Tipo de movimiento: <br/> </p>

        <div className="control is-size-4">
          <label className="radio">
              <input 
                type="radio"
                value='1'
                name="type"
                onChange={handleChange}
                
              />
              Ingreso  <br/>
          </label>
          <label className="radio">
              <input 
                type="radio"
                value='2'
                name="type"
                onChange={handleChange}
              />
              Egreso  <br/>
          </label>
        </div>
      </div>

      <div className="field">
        <p className="modal-card-title"> Valor:  </p>
        <input 
        className="input" 
        type="number" 
        placeholder="Valor del movimiento $$$ "
        value={newBill.value}
        name="value"
        onChange={handleChange}
        
        />

      </div>
      </form>
    </section>
    <footer className="modal-card-foot">
      <button className="button registerMovement-btn" onClick={handleSubmit}> Registrar </button>
      <button className="button" onClick={handleCloseModal}> Cancelar </button>
    </footer>
  </div>
</div>



  )
}

export default RegisterMovement