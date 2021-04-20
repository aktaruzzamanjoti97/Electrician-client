import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import OrderDataTable from '../OrderDataTable/OrderDataTable';

const AllOrders = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-coast-92115.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="container-fluid row" >
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <OrderDataTable services={services} />
            </div>
        </div>
    );
};

export default AllOrders;