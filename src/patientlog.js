import React, { Component } from "react";
import moment from 'moment';
 
class patientlog extends Component {

  constructor() {
    super();

    this.displayData = [];

    this.state = {
      showdata : this.displayData,
      postVal : ""
    }

    this.appendData = this.appendData.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.baseState = this.state;
  };

appendData() {
  this.displayData.push(<div id="display-data"><pre>{moment().format('MMMM Do YYYY, h:mm:ss a')} {this.state.postVal}</pre></div>);
  this.setState({
    showdata : this.displayData,
    postVal : ""
  });
}

resetForm = () => {
  this.setState(this.baseState)
  this.displayData = [];
}

handleChange(e) {
  let getTextAreaValue = e.target.value;
  this.setState({
    postVal :getTextAreaValue
  });
}

render() {
  return (
        <div id="mainContainer">

          <h1>Live Patient Log</h1>

          <div id="display-data-Container">
            <p>{this.displayData}</p>
          </div>
          
          <textarea rows="10" cols="100" placeholder="Enter log entry" value={this.state.postVal} onChange={this.handleChange} ></textarea>
          
          <br></br>
          <br></br>
          
          <div>
            <input id="submitbutton" type="submit" className="button" onClick={this.appendData} value="Submit"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input id="resetbutton" onClick={this.resetForm} type="button" value="Clear"/>
          </div>

        </div>
    );
  } 
}

export default patientlog;