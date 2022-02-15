import './Styles/App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Strollers from './Components/Strollers';
import Diapers from './Components/Diapers';
import Formula from './Components/Formula';
import {Switch, Route} from "react-router-dom"
import ItemPage from './Components/ItemPage';

function App() {

   const [itemType, setItemType] = useState("")
   const [itemsList, setItemsList] = useState([])
   

   useEffect(() => {
       fetch(`http://localhost:4000/${itemType}`)
       .then(resp => resp.json())
       .then(data => {
         setItemsList(data)
         console.log(data)
       })
     },[itemType])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/strollers">
            <Strollers setItemType={setItemType} strollers={itemsList}/>
        </Route>
        <Route exact path="/diapers">
           <Diapers setItemType={setItemType} diapers={itemsList}/>
        </Route>
        <Route exact path="/formula">
           <Formula setItemType={setItemType} formulas={itemsList}/>
        </Route>
        {/* <Route>
          <ItemPage />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
