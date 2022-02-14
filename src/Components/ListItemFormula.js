import React from 'react';

function ListItemFormula({item}){

    const {name, image} = item

    return(
        <div>
            <img 
                src={image}
                alt={name}
            />
            <h3>{name}</h3>
        </div>
    )
}

export default ListItemFormula