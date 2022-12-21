import React, { Component, useState } from 'react';
import '../../App.css';
import './Login.css';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      // console.log(username);
      // console.log(password);
      // console.log(token);
      setToken(token);
    }

    return (

      <div>
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
            <label className="form-label">
              <input type="text" onChange={e => setUserName(e.target.value)} id="form3Example1c" className="form-control" />
              Your Name</label>
            </div>
          </div>


          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
            <label className="form-label">
              <input type="password" onChange={e => setPassword(e.target.value)} id="form3Example4c" className="form-control" />
              Password</label>
            </div>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <Button className="btn btn-primary btn-lg"> Submit </Button>
          </div>

        </form>
        </div>

    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }