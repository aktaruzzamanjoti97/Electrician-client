import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddService = () => {

  const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);

        fetch('https://sleepy-coast-92115.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

  return (
    <div className="container-fluid row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-9 p-4 pr-5">
        <h5 className="text-brand">Add a Service</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              {/* <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                />
              </div> */}
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Service Name</label>
                <input
                  onBlur={handleBlur}
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
                  onChange={handleFileChange}
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
