import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./header/menu-bar/MenuBar";
import GalleryBoxes from "./containers/gallery-boxes/GalleryBoxes";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import AdminBookingPanel from "./containers/admin-booking-panel/AdminBookingPanel";
import ReservationPage from "./pages/reservation-page/ReservationPage";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/admin/" component={AdminBookingPanel} />
            <Route path="/" component={HomePage} />
            <Route path="/rezerwacja/" component={ReservationPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
