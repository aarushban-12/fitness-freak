import React from "react";
import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Register from "./components/Register";
import RunningShoes from "./product-desc/RunningShoes";
import Smartwatch from "./product-desc/Smartwatch";
import WaterBottle from "./product-desc/WaterBottle";
import Dumbbells from "./product-desc/Dumbbells";
import Headphones from "./product-desc/Headphones";
import Kettlebells from "./product-desc/Kettlebells";
import Clothing from "./product-desc/Clothing";


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/running-shoes' element={<RunningShoes/>}/>
        <Route path='/smartwatch' element={<Smartwatch/>}/>
        <Route path='/waterbottle' element={<WaterBottle/>}/>
        <Route path='/dumbbells' element={<Dumbbells/>}/>
        <Route path='/headphones' element={<Headphones/>}/>
        <Route path='/kettlebells' element={<Kettlebells/>}/>
        <Route path='/clothing' element={<Clothing/>}/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;