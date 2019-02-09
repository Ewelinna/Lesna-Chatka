import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <ul className="nav-bar-item">
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
