import React, { Component } from "react";
import "./PriceBox.css"

class PriceBox extends Component{
render(){
    return(
        <div className="price-box-container">
        <span>{this.props.date}</span>
        <div></div>
        <span>{this.props.price}</span>
        <span>{this.props.conditions}</span>
        </div>
    )
}
}


export default PriceBox;