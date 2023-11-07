/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext} from "react";
import {useCartReducer} from  '../hooks/useCartReducer'
//1. crear contexto
export const CartContext = createContext()

//2.crear provider
export function CartProvider({ children }){
  const {state,addToCart,clearCart,removeFromCart}= useCartReducer()

   return (
    <CartContext.Provider value={{
        cart:state,
        addToCart,
        clearCart,
        removeFromCart
    }}>
     {children}    
    </CartContext.Provider>

   )
}