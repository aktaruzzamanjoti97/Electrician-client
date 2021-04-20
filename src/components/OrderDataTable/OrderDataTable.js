import React from 'react';

const OrderDataTable = ({services}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>

                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  services.map((service, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
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

export default OrderDataTable;