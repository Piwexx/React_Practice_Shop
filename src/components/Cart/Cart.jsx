import { useId } from 'react'
import {useCart} from  '../../hooks/useCart.jsx'
import {CartIcon,ClearCartIcon} from   '../Icon.jsx'
import  './cart.css'
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
            {cart.map(product =>(
                <li key={product.id}>
                    <img 
                    src={product.thumbnail}
                    alt={product.title}
                    />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <footer>
                        <small>
                            Qty:{product.quantity}
                        </small>
                        <button onClick={()=>{addToCart(product)}}>+</button>
                    </footer>
                </li>
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
