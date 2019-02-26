import React, { Component } from "react";
import "./MainPageHeader.scss";
import MenuItem from "../../components/menu-item/MenuItem";
import LogoItem from "../../components/logo/LogoItem";
import ButtonItem from "../../components/button-item/ButtonItem";
import NavBar from "../../components/nav-bar/NavBar";
import { Link } from "react-router-dom";
class MainPageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { navOpacity: 0 };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.updateNavOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateNavOpacity);
  }
  updateNavOpacity = () => {
    console.log(window.scrollY);

    if (window.scrollY > 95) {
      this.setState({ navOpacity: 0.8 });
    } else {
      this.setState({ navOpacity: 0 });
    }
  };
  render() {
    return (
      <header className="background-img">
        <div className="container-menu">
          <Link to="/">
            <MenuItem name={"HOME"} />
          </Link>
          <Link to="/galeria">
            <MenuItem name={"GALERIA"} />
          </Link>
          <Link to="/cennik/">
            <MenuItem name={"CENNIK"} />
          </Link>
          <Link to="#">
            <MenuItem name={"OKOLICA"} />
          </Link>
          <Link to="#">
            <MenuItem name={"KONTAKT"} />
          </Link>
        </div>

        <div className="logo-item">
          <LogoItem logoText={"Leśna Chatka"} />
        </div>

        <div className="button-item">
          <ButtonItem buttonName={"Rezerwuj"} />
        </div>

        <NavBar opacity={this.state.navOpacity} />
      </header>
    );
  }
}
export default MainPageHeader;
