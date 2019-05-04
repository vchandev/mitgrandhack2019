import React, { Component } from "react";
 
class radiologist extends Component {

  constructor(props) {
    super(props);     //inherit from React.Component
    
  }   
  
  render() {
    console.log(this.state);
    return( 
      <div>
        <h1>Relevant Information - Radiology</h1>
        <ul>
          <li>Patient Name: Mary Smith</li>
          <li>Age: 24</li>
          <li>Sex: F</li>
          <li>Height: 5' 8"</li>
          <li>Weight: 120 lbs</li>
        </ul>

        <h1>Reason of Consultation</h1>
        <ul>
          <li>04/05/2019: RLQ Pain, fever and positive peritoneal findings, R/O appendicitis</li>
          <li>04/08/2016: ....</li>
          <li></li>
        </ul>

        <h1>Allergies</h1>
        <ul>
          <li>To contrast: no</li>
          <li></li>
          <li></li>
        </ul>

        <h1>Renal and Liver Parameters</h1>
        <ul>
          <li>GFR: 100 mL/min/1.73 m2</li>
          <li>BUN: 2.8 mmol/L</li>
          <li>AST: 24 uL</li>
          <li>ALT: 10 uL</li>
        </ul>       

        <h1>Radiology Reports</h1>
        <ul>
          <li>04/05/2019 - Abdomino-Pelvic CT Scan: Technique: Plain and Triphasic IV Contrast enhanced axial CT Scan of abdomen and pelvis has been performed with retrospective 2D multiplanar reconstruction. LIVER, RETROPERITONEUM AND PANCREAS: Multiple small simple cysts are seen in all segments of the liver, with a particular predilection for segment 6. GALLBLADDER: Gallbladder is distended with normal wall thickness. It shows no hypersense calculi within. APPENDIX: CT depicts a fluid-filled distended appendix with periappendiceal fat-stranding. Fluid collection is seen in the appendicular region with air within highly suggestive of appendicular abcess indicative of a suppurative process in place. Appendicolith can be visualized. BOWEL: unremarkable. PERITONEUM: FREE ABDOMINAL SPACE: Evidence of free liquid within the subhepatic space. DIAGNOSTIC SUSPICION: Strong clinical suspicion for suppurative acute appendicitis.    </li>
          <li>04/05/2019 - RLQ Ultrasound Emergent:  Longitudinal and transverse sonogram show an enlarged appendix surrounded by hyperechoic inflamed fat. Power Doppler sonography shows hypervascularity of the appendiceal wall. Evidence of free liquid within the subhepatic space. </li>
          <li></li>
          <li>...</li>
        </ul>  
      </div>    
    );
  }
}
 
export default radiologist;