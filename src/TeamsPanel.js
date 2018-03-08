import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './Overview';
import moment from 'moment';
import { Link } from 'react-router-dom';
// import whatever else you like here

// Declare your Component here
class TeamsPanel extends Component{
    constructor(){
        super();

        this.state = {
            teams: []
        }
    }
    componentDidMount(){
        axios.get("https://thawing-scrubland-31899.herokuapp.com/teams").then((res)=>{
            this.setState({
                teams: res.data,

            });
        }).catch((err)=>{
            console.log("Not Found");

        });
    }

    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Teams</h3>
            </div>
            <div className="panel-body">
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <tbody>                    
                            {this.state.teams.map((obj, index) => {
                                return (
                                    <tr key={obj._id}>
                                        <td>{obj.TeamName}</td>
                                        <td>{obj.Employees.length} Employees</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
            </div>
            </div>
        );
    }
}

export class Teams extends Component{
    constructor(){
        super();

        this.state = {
            teams: []
        }
    }
    componentDidMount(){
        axios.get("https://thawing-scrubland-31899.herokuapp.com/teams").then((res)=>{
            this.setState({
                teams: res.data,

            });
        }).catch((err)=>{
            console.log("Not Found");

        });
    }

    render(){
        return(
            <MainContainer SideBar='Teams'>
                <h1>Teams</h1>
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Projects</th>   
                                    <th>Employees</th> 
                                    <th>Lead</th>      
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teams.map((obj, index) => {
                                    let mDate = moment(obj.ProjectStartDate);
                                    return (
                                        <tr key={obj._id}>
                                            <td width="15%">{obj.TeamName}</td>
                                            <td>
                                                <ul>
                                                    <li>{obj.Projects[0].ProjectName}</li>
                                                    <li>{obj.Projects[1].ProjectName}</li>
                                                </ul>
                                            </td>
                                            <td width="20%">{obj.Employees.length} Employees</td>
                                            <td width="30%">{obj.TeamLead.FirstName} {obj.TeamLead.LastName}</td>
                                        </tr>
                                    );
                                })}
                          </tbody>
                        </table>
                </div>
            </MainContainer>
        );
    }
}

export default TeamsPanel;