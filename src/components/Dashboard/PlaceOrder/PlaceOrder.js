import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import BookOrder from '../BookOrder/BookOrder';
import PlaceOrderHeader from '../PlaceOrderHeader/PlaceOrderHeader';


const PlaceOrder = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar />
            <PlaceOrderHeader handleDateChange={handleDateChange}/>
            <BookOrder date={selectedDate}/>
            <Footer />
        </div>
    );
};

export default PlaceOrder;