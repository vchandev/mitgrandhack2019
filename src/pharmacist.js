import React, { Component } from "react";

class pharmacist extends React.Component {

  constructor(props) {
    super(props);     //inherit from React.Component
  }   
  
  render() {
    console.log(this.state);
    return( <p>
      This is Pharmacist data
    </p>
    );
  }
}

export default pharmacist;