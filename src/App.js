import React, { Component } from 'react';
import { Overview }from './Overview.js';
import { NotFound }from './Overview.js';
import { Projects } from './ProjectsPanel';
import { Teams } from './TeamsPanel';
import { Employees } from './EmployeesPanel';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <Switch>
        <Route exact path='/' render={() => (
          <Overview/>
        )}/>
        <Route exact path='/Projects' render={() => (
          <Projects/>
        )}/>
        <Route exact path='/Teams' render={() => (
          <Teams/>
        )}/>
        <Route exact path='/Employees' render={() => (
          <Employees/>
        )}/>
        <Route exact path='/NotFound' render={() => (
          <NotFound/>
        )}/>
      </Switch>
    );
  }
}

export default App;
