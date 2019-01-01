import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPageTopContent from "./containers/main-page-top-content/MainPageTopContent";
import GalleryBoxes from "./containers/gallery-boxes/GalleryBoxes";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import AdminBookingPage from "./pages/admin-booking-page/AdminBookingPage";
import ReservationPage from "./pages/reservation-page/ReservationPage";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/admin/" component={AdminBookingPage} />
            <Route path="/rezerwacja/" component={ReservationPage} />
            <Route path="/" component={HomePage} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
