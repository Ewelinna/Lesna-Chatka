import React, { Component } from "react";
import "./MainPageContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconWithText from "../../components/icon-with-text/IconWithText";

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
              icon={<FontAwesomeIcon icon="bed" size="2x" color="white"  />}
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
        <div>
        
        </div>

        <div className="interior-picture">
          <img src={require("../../images/interior.jpg")} alt="Interior" />
        </div>
      </div>
    );
  }
}
export default MainPageContent;
