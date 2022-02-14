import React from 'react';
import ListItemFormula from './ListItemFormula';

function Formula ({itemCategories}){


   const formulas = itemCategories[2]["formulas"]
    // console.log(formulas)
    // formulas.map(item => console.log(item))

    return (
        <div>
            {formulas.map(item => {
                return(
                    <>
                        {/* {console.log(item)} */}
                        <ListItemFormula item={item} />
                   </>
                    )
                })}
            <p>Formula</p>
        </div>
    )
}

export default Formula