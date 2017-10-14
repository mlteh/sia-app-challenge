import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';

const allProblems = ['Broken Chair Seat', 'Torn Seat', 'Broken IFE', 'Failed Seat Recline', 'Armrest Broken', 'Ports Spoilt', 'Broken Screen', 'Tray Table Broken', 'Others' ];

export default class SelectProblem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {newProblemTitle: '', newProblemDescription: ''};
  }

  buildProblemChips(listCurrentProblems) {
    let problemChips = [];

    listCurrentProblems.forEach( (problem, idx) => {
      problemChips.push(
        <Chip
          key={idx}
          className="chip"
          backgroundColor={'#3F51B5'}
          labelColor={'#fff'}
          onRequestDelete={() => this.props.handleProblemDelete(idx)}
        >
          {problem.title}
        </Chip>
      );
    });
    return problemChips;
  }

  handleUpdateInput = (titleText) => {
    this.setState({
      newProblemTitle: titleText,
    });
    console.log("TITLETEXT", titleText)
  };

  buildAddProblem(){
    return(
      <AutoComplete
        floatingLabelText="Key in a new problem"
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={allProblems}
        onUpdateInput={this.handleUpdateInput}
      />
    );
  }

  buildAddProblemDes(){
    return(
      <TextField
        hintText="Description"
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
        <div><span>Current Problems: </span><div className="chipWrapper">{this.buildProblemChips(properties.list_current_problems)}</div></div> 
        <div>Add New Problem: <span>{this.buildAddProblem()}</span></div>   
        <div>Description(Optional): <span>{this.buildAddProblemDes()}</span></div>     
      </Dialog>
    );
  }
}