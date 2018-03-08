import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './Overview';
import moment from 'moment';
import { Link } from 'react-router-dom';
// import whatever else you like here

// Declare your Component here
class EmployeesPanel extends Component{
    constructor(){
        super();

        this.state = {
            employees: []
        }
    }
    componentDidMount(){
        axios.get("https://thawing-scrubland-31899.herokuapp.com/employees").then((res)=>{
            this.setState({
                employees: res.data,

            });
        }).catch((err)=>{
            console.log("Not Found");

        });
    }

    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Employees</h3>
            </div>
            <div className="panel-body">
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            {this.state.employees.map((obj, index) => {
                                return (
                                    <tr key={obj._id}>
                                        <td>{obj.FirstName} {obj.LastName}</td>
                                           <td>{obj.Position.PositionName}</td>
                                    </tr>
                                );
                            })}
                      </tbody>
                    </table>
                </div>
                <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
            </div>
            </div>
        );
    }
}

export class Employees extends Component{
    constructor(){
        super();

        this.state = {
            employees: []
        }
    }
    componentDidMount(){
        axios.get("https://thawing-scrubland-31899.herokuapp.com/employees").then((res)=>{
            this.setState({
                employees: res.data,

            });
        }).catch((err)=>{
            console.log("Not Found");

        });
    }

    render(){
        return(
            <MainContainer SideBar='Employees'>
              <h1>Employees</h1>
                <div>
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name & Position</th>
                                    <th>Address</th>   
                                    <th>Phone Number</th>  
                                    <th>Hire Date</th>  
                                    <th>Salary Bonus</th>       
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.map((obj, index) => {
                                    let mDate = moment(obj.HireDate);
                                    return (
                                        <tr key={obj._id}>
                                            <td width="30%">{obj.FirstName} {obj.LastName} - {obj.Position.PositionName}</td>
                                            <td width="25%">{obj.AddressStreet} <br/> {obj.AddressCity}, 
                                            {obj.AddressState} {obj.AddressZip}</td>
                                            <td>{obj.PhoneNum} ext: {obj.Extension}</td>
                                            <td>{mDate.format('LL').toString()}</td>
                                            <td>${obj.SalaryBonus}</td>
                                        </tr>
                                    );
                                })}
                          </tbody>
                        </table>
                </div>
            </div>
            </MainContainer>
        );
    }
}

export default EmployeesPanel;