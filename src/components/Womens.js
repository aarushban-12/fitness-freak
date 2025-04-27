import React, {useState} from "react";
import Navbar from "./Navbar";
import RunningShoes from "../product-desc/RunningShoes";
import { Link } from "react-router-dom";
import "./menu.css"; // Import CSS for styling

// Individual food items
const products = [
  {
    name: "Running Shoes",
    price: "$49.99",
    link: "https://www.famousfootwear.com/blob/product-images/20000/18/53/0/18530_pair_feed1000.jpg",
    seller: "NextGen Tech",
    desc: "/running-shoes"
  },
  {
    name: "Smartwatch",
    price: "$89.99",
    link: "https://m.media-amazon.com/images/I/81aSNKlJJLL.jpg",
    seller: "TechX Essentials",
    desc: "/smartwatch"
  },
  {
    name: "Fitness Clothing",
    price: "$34.99",
    link: "https://hips.hearstapps.com/hmg-prod/images/workout-clothes-main-67b7846c575ef.png?crop=0.663xw:0.995xh;0.337xw,0.00510xh&resize=640:*",
    seller: "GadgetGrid",
    desc: "/clothing"
  },
  {
    name: "Kettle Bells",
    price: "$29.99",
    link: "https://m.media-amazon.com/images/I/51JvkS8zZNL.jpg",
    seller: "GadgetGrid",
    desc: "/kettlebells"
  },
  {
    name: "Noise Cancelling Headphones",
    price: "$99.99",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95_GBLJXNxmeqY-6o0qJvOmlBCjc5OEl3ag&s",
    seller: "TechX Essentials",
    desc: "/headphones"
  }
];


function Womens() {
  

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Womens' Products</h2>

        {/* Individual Items Section */}
        <div className="row">
          {products.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <div className="filler">
                  <Link to={item.desc}>
                  <img className="img" alt="" src={item.link} />
                  </Link>
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-subtitle">{item.seller}</p>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

       

      </div>
    </div>
  );
}

export default Womens;
