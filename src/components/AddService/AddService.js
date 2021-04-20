import React from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddService = () => {
  return (
    <div className="container-fluid row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-9 p-4 pr-5">
        <h5 className="text-brand">Add a Service</h5>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <br />
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Upload a image</label>
                <input
                  type="file"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Picture"
                />
              </div>
              <br />
            </div>
            
          </div>
            <div className="text-end">
            <button type="submit" className="btn btn-brand">
                Submit
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
