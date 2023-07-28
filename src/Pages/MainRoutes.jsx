import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "../Components/ProductPage/product";
import { Category } from "../Components/ProductPage/Category";
import Checkout from "../Components/ProductPage/Checkout";
import BlankCart from "../Components/LoginAndNavbar/BlankCart";


import Landing from "./Landing";
import { Cart } from "../Components/cartPage/CartProduct";
import { Payment } from "../Components/cartPage/payment";
import Register from "./User/Register";
import Login from "./User/Login";


const MainRoutes = () => {
  const token = localStorage.getItem("token");
  const location = "bangalore";
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      
      <Route path={`/:${location}`} element={<Home />} />
      <Route path={`/:${location}/:param`} element={<Category />} />
      <Route path={`/:${location}/:param/:para`} element={<Product />} />
      <Route path={`/:${location}/:param/:para/:id`} element={<Checkout />} />
      <Route path={`/:${location}/register`} element={<Register />} />
      <Route path={`/:${location}/login`} element={<Login />} />
      <Route path="/blank" element={<BlankCart />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/payment" element={token ? <Payment /> : <Payment />} />
      
     
    </Routes>
  );
};

export default MainRoutes;
