import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './Overview';
import { Link } from 'react-router-dom';
// import whatever else you like here

// Declare your Component here
class ProjectsPanel extends Component{
    constructor(){
        super();

        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        axios.get("https://thawing-scrubland-31899.herokuapp.com/projects").then((res)=>{
            this.setState({
                projects: res.data,

            });
        }).catch((err)=>{
            console.log("Not Found");

        });
    }

    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Projects</h3>
            </div>
            <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                
                                {this.state.projects.map((obj, index) => {
                                    let mDate = moment(obj.ProjectStartDate);

                                    return (
                                        <tr key={obj._id}>
                                            <td>{obj.ProjectName}</td>
                                            <td>{mDate.fromNow()}</td>
                                        </tr>
                                    );
                                })}
                          </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
            </div>
            </div>
        );
    }
}

export class Projects extends Component{
    constructor(){
        super();

        this.state = {
            projects: []
        }
    }
    
    componentDidMount(){
        axios.get("https://thawing-scrubland-31899.herokuapp.com/projects").then((res)=>{
            this.setState({
                projects: res.data,

            });
        }).catch((err)=>{
            console.log("Not Found");

        });
    }

    render(){
        return(
            // <div className="panel panel-default">
            // <div className="panel-heading">
            //   <h3 className="panel-title">Projects</h3>
            // </div>
            <MainContainer SideBar='Projects'>
                <h1>Projects</h1>
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>   
                                <th>Start Date</th>   
                                <th>End Date</th>   
                            </tr>
                        </thead>
                            <tbody>                  
                                {this.state.projects.map((obj, index) => {
                                    let mDate = moment(obj.ProjectStartDate);
                                    let mDate2 = moment(obj.ProjectEndDate);

                                    return (
                                        <tr key={obj._id}>
                                            <td width="15%">{obj.ProjectName}</td>
                                            <td>{obj.ProjectDescription}</td>
                                            <td width="15%">{mDate.format('LL').toString()}</td>
                                            <td width="15%">{mDate2.format('LL').toString()}</td>
                                        </tr>
                                    );
                                })}
                          </tbody>
                        </table>
                    </div>
            </MainContainer>
            // </div>
        );
    }
}

export default ProjectsPanel;