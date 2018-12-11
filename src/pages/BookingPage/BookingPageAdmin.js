

import React, { Component } from "react";
import "./BookingPageAdmin.css";
import Reservation from './Reservation';

class BookingPageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservationsToShow: [
        {
          id: 1,
          reservingUserName: "Ewelina",
          reservingFrom: "01.06.18",
          reservingTo: "08.06.18"
        },
        {
          id: 2,
          reservingUserName: "Paweł",
          reservingFrom: "01.06.18",
          reservingTo: "08.06.18"
        }
      ]
    };
  }
  deleteReservationItem=(index,e)=>{
      const reservationsToShow = Object.assign([], this.state.reservationsToShow);
      reservationsToShow.splice(index,1);
      this.setState({reservationsToShow:reservationsToShow})

  }
  render() {
    return (
      <div className="booking-admin">
      <div className="title"> <p>Zarządzaj rezerwacjami</p></div>
        
        {this.state.reservationsToShow.map((oneReservation, index) => {
          return( 
           
            
              <Reservation
              reservingUserName={oneReservation.reservingUserName} 
              reservingFrom= {oneReservation.reservingFrom} 
              reservingTo={oneReservation.reservingTo}
              key={oneReservation.id}
              deleteEvent={this.deleteReservationItem.bind(this, index)}
              >
              </Reservation>
              
            

          )
          })}
        </div>
      
    );
  }
}

export default BookingPageAdmin;

// import React, { Component } from "react";

// class BookingPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reservationsToShow: [
//         {
//           id: 1,
//           reservingUserName: "Ewelina",
//           reservingFrom: "01.06.18",
//           reservingTo: "08.06.18"
//         },
//         {
//           id: 2,
//           reservingUserName: "Paweł",
//           reservingFrom: "01.06.18",
//           reservingTo: "08.06.18"
//         }
//       ]
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h2>rezerwacje tutaj zapro lista cfghvthe</h2>
//         {this.state.reservationsToShow.map(oneReservation => {
//           return (
//               <div>
//             <p key={oneReservation.id}>
//               Zarezerwowane przez:{oneReservation.reservingUserName}
//             </p>
//             <p key={oneReservation.id}>
//               Zarezerwowane przez:{oneReservation.reservingFrom}
//             </p>
//             <p key={oneReservation.id}>
//             Zarezerwowane przez:{oneReservation.reservingTo}
//           </p>
//             </div>
            
            
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default BookingPage;