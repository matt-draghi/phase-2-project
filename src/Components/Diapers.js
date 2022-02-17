import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import ItemCard from './ItemCard';

  // delete if cart is not working 
  import Basket from './Basket'; 
  // ^^^^^ delete if cart is not working 


function Diapers ({setItemType, diapers, setSelectedItem, setSelectedPath, itemType}){

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")

    setItemType("diapers")

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

   
    
    const filterDisplay = diapers               
        .filter((diaper) =>{
            return (
                diaper.name.toLowerCase().includes(search.toLowerCase()) || diaper.brand.toLowerCase().includes(search.toLowerCase()) 
            )
        })
        .sort((itemA, itemB) =>{
            if(sortBy === "price"){
                return itemB.price - itemA.price
            }else{
                return itemA.name.localeCompare(itemB.name)
            }
        })

        const displayItem = filterDisplay.map(diaper => {
            const uniqueKey = `${diaper.name}${diaper.id}`
            return (
                <ItemCard 
                        setSelectedItem={setSelectedItem}
                        setSelectedPath={setSelectedPath}
                        key={uniqueKey}    
                        item={diaper}
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

             {/* // delete if cart is not working  */}
             <div>
                <Basket 
                 cartItems={cartItems}
                 onAdd={onAdd}
                 onRemove={onRemove}
                />
            </div>
            {/* // ^^^^^ delete if cart is not working  */}
            <div>
            {displayItem}
            </div>
        </div>
    )
}

export default Diapers