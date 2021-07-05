import React, { Component } from "react";
import { Button } from 'reactstrap';
import Popup from 'reactjs-popup';
import * as userRequest from "../../services/user.request";

import 'reactjs-popup/dist/index.css';
import '../css/pages/popup.page.css'

export default class UpdatePopUser extends Component 
{  

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            filename: [],
            data:[],
            fields: 
            [
                { value: 'timestamp', label: 'timestamp' },
                { value: 'x', label: 'X-axis' },
                { value: 'y', label: 'Y-axis' },
                { value: 'z', label: 'Z-axis' },
                { value: 'heart', label: 'heart' },
                { value: 'norm', label: 'norm' },
            ],
            fieldXLoading: false,
            fieldYLoading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
  
    handleChange(event, action) 
    {
        console.log("ici0")
        console.log(action)
        console.log(event)
        if(action.name == "filename")
        {
            dataRequest.getDataByFilename(event.value).then((res) => 
            {
                let Data = []
                
                for (let i = 0; i < res[0].accelero.length; i++)
                {
                    Data.push(
                    {
                        timestamp : res[0].accelero[i].timestamp,
                        x : res[0].accelero[i].x,
                        y : res[0].accelero[i].y,
                        z : res[0].accelero[i].z,
                        heart : res[0].accelero[i].heart,
                        norm: res[0].accelero.norm
                    })
                }
                // Data = JSON.stringify(Data)
                // console.log("DAta")
                // console.log(Data)
                this.setState({fieldXLoading: true, fieldYLoading: true})
                this.setState(state => (state.datasets[0].data = [Data], state))
                let lineChart = this.reference.chartInstance
                lineChart.update();
                console.log("testtttt")
                console.log(this.state.datasets)
                // console.log("data")
                // console.log(this.state.data)
            });
        }
    }

    componentDidMount() 
    {
        this.setState({isLoading: true});
        dataRequest.getDataFilename().then((res) => 
        {
            let Data = []
            for (let i = 0; i < res.length; i++)
            {
                Data.push({label: res[i].filename, value: res[i].filename})
            }
            this.setState({filename: Data, isLoading: false})
        });
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

                            <div className="graph-core-body-graph1-selectData-chooseFile">
                                <Select
                                    options={filename}
                                    name="filename"
                                    onChange={this.handleChange}
                                    placeholder="Select System" >
                                </Select>
                            </div>

                            <div className="graph-core-body-graph1-selectData-chooseDataX">
                                { fieldXLoading ?
                                (
                                    <Select id="select-x"
                                        options={fields}
                                        name="systemId"
                                        placeholder="Select System" >
                                    </Select>
                                ):(
                                    <i>Merci de sélectionner une donnée</i>
                                )
                                }
                            </div>
                            <div className="graph-core-body-graph1-selectData-chooseDataY"></div>
                            <div className="graph-core-body-graph1-selectData-chooseAction"></div>
                        </div>
                    </div>
                )
            }
            </Popup>
        )
    }
}

    