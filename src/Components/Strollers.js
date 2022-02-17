import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import ItemCard from './ItemCard';

  // delete if cart is not working 
  import Basket from './Basket'; 
  // ^^^^^ delete if cart is not working 


function Strollers ({setItemType, strollers, itemType, setSelectedItem, setSelectedPath}){

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")


    useEffect(() => {
        setItemType("strollers")
    }, [])

    // delete if cart is not working 
    const [cartItems, setCartItems] = useState([]);
  
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    //   console.log(product)
    };
  
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };

    
    // ^^^^^ delete if cart is not working 
  

    const  filterDisplay = strollers
    .filter((stroller) =>{
        return (
          stroller.name.toLowerCase().includes(search.toLowerCase()) || stroller.brand.toLowerCase().includes(search.toLowerCase()) 
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

    const displayItem = filterDisplay.map(stroller => {
        const uniqueKey = `${stroller.name}${stroller.id}`
        return (
            <ItemCard 
                setSelectedPath={setSelectedPath}
                setSelectedItem={setSelectedItem}
                item={stroller} 
                key ={uniqueKey} 
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
                getSortBy ={getSortBy}/>
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

export default Strollers

