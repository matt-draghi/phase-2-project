import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

//delete onAdd Props if it is not working 

function ItemCard({item, itemType , onAdd, displayItem}) {

  //delete onAdd Props if it is not working 

  const {name, brand, price, description, image, youtube_link, id, reviews} = item

  const [showDetail, setShowDetail]=useState(false)
  const [reviewInput, setReviewInput] = useState("")
  
  console.log(item)

  

  function handleDetail(){
    setShowDetail((showDetail)=>!showDetail)
  }

  function handleReviewInput (event){
    setReviewInput(event.target.value)

  }

  function handleSubmit(event){
    event.preventDefault();
   
      }

  const path= `/${itemType}/${id}`

  return (
    <div className = "item-box">
      <div className ="item-name">
        <NavLink to={path}>{name}</NavLink>
        <p>{brand}</p>
        {/* Want the below to navigate to that specific item's page */}
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
      <div >
        <img src={image} alt={name} className = "item-image"/>
      </div>
      <div className = "item-description">
        <button onClick={handleDetail}>{showDetail ? "Hide Detail" : "Show Detail"}</button>
        <p>{showDetail ? description : null}</p>
      </div>
    
        <a href={youtube_link}>Youtube Link</a>
     
      <div>
        <form onSubmit ={handleSubmit}>
          <label>Reviews</label>
          <input type="text" onChange={handleReviewInput} value={reviewInput}/>
          <button>submit</button>
        </form>
      </div>

      {/* // delete if cart is not working  */}
      <div>
        <button onClick={()=>onAdd(displayItem)}>Add to Cart</button>
      </div>
      {/* // delete if cart is not working  */}

    </div>
  )
}

export default ItemCard