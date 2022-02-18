import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard.js"

function ItemPage({selectedItem,setSelectedItem}){
    
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState()
  const [name, setName] = useState("")
  const [reviewArray, setReviewArray] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    fetch(`http://localhost:4000${localStorage.getItem("path")}`)
      .then(resp => resp.json())
      .then(setItem => {
        setSelectedItem(setItem)
      })
  },[reviewArray])

  const handleAddReview = () =>{
    setShowForm(!showForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(rating)
    const newReview = {
      "user": (name !== "" ? name : "Unkown"),
      "rating": rating,
      "comment":comment
    }
    patchReview(newReview)
    setShowForm(!showForm)
    window.alert("Thank you for your review!")
    setReviewArray([newReview, ...selectedItem.reviews])
  }

  const radioSelect = (e) => setRating(e.target.value)

  const patchReview = (newReview) => {
      const newReviewArray = [newReview, ...selectedItem.reviews]
      fetch(`http://localhost:4000${localStorage.getItem("path")}`,{
        method:"PATCH",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviews:newReviewArray
        }),
      })
  }

  const reviewForm = 
    (
      <form onSubmit={(e)=>handleSubmit(e)} className="new-review-form">
        <div className ="enter-name-div">
          <label>Name:</label>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>
        <div className="radioButtons">
          <label>Rating:</label>
            <input
              type="radio"
              onChange={radioSelect}
              value={0}
              name="rating"
              id={0}
            />
          <label htmlFor={0}>0</label>
          <input
            type="radio"
            onChange={radioSelect}
            value={1}
            name="rating"
            id={1}               
          />
          <label htmlFor={1}>1</label>
          <input
            type="radio"
            onChange={radioSelect}
            value={2}
            name="rating"
            id={2}                
          />
          <label htmlFor={2}>2</label>
          <input
            type="radio"
            onChange={radioSelect}
            value={3}
            name="rating"
            id={3}               
          />
          <label htmlFor={3}>3</label>
          <input
            type="radio"
            onChange={radioSelect}
            value={4}
            name="rating"
            id={4}                
          />
          <label htmlFor={4}>4</label>
          <input
            type="radio"
            onChange={radioSelect}
            value={5}
            name="rating"
            id={5}                
          />
          <label htmlFor={5}>5</label>
        </div>
        <input 
          type="text" 
          name="reviewText"
          onChange={(e)=>setComment(e.target.value)} 
          value={comment}
          placeholder="Please leave any additional comments"
        />
        <input className="item-card-button" type="submit" value="Submit Review"/>
      </form>
    )

  //add reviews together, divide by length of array or last index of array plus one
  let newRatingsArray = []
  selectedItem?.reviews.map((review) => {
    newRatingsArray.push(parseInt(review.rating))
  })

  let arraySum = newRatingsArray.reduce((a,b) => {
    return a + b;
  }, 0)

  let averageRating = (arraySum/newRatingsArray.length).toFixed(2)
  
  return(
    <div className="content-container">
      <div className="item-info-container">
        <img src={selectedItem?.image} alt={selectedItem?.name}/>
        <h1>{selectedItem?.name}</h1> 
        <h2>${selectedItem?.price}</h2>
        <p>Average Rating: {averageRating} / 5</p>
        <p>{selectedItem?.description}</p>
      </div>
      <div className="review-container">
        <h2>Reviews</h2>
        <button className="item-card-button" onClick={handleAddReview}>
          {showForm ? "Cancel Review" : "Add Review"}
        </button>
        {showForm ? reviewForm : null}
        {selectedItem?.reviews.map((review)=>{
          return <ReviewCard key={review.user} review={review}/>
        })}
      </div>
    </div>
  )
}

export default ItemPage