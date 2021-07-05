import React, { Component } from "react";
import { Button } from 'reactstrap';
import Popup from 'reactjs-popup';
import * as userRequest from "../../services/user.request";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'reactjs-popup/dist/index.css';
import '../css/pages/popup.page.css'

export default class CreatePopUser extends Component 
{  

    constructor(props) {
        super(props);
        this.state = 
        {
            email: '',
            password : '',
            admin : false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) 
      {
          this.setState(
            {
                [event.target.name]: event.target.value
            });  
        }

    handleSubmit(event) 
    {
        
        alert("Nouvel utilisateur ajouté");
        event.preventDefault();
        userRequest.postUser(this.state);
    }

    render()
    {
        
        return(
            <Popup trigger={<Button><FontAwesomeIcon icon={faPlus}/></Button>} modal nested>
            {
               
                close => (
                    <div className="modal">
                        <button className="close" onClick={close}> &times; </button>

                        <div className="header"> Update </div>
                        <div className="content">
                            <form className="formUserUpdate" onSubmit={this.handleSubmit}>

                            <div>
                                    <label className="labelUserUpdate" for="fname">Email</label>
                                    <input className="inputUserUpdate" type="email" name="email" placeholder="email" onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <label className="labelUserUpdate" for="fname">Password</label>
                                    <input className="inputUserUpdate" type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <label className="labelUserUpdate" for="fname"> Administrateur </label>
                                    <select className="inputUserUpdate" name="admin" onChange={this.handleChange}>
                                        <option value="true">True</option>
                                        <option selected value="false">False</option>
                                    </select>
                                </div>

                                <div className="submitDivUserUpdate"><input className="submitUserUpdate" type="submit" /></div>
                            </form>
                        </div>
                    </div>
                )
            }
            </Popup>
        )
    }
}

    