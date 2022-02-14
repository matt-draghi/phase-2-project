import React, {useState, useEffect} from 'react';
import ListItem from './ListItem';

function Diapers ({itemCategories}){

    const diapersArray = itemCategories[1]["diapers"]
    
    return (
        <div>
            {/* {console.log(diapersArray)} */}
            {diapersArray.map((diaper)=>{
                return(
                    <>
                        {console.log(diaper)}
                        <ListItem 
                            key={diaper.id}    
                            diaper={diaper}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default Diapers