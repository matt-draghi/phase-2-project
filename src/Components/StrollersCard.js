import React,{useState} from 'react'

function StrollersCard({stroller}) {

  const {name, brand, price, description, image, youtube_link, reviews} = stroller

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


  return (
    <div className = "stroller-box">
      <div className ="stroller-name">
        <p>{brand}</p>
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
      <div >
        <img src={image} alt={name} className = "stroller-image"/>
      </div>
      <div className = "stroller-description">
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
    </div>
  )
}

export default StrollersCard