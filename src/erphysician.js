import React, { Component } from "react";

class erphysician extends React.Component {

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

        <h1>Vital Signs</h1>
        <ul>
          <li>Heart Rate: 90 bpm</li>
          <li>Respiratory Rate: 18 breaths per sec</li> 
          <li>SPO2: 98%</li>
          <li>Blood Pressure: 160/90 mmhg</li>
          <li>Temp: 39.4 C</li>
          <li>Appearance: Pale complexion, severe, generalized abdominal pain</li>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Reason of Consultation</h1>
        <ul>
          <li>14 hours prior to admission, the patient experienced mild generalized abdominal pain that migrated to the right lower quadrant as the day progressed. The severity of the pain was steadily increasing as the day progressed. Generalized, extreme and sudden periumbilical abdominal pain returned 1 hour prior to ER consult, which coincided with the onset of a fever and general decrease of the general state of the patient. </li>
          <li></li>
          <li></li> 
          <li></li>
          <li></li> 
          <li></li>
          <br></br>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Physical Exam Findings:</h1>
        <ul>
          <li>RLQ tenderness </li>
          <li>Rebound and Guarding Positive</li>
          <li>Rovsing Sign Positive</li> 
          <li>Generalized abdominal tenderness</li>
          <li></li> 
          <li></li>
          <br></br>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Lab tests ordered + live results:</h1>
        <ul>
          <li>WBC</li>
          <li>RBC</li>
          <li>Hemoglobin</li> 
          <li>Hematocrit</li>
          <li>Platelets</li> 
          <li>PTT</li>
          <li>PT</li>
          <li>VWF</li>
          <li>AST</li>
          <li>ALT</li>
          <li>GGT</li>
          <li>Bilirubin (unconjugated and conjugated)</li>
          <li>Creatinine</li>
          <li>Creatine Kinase</li>
          <li>Estimated GFR</li>
          <li>BUN</li>
          <li></li>
          <br></br>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Imagery ordered:</h1>
        <ul>
          <li>Plain and Triphasic IV Contrast enhanced axial CT Scan of abdomen and pelvis</li>
          <li>Abdominal Ultrasound with power doppler</li>
          <li></li> 
          <li></li>
          <li></li> 
          <li></li>
          <br></br>
        </ul>

        <hr width="60%" align="left"></hr>

        <h1>Clinical Suspicions at this stage</h1>
        <ul>
          <li>Acute Appendicitis</li>
          <li>Ectopic Pregnancy</li>
          <li>Volvulus</li> 
          <li></li>
          <li></li> 
          <li></li>
          <br></br>
        </ul>
      </div>    
    );
  }
}

export default erphysician;