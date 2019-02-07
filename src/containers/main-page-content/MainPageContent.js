import React, { Component } from "react";
import "./MainPageContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconWithText from "../../components/icon-with-text/IconWithText";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";

class MainPageContent extends React.Component {
  render() {
    return (
      <div>
        <div className="header-icon-container">
          <div className="icon-header">
            <h1>Klimatyczny dom na wyłączność dla 6 osób </h1>
          </div>

          <div className="icon-container">
            <IconWithText
              icon={<FontAwesomeIcon icon="bed" size="2x" color="white" />}
              description={"3 pokoje"}
            />
            <IconWithText
              icon={<FontAwesomeIcon icon="bath" size="2x" color="white" />}
              description={"3 łazienki"}
            />
            <IconWithText
              icon={<FontAwesomeIcon icon="tree" size="2x" color="white" />}
              description={"W otoczeniu lasu"}
            />
            <IconWithText
              icon={<FontAwesomeIcon icon="swimmer" size="2x" color="white" />}
              description={"Nad jeziorem"}
            />
            <IconWithText
              icon={<FontAwesomeIcon icon="ship" size="2x" color="white" />}
              description={"Łódź do dyspozycji"}
            />
          </div>
        </div>
        <div className="about-the-place-text">
          <h1>Kilka słów o nas</h1>

          <HorizontalLine />

          <p>
            Leśna Chatka to klimatyczny, całoroczny domek znajdujący się w
            spokojnej miejscowości Mirawy w województwie Lubelskim. Położony
            jest w samym centrum parku krajobrazowego wśród otaczających go
            jezior, łąk i lasów. Tutaj każdy znajdzie coś dla siebie. Jeżeli
            poszukujesz spokoju, pięknych krajobrazów, bliskiego kontaktu z
            przyrodą oraz odrobiny luksusu, z pewnością odnajdziesz je u nas.
            Serdecznie zapraszamy!
          </p>
        </div>

        <div className="interior-picture">
          <img src={require("../../images/interior.jpg")} alt="Interior" />
        </div>
      </div>
    );
  }
}
export default MainPageContent;
