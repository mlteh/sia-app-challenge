import React, { Component } from 'react';
import logo from './Singapore_Airlines.svg';
import './App.css';
import Airplane from './components/Airplane';
import SelectProblem from './components/SelectProblem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from './firebase'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {aircraftSerial: "9V-SVA"}
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Cabin Management System</h1>
            <h1>9V-SVA</h1>
          </header> 
          <Airplane aircraftSerial={this.state.aircraftSerial}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
