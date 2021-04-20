import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const OrderForm = ({modalIsOpen, closeModal, orderOn, date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
      data.service = orderOn;
      data.date = date;
      data.created = new Date();
      
      fetch('http://localhost:5000/takeOrders', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(success => {
          if(success){
              closeModal();
              alert('Order Taken successfully.');
          }
      })   
  }


    return (
        <div>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className="text-center text-brand">{orderOn}</h2>
          <p className="text-secondary text-center"><small>On {date.toDateString()}</small></p>
          <div>
          <h3 className="text-warning">Pay First</h3>
                <ProcessPayment />
          </div>

          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="form-control"/>
                {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            
            <div className="form-group">
                <input type="text" {...register("phone", { required: true })} placeholder="Your Phone" className="form-control"/>
                {errors.phone && <span className="text-danger">This field is required</span>}
            </div>
           
            <div className="form-group">
                <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="form-control"/>
                {errors.email && <span className="text-danger">This field is required</span>}
            </div>
            
            <div className="form-group">
                <input type="text" {...register("address", { required: true })} placeholder="Your Address" className="form-control"/>
                {errors.address && <span className="text-danger">This field is required</span>}
            </div>
            
            
            <div className="text-end">
               <button type="submit" className="btn btn-brand">Submit</button>
            </div>
        </form>
        </Modal>
        </div>
    );
};

export default OrderForm;