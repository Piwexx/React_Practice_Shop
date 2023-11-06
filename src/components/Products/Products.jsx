/* eslint-disable react/prop-types */
import './Products.css'
import {AddToCartIcon} from  '../Icon.jsx'
import {useCart} from  '../../hooks/useCart.jsx'

// eslint-disable-next-line react/prop-types
export const Products = ({products}) => {
  const {addToCart} = useCart()
  return (
    <main className='products'>
        <ul>
            {products.map(product =>(
                <li key={product.id}>
                    <img src={product.thumbnail} alt={product.title}></img> 
                    <div>
                        <strong>{product.title}</strong>- ${product.price}
                    </div> 
                    <div>
                        <button onClick={()=>addToCart(product)}>
                           <AddToCartIcon/>
                        </button>
                    </div>
                </li>
              ))}
        </ul>
    </main>
  )
}
