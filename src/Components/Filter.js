import React from 'react'

function Filter({search, getSearch, getSortBy}) {

  function handleSearch (event){
    getSearch(event.target.value)
  }

  function handleSort (event){
    getSortBy(event.target.value)
  }

  return (
    <div>
      <div>
        <input type="text" placeholder='what do you want?' onChange ={handleSearch} value={search}/>  
      </div>
      <div>
        <select onChange={handleSort}>
            <option value="price">price</option>
            <option value="name">name</option>
        </select>
      </div>
    </div>
  )
}

export default Filter