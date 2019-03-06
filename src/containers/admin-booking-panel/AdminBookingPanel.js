import React, { Component } from "react";
import "./AdminBookingPanel.scss";
import AdminBookingItem from "../../components/admin-booking-item/AdminBookingItem";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../services/reservationsService";

class AdminBookingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservationsToShow: []
    };
  }

  componentDidMount() {
    axios.get(`${BACKEND_BASE_URL}/reservations`).then(res => {
      const reservationsToShow = res.data;
      this.setState({ reservationsToShow });
    });
  }
  deleteReservationItem = (id, e) => {
    console.log(id);

    axios.delete(`${BACKEND_BASE_URL}/reservations/${id}`).then(res => {
      let reservationsToShow = Object.assign(
        [],
        this.state.reservationsToShow
      );
      reservationsToShow = reservationsToShow.filter(reservation => reservation.id != id);

      this.setState({ reservationsToShow: reservationsToShow });

      console.log(res);
      console.log(res.data);
    });
 

  };
  render() {
    return (
      <div className="booking-admin">
        <div className="title">
          {" "}
          <p>Zarządzaj rezerwacjami</p>
        </div>

        {this.state.reservationsToShow.map(oneReservation => {
          return (
            <AdminBookingItem
              reservingUserName={oneReservation.reservingUser}
              reservingFrom={oneReservation.reservingFrom}
              reservingTo={oneReservation.reservingTo}
              key={oneReservation.id}
              deleteEvent={this.deleteReservationItem.bind(
                this,
                oneReservation.id
              )}
            />
          );
        })}
      </div>
    );
  }
}

export default AdminBookingPanel;
