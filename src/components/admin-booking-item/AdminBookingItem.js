import React from "react";
import "./AdminBookingItem.css";

const AdminBookingItem = props => {
  return (
    <div>
      <div className="reservation-admin">
        <span>
        
          <li>
            Zarezerwowane przez: <strong>{props.reservingUserName}</strong>
          </li>
          <li>
            Zarezerwowane od: <strong>{props.reservingFrom} </strong>
          </li>
          <li>
            Zarezerwowane do: <strong>{props.reservingTo}</strong>
          </li>
        </span>
        <button className="button-delete" onClick={props.deleteEvent}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminBookingItem;
