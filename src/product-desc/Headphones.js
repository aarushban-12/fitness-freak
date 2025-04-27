import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./desc.css";

function Headphones() {
  return (
    <section className="smartwatch-section d-flex align-items-center justify-content-center py-5">
      <div className="container d-flex justify-content-center">
        <div className="smartwatch-card p-5 shadow-lg rounded">
          <h2 className="smartwatch-heading mb-4">Headphones</h2>
          <p className="smartwatch-description">
          An electronic audio device that people wear over their ears. They let people hear sounds on a walkman, MP3 player, mobile phone or computer. Headphones come in many different sizes from big to small. They are also known as earphones, stereophones, headsets or even 'cans'.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Headphones;
