/* eslint-disable react/prop-types */
import './Products.css'
import {AddToCartIcon,RemoveFromCartIcon} from  '../Icon.jsx'
import {useCart} from  '../../hooks/useCart.jsx'

// eslint-disable-next-line react/prop-types
export const Products = ({products}) => {
  const {addToCart,removeFromCart,cart} = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
        <ul>
            {products.map(product =>{
              const isProductInCart = checkProductInCart(product)
              return (
                <li key={product.id}>
                    <img src={product.thumbnail} alt={product.title}></img> 
                    <div>
                        <strong>{product.title}</strong>- ${product.price}
                    </div> 
                    <div>
                        <button style={{backgroundColor: isProductInCart ?  'red' : '#09f'}} onClick={()=>{
                          isProductInCart
                            ? removeFromCart(product)
                            : addToCart(product)
                        }}
                        >
                          {
                           isProductInCart 
                            ? <RemoveFromCartIcon/>
                            : <AddToCartIcon/>
                          }
                        </button>
                    </div>
                </li>
                )
             })}
        </ul>
    </main>
  )
}
