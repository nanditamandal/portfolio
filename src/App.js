import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
       
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        
        </Switch>
    
    </Router>
      
    </div>
  );
}

export default App;
