import './Styles/App.css';
import {Route, Switch} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Strollers from './Components/Strollers';
import Diapers from './Components/Diapers';
import Formula from './Components/Formula';
import {useEffect, useState} from "react"

function App() {

  const [itemCategories, setItemCategories] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/itemCategories`)
    .then(resp=>resp.json())
    .then(data => {
      setItemCategories(data)
      // console.log(data)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/">
            <Home itemCategories={itemCategories} />
        </Route>
        <Route exact path="/strollers">
            <Strollers itemCategories={itemCategories} />
        </Route>
        <Route exact path="/diapers">
           <Diapers itemCategories={itemCategories} />
        </Route>
        <Route exact path="/formula">
           <Formula itemCategories={itemCategories} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
