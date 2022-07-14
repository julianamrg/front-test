import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext';
import axiosFunction from '../../helpers/axios';
import './modals.css';
import swal from 'sweetalert';

const SeeMovement = ({isActiveModalSee, setIsActiveModalSee, callbackGetDataBills}) => {

  // using the user and dataBillModal from DataContext
  const {dataBillModal, user} = useContext(DataContext);

  // function to close the modal 
  const handleCloseModal = () => {
    setIsActiveModalSee(false);
  }
 
// Alert that shows successful Elimination Movement
const showSuccessfulEliminationMovement =() =>{
  swal({
    title: "El movimiento fue eliminado",
    icon: "success",
    button: "Aceptar",
  });
}

// Alert that shows an error when the user is eliminating a movement
const showErrorEliminationMovement =() =>{
  swal({
    title: "No se pudo eliminar :(",
    text: "Intentalo de nuevo",
    icon: "error",
    button: "Aceptar",
  });
}

  // function to delete a movement by its id
  const deleteBill = async () => {
    try {
      await axiosFunction(`users/${user.username}/bills/${dataBillModal.id}`, {}, 'DELETE');
      showSuccessfulEliminationMovement();

    } catch (error) {
      console.log(error);
      showErrorEliminationMovement();
    }
    callbackGetDataBills();
    handleCloseModal(); // the modal is closed after receiving the response in the asyncronous request
   
  }

  return (
    
<div className={isActiveModalSee ? 'is-active modal' : 'modal'}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title is-size-3 title-new-color"> <strong> Ver movimiento </strong></p>
      <button className="delete" aria-label="close" onClick={handleCloseModal}></button>
    </header>
    <section className="modal-card-body">
      <form>
      <p className="modal-card-title"> {dataBillModal.date_bill} <br/> </p>
      <p className="modal-card-title"> <strong>Descripción: </strong></p>
      <p className="modal-card-title"> {dataBillModal.observation} </p>

      <p className="modal-card-title"> <strong>Tipo de movimiento: </strong> </p>

      <div className="control is-size-4">
      <p className="modal-card-title"> {dataBillModal.type === '2' ? 'Egreso' : 'Ingreso'}  </p>
      </div>
      <p className="modal-card-title"> <strong> Valor: </strong>  </p>
      <p className="modal-card-title"> $ {dataBillModal.value}  </p>
      </form>
    </section>
    <footer className="modal-card-foot">
      <button className="button deleteMovement-btn" onClick={deleteBill}> Eliminar </button>
      <button className="button" onClick={handleCloseModal}> Cancelar </button>
    </footer>
  </div>
</div>




  
  )
}

export default SeeMovement