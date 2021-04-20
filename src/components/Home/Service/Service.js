import React from 'react';
import multimeter from '../../images/multimeter.png';
import toolbox from '../../images/toolbox.png';
import mechanic from '../../images/mechanic.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {

    const serviceData = [
        {
            id:"1",
            name: 'Fan Servicing',
            img: multimeter
        },
        {
            id:"2",
            name: 'Fridge Servicing',
            img: toolbox
        },
        {
            id:"3",
            name: 'Light Servicing',
            img: mechanic
        }
    ]

    return (
        <section style={{height: '450px'}} className="services-container mt-5 mb-5">
            <div className="text-center">
                {/* <h5 style={{color: '#1CC7C1'}}>Our Services</h5> */}
                <h2>Services <span className="text-brand">We Provide</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 mt-2 pt-5 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;