import React from 'react';

import Navbar from './Navbar';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container aboutus-wrapper my-5">

        <h2 className="text-center fw-bold mb-5">Welcome to Fitness Freak</h2>

        {/* Who We Are */}
        <div className="about-section shadow-sm p-4 mb-4 bg-white rounded">
          <h3 className="mb-3"><i className="bi bi-shop-window me-2 text-primary"></i>Who We Are</h3>
          <p>
            <strong>Fitness Freak</strong> is a modern workout marketplace offering handpicked, top-quality products from trusted sellers. Whether you're shopping for weights, sportswear, lifestyle essentials, or equipment, our platform ensures a smooth and enjoyable experience.
          </p>
        </div>

        {/* Our Mission */}
        <div className="about-section shadow-sm p-4 mb-4 bg-light rounded">
          <h3 className="mb-3"><i className="bi bi-bullseye me-2 text-danger"></i>Our Mission</h3>
          <p>
            We're on a mission to make shopping smarter. That means competitive prices, honest listings, excellent support, and products we’re proud to deliver. We believe shopping should be simple, secure, and satisfying.
          </p>
        </div>

        {/* Our Story */}
        <div className="about-section shadow-sm p-4 mb-4 bg-white rounded">
          <h3 className="mb-3"><i className="bi bi-journal-text me-2 text-success"></i>Our Story</h3>
          <p>
            Founded in 2025, Fitness Freak began as a simple online store built by a team of students and fitness enthusiasts. Our goal was to redefine what it means to shop online — not just through great deals, but through trust, speed, and style.
          </p>
          <p>
            Today, Fitness Freak has evolved into a full-fledged marketplace serving thousands of happy customers nationwide. And we’re just getting started.
          </p>
        </div>

        {/* Why TradeHaven */}
        <div className="about-section shadow-sm p-4 mb-5 bg-light rounded">
          <h3 className="mb-3"><i className="bi bi-stars me-2 text-warning"></i>Why Fitness Freak?</h3>
          <ul className="list-unstyled ps-2">
            <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i> Curated, high-quality products</li>
            <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i> Fast shipping & easy returns</li>
            <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i> Safe & secure checkout</li>
            <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i> Responsive, human customer support</li>
            <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i> Exclusive deals and new arrivals weekly</li>
          </ul>
        </div>

        {/* CTA */}
      </div>
    </div>
  );
}

export default AboutUs;
