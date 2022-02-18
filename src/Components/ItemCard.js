import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function ItemCard({item, itemType, setSelectedItem, setSelectedPath, onAdd}) {

  const {name, brand, price, description, image, youtube_link, id} = item
  const [showDetail, setShowDetail]=useState(false)
  const path= `/${itemType}/${id}`
  
  function handleDetail(){
    setShowDetail((showDetail)=>!showDetail)
  }

  function selectItem(){
    localStorage.setItem("path", path)
    setSelectedPath(path)
    setSelectedItem(item)
  }

  return (
    <div className = "item-box">
      <div >
        <img src={image} alt={name} className = "item-image"/>
      </div>
      <div className ="item-name">
       
        <Link onClick={selectItem} to={path} className="item-page-navigation">{name}</Link>
        <p>by: {brand}</p>
        <p>$ {price}</p>
      </div>
      <div className = "item-description">
        <button onClick={handleDetail} className="item-card-button">{showDetail ? "Hide Details" : "Show Details"}</button>
        <p>{showDetail ? description : null}</p>
      </div>
      <div className="youtubeLink">
        <a  href={youtube_link} target="_blank">Watch the Video!</a>
      </div>
      <div>
        <button className="add-to-cart-button" onClick={()=>onAdd(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemCard