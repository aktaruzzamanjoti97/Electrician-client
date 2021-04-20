import React from 'react';
import { Link } from 'react-router-dom';
import electrician from '../../images/electrician.jpg'

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 text-style">
                <h1>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nostrum sunt, adipisci et beatae maiores.</p>
                <Link to="/appointment" className="btn btn-brand text-uppercase">GET APPOINTMENT</Link>
            </div>
            <div className="col-md-6">
                <img src={electrician} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;