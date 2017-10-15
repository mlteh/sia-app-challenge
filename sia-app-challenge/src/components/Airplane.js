// imports
import React, { Component } from 'react';
import SelectProblem from '../components/SelectProblem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import firebase from '../firebase'

class Airplane extends Component {


 
  constructor(props) {
    super(props);
    this.rows = 30;
    this.db = firebase.database();

    this.state = {
      open: false,
      selectedSeatNum: null,
      properties: {}
      //properties: { status: "Pending Service", last_service_date: new Date(), list_current_problems: [{title: "Seat Leather Torn", description: "Bottom seat leather town, however seat is still usable"}, {title: "IFE spoilt", description: "IFE unable to be turned on"}]}
    };

  } 

  componentDidMount() {
    console.log("THIS>DB", this.state)
    const obj = this;
    let liveProblems = this.db.ref('aircraft/' + this.props.aircraftSerial);
    liveProblems.on('value', function(snapshot) {
      console.log("snapshot", snapshot.val())
      obj.setState({properties: snapshot.val()})
    });
  }

  handleOpen = (seatNumber) => {
    this.setState({open: true, selectedSeatNum: seatNumber});
  };

  handleClose = () => {
    console.log("CLOSE")
    this.setState({open: false, selectedSeatNum: null });
  };

  handleSubmit = (submitParameters) => {
    console.log("SUBMIT", submitParameters)
    this.db.ref('aircraft/' + this.props.aircraftSerial + '/' + submitParameters.seat).push({
      problem: submitParameters.problem,
      problem_description : submitParameters.problem_description
    });
    this.handleClose();
  }

  deleteProblem(idx, problem) {
    this.db.ref('aircraft/' + this.props.aircraftSerial + '/' + this.state.selectedSeatNum + "/" + problem).remove();
  }

  buildAircraftRows() {
    let aircraftRows = []
    let properties = this.state.properties
    console.log("properties", properties)
    for (let i=0; i<30; i++) {
      aircraftRows.push(
        <li key={i}className={`row row--${i}`}>
          <ol className="seats" type="A">
            <li className="seat" onClick={ () => {this.showDialog(`${i}A`)} }>
              <input type="checkbox" id={`${i}A`} />
              <label className={properties[`${i}A`] ? 'problematic' : ''} htmlFor={`${i}A`}>{`${i}A`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}B`)} }>
              <input type="checkbox" id={`${i}B`} />
              <label className={properties[`${i}B`] ? 'problematic' : ''} htmlFor={`${i}B`}>{`${i}B`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}C`)} } >
              <input type="checkbox" id={`${i}C`}/>
              <label className={properties[`${i}C`] ? 'problematic' : ''} htmlFor={`${i}C`}>{`${i}C`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}D`)} } >
              <input type="checkbox" id={`${i}D`} />
              <label className={properties[`${i}D`] ? 'problematic' : ''} htmlFor={`${i}D`}>{`${i}D`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}E`)} }>
              <input type="checkbox" id={`${i}E`} />
              <label className={properties[`${i}E`] ? 'problematic' : ''} htmlFor={`${i}E`}>{`${i}E`}</label>
            </li>
            <li className="seat" onClick={ () => {this.showDialog(`${i}F`)} }>
              <input type="checkbox" id={`${i}F`} />
              <label className={properties[`${i}F`] ? 'problematic' : ''} htmlFor={`${i}F`}>{`${i}F`}</label>
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
          <h2>Manage the seats for your flight</h2>
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
          handleProblemDelete= {(idx, problem) => this.deleteProblem(idx, problem)}
          handleSubmit = { (seat, problem, problem_description) => this.handleSubmit( {seat,problem,problem_description} )}
        />
        <div className="exit exit--back fuselage">
        </div>
      </div>
    );
  }
}

export default Airplane;
