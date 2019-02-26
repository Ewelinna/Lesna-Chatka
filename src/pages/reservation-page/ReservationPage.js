import React, { Component } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import ReservationPanel from "../../containers/reservation-panel/ReservationPanel";

class ReservationPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ReservationPanel/>
       </div>
    );
  }
}
export default ReservationPage;
