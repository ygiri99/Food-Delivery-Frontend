import React, { useContext } from 'react'
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder() {

  const { getTotalCartAmount,setCartItems,cartItems } = useContext(StoreContext);
  const Navigate = useNavigate();

  const Payment = ()=> {
    alert('Payment done'); 
    setCartItems("");
  }
  cartItems?'':Navigate('/'); 

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Street' />
        <div className="multi-field">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()?2:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <strong>Total</strong>
              <strong>${getTotalCartAmount() ? getTotalCartAmount()+2:0}</strong>
            </div>
          </div>
        </div>
        <button onClick={Payment}>PROCEED TO PAYMENT</button>
      </div>
    </div>
  )
}
