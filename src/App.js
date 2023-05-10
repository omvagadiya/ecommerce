import React from "react";
import Product from "./components/product/Product";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Women from "./components/category/Women";
import Men from "./components/category/Men";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Electronic from "./components/category/Electronic";
import Jewellery from "./components/category/Jewellary";
import Cart from "./components/Purchase/Cart";
import About from "./components/product/About";
import Contact from "./components/product/Contact";
import CheckOut from "./components/Purchase/CheckOut";
import Login from "./components/cart/Login";
import Register from "./components/cart/Register";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Show from "./components/showproduct/Show";


function App() {
  return (
    <>

      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/product" element={<ProtectedRoute><Product /> </ProtectedRoute>} />
            <Route path="/Women" element={<ProtectedRoute><Women /> </ProtectedRoute>} />
            <Route path="/Men" element={<ProtectedRoute><Men /> </ProtectedRoute>} />
            <Route path="/Electronic" element={<ProtectedRoute><Electronic /> </ProtectedRoute>} />
            <Route path="/Jewellary" element={<ProtectedRoute><Jewellery /> </ProtectedRoute>} />
            <Route path="/Cart" element={<ProtectedRoute><Cart /> </ProtectedRoute>} />
            <Route path="/About" element={<ProtectedRoute><About /> </ProtectedRoute>} />
            <Route path="/Contact" element={<ProtectedRoute><Contact /> </ProtectedRoute>} />
            <Route path="/CheckOut" element={<ProtectedRoute><CheckOut /> </ProtectedRoute>} />
            <Route path="/Show" element={<ProtectedRoute><Show /></ProtectedRoute>} />
            <Route path="/Login" element={<Login /> }/>
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>


    </>
  )
}

export default App;