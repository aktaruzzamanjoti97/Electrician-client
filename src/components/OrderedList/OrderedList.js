import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OrderByDate from '../OrderByDate/OrderByDate';
import { UserContext } from '../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const OrderedList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [services, setServices] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    useEffect(() => {
        fetch('http://localhost:5000/ordersByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [selectedDate])

    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-5 col-sm-12 col-12">
                <OrderByDate services={services}></OrderByDate>
            </div>
        </div>
    </section>
    );
};

export default OrderedList;