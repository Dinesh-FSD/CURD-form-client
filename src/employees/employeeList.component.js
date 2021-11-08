import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EmployeeTable from './employeeTable';
export default class EmployeeList extends Component {

    constructor(props) {
      super(props)
      this.state = {
        employee: []
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:4000/employee/')
        .then(res => {
          this.setState({
            employee: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    DataTable() {
      return this.state.employee.map((res, i) => {
        return <EmployeeTable obj={res} key={i} />;
      });
    }
  
  
    render() {
      return (<div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start Date</th>
              <th>salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
      </div>);
    }
  }