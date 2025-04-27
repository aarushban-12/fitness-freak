import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./desc.css";

function Dumbbells() {
  return (
    <section className="smartwatch-section d-flex align-items-center justify-content-center py-5">
      <div className="container d-flex justify-content-center">
        <div className="smartwatch-card p-5 shadow-lg rounded">
          <h2 className="smartwatch-heading mb-4">Dumbbells</h2>
          <p className="smartwatch-description">
          A short bar with weights on either side which people use for physical exercise to strengthen their arm and shoulder muscles
          </p>
        </div>
      </div>
    </section>
  );
}

export default Dumbbells;
