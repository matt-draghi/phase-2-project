import React from 'react';
import {useEffect, useState} from "react"
import Filter from './Filter';
import ItemCard from './ItemCard';
import Basket from './Basket'; 

function Formula ({setItemType, formulas, itemType, setSelectedItem, setSelectedPath}){

  const [search, getSearch] = useState("")
  const [sortBy, getSortBy] = useState("")
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    setItemType("formulas")
  }, [])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } 
    else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } 
    else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const filterDisplay = formulas
    .filter((formula) =>{
      return (
        formula.name.toLowerCase().includes(search.toLowerCase()) || formula.brand.toLowerCase().includes(search.toLowerCase()) 
      )
    })
    .sort((itemA, itemB) =>{
      if(sortBy === "price"){
          return itemB.price - itemA.price
      }else if(sortBy === "name"){
          return itemA.name.localeCompare(itemB.name)
      }
      else if(sortBy === ""){
        return itemA.id - itemB.id
      }
  })


  const displayItem = filterDisplay.map(formula => {
    const uniqueKey = `${formula.name}${formula.id}`
      return (
        <ItemCard 
          setSelectedPath={setSelectedPath}
          setSelectedItem={setSelectedItem} 
          item={formula} 
          key={uniqueKey} 
          itemType={itemType}
          onAdd={onAdd}
        />        
      )
  })
  
  return (
    <div>
      <div>
        <Filter 
          search = {search}
          getSearch ={getSearch}
          getSortBy ={getSortBy}
        />
      </div>
      <div className="basket-container">
        <Basket 
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </div>
      <div className="item-list-card-container">
        {displayItem}
      </div>
    </div>
  )
}

export default Formula