import React from 'react';
import ListItemFormula from './ListItemFormula';
import {useEffect, useState} from "react"

function Formula (){


    const [formulas, setFormulas] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/formulas`)
        .then(resp => resp.json())
        .then(data => {
          setFormulas(data)
          console.log(data)
        })
      },[])

  
    // console.log(formulas)
    // formulas.map(item => console.log(item))

    return (
        <div>
            {formulas.map(item => {
                return(
                    <>
                        {/* {console.log(item)} */}
                        <ListItemFormula item={item} key={item.id} />
                   </>
                    )
                })}
            <p>Formula</p>
        </div>
    )
}

export default Formula