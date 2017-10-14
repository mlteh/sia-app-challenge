// imports
import React, { Component } from 'react';
import SelectProblem from '../components/SelectProblem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Chip from 'material-ui/Chip';

class Airplane extends Component {
  constructor(props) {
    super(props);
    this.rows = 30;

    this.state = {
      open: false,
      selectedSeatNum: null,
      properties: { status: "Pending Service", last_service_date: new Date(), list}
    };

  } 

  handleOpen = (seatNumber) => {
    this.setState({open: true, selectedSeatNum: seatNumber});
  };

  handleClose = () => {
    console.log("CLOSE")
    this.setState({open: false, selectedSeatNum: null });
  };

  buildAircraftRows() {
    let aircraftRows = []
    for (let i=0; i<30; i++) {
      aircraftRows.push(
        <li key={i}className={`row row--${i}`}>
          <ol className="seats" type="A">
            <li className="seat" onClick={ () => {this.showDialog(`${i}A`)} }>
              <input type="checkbox" id={`${i}A`} />
              <label htmlFor={`${i}A`}>{`${i}A`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}B`)} }>
              <input type="checkbox" id={`${i}B`} />
              <label htmlFor={`${i}B`}>{`${i}B`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}C`)} } >
              <input type="checkbox" id={`${i}C`}/>
              <label htmlFor={`${i}C`}>{`${i}C`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}D`)} } >
              <input type="checkbox" disabled id={`${i}D`} />
              <label htmlFor={`${i}D`}>{`${i}D`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}E`)} }>
              <input type="checkbox" id={`${i}E`} />
              <label htmlFor={`${i}E`}>{`${i}E`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}F`)} }>
              <input type="checkbox" id={`${i}F`} />
              <label htmlFor={`${i}F`}>{`${i}F`}</label>
            </li>
          </ol>
        </li>
      )
    }
    return aircraftRows;
  }

  showDialog(seatNumber) {
    console.log("CALLED", seatNumber)
    this.handleOpen(seatNumber);
  }
  
  render() {

    

    return (
      <div className="plane">
        <div className="cockpit">
          <h1>Please select a seat</h1>
        </div>
        <div className="exit exit--front fuselage">
        </div>
        <ol className="cabin fuselage">
          { this.buildAircraftRows() }
        </ol>
       <SelectProblem properties={this.state.properties} seatNumber={this.state.selectedSeatNum} open={this.state.open} handleClose={() => this.handleClose()}/>
        <div className="exit exit--back fuselage">
        </div>
      </div>
    );
  }
}

export default Airplane;
