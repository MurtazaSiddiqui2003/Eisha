import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import Collection from '../pages/collection/collection';
import Products from '../pages/products/products'
import Product from '../pages/product/product';
import Orders from '../pages/orders/orders';
import PlaceOrder from '../pages/place-order/place-order';
import Cart from '../pages/cart/cart';
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';


const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/collection' element={<Collection />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/orders' element={<Orders />}/>
            <Route path='/place-order' element={<PlaceOrder />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
        </Routes>
    )
}

export default RoutesComponent