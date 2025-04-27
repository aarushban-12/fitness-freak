import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./desc.css";

function Smartwatch() {
  return (
    <section className="smartwatch-section d-flex align-items-center justify-content-center py-5">
      <div className="container d-flex justify-content-center">
        <div className="smartwatch-card p-5 shadow-lg rounded">
          <h2 className="smartwatch-heading mb-4">Smartwatch</h2>
          <p className="smartwatch-description">
            A wearable device that combines the functionality of a traditional wristwatch with the advanced capabilities of a smartphone,
            acting as a portable extension of your phone. It allows you to access information, receive notifications, track fitness,
            and even make calls, all from your wrist.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Smartwatch;
