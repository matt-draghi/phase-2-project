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
   const [selectedItem, setSelectedItem] = useState()
   const [selectedPath, setSelectedPath] = useState()
   
   useEffect(() => {
       fetch(`http://localhost:4000/${itemType}`)
       .then(resp => resp.json())
       .then(data => {
         setItemsList(data)
       })
    },[itemType])


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="content-body">
      <Switch>
        <Route exact path="/">
            <Home setItemType={setItemType} featuredItems={itemsList}/>
        </Route>
        <Route exact path="/strollers">
            <Strollers setSelectedPath={setSelectedPath} setSelectedItem={setSelectedItem} setItemType={setItemType} strollers={itemsList} itemType={itemType}/>
        </Route>
        <Route exact path="/diapers">
           <Diapers setSelectedPath={setSelectedPath} setSelectedItem={setSelectedItem} setItemType={setItemType} diapers={itemsList} itemType={itemType}/>
        </Route>
        <Route exact path="/formulas">
           <Formula setSelectedPath={setSelectedPath} setSelectedItem={setSelectedItem} setItemType={setItemType} formulas={itemsList} itemType={itemType}/>
        </Route>
        <Route path={selectedPath}>
          <ItemPage selectedPath={selectedPath} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
