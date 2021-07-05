import React, { Component } from "react";
import { Button } from 'reactstrap';
import Popup from 'reactjs-popup';
import * as userRequest from "../../services/user.request";

import 'reactjs-popup/dist/index.css';
import '../css/pages/popup.page.css'

export default class UpdatePopUser extends Component 
{  

    constructor(props) {
        super(props);
        this.state = 
        {
            email: this.props.user.email,
            password : this.props.user.password,
            admin : this.props.user.admin
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) 
      {
          console.log(event.target)
          this.setState(
            {
                [event.target.name]: event.target.value
            });  
        }

    handleSubmit(event) 
    {
        
        alert("Update des données pris en compte");
        console.log(this.state)
        event.preventDefault();
        userRequest.updateUsers(this.props.user.id, this.state);
    }

    render()
    {
        
        return(
            <Popup trigger={<Button size="sm" color="danger">Update</Button>} modal nested>
            {
               
                close => (
                    <div className="modal">
                        <button className="close" onClick={close}> &times; </button>

                        <div className="header"> Update </div>
                        <div className="content">
                            <form className="formUserUpdate" onSubmit={this.handleSubmit}>
                                
                                <div>
                                    <label className="labelUserUpdate" for="fname">Email</label>
                                    <input className="inputUserUpdate" type="email" name="email" placeholder={this.props.user.email} onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <label className="labelUserUpdate" for="fname">Password</label>
                                    <input className="inputUserUpdate" type="password" name="password" placeholder={this.props.user.password} onChange={this.handleChange}/>
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

    