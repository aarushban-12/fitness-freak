import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./desc.css";

function RunningShoes() {
  return (
    <section className="smartwatch-section d-flex align-items-center justify-content-center py-5">
      <div className="container d-flex justify-content-center">
        <div className="smartwatch-card p-5 shadow-lg rounded">
          <h2 className="smartwatch-heading mb-4">Running Shoes</h2>
          <p className="smartwatch-description">
          Running shoes are specialized footwear designed to support the unique impact 
            and motion of running, providing cushioning, support, and flexibility for a 
            comfortable and efficient running experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RunningShoes;
