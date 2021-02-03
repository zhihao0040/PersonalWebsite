import './App.css';
import Resume from './components/Resume'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom' 
import {useState} from 'react' 

function App() {
  const [resumeVersion, setResumeVersion] = useState(0); // let 0 be html version and 1 be pdf

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route exact path="/resume"><Resume resumeVersion = {resumeVersion} setResumeVersion = {setResumeVersion}></Resume></Route>
          <Route exact path="/contacts"><Contacts></Contacts></Route>
          <Route exact path="/skills"><Skills></Skills></Route>
          <Route exact path="/projects"><Projects></Projects></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
