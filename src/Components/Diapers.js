import React, {useState, useEffect} from 'react';
import ListItem from './ListItem';

function Diapers (){
    const [diapers, setDiapers] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:4000/diapers`)
        .then(resp=>resp.json())
        .then(data => {
          setDiapers(data)
        })
      },[])
    
    return (
        <div>
            {console.log(diapers)}
            {diapers.map((diaper)=>{
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