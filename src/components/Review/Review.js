import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Review = () => {
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-primary mb-3">Review</h5>
                <form>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <input type="name" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <br/>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputPassword1">Name</label> */}
                        <input type="email" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <br/>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputPassword1">Upload a image</label> */}
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="description" />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Review;