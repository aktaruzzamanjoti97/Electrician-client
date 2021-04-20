import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5">
                <h3 className="text-success">Make Admin</h3>
                <div className="row">
                    <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Enter email to make Admin"/>
                    </div>
                    <div className="col-md-3 text-start">
                        <button className="btn btn-brand">Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MakeAdmin;