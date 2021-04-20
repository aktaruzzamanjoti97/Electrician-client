import React from 'react';

const OrderShortList = ({services}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  services.map((service, index) => 
                        
                    <tr>
                        <td>{service.name}</td>
                        <td>{service.phone}</td>
                        <td>{service.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderShortList;