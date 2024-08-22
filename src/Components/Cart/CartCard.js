import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCartAction, increaseQuantityAction, decreaseQuantityAction } from '../Redux/Action';
import '../NewCollections/NewCollections.css'

export const CartCard = (props) => {
    const {id,image,name,new_price,quantity}= props
   
    const dispatch = useDispatch()
  
    const removeFromCart = () => {
      dispatch(removeFromCartAction(id))
  }
  
    const increaseQuantity = () => {
      dispatch(increaseQuantityAction(id))
    }
      const decreaseQuantity = () => {
      dispatch(decreaseQuantityAction(id))
  }
  
    
  
    return (
      
        
        <div id="cart-section">
              <button id='btn-remove' onClick={removeFromCart} >X</button>
              <img src={image} alt={name} />
              <p>{name}</p>
              <p>${new_price}</p>
              <div id='qty-section'>
                <button id='btn-increase-decrease' onClick={decreaseQuantity} disabled={quantity <=1}>-</button>
                <p id='quantity'>{quantity}</p>
                <button id='btn-increase-decrease' onClick={increaseQuantity} >+</button>
  
        
        </div>
        </div>
    
          
      
    );
  };