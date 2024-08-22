import React from 'react'
import './Items.css'
import { useDispatch } from 'react-redux'
import {addToCartAction} from '../Redux/Action'

export const Items = (props) => {
  
  const dispatch = useDispatch()
  const addToCart = () => {
		dispatch(addToCartAction(props))
	}
  
	
	
  return (
      <div className='item'>
       
          <img src={props.image} alt='' />
          <p>{props.name}</p>
          <div className="item-prices">
              <div className="item-price-new">
                  ${props.new_price}
              </div>
               <div className="item-price-old">
                  ${props.old_price}
              </div>
          </div>
          <button id="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
         
    </div>
  )
}
