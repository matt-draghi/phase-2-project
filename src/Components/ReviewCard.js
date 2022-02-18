function ReviewCard({review}){

  const {user, rating, comment} = review
  const star = "★"
  const noStar = "☆"

  let reviewStars;
  switch(parseInt(rating)){
    case 5:
      reviewStars = (`${star}${star}${star}${star}${star}`)
      break;
    case 4:
      reviewStars = (`${star}${star}${star}${star}${noStar}`)
      break;
    case 3:
      reviewStars = (`${star}${star}${star}${noStar}${noStar}`)
      break;
    case 2:
      reviewStars = (`${star}${star}${noStar}${noStar}${noStar}`)
      break;
    case 1:
      reviewStars = (`${star}${noStar}${noStar}${noStar}${noStar}`)
      break;
    default:
      reviewStars = (`${noStar}${noStar}${noStar}${noStar}${noStar}`)
      break
  }

  return(
    <div className="review-card">
      <div className="review-card-header">
        <span style={{float:"left"}}>User: {user}</span>
        <span style={{float:"right", color:"gold"}}>{reviewStars}</span>
      </div>
      <div>
        <p>{comment}</p>
      </div>  
    </div>
  )
}

export default ReviewCard