import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar inverse fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Weather Demo :: React &amp; Redux</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href="/">Overview</NavItem>
                <NavItem href="/details">Details</NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;