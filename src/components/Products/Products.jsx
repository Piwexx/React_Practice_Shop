/* eslint-disable react/prop-types */
import './Products.css'
import {AddToCartIcon} from  '../Icon.jsx'

// eslint-disable-next-line react/prop-types
export const Products = ({products}) => {
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
                        <button>
                           <AddToCartIcon/>
                        </button>
                    </div>
                </li>
              ))}
        </ul>
    </main>
  )
}
