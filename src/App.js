import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./header/menu-bar/MenuBar";
import GalleryBoxes from "./boxes/gallery-boxes/GalleryBoxes";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "./pages/HomePage/HomePage";
import BookingPage from "./pages/BookingPage/BookingPage";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/rezerwacja/" component={BookingPage} />
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
