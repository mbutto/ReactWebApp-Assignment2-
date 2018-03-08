import React, { Component } from 'react';
import ProjectsPanel from './ProjectsPanel';
import EmployeesPanel from './EmployeesPanel';
import TeamsPanel from './TeamsPanel';
import { Link } from 'react-router-dom';
// import whatever else you like here

// Declare your Component here
export class Overview extends Component{
    render(){
        return (
            <MainContainer SideBar='Overview'>
                <h1 className="page-header">Overview</h1>
                <div className="row">
                    <div className="col-md-4">
                        <ProjectsPanel/>
                    </div>
                    <div className="col-md-4">
                        <TeamsPanel/>
                    </div>
                    <div className="col-md-4">
                        <EmployeesPanel/>
                    </div>
                </div>
            </MainContainer>
        );
    }
}

class NavBar extends Component{
    render(){
      return (
          <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="/">BTI425 - Michael Butto - Project Portal</a>
                  </div>
              </div>
          </nav>
      );
    }
}

class SideBar extends Component{
    render(){
      return (
        <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
                <li className={(this.props.highlight === 'Overview' ? 'active' : '')}><a href="/">Overview <span className="sr-only">(current)</span></a></li>
            </ul>
            <ul className="nav nav-sidebar">
                <li className={(this.props.highlight === 'Projects' ? 'active' : '')}><Link to="/projects">Projects</Link></li>
                <li className={(this.props.highlight === 'Teams' ? 'active' : '')}><Link to="/teams">Teams</Link></li>
                <li className={(this.props.highlight === 'Employees' ? 'active' : '')}><Link to="/employees">Employees</Link></li>
            </ul>
        </div>
      );
    }
}

class MainContainer extends Component{
    render(){
        return(
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <SideBar highlight={this.props.SideBar}/>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        {this.props.children}
                    </div>
                </div>
            </div>    
        </div>
        );
    }
}


export class NotFound extends Component{
    render(){
        return(
        <MainContainer>
            <h3>View Requested not Found</h3>
        </MainContainer>
        );
    }
}

// export the component by name
export default MainContainer; 
