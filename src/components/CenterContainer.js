import react, { Component } from "react";
import React from "react";
//import './components/CSS/Acessories.css';

class CenterContainer extends React.Component {
    render() {
        return (
            
            <div className='mainbox'>
                <div className='inner-main'>
                    <h1 className='title'>Weather Forecast</h1>
                    <div>
                        <span>Today</span>
                        <h1>Thailand</h1>
                        <p>
                            Temperature: : 0
                            °C
                        </p>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}
export default CenterContainer;