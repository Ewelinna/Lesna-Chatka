import React, { Component } from "react";
import "./AdminBookingPanel.css";
import AdminBookingItem from "../admin-booking-item/AdminBookingItem";
import axios from "axios";

class AdminBookingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservationsToShow: [],
      
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/reservations").then(res => {
      const reservationsToShow = res.data;
      this.setState({ reservationsToShow });
    });
  }
 deleteReservationItem = (id, e) => {
    console.log(id);

    axios.delete(`http://localhost:3001/reservations/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
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
              deleteEvent={this.deleteReservationItem.bind(this, oneReservation.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default AdminBookingPanel;
