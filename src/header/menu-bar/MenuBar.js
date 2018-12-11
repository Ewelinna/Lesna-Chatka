import React, { Component } from "react";
import "./MenuBar.css";
import MenuItem from "../menu-item/MenuItem";
import LogoItem from "../logo/LogoItem";
import ButtonItem from "../button-item/ButtonItem";
class MenuBar extends Component {
  render() {
    return (

        <header className="background-img">
          <ul className="container-menu">
            <MenuItem name={"HOME"} />
            <MenuItem name={"GALERIA"} />
            <MenuItem name={"CENNIK"} />
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
