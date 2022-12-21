import React, { Component, useState } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './ClientList';
import ClientEdit from "./ClientEdit";
import Dashboard from './components/Dashboard/Dashboard';
import Pagereload from './components/Pagereload/Pagereload';
import Login from './components/Login/Login';
import useToken from './useToken';



function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/clients' exact={true} component={ClientList}/>
          <Route path='/clients/:id' component={ClientEdit}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/pagereload" component={Pagereload}/>
        </Switch>
      </Router>
  )
}

export default App;
