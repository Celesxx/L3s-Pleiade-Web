import React, { Component } from "react";
import { Link} from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import * as dataRequest from "../../services/data.request";
import UpdatePop from "../popup/updateData.pop"
import CreatePop from "../popup/createData.pop"
import Graph from "../popup/graph.pop"
// import Header from './blocks/header.block';
import NavBar from './blocks/nav.block';

import "../css/pages/table.page.css";
import 'reactjs-popup/dist/index.css';


class tableData extends Component 
{
    
    constructor(props) {
        super(props);
        this.state = 
        {
            data: [],
            Norm: [],
            isLoading: true, 
            i: 0, 
            headers: {"Access-Control-Allow-Origin": "*"}
        };
      }
    
      componentDidMount() {
          
        
        this.setState({isLoading: true});
        
        // this.interval = setInterval(() => {
             dataRequest.getDatas().then((res) => 
             {
                // if(res && this.state.i == 0)
                // {
                    this.setState({data: res, i:1,isLoading: false})
        //         }else if(res && this.state.data != res)
        //         {
        //             this.setState({data: res, isLoading: false})
        //         }
            });
        // }, 500);
      }


    render()
    {
        const {data, isLoading} = this.state;

        

        const dataList = data.map(Data => 
        {
            console.log("Data")
            Data.accelero.forEach(element => { if(element == "norm") this.state.Norm.push(element)})
            console.log(this.state.Norm)
            return <tr key={Data.id_data}>
            <td style={{whiteSpace: 'nowrap'}}>{Data.id_data}</td>
            <td>{Data.filename}</td>
            <td>{Data.createdAt}</td>
            <td>{Data.activité}</td>
            <td>{Object.keys(Data.accelero).length}</td>
            <td>{Data.tag}</td>
            <td>
            <ButtonGroup>
                <UpdatePop id_data={Data.id_data} userId={Data.userId} montreId={Data.montreId} activité={Data.activité} accelero={Data.accelero.toString()} Tag={Data.Tag}></UpdatePop>
                <Graph accelero={Data.accelero}></Graph>
                <Button size="sm" color="danger" onClick={() => {dataRequest.deleteData(Data.id_data)}}>Delete</Button>
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
                                                <th>Nom</th>
                                                <th>Date de création</th>
                                                <th>Activité</th>
                                                <th>Nombre de donnée</th>
                                                <th>Tag</th>
                                                <th width="10%">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataList}
                                        </tbody>
                                    </Table>
                                </Container>
                            </tbody>
                        </table>
                    </div>

                    <div className="core-body-add">
                        <div className="core-body-add-button">
                            <CreatePop></CreatePop>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default tableData;
