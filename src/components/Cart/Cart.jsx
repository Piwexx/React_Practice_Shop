import { useId } from 'react'
import {useCart} from  '../../hooks/useCart.jsx'
import {CartIcon,ClearCartIcon} from   '../Icon.jsx'
import  './cart.css'
import { CartItem } from '../CartItem/CartItem.jsx'

export const Cart = () => {
 const {cart,clearCart,addToCart} = useCart()
 const cartCheckboxId = useId()

 return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
         <CartIcon/>
        </label>
        <input style={{display:'none'}}id={cartCheckboxId} type="checkbox"></input>
        <aside className='cart'>
        <ul>
            {
             cart.map(product => (
                 <CartItem 
                    key={product.id} 
                    addToCart={()=>{addToCart(product)}}
                    {...product}
                 />
              ))
            }
        </ul>
            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>
        </aside>
    </>
  )
}
