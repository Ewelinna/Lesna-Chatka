import React, { Component } from "react";
import "./IconWithText.css";


class IconWithText extends React.Component {
  render() {
   

    return (
      <div className="icon-description-container">
        <div className="single-icon">{this.props.icon}</div>
        <span className="icon-description">{this.props.description}</span>
      </div>
    );
  }
}

export default IconWithText;
