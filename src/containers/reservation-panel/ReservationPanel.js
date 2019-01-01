import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./ReservationPanel.css";
import NumberOfGuestsOptions from "./NumberOfGuestsOptions";
import { Dropdown } from "semantic-ui-react";
import { Button } from 'semantic-ui-react';

class ReservationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFrom: undefined,
      dateTo: undefined
    };
  }

  handleDayFromChange = day => {
    this.setState({ dateFrom: day });
  };
  handleDayToChange = day => {
    this.setState({ dateTo: day });
  };


  render() {
    return (
      <div className="reservation-panel">
        <div className="day-picker">
          <DayPickerInput onDayChange={this.handleDayFromChange} />
        </div>
        -
        <div className="day-picker">
          <DayPickerInput onDayChange={this.handleDayToChange} />
        </div>
        <div className="guest-selector">
          <Dropdown
            placeholder="Liczba gości"
            fluid
            selection
            options={NumberOfGuestsOptions}
          />
        </div>
      
        <Button content='Click Here' />

        
      </div>
    );
  }
}

export default ReservationPanel;
