import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <Navbar inverse fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    Weather App
                </Navbar.Brand>
            </Navbar.Header>
            
            <ul className="nav navbar-nav">
                <li><IndexLink to="/">Edinburgh</IndexLink></li>
                <li><Link to="/search">Find More Cities...</Link></li>
            </ul>
        </Navbar>
    );
};

export default Header;