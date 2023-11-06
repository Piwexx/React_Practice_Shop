/* eslint-disable react/prop-types */
import { useState,useId } from 'react'
import  './filter.css'

export const Filter = ({changeFilters}) => {
  const [minPrice,setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) =>{
    // Dos fuentes de la verdad (MAL)
    setMinPrice(event.target.value)
    changeFilters(prevState =>({
      ...prevState,
      minPrice:event.target.value 
    }))
  }

  const handleChangeCategory = (event) =>{
    //Estamos pasando la funcion de actualizar estado
    //nativa de react a un componente hijo (MAL)
    changeFilters(prevState =>({
      ...prevState,
      category:event.target.value 
    }))
  }
  return (
    <>
     <section className="filters">

      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
          id={minPriceFilterId}
          type="range"
          min="0" 
          max="10000"
          onChange={handleChangeMinPrice}>
        </input>
        <span>${minPrice}</span>
      </div>

      <div>
       <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>

     </section>
    </>
  )
}
