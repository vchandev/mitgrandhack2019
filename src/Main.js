import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import patient from "./patient";
import surgeon from "./surgeon";
import radiologist from "./radiologist"
import erphysician from "./erphysician";
import patientlog from "./patientlog"
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Pre-Surgical Operation Patient Data</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/patient">Patient</NavLink></li>
                    <li><NavLink to="/erphysician">ER Physician</NavLink></li>
                    <li><NavLink to="/radiologist">Radiologist</NavLink></li>
                    <li><NavLink to="/surgeon">Surgeon</NavLink></li>
                    <li><NavLink to="/patientlog">Patient Log</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/patient" component={patient}/>
                    <Route path="/erphysician" component={erphysician}/>  
                    <Route path="/radiologist" component={radiologist}/>
                    <Route path="/surgeon" component={surgeon}/>     
                    <Route path="/patientlog" component={patientlog}/>             
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;