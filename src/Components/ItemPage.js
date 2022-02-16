function ItemPage({item}){

    const {name, brand, price, description, image, youtube_link, id, reviews} = item

    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default ItemPage