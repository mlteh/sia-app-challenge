import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class SelectProblem extends React.Component {
  render() {

    const properties = this.props.properties
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.handleClose}
      />,
    ];

    return (
      <Dialog
        title={`Seat Status for ${this.props.seatNumber}`}
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
        autoScrollBodyContent={true}
      >
        <p><span>Current status: </span><span>{properties.status}</span></p>
        <p><span>Last Serviced Date: </span><span>{properties.status}</span></p>
        <p><span>Current Problems: </span><span>{properties.status}</span></p>      
      </Dialog>
    );
  }
}