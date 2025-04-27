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
    link: "https://cdn.shopify.com/s/files/1/0689/2119/6858/products/ZRC_ZRS_BLK_04_3Q-Front_0cca0941-6725-4d14-b40f-c7c8ada178f3.jpg?v=1675084802",
    seller: "NextGen Tech",
    desc: "/running-shoes"
  },
  {
    name: "Smartwatch",
    price: "$89.99",
    link: "https://m.media-amazon.com/images/I/61I22cL7v+L.jpg",
    seller: "TechX Essentials",
    desc: "/smartwatch"
  },
  {
    name: "Water Bottle",
    price: "$34.99",
    link: "https://www.camelbak.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-camelbak-master-catalog/default/dw02e02ad4/images/large/1650406001.jpg?sw=650&sh=650&sm=fit",
    seller: "GadgetGrid",
    desc: "/waterbottle"
  },
  {
    name: "Dumbbells",
    price: "$29.99",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxODzcD-Ps158gF-_XUwLlRqx--scXGzZgcw&s",
    seller: "GadgetGrid",
    desc: "/dumbbells"
  },
  {
    name: "Noise Cancelling Headphones",
    price: "$99.99",
    link: "https://i5.walmartimages.com/seo/Active-Noise-Cancelling-Headphones-Bluetooth-Wireless-Headphones-Ear-Bluetooth-Headphones-Clear-Calls-Deep-Bass-Comfortable-Fit-Multipoint-Connection_5a3857f3-5c46-4dbc-a10e-758dd452abdf.162bbd103318a5fdc964e88fa183dd90.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    seller: "TechX Essentials",
    desc: "/headphones"
  }
];


function Mens() {
  

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Mens' Products</h2>

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

export default Mens;
