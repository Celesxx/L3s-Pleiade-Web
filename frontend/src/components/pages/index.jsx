import React from "react";
import "../css/core.css";
import "../css/input.css";
// import './login/login.js';
// import Header from './blocks/header.block';
import NavBar from './blocks/nav.block';
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// function index()
class index extends React.Component 
{
    render()
    {
        return(

            <header className="body">
            
                {/* <Header></Header> */}
                <NavBar></NavBar>
                
            </header>
        );
    }
}

export default index;
