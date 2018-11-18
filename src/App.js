import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./header/menu-bar/MenuBar";
import GalleryBoxes from "./boxes/gallery-boxes/GalleryBoxes";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "./pages/HomePage/HomePage";

const Booking = () => <h2>rezerwacje tutaj zapro lista cfghvthe</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/rezerwacja/" component={Booking} />
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
