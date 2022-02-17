import React from 'react'

function Filter({search, getSearch, getSortBy}) {

  function handleSearch (event){
    getSearch(event.target.value)
  }

  function handleSort (event){
    getSortBy(event.target.value)
  }

  return (
    <div className="filter-search-container">
      <div className="searchbar-container">
        <label>Search: </label>
        <input type="text" placeholder='Search' onChange ={handleSearch} value={search}/>  
      </div>
      <div className="filter-container">
      <label>Filter By: </label>
        <select onChange={handleSort}>
          {/* TODO: set third filter else if for placeholder (And use state) to sort by id (order in json file) */}
            <option value="">Select Option</option> 
            <option value="price">Price</option>
            <option value="name">Name</option>
        </select>
      </div>
    </div>
  )
}

export default Filter