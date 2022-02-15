import './Styles/App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Strollers from './Components/Strollers';
import Diapers from './Components/Diapers';
import Formula from './Components/Formula';


function App() {

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
            <Strollers  />
        </Route>
        <Route exact path="/diapers">
           <Diapers />
        </Route>
        <Route exact path="/formula">
           <Formula />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
