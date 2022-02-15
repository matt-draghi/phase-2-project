function ListItem({diaper}){

    const {name, brand, price, description, image, reviews, youtube_link, id} = diaper

    return(
        <div className="ListItem">
            <img 
                src={image}
                alt={name}
            />
            <h3 className="name">{name}</h3>
        </div>
    )
}

export default ListItem