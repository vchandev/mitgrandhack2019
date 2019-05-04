import React, { Component } from "react";
 
class patient extends Component {

  constructor(props) {
    super(props);     //inherit from React.Component
  }
  
  render() {
    console.log(this.state);
    return( 
      <div>
        <h1>Relevant Information - Surgery</h1>
        <ul>
          <li>Patient Name: Mary Smith</li>
          <li>Age: 24</li>
          <li>Sex: F</li>
          <li>Height: 5' 8"</li>
          <li>Weight: 120 lbs</li>
        </ul>

        <h1>Reason of Consultation and Final Radiological Findings</h1>
        <ul>
          <li>04/05/2019: RLQ Pain, fever and positive peritoneal findings, R/O appendicitis. Click to see more detailed patient note from ER consult. </li>
          <ul>
            <li>Final Radiological Findings: Strong clinical suspicion of appendicitis. Click to be redirected to full radiology report. </li>
          </ul>
          <li></li>
        </ul>

        <h1>Relevant Laboratory Tests</h1>
        <ul>
          <li>04/05/2019:</li>
          <li>WBC: 19.9 x 10^9 WBC/L</li>
          <li>ESR: 100 mm/hr</li> 
          <li>CRP: 60 mg/l</li> 
          <li>PTT: 12 seconds</li>
          <li>PT: 29 seconds</li>
          <li>VWF: 25 IU/dL</li>
          <li>OTHER TESTS ORDERED (less relevant to acute surgery): Click to be directed to the full patient note</li>
          <br></br>
        </ul>

        <h1>Relevant past Medical History to Surgery</h1>
        <ul>
          <li>Blood dyscrasias: Von Willebrand Disease - Type 1</li>
          <li></li> 
          <li></li> 
          <br></br>
        </ul>

        <h1>Vital Signs</h1>
        <ul>
        <li>Consult: ER 04/05/2019</li>
          <ul>
          <li>Heart Rate: 90 bpm</li>
          <li>Respiratory Rate: 18 breaths per sec</li> 
          <li>SPO2: 98%</li>
          <li>Blood Pressure: 160/90 mmhg</li>
          <li>Temp: 39.4 C</li>
          <li>Appearance: Pale complexion, severe, generalized abdominal pain</li>
          </ul>
        </ul>


        <h1>Medications</h1>
        <ul>
          <li>Insulin</li>
          <li>DDAVP</li>
        </ul>

        <h1>Allergies</h1>
        <ul>
          <li>Contrast</li>
          <li>Latex</li>
          <li>Penicillin</li>
        </ul>

        <h1>Conclusion:</h1>
        <ul>
          <li>TREATMENT CHOICE DEPENDENT CRITERIA (identified by AI)- Age: under 30, sx present under 48hr, generalized tenderness on abdominal examination, WBC Count: over 19.4 x 10^9 L, Abcess: keyword identified in radiological report</li>
          <li>FINAL INDICATION recommended: OPEN APPENDECTOMY or Early Laparoscopic Appendectomy WITH Blake drain installation + pre and post op antibiotherapy</li>
          <li></li>
        </ul>
 
      </div>    
    );
  }
}

export default patient;