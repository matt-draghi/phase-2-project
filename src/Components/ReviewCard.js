function ReviewCard({review}){

    const {user, rating, comment} = review

    const star = "★"
    const noStar = "☆"

    let reviewStars;
    switch(rating){
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
            <p>User: {user}</p>
            <p>{reviewStars}</p>
        </div>
    )
}

export default ReviewCard