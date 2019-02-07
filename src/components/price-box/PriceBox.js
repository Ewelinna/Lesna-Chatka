import React, { Component } from "react";
import "./PriceBox.css"

class PriceBox extends Component{
render(){
    return(
        <div className="kiwi">
        <span className="booking-date">{this.props.date}</span>
        <div className="horizontal-line"></div>
        <span className="booking-price">{this.props.price}</span>
        <span className="booking-conditions">{this.props.conditions}</span>
        </div>
    )
}
}


export default PriceBox;