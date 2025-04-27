import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
          <Navbar />
          <div className="homepage-container">
          {/* Hero Section */}
          <section className="hero-section text-center">
            <div className="container">
              <h1 className="display-3 hero-title mt-4">Welcome to Fitness Freak</h1>
              <p className="lead hero-subtitle">Your one-stop shop for quality products at unbeatable prices.</p>
              <div className="cta-buttons mt-4">
              </div>
            </div>
          </section>
    
          {/* Featured Product */}
          <section className="container my-5">
            <h2 className="text-center mb-4">Featured Product</h2>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card shadow-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7gk6Rg1c1hz2oyhxT-aDa0_qlOcihvAkHg&s"
                    className="card-img-top"
                    alt="Featured Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Adjustable Dumbbells Set</h5>
                    <p className="card-text">
                      Maximize your workouts with adjustable dumbbells!
                    </p>
                    <Link to="/" className="btn btn-outline-primary">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* About Us */}
          <section className="about-us py-5 bg-light">
            <div className="container text-center">
              <h2 className="mb-4">About Fitness Freak</h2>
              <p className="lead">
                At Fitness Freak, we make exercising simple. Whether you're looking for weights, sportswear, nutricious supplements, or accessories—we’ve got it all.
              </p>
              <p>
                We’re committed to providing high-quality products, fast shipping, and exceptional customer support.
                Trusted by thousands of customers across the country.
              </p>
            </div>
          </section>
    
          {/* Testimonials */}
          <section className="testimonials py-5">
            <div className="container">
              <h2 className="text-center mb-4">What Our Customers Say</h2>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        “Fast delivery and exactly what I needed. Definitely shopping here again!”
                      </p>
                      <footer className="blockquote-footer">Samantha D.</footer>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        “Great deals and super easy to navigate. A+ shopping experience.”
                      </p>
                      <footer className="blockquote-footer">Jared M.</footer>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow testimonial-card">
                    <div className="card-body">
                      <p className="card-text">
                        “I love the product quality and packaging. It feels premium without the premium price.”
                      </p>
                      <footer className="blockquote-footer">Emily S.</footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="footer bg-dark text-white text-center py-4">
            &copy; {new Date().getFullYear()} Fitness Freak. All Rights Reserved.
          </footer>
        </div>
        </div>
      );
}

export default Home;