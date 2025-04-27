import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./desc.css";

function WaterBottle() {
  return (
    <section className="smartwatch-section d-flex align-items-center justify-content-center py-5">
      <div className="container d-flex justify-content-center">
        <div className="smartwatch-card p-5 shadow-lg rounded">
          <h2 className="smartwatch-heading mb-4">Water Bottle</h2>
          <p className="smartwatch-description">
          A container that is used to hold liquids, mainly water, for the purpose of transporting a drink while travelling or while otherwise away from a supply of potable water
          </p>
        </div>
      </div>
    </section>
  );
}

export default WaterBottle;
