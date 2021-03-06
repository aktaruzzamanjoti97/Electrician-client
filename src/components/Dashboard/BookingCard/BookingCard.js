import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OrderForm from '../OrderForm/OrderForm';

const BookingCard = ({booking, date}) => {

    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  };

  function closeModal(){
    setIsOpen(false);
  };

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
    
                    <p>{booking.totalSpace} SERVICE AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <OrderForm modalIsOpen={modalIsOpen} orderOn={booking.subject} date={date} closeModal={closeModal}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;