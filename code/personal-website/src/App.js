import './App.css';
import Resume from './components/Resume'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom' 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/resume" component={Resume}></Route>
          <Route exact path="/contacts" component={Contacts}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
