import React, { Component } from "react";
import PriceBox from "../../components/price-box/PriceBox";
import "./PriceBoxes.scss";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";

const PriceBoxes = () => {
  return (
    <div>
      <div className="price-text">
        <p>Cennik</p>
        <HorizontalLine />
      </div>

      <div className="price-boxes-container">
        <PriceBox
          sezon={"Niski sezon:"}
          date={"październik-kwiecień"}
          price={"300zł/doba"}
          conditions={"Minimum 2 noce"}
        />
        <PriceBox
          sezon={"Wysoki sezon:"}
          date={"maj-wrzesień"}
          price={"400zł/doba"}
          conditions={"Minimum 3 noce"}
        />
        <PriceBox
          date={"Sylwester, Boże Narodzenie, Wielkanoc, Weekend Majowy"}
          price={"500zł/doba"}
          conditions={"Minimum 3 noce"}
        />
      </div>
    </div>
  );
};

export default PriceBoxes;
