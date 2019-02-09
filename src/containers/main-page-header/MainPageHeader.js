import React, { Component } from "react";
import "./MainPageHeader.css";
import MenuItem from "../../components/menu-item/MenuItem";
import LogoItem from "../../components/logo/LogoItem";
import ButtonItem from "../../components/button-item/ButtonItem";
import { Link } from "react-router-dom";
class MenuBar extends Component {
  render() {
    return (
      <header className="background-img">
        <ul className="container-menu">
          <MenuItem name={"HOME"} />
          <MenuItem name={"GALERIA"} />
          <Link to="/cennik/">
            <MenuItem name={"CENNIK"} />
          </Link>
          <MenuItem name={"OKOLICA"} />
          <MenuItem name={"KONTAKT"} />
        </ul>

        <div className="logo-item">
          <LogoItem logoText={"Leśna Chatka"} />
        </div>

        <div className="button-item">
          <ButtonItem buttonName={"Rezerwuj"} />
        </div>
      </header>
    );
  }
}
export default MenuBar;
