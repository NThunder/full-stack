import React, {Component, useState} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Button} from 'reactstrap';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    signOut = () => { 
        localStorage.setItem('token', "{\"token\": \"\"}");
        window.location.reload();
    }

    render() {
        return <Navbar color="dark" dark expand="md ml-1">
            <NavbarBrand className='mr-auto' tag={Link} to="/">Healthy Food Planner
            </NavbarBrand>
            <Button size="sm" color="primary"
                    className='btn btn-success pull-right mr-auto'
                    onClick={() => this.signOut()}
                    tag={Link}
                    to={"/"}>Sign Out </Button>
        </Navbar>;
    }
}