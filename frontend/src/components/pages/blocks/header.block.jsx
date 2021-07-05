import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/core.css";
import "../../css/pages/header.page.css"

export default class appBar extends Component 
{
    render()
    {
        return (
        <div className="appBar">
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Recherche"></input>
                    <button type="submit" class="searchButton">
                        <i><FontAwesomeIcon icon={faSearch} /></i>
                    </button>
                </div>
            </div>
        </div>
        )
    }
}