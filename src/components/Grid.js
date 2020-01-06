import React, { Component } from 'react'
import axios from 'axios'
export default class Grid extends Component {

    state = {
        resources: [],
        filter: 0
    }

    getResources = async () => {
        const res = await axios.get('https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,-9.137115&companyZoneIds=545,467,473');
        this.setState({ resources: res.data});
    }

    onClick = e => {
        e.preventDefault();
        this.getResources();
    }

    getBatteryLevel(batteryLevel){
        if(batteryLevel > 30){
                return <div className="color2">{batteryLevel}</div>;
        } else {
            return <div className="battery">{batteryLevel}</div>;
        }
    }

    getColorDiv(companyZoneId){
        switch (companyZoneId) {
            case 545:
              return <div className="color1">{companyZoneId}</div>;
            case 467:
              return <div className="color2">{companyZoneId}</div>;
            case 473:
              return <div className="color3">{companyZoneId}</div>;
      
            default:
              return <div className="color4">{companyZoneId}</div>;
        }
    }

    render() {
        const {resources,filter} = this.state;
        return (
            <aside>
                <div className="filtersGrid">
                    <button onClick={(e) => { this.onClick(e); this.setState({filter:0});}}>Show</button>
                    <button onClick={() => this.setState({filter: 545})}>by 545</button>
                    <button onClick={() => this.setState({filter: 467})}>467</button>
                    <button onClick={() => this.setState({filter: 473})}>473</button>
                </div>  
                <div className="divGrid">
                    {!resources.length && <span>Loading...</span>}
                    {resources.length && filter
                        ? resources
                        .filter(resources => resources.companyZoneId === filter)
                            .map(resource => (
                            <div key={resource._id} className="itemGrid">
                            <h2>Resources</h2>
                                <div className="flexItems">
                                    <p>Licencia :</p>
                                    <li>{resource.licencePlate}</li>
                                </div>
                                <div className="flexItems">
                                    <p>Modelo :</p>
                                    <li>{resource.model}</li>
                                </div>  
                                <div className="flexItems">
                                    <p>Bateria :</p>
                                    <li>{this.getBatteryLevel(resource.batteryLevel)}</li>
                                </div>       
                                <div className="flexItemsubicacion">
                                    <p>Ubicacion :</p>
                                    <li>{resource.x}</li>
                                    <li>{resource.y}</li>
                                </div>  
                                <div className="flexItems">
                                    <p>Zona :</p>
                                    <li>{this.getColorDiv(resource.companyZoneId)}</li>
                                </div>                                                                                          
                        </div>))
                        :   resources.map(resource => (
                            <div key={resource._id} className="itemGrid">
                            <h2>Resources</h2>
                                <div className="flexItems">
                                    <p>Licencia :</p>
                                    <li>{resource.licencePlate}</li>
                                </div>
                                <div className="flexItems">
                                    <p>Modelo :</p>
                                    <li>{resource.model}</li>
                                </div>  
                                <div className="flexItems">
                                    <p>Bateria :</p>
                                    <li>{this.getBatteryLevel(resource.batteryLevel)}</li>
                                </div>       
                                <div className="flexItemsubicacion">
                                    <p>Ubicacion :</p>
                                    <li>{resource.x}</li>
                                    <li>{resource.y}</li>
                                </div>  
                                <div className="flexItems">
                                    <p>Zona :</p>
                                    <li>{this.getColorDiv(resource.companyZoneId)}</li>
                                </div>                                                                                          
                        </div>)) 
                    }
                </div>
            </aside>
        )
    }
}
