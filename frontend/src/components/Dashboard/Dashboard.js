import React, { Component } from 'react';
import '../../App.css';
import AppNavbar from '../../AppNavbar';
import {Container } from 'reactstrap';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h1>Application</h1>
                    <h2>Dashboard</h2>
                </Container>
            </div>
        );
    }
}

export default Dashboard;