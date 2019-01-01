import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <ul className="nav-bar-item">
        <MenuItem name={"HOME"} />
        <MenuItem name={"GALERIA"} />
        <MenuItem name={"CENNIK"} />
        <MenuItem name={"OKOLICA"} />
        <MenuItem name={"KONTAKT"} />
      </ul>
    );
  }
}

export default NavBar;
