import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './components/Signup/Signup';
import Destination from './components/Destination/Destination';

function App() {
  return (
    <div>
    
    <Router>
    <Switch>
    <Route exact path="/">
    <Header/>
    <Home/>
      </Route>
      <Route path="/home">
      <Header/>
      <Home/>
      </Route>
      <Route path="/signup">
      <Header/>
      <Signup/>
      </Route>
      <Route path="/destination/:vehicleType">
      <Header/>
      <Destination/>
      </Route>
      </Switch>

    </Router>
            
    </div>
  );
}

export default App;
