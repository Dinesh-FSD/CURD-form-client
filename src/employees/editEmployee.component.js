import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditEmployee extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeePostion = this.onChangeEmployeePostion.bind(this);
    this.onChangeEmployeeOffice = this.onChangeEmployeeOffice.bind(this);
    this.onChangeEmployeeAge = this.onChangeEmployeeAge.bind(this);
    this.onChangeEmployeeDate = this.onChangeEmployeeDate.bind(this);
    this.onChangeEmployeeSalary = this.onChangeEmployeeSalary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      postion: '',
      office: '',
      age: '',
      date:'',
      salary:''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/employee/edit-employee/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          position: res.data.position,
          office: res.data.office,
          age : res.data.age,
          date: res.data.date,
          salary: res.data.salary
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeEmployeePostion(e) {
    this.setState({ position: e.target.value })
  }

  onChangeEmployeeOffice(e) {
    this.setState({ office: e.target.value })
  }

  onChangeEmployeeAge(e) {
    this.setState({ age: e.target.value })
  }

  onChangeEmployeeDate(e) {
    this.setState({ date: e.target.value })
  }

  onChangeEmployeeSalary(e) {
    this.setState({ salary: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const employeeObject = {
      name: this.state.name,
      position: this.state.position,
      office: this.state.office,
      age : this.state.age,
      date: this.state.date,
      salary: this.state.salary
      };

    axios.put('http://localhost:4000/employee/update-employee/' + this.props.match.params.id, employeeObject)
      .then((res) => {
        console.log(res.data)
        console.log('employee successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to employee List 
    this.props.history.push('/employee-list')
  }


  render() {
    return (<div>
      
      <div className="form-wrapper">
      <h3> update the employee details </h3>
    <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={this.state.name} onChange={this.onChangeEmployeeName} required/>
      </Form.Group>

      <Form.Group controlId="Position">
        <Form.Label>Position</Form.Label>
        <Form.Control type="text" value={this.state.position} onChange={this.onChangeEmployeePostion} required/>
      </Form.Group>

      <Form.Group controlId="office">
        <Form.Label>Office</Form.Label>
        <Form.Control type="text" value={this.state.office} onChange={this.onChangeEmployeeOffice} required/>
      </Form.Group>

      <Form.Group controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" value={this.state.age} onChange={this.onChangeEmployeeAge} required/>
      </Form.Group>


      <Form.Group controlId="date">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date" value={this.state.date} onChange={this.onChangeEmployeeDate} required/>
      </Form.Group>

      <Form.Group controlId="salary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" value={this.state.salary} onChange={this.onChangeEmployeeSalary} required/>
      </Form.Group>

      <Button variant="danger" size="lg" block="block" type="submit">
        update Employee
      </Button>
    </Form>
    </div>
    </div>);
  }
}
