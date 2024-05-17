import React, { useState } from 'react'
import NavBar from './components/navBar/NavBar'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Footer from './components/footer/Footer';
import LoginPopup from './components/loginPopup/LoginPopup';

export default function App() {
  const [loginPopup,setLoginPopup] = useState(false)
  return (
    <>
      {loginPopup?<LoginPopup setLoginPopup={setLoginPopup}/>:<></>}
      <div className='app'>
        <NavBar  setLoginPopup={setLoginPopup}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />


        </Routes>
      </div>
      <Footer />
    </>
  )
}
