import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard.js"

function ItemPage({selectedItem,setSelectedItem}){
    
    useEffect(()=>{
        fetch(`http://localhost:4000${localStorage.getItem("path")}`)
        .then(resp => resp.json())
        .then(setItem => {
            setSelectedItem(setItem)
        })
    },[])

    const [showForm, setShowForm] = useState(false)

    const handleAddReview = () =>{
        setShowForm(!showForm)
    }

    const [comment, setComment] = useState("")

    const reviewForm = 
        (
            <form className="new-review-form">
                
                <div className="radioButtons">
                <label>Rating:</label>
                <input
                    type="radio"
                    value={0}
                    id={0}
                />
                <label for={0}>0</label>
                <input
                    type="radio"
                    value={1}
                    id={1}               
                />
                <label for={1}>1</label>
                <input
                    type="radio"
                    value={2}
                    id={2}                
                />
                <label for={2}>2</label>
                <input
                    type="radio"
                    value={3}
                    id={3}               
                />
                <label for={3}>3</label>
                <input
                    type="radio"
                    value={4}
                    id={4}                
                />
                <label for={4}>4</label>
                <input
                    type="radio"
                    value={5}
                    id={5}                
                />
                <label for={5}>5</label>
                </div>
                <input 
                    type="text" 
                    name="reviewText"
                    onChange={(e)=>setComment(e.target.value)} 
                    value={comment}
                    placeholder="Please leave any additional comments"
                />
                <input type="submit"/>
            </form>
        )
    

    return(
        <div className="content-container">
            <div className="item-info-container">
                <img src={selectedItem?.image} alt={selectedItem?.name}/>
                <h1>{selectedItem?.name}</h1> <h2>${selectedItem?.price}</h2>
                <p>{selectedItem?.description}</p>
            </div>
            <div className="review-container">
                <h2>Reviews</h2>
                <button onClick={handleAddReview}>{showForm ? "Cancel Review" : "Add Review"}</button>
                {showForm ? reviewForm : null}
                {selectedItem?.reviews.map((review)=>{
                    return <ReviewCard key={review.user} review={review}/>
                })}
            </div>
        </div>
    )
}

export default ItemPage