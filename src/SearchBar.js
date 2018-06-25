import React from 'react'
 
const SearchBar = props => {
  return(
    <div>
      <input className="searchBar" type="text" placeholder="search RM" onChange={props.searchFunc}/>
    </div>
  )
}
 
export default SearchBar