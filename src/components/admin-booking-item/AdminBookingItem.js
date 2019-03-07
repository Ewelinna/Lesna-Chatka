import React from "react";
import "./AdminBookingItem.scss";

const AdminBookingItem = props => {
  // 2103199421:11 to 21.03
  const formatDate = date => {
    const timestamp = Date.parse(date);
    if (isNaN(timestamp) === false) {
      const d = new Date(date);
      return d.toLocaleDateString();
    } else {
      return date;
    }
  };
  return (
    <div>
      <div className="reservation-admin">
        <span>
          <li>
            Zarezerwowane przez: <strong>{props.reservingUserName}</strong>
          </li>
          <li>
            Zarezerwowane od:{" "}
            <strong>{formatDate(props.reservingFrom)} </strong>
          </li>
          <li>
            Zarezerwowane do: <strong>{formatDate(props.reservingTo)}</strong>
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
