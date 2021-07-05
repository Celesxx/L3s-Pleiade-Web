import React, { Component } from "react";
import NavBar from './blocks/nav.block';
import Select from 'react-select'
import {Line} from 'react-chartjs-2';
import * as dataRequest from "../../services/data.request";

import "../css/pages/graph.page.css";
import 'reactjs-popup/dist/index.css';


class Graph extends Component 
{
    
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            isLoading: true,
        };
    }


    render()
    {
        const {isLoading } = this.state;

        return(
        isLoading ? (  
                <header className="body">
                    {/* <Header></Header> */}
                    <NavBar></NavBar>
                    <p>Loading...</p>
                </header>
                
            ):(
            <header className="body">

                <NavBar></NavBar>

                <div className="graph-core-body">
                    
                </div>
            </header>
        )
        )
    }
}

export default Graph;
