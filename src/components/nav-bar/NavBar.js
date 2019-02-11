import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./NavBar.scss";
import { Link } from "react-router-dom";

class NavBar extends Component {
    
  render() {

    const opacity = (this.props.opacity) ? Math.max(this.props.opacity, 0.2) : 0;
   
    return (
      <ul className="nav-bar-item" style={{opacity}}>
        <Link to="/">
          <MenuItem name={"HOME"} />
        </Link>
        <MenuItem name={"GALERIA"} />
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
