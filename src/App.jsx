/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import {Products} from './components/Products/Products'
import {products as initialProducts} from  './mocks/products.json'
import { Header } from './components/Header/Header'
import {Footer} from  './components/Footer/Footer'
import {useFilters} from  './hooks/useFilters'

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={filteredProducts}/>
      <Footer/>
    </>
  )
  
}

export default App
