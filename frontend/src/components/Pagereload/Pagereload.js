import React, { Component } from 'react';
import '../../App.css';
import AppNavbar from '../../AppNavbar';
import {Container } from 'reactstrap';

class Preferences extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h2>Please, reload the page!</h2>
                </Container>
            </div>
        );
    }
}

export default Preferences;