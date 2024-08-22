import { useSelector } from 'react-redux';
import React from 'react';

import { CartCard } from './CartCard';

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartTotal = useSelector((state) => state.cartTotal);

  

  return (
    <div>
      <h1 id="head-cart">Your Cart</h1>
      <p id="total-price">Total:${cartTotal}</p>
      <div class="collections">
        {cart.map((item) => {
          return <CartCard key={item.id} {...item} />
})}
      </div>
      </div>
		
    
  );
};