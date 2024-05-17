import React, { useContext } from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

export default function FoodItem({id,name,price,description,image}) {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src={image} alt="" className="food-item-image" />
            {!cartItems[id]
              ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add-icon" className="add" />
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove-icon" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="add-icon-green" />
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}
