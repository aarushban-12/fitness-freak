import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./desc.css";

function Clothing() {
  return (
    <section className="smartwatch-section d-flex align-items-center justify-content-center py-5">
      <div className="container d-flex justify-content-center">
        <div className="smartwatch-card p-5 shadow-lg rounded">
          <h2 className="smartwatch-heading mb-4">Fitness Clothing</h2>
          <p className="smartwatch-description">
          Workout clothes are distinguished by such features as breathability, wicking moisture away, protection from external factors, comfort, quality and design
          </p>
        </div>
      </div>
    </section>
  );
}

export default Clothing;
