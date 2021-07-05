import React, { Component } from "react";
import { Button } from 'reactstrap';
import {Popup} from 'reactjs-popup';
// import '../css/pages/chart.pop.css'
import {Line} from 'react-chartjs-2';
import fft from 'fft-js';
import 'reactjs-popup/dist/index.css';
import '../css/pages/popup.page.css'


export default class Graph extends Component 
{  

    constructor(props) {
        super(props);

        let norms = []
        let timestamp = []

        for(let i =0; i < this.props.accelero.length; i++)
        {
            norms.push(this.props.accelero[i].norm)
            timestamp.push(this.props.accelero[i].timestamp)
        }
        

        this.state = {
            labels: [],
            isLoading : true,
            datasets: 
            [{
                label: 'norme',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: []
            }]
        
        };
      }


      componentDidMount() 
      {
          
        this.setState({isLoading: true});
        dataRequest.getFourierTransform().then((res) => 
        {
            this.setState({isLoading: false})
            this.setState(state => (state.datasets[0].data = [res], state))
        });
      }
    render()
    { 
        // const {isLoading} = this.state

        // if (isLoading) 
        // {
        //     return(
        //         <Popup contentStyle={{ width: "70%" }} trigger={<Button size="sm" color="danger">FourierTransform</Button>} modal nested>
        //         {
               
        //             close => 
        //             (

        //                 <div className="modal">

        //                     <button className="close" onClick={close}> &times; </button>

        //                     <div className="header"> Graphique </div>
        //                         <div className="content">
        //                             <p>Loading...</p>
        //                             </div>
        //                 </div>
        //             )
        //         }
        //         </Popup>
        //     )
        // }

        return(
            <Popup contentStyle={{ width: "70%" }} trigger={<Button size="sm" color="danger">FourierTransform</Button>} modal nested>
            {
               
                close => (
                    <div className="modal">
                        <button className="close" onClick={close}> &times; </button>

                        <div className="header"> Graphique </div>
                        <div className="content">
                            <div>
                                <Line data={this.state} options=
                                {{
                                    title:{
                                    display:true,
                                    text:'Norme en fonction du temps',
                                    fontSize:20
                                    },
                                    legend:{
                                    display:true,
                                    position:'right'
                                    }
                                }}
                                />
                            </div>
                        </div>
                    </div>
                )
            }
            </Popup>
        )
    }
}