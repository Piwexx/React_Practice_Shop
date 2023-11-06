/* eslint-disable no-unused-vars */
import {useState } from 'react'
import {Products} from './components/Products/Products'
import {products as initialProducts} from  './mocks/products.json'
import { Header } from './components/Header/Header'
import {Footer} from  './components/Footer/Footer'
import {useFilters} from  './hooks/useFilters'
import { Cart } from './components/Cart/Cart'
import {CartProvider} from  './context/cart'

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}/>
      <Footer/>
    </CartProvider>
  )
  
}

export default App
