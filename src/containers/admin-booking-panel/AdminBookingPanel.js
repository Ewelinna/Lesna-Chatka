import React, { Component } from "react";
import "./AdminBookingPanel.css";
import AdminBookingItem from "../admin-booking-item/AdminBookingItem";
import axios from "axios";

class AdminBookingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservationsToShow: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/reservations").then(response => {
      const reservationsToShow = response.data;
      this.setState({ reservationsToShow });
    });
  }

  deleteReservationItem = (index, e) => {
    const reservationsToShow = Object.assign([], this.state.reservationsToShow);
    reservationsToShow.splice(index, 1);
    this.setState({ reservationsToShow: reservationsToShow });
  };
  render() {
    return (
      <div className="booking-admin">
        <div className="title">
          {" "}
          <p>Zarządzaj rezerwacjami</p>
        </div>

        {this.state.reservationsToShow.map((oneReservation, index) => {
          return (
            <AdminBookingItem
              reservingUserName={oneReservation.reservingUser}
              reservingFrom={oneReservation.reservingFrom}
              reservingTo={oneReservation.reservingTo}
              key={oneReservation.id}
              deleteEvent={this.deleteReservationItem.bind(this, index)}
            />
          );
        })}
      </div>
    );
  }
}

export default AdminBookingPanel;
