import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class EmployeeTable extends Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        // this.onClick = this.onClick.bind(this);
    }
    
    deleteEmployee() {
        axios.delete('http://localhost:4000/employee/delete-employee/' + this.props.obj._id)
            .then((res) => {
                console.log('Employee successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.position}</td>
                <td>{this.props.obj.office}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.salary}</td>
                <td>
                    <Link className="edit-link" to={"/edit-employee/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteEmployee} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}