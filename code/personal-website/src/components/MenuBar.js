import React from 'react'
import {useState, useEffect} from 'react' 
import '../App.css'
import { Route, Link} from 'react-router-dom' 
import Submenu from './Submenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import 'font-awesome/css/font-awesome.min.css';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function MenuBar({active}) {
    
    const [showDropdown, setShowDropdown] = useState(false);

    function menuHamburgerFunction() { // this is like a switch
        const x = document.getElementById("myMenu");
        // const y = document.getElementById("mySubMenu")
        setShowDropdown(true)
        if (x.className === "menu") {
          x.className += " responsive";
        //   y.style.visibility = "visible"
        } else {
          x.className = "menu";
        }
    }



    // function onBlurFunction() {
    //     setShowDropdown(false)
    //     // const x = document.getElementById("mySubMenu")
    //     // x.style.visibility = "hidden"
    // }

    const globalClickListener = (nativeEvent) => {
        // console.log('global click')

        const x = document.getElementById("mySubmenu")
        const y = document.getElementById("hamburger")
        // ignore click event happened inside the dropdown menu
        if (x && x.contains(nativeEvent.target) || y.contains(nativeEvent.target)) return
        // else hide dropdown menu
        // console.log("set to flse")
        setShowDropdown(false)
    }

    useEffect(() => {
        document.addEventListener('click', globalClickListener)
        return () => {
            document.removeEventListener('click', globalClickListener)
        }
    })

        
    return (
    <div className="menu" id="myMenu">
        <ul>
            <li className={`${active === 0 ? "active" : ""}`}><Link to="/PersonalWebsite/">HOME</Link></li>
            <li className={`${active === 1 ? "active" : ""}`}><Link to="/PersonalWebsite/resume">RESUME</Link></li>
            <li className={`${active === 2 ? "active" : ""}`}><Link to="/PersonalWebsite/projects">PROJECTS</Link></li>
            <li className={`${active === 3 ? "active" : ""}`}><Link to="/PersonalWebsite/skills">SKILLS</Link></li>
            <li className={`${active === 4 ? "active" : ""}`}><Link to="/PersonalWebsite/contacts">CONTACTS</Link></li>
            <li className={`${active === 5 ? "active" : ""}`}>
                <a id="hamburger" className="menu-icon" tabIndex="0" onClick={menuHamburgerFunction}><FontAwesomeIcon icon={faBars}/>
                    <Submenu active={active} showDropdown={showDropdown}></Submenu>
                </a>
            </li>
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


    //     <li className={`${active === 5 ? "active" : ""}`}>
    //     <Link className="menu-icon" tabindex="0" onMouseDown={menuHamburgerFunction}><i className="fas fa-bars"></i>
    //         <ul class="submenu" id="mySubMenu">
    //             <li key= "/PersonalWebsite/resume" className={`${active === 1 ? "active" : ""}`}><Link to="/PersonalWebsite/resume">RESUME</Link></li>
    //             <li key="/PersonalWebsite/projects" className={`${active === 2 ? "active" : ""}`}><Link to="/PersonalWebsite/projects">PROJECTS</Link></li>
    //             <li key="/PersonalWebsite/skills" className={`${active === 3 ? "active" : ""}`}><Link to="/PersonalWebsite/skills">SKILLS</Link></li>
    //             <li key="/PersonalWebsite/contacts" className={`${active === 4 ? "active" : ""}`}><Link to="/PersonalWebsite/contacts">CONTACTS</Link></li>
    //         </ul>
    //     </Link>
    // </li>