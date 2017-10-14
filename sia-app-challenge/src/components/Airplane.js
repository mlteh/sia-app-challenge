// imports
import React, { Component } from 'react';
import SelectProblem from '../components/SelectProblem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
 
const allProblems = ['Broken Chair Seat', 'Torn Seat', 'Broken IFE', 'Failed Seat Recline', 'Armrest Broken', 'Ports Spoilt', 'Broken Screen', 'Tray Table Broken', 'Others' ];

class Airplane extends Component {


 
  constructor(props) {
    super(props);
    this.rows = 30;

    this.state = {
      open: false,
      selectedSeatNum: null,
      properties: { status: "Pending Service", last_service_date: new Date(), list_current_problems: [{title: "Seat Leather Torn", description: "Bottom seat leather town, however seat is still usable"}, {title: "IFE spoilt", description: "IFE unable to be turned on"}]}
    };

  } 

  handleOpen = (seatNumber) => {
    this.setState({open: true, selectedSeatNum: seatNumber});
  };

  handleClose = () => {
    console.log("CLOSE")
    this.setState({open: false, selectedSeatNum: null });
  };

  deleteProblem(idx) {
    console.log("DELETE", idx)
  }

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
              <input type="checkbox" id={`${i}D`} />
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
        <SelectProblem 
          properties={this.state.properties} 
          seatNumber={this.state.selectedSeatNum} 
          open={this.state.open} 
          handleClose={() => this.handleClose()}
          handleProblemDelete= {(idx) => this.deleteProblem(idx)}
        />
        <div className="exit exit--back fuselage">
        </div>
      </div>
    );
  }
}

export default Airplane;
