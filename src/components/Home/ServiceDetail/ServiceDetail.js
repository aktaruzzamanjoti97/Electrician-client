// import { Button } from 'bootstrap';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetail = ({service}) => {

    return (
        <div className="col-md-4 text-center py-3">
            <img style={{height: '50px'}} src={service.img} alt=""/>
            <h5 style={{fontWeight: 'bold'}} className="my-3 mb-3 text-brand text-uppercase">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, velit.</p>
            <div className="text-center">
                 <Button as={Link} to={`/order/${service.id}`} className="btn btn-brand">Book Now</Button>
            </div>
        </div>
    );
};

export default ServiceDetail;