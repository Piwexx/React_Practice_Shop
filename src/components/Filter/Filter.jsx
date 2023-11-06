/* eslint-disable react/prop-types */
import {useId } from 'react'
import  './filter.css'
import { useFilters } from '../../hooks/useFilters'

export const Filter = () => {
  const {filters,setFilters} = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) =>{
    // Usar siempre una sola fuente de la verdad
    setFilters(prevState =>({
      ...prevState,
      minPrice:event.target.value 
    }))
  }

  const handleChangeCategory = (event) =>{
    setFilters(prevState =>({
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
          value={filters.minPrice}
          onChange={handleChangeMinPrice}>
        </input>
        <span>${filters.minPrice}</span>
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
