import React, { Component } from "react";
import "./PriceBox.scss";

class PriceBox extends Component {
  render() {
    return (
      <div className="price-box-container">
        <span className="booking-sezon">{this.props.sezon}</span>
        <span className="booking-date">{this.props.date}</span>
        <div className="horizontal-line" />
        <span className="booking-price">{this.props.price}</span>
        <span className="booking-conditions">{this.props.conditions}</span>
      </div>
    );
  }
}

export default PriceBox;
