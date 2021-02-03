import React from 'react'
import '../App.css'
import { Route, Link} from 'react-router-dom' 

function MenuBar({active}) {
    

    return (
    <div className="menu">
        <ul>
            <li className={`${active === 0 ? "active" : ""}`}><Link to="/">HOME</Link></li>
            <li className={`${active === 1 ? "active" : ""}`}><Link to="/resume">RESUME</Link></li>
            <li className={`${active === 2 ? "active" : ""}`}><Link to="/projects">PROJECTS</Link></li>
            <li className={`${active === 3 ? "active" : ""}`}><Link to="/contacts">CONTACTS</Link></li>
        </ul>
    </div>
    )
}

export default MenuBar

        {/* <Router>
            <ul>
                <li className={`${active === 0 ? "active" : ""}`}><Link to="/">HOME</Link></li>
                <li className={`${active === 1 ? "active" : ""}`}><Link to="/Resume">RESUME</Link></li>
                <li className={`${active === 2 ? "active" : ""}`}><Link to="/">PROJECTS</Link></li>
                <li className={`${active === 3 ? "active" : ""}`}><Link to="/">CONTACTS</Link></li>
            </ul>
            <Switch>
                <Route exact path="/"><App></App></Route>
                <Route path="/Resume"><Resume></Resume></Route>
            </Switch>
        </Router> */}