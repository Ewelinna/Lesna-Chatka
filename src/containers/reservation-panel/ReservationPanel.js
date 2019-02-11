import React, { Component } from "react";
import "./ReservationPanel.scss";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import ButtonItem from "../../components/button-item/ButtonItem";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import axios from "axios";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";

class ReservationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      numberOfGuests: "",
      selectedDateFrom: null,
      selectedDateTo: null
    };
  }
  handleDateFromChange = date => {
    this.setState({ selectedDateFrom: date });
  };
  handleDateToChange = date => {
    this.setState({ selectedDateTo: date });
  };
  handleNumberChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleTextFieldChange = stateKeyName => event => {
    this.setState({
      [stateKeyName]: event.target.value
    });
  };

  

  handleSubmit = event => {
    event.preventDefault();
    console.log("halooo");
    
    const guest = {
      name: this.state.name,
      email:this.state.email,
      numberOfGuests:this.state.numberOfGuests,
      selectedDateFrom:this.state.selectedDateFrom,
      selectedDateTo:this.state.selectedDateTo
    };

    axios.post(`http://localhost:3001/reservations`, { guest }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    const { selectedDateFrom, selectedDateTo } = this.state;

    return (
      <div className="reservation-page-container">
      <div className="reserve-text">
      <p>Wprowadź dane do rezerwacji</p>
      </div>
     <HorizontalLine/>
     
        <div className="background-image">
          <form onSubmit={this.handleSubmit} className="reservation-panel">
            <MuiPickersUtilsProvider
              utils={DateFnsUtils}
              className="day-picker"
            >
              <div className="date-picker-container">
                <DatePicker
                  margin="normal"
                  label="Od"
                  value={selectedDateFrom}
                  onChange={this.handleDateFromChange}
                  className="reset-margin"
                />
                <DatePicker
                  margin="normal"
                  label="Do"
                  value={selectedDateTo}
                  onChange={this.handleDateToChange}
                  className="reset-margin"
                />
              </div>
            </MuiPickersUtilsProvider>
            <TextField
              id="standard-name"
              label="Imię i nazwisko"
              value={this.state.name}
              onChange={this.handleTextFieldChange("name")}
              margin="normal"
              className="text-field"
            />

            <TextField
              id="standard-email"
              label="Adres email"
              value={this.state.email}
              onChange={this.handleTextFieldChange("email")}
              margin="normal"
              className="text-field"
            />

            <div>
              <FormControl className="number-selector">
                <InputLabel htmlFor="age-simple">Liczba gości</InputLabel>
                <Select
                  value={this.state.numberOfGuests}
                  onChange={this.handleNumberChange}
                  inputProps={{
                    name: "numberOfGuests",
                    id: "age-simple"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {[...Array(6).keys()]
                    .map(el => el + 1)
                    .map(singleSelection => (
                      <MenuItem key={singleSelection} value={singleSelection}>
                        {singleSelection}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div className="reservation-panel-button">
            <ButtonItem  buttonName={"Rezerwuj"} onClick={this.handleSubmit}/>
            </div>
            </form>
        </div>
      </div>
    );
  }
}

export default ReservationPanel;
