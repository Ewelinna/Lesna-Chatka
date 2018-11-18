import React, { Component } from "react";
import "./ButtonItem.css";
import { Link } from "react-router-dom";

class ButtonItem extends Component {
  render() {
    return (
      <div>
        <Link to="/rezerwacja/">
          <button className="button-item" type="button">{this.props.buttonName}</button>
        </Link>
      </div>
    );
  }
}
export default ButtonItem;
