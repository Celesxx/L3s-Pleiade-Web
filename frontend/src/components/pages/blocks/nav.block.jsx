import React, { Component } from "react";
import { Link} from 'react-router-dom';
import { faUser ,faTachometerAlt, faTable, faSignOutAlt, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../img/l3sIcon.png"

import "../../css/core.css";
import "../../css/pages/navbar.page.css"

export default class menuBar extends Component 
{
    render()
    {
        return(
            <div className="menu">
                <img id="logo" src={logo} alt="Logo" />

                <ul className="menu-core">
                    <Link className="fontLink" to="/"><li><FontAwesomeIcon icon={faTachometerAlt} /></li></Link>
                    <Link className="fontLink" to="/"><li><FontAwesomeIcon icon={faUser} /></li></Link>
                    <Link className="fontLink" to="/tableData"><li><FontAwesomeIcon icon={faTable} /></li></Link>
                </ul>

                <div className="menu-exit">
                    <Link className="fontLink menu-exit-icon" to="/login" onClick={() => localStorage.clear()}><FontAwesomeIcon icon={faSignOutAlt} /></Link>
                </div>
            </div>
        )
    }
}