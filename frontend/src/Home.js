import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/clients">Dishes</Link></Button>
                    <Button color="link"><Link to="/dashboard">Dashboard</Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;