import data from '../Assets/all_product';

const initialState = {
    cart: [],
    cartTotal: 0,
    products: data,
   

} 

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
        case 'ADD_TO_CART': {
            let newCart = [...state.cart]
            const productIndex = newCart.findIndex(product => product.id === payload.id)
            if (productIndex <= -1) {
                newCart = newCart.concat({ ...payload, quantity: 1 })
            } else {
                newCart = newCart.map(product => {
                    if (product.id === payload.id) {
                        return { ...product, quantity: product.quantity + 1 }
                    }
                    return product;
                });
            }
            return {
                ...state,
                cart: newCart,
                cartTotal: state.cartTotal + payload.new_price
            }
        }
        /////////////////////////////////////
        case 'REMOVE_FROM_CART': {
            let newCart = [...state.cart]
            newCart = newCart.filter(product => product.id !== payload.id) 
            let newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0)
            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            }
       }

        //////////////////////////////////////
            case 'INCREASE_QUANTITY': {
            const newCart = [...state.cart].map(product => {
                if (product.id === payload.id) {
                  return { ...product, quantity: product.quantity + 1 }  
                }
                return product
            })
           let newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0)
            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            }
       }  
            
        ///////////////////////////////////////////
                    case 'DECREASE_QUANTITY': {
            const newCart = [...state.cart].map(product => {
                if (product.id === payload.id) {
                  return { ...product, quantity: product.quantity - 1 }  
                }
                return product
            })
           let newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0)
            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            }
       }  
             
      
        default:
            return state
    }

};
    


export default reducer;