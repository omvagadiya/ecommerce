import React from "react";
import Product from "./components/product/Product";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Fashion from "./components/category/Fashion";
import Shoes from "./components/category/Shoes";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Electronic from "./components/category/Electronic";
import Cart from "./components/cart/Cart";
import AddProduct from "./components/addproduct/AddProduct";

function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/Electronic" element={<Electronic/>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/AddProduct" element={<AddProduct />} />
        </Routes>
    </BrowserRouter>


    </>
  )
}

export default App;