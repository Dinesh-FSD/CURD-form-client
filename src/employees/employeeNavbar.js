import React from "react";
import './styles.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateEmployee from "./employeeDetails.component";
import EditEmployee from "./editEmployee.component";
import EmployeeList from "./employeeList.component";


function EmployeeNav() {
  return (
    <Router>
      <div class="wrapper d-flex">
    <div class="sidebar">
        <p class="myproject px-3">EMPLOYEE DETAILS</p>
        <ul>
            <Link to={"/create-employee"} className="nav-link">
                <li>  Create Employee</li>
                </Link>
              
              {/* <Link to={"/edit-employee/:id"} className="nav-link">
              <li> Edit Employee </li>
                  </Link> */}
              
              <Link to={"/employee-list"} className="nav-link">
            <li> Employee List</li>
                </Link>
        </ul>
        <p class="myproject px-3">PROJECTS</p>
        <ul>
            <li><a href="#">Website redesign</a></li>
            <li><a href="#">GraphQL API</a></li>
            <li><a href="#">Customer migration guides</a></li>
            <li><a href="#">Profit sharing program</a></li>
        </ul>
    </div>
              <Switch>
                <Route exact path='/' component={CreateEmployee} />
                <Route path="/create-employee" component={CreateEmployee} />
                <Route path="/edit-employee/:id" component={EditEmployee} />
                <Route path="/employee-list" component={EmployeeList} />
              </Switch>
              
    </div>
  </Router>);
}

export default EmployeeNav;
