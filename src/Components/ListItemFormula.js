import React from 'react';

function ListItemFormula({item}){

    

    const {name, brand, price, description, image, reviews, youtube_link, id} = item

    return(
        <div className="ListItem">
            <img 
                src={image}
                alt={name}
            />
            <h3 className="name">{name}</h3>
            <h3>{price}</h3>
        </div>
    )
}

export default ListItemFormula