import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./NavBar.scss";
import { Link } from "react-router-dom";

class NavBar extends Component {
  calculateOpacity = () => {
    if (this.props.opacity === undefined) {
      return 1;
    }
    else{
      return this.props.opacity;
    }

  };
  render() {
    
    const opacity = this.calculateOpacity();
    
    return (
      <ul className="nav-bar-item" style={{ opacity }}>
        <Link to="/">
          <MenuItem name={"HOME"} />
        </Link>
        <Link to="/galeria">
        <MenuItem name={"GALERIA"} />
        </Link>
        <Link to="/cennik/">
          <MenuItem name={"CENNIK"} />
        </Link>
        <MenuItem name={"OKOLICA"} />
        <MenuItem name={"KONTAKT"} />
      </ul>
    );
  }
}

export default NavBar;
