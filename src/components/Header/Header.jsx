/* eslint-disable react/prop-types */
import { Filter } from "../Filter/Filter"

export const Header = ({changeFilters}) => {
  return (
    <>
     <h1>React Shop</h1>
     <Filter changeFilters={changeFilters}/>
    </>
  )
}
