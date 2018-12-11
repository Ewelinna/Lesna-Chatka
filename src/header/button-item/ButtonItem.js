import React, { Component } from "react";
import "./ButtonItem.css";
import { Link } from "react-router-dom";

class ButtonItem extends Component {
  render() {
    return (
      <div>
        <Link className="button-item" to="/admin/">
          <button  type="button">{this.props.buttonName}</button>
        </Link>
      </div>
    );
  }
}
export default ButtonItem;
