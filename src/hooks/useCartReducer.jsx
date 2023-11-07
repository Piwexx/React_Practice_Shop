import { useReducer } from "react";
import { reducer as cartReducer,cartInitialState,CARD_ACTIONS_TYPES } from "../reducer/cartReducer";

export const useCartReducer = () => {
  const [state,dispatch] = useReducer(cartReducer,cartInitialState)

   const addToCart = product => dispatch({
     type: CARD_ACTIONS_TYPES.ADD_TO_CART,
     payload: product
   })

   const clearCart = () => dispatch({
    type: CARD_ACTIONS_TYPES.CLEAR_CART
   })
   
   const removeFromCart = product => dispatch({
    type: CARD_ACTIONS_TYPES.REMOVE_FROM_CART,
    payload: product
   })
   
   return {state,addToCart,clearCart,removeFromCart}
}