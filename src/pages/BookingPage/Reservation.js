import React from 'react';

const reservation = (props) =>{
    return(
    <li>
    <span>
    Zarezerwowane przez:{props.reservingUserName},
    Zarezerwowane od:{props.reservingFrom},
    Zarezerwowane do:{props.reservingTo}
    </span>
    <button onClick={props.deleteEvent}>Delete</button>
    </li>

    )
}

export default reservation;