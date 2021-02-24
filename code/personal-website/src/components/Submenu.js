import React from 'react'
import {useState} from 'react' 
import '../App.css'
import { Route, Link} from 'react-router-dom' 
// import 'font-awesome/css/font-awesome.min.css';

function Submenu({showDropdown, active}) {
    
    if (showDropdown) {
        return (
                    <ul className="submenu" id="mySubmenu">
                        <li key= "/PersonalWebsite/resume" className={`${active === 1 ? "active" : ""}`}><Link to="/PersonalWebsite/resume">RESUME</Link></li>
                        <li key="/PersonalWebsite/projects" className={`${active === 2 ? "active" : ""}`}><Link to="/PersonalWebsite/projects">PROJECTS</Link></li>
                        <li key="/PersonalWebsite/skills" className={`${active === 3 ? "active" : ""}`}><Link to="/PersonalWebsite/skills">SKILLS</Link></li>
                        <li key="/PersonalWebsite/contacts" className={`${active === 4 ? "active" : ""}`}><Link to="/PersonalWebsite/contacts">CONTACTS</Link></li>
                    </ul>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}

export default Submenu