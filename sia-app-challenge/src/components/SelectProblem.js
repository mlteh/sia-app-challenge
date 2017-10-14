import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

const allProblems = ['Broken Chair Seat', 'Torn Seat', 'Broken IFE', 'Failed Seat Recline', 'Armrest Broken', 'Ports Spoilt', 'Broken Screen', 'Tray Table Broken', 'Others' ];

export default class SelectProblem extends React.Component {

  buildProblemChips(listCurrentProblems) {
    let problemChips = [];

    listCurrentProblems.forEach( (problem, idx) => {
      problemChips.push(
        <Chip
          key={idx}
          onRequestDelete={() => this.props.handleProblemDelete(idx)}
        >
          {problem.title}
        </Chip>
      );
    });
    return problemChips;
  }

  buildAddProblem(){
    return(
      <AutoComplete
        floatingLabelText="New Problem"
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={allProblems}
      />
    );
  }

  render() {
    const properties = this.props.properties
    console.log("properties", properties)
    
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
        <p><span>Last Serviced Date: </span><span>{properties.last_service_date.toString()}</span></p>
        <div><span>Current Problems: </span><span>{this.buildProblemChips(properties.list_current_problems)}</span></div> 
        <div>Add New Problem: <span>{this.buildAddProblem()}</span></div>     
      </Dialog>
    );
  }
}