import React from "react";
import advertisement from "../../images/advertisement.jpg";

const Advertisement = () => {
  return (
    <section className="features-service pb-0 pd-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-7 mb-4 m-md-0">
            <img className="img-fluid" src={advertisement} alt="" />
          </div>

          <div className="col-md-5 align-self-center">
            <h1>We Have Happy Customers</h1>
            <p className="text-secondary my-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id labore
              deleniti, rerum, tempore et ullam ipsa quisquam earum iusto
              quaerat nesciunt iste dolore nobis ducimus inventore atque fuga,
              deserunt qui.
            </p>
            <button
              style={{
                backgroundColor: "#12D0DC",
                color: "white",
                fontWeight: "700",
              }}
              class="btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
