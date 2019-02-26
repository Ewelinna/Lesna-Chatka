import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import MainPageHeader from "./containers/main-page-header/MainPageHeader";
import GalleryBoxes from "./containers/gallery-boxes/GalleryBoxes";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import AdminBookingPage from "./pages/admin-booking-page/AdminBookingPage";
import ReservationPage from "./pages/reservation-page/ReservationPage";
import PricePage from "./pages/price-page/PricePage";
import GalleryPage from "./pages/gallery-page/GalleryPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer, faBath, faBed,faTree,faShip, faPaw } from '@fortawesome/free-solid-svg-icons'
library.add(faSwimmer, faBath, faBed, faTree,faShip, faPaw);



class App extends Component {
 

  render() {
    return (
     
      <Router>
        <div>
          <Switch>
            <Route path="/admin/" component={AdminBookingPage} />
            <Route path="/rezerwacja/" component={ReservationPage} />
            <Route path="/cennik/" component={PricePage} />
            <Route path="/galeria/"component={GalleryPage}/>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
