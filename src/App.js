import React from "react";
import Product from "./components/product/Product";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Women from "./components/category/Women";
import  Men from "./components/category/Men";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Electronic from "./components/category/Electronic";
import Jewellery from "./components/category/Jewellary";
import Cart from "./components/Purchase/Cart";
import About from "./components/product/About";
import Contact from "./components/product/Contact";
import CheckOut from "./components/Purchase/CheckOut";



function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Electronic" element={<Electronic />} />
          <Route path="/Jewellary" element={<Jewellery />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;