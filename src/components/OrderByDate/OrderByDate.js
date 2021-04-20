import React from 'react';
import OrderShortList from '../OrderShortList/OrderShortList';

const OrderByDate = ({services}) => {
    return (
        <div>
        <h2 className="text-brand text-center">Your Service</h2>
        {
            services.length ?
             <OrderShortList services={services} ></OrderShortList>
            :
            <div className="p-5">
                <h4 className="lead text-center">No Service for this Date</h4>
            </div>
        }
    </div>
    );
};

export default OrderByDate;