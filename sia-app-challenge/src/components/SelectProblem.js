import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

const allProblems = ['Broken Chair Seat', 'Torn Seat', 'Broken IFE', 'Failed Seat Recline', 'Armrest Broken', 'Ports Spoilt', 'Broken Screen', 'Tray Table Broken', 'Others' ];

export default class SelectProblem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {newProblemTitle: '', newProblemDescription: ''};
    console.log("props", props)
  }

  buildProblemChips(listCurrentProblems) {

    let problemChips = [];
    if (!listCurrentProblems) return null
    console.log("listCurrentProblems", Object.keys(listCurrentProblems))
    let seatKeys = Object.keys(listCurrentProblems);
    seatKeys.forEach((key, idx) => {
      problemChips.push(
        <Chip
          key={idx}
          className="chip"
          backgroundColor={'#3F51B5'}
          labelColor={'#fff'}
          onRequestDelete={() => this.props.handleProblemDelete(idx, key)}
        >
          {listCurrentProblems[key].problem}
        </Chip>
      );
    });
    return problemChips;
  }

  handleUpdateInput = (titleText) => {
    this.setState({
      newProblemTitle: titleText,
    });
  };

  handleUpdateDes = (des) => {
    this.setState({
      newProblemDescription: this.refs.des.getValue()
    });
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
        ref={"des"}
        onChange={this.handleUpdateDes}
      />
    );
  }

  render() {
    if(!this.props.seatNumber) return null
    const properties = this.props.properties
    console.log("properties", this.props.seatNumber)
    
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
        onClick={() => this.props.handleSubmit(this.props.seatNumber, this.state.newProblemTitle, this.state.newProblemDescription)}
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
        <Divider/>
        <p><span>Current status: </span><span>{ properties[this.props.seatNumber] ? "Pending Issues" : "No Problems"}</span></p>
        <div><span>Current Problems: </span><div className="chipWrapper">{this.buildProblemChips(properties[this.props.seatNumber])}</div></div> 
        <div>Add New Problem: <span>{this.buildAddProblem()}</span></div>   
        <div>Description(Optional): <span>{this.buildAddProblemDes()}</span></div>     
      </Dialog>
    );
  }
}