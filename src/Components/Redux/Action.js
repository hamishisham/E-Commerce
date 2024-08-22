export const addToCartAction = (id) => ({
  type: 'ADD_TO_CART',
  payload: id
});

export const removeFromCartAction = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: { id }
});

export const increaseQuantityAction = (id) => ({
  type: 'INCREASE_QUANTITY',
  payload: { id }
});

export const decreaseQuantityAction = (id) => ({
  type: 'DECREASE_QUANTITY',
  payload: { id }
});