import React, { Component } from "react";
import { Link} from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import * as userRequest from "../../services/user.request";
import Header from './blocks/header.block';
import NavBar from './blocks/nav.block';
import UpdatePopUser from '../popup/updateUser.pop'
import CreatePopUser from '../popup/createUser.pop'

import "../css/pages/table.page.css";
import 'reactjs-popup/dist/index.css';


class tableUser extends Component 
{
    
    constructor(props) {
        super(props);
        this.state = {customers: [], isLoading: true, headers: {"Access-Control-Allow-Origin": "*"}};
      }
    
      componentDidMount() 
      {
        this.setState({isLoading: true});
        // this.interval = setInterval(() => {
            userRequest.getUsers().then((res) => 
            {
                if(res)
                {
                    this.setState({customers: res, isLoading: false})
                }
            });
        // }, 500);
      }


    render()
    {
        const {customers, isLoading} = this.state;

        

        const customerList = customers.map(user => 
        {
            let administrateur;
            if(user.admin == true) administrateur = "true"
            else administrateur = "false"
            
            return <tr key={user.id}>
            <td style={{whiteSpace: 'nowrap'}}>{user.id}</td>
            <td style={{whiteSpace: 'nowrap'}}>{user.email}</td>
            <td>{user.password}</td>
            <td>{administrateur}</td>
            <td>
            <ButtonGroup>
                <UpdatePopUser user={user}></UpdatePopUser>
                <Button size="sm" color="danger" onClick={() => {userRequest.deleteUser(user.id)}}>Delete</Button>
            </ButtonGroup>
            </td>
            </tr>
        
        });

        if (isLoading) 
        {
            return (
                <header className="body">
                    {/* <Header></Header> */}
                    <NavBar></NavBar>
                    <p>Loading...</p>
                </header>
                
            )
        }
        return(
            <header className="body">

            {/* <Header></Header> */}
            <NavBar></NavBar>

                <div className="core-body">

                    <div className="core-body-head">
                        <ButtonGroup >
                            <Link to="/tableUser"><Button className="core-body-parts-head-button">Users</Button></Link>
                            <Link to="/tableData"> <Button className="core-body-parts-head-button">Donnée</Button></Link>
                            <Link to="/graph"> <Button className="core-body-parts-head-button">Graphique</Button></Link>
                        </ButtonGroup>                        
                    </div>

                    <div className="core-body-search">
                        <label id='tableLabel'>
                            <a id="tableLabelText">Affichage</a> 
                            <select id="core-body-parts-search-select">
                                <option value="10" selected="">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </label>

                        <div className="core-body-parts-search-table">
                            <input type="text" class="core-body-parts-search-table-input" placeholder="Recherche"></input>
                        </div>
                    </div>

                    <div className="core-body-parts">
                        <table className="core-body-table">
                            <tbody>
                                <Container fluid>
                                    <Table padding="0.5px"  className="mt-4">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                                <th>Admin</th>
                                                <th width="10%">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customerList}
                                        </tbody>
                                    </Table>
                                </Container>
                            </tbody>
                        </table>
                    </div>

                    <div className="core-body-add">
                        <div className="core-body-add-button">
                            <CreatePopUser></CreatePopUser>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default tableUser;
