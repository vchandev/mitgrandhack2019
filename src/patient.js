import React, { Component } from "react";
 
class patient extends Component {

  constructor(props) {
    super(props);     //inherit from React.Component
  }
  
  render() {
    console.log(this.state);
    return( 
      <div>
        <h1>Patient Data</h1>
        <ul>
          <li>Patient Name: Mary Smith</li>
          <li>Age: 24</li>
          <li>Sex: F</li>
          <li>Height: 5' 8"</li>
          <li>Weight: 120 lbs</li>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Past Medical History</h1>
        <ul>
          <li>Diabetes - Type 1</li>
          <li>Von Willebrand Disease - Type 1</li> 
          <li></li> 
          <br></br>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Family Medical History</h1>
        <ul>
          <li>Mother</li>
          <li>Deceased, age 55, myocardial infarction</li>
          <li>Father</li> 
          <li>Nil</li>
          <li>Sibling</li> 
          <li>N/A</li>
          <br></br>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Medications</h1>
        <ul>
          <li>Insulin</li>
          <li>DDAVP</li>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Allergies</h1>
        <ul>
          <li>Contrast</li>
          <li>Latex</li>
          <li>Penicillin</li>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Lifestyle Habits</h1>
        <ul>
          <li>Smoking - 1 pack per day since age 18</li>
          <br></br>
          <li>Alcohol - On occasion, 1-2 consumptions</li>
          <br></br>
          <li>Drug Use - Cannabis, on occasion, roughly 1 joint per month</li>
          <br></br>
        </ul>
      </div>    
    );
  }
}

export default patient;