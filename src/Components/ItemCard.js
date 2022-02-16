import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function ItemCard({item, itemType, setSelectedItem, setSelectedPath}) {

  const {name, brand, price, description, image, youtube_link, id, reviews} = item

  const [showDetail, setShowDetail]=useState(false)
  const [reviewInput, setReviewInput] = useState("")
  
  

  function handleDetail(){
    setShowDetail((showDetail)=>!showDetail)
  }

  function handleReviewInput (event){
    setReviewInput(event.target.value)

  }

  function handleSubmit(event){
    event.preventDefault();
   
      }

  function selectItem(e){
    localStorage.setItem("path", path)
    setSelectedPath(path)
    setSelectedItem(item)
  }

  const path= `/${itemType}/${id}`

  return (
    <div className = "item-box">
      <div >
        <img src={image} alt={name} className = "item-image"/>
      </div>
      <div className ="item-name">
        <p>{brand}</p>
        {/* Want the below to navigate to that specific item's page */}
        <Link onClick={selectItem} to={path} className="item-page-navigation">{name}</Link>
        <p>$ {price}</p>
      </div>
      
      <div className = "item-description">
        <button onClick={handleDetail} className="item-card-button">{showDetail ? "Hide Details" : "Show Details"}</button>
        <p>{showDetail ? description : null}</p>
      </div>
    
        <a href={youtube_link} >Watch the Video!</a>
     
      <div>
        <form onSubmit ={handleSubmit}>
          <label>Reviews </label>
          <input type="text" onChange={handleReviewInput} value={reviewInput}/>
          <button className="submit-button">submit</button>
     
     
        </form>
      </div>
    </div>
  )
}

export default ItemCard