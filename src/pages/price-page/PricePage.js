import React, {Component} from "react";
import NavBar from "../../components/nav-bar/NavBar";
import PriceBoxes from "../../containers/price-boxes/PriceBoxes";

export default function PricePage() {
    return (
      <div>
        <NavBar/>
        <PriceBoxes/>
      </div>
    );
  }