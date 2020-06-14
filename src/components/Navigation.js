import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Navigation() {
    let openNewTab = (url) => {
        let win = window.open(url, '_blank');
    }
    return (
        <div>
            <Navbar variant="dark" expand="lg" style={{backgroundColor: "rgba(0, 0, 0)", fontSize: "20px"}} sticky="top">
                <Navbar.Brand as={Link} to="/">HENRY NGUYEN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/about" >About</Nav.Link>
                    <Nav.Link as={Link} to="/projects" >Projects</Nav.Link>
                    <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                    <Nav.Link type="button" onClick={() => openNewTab("https://anhnguyenhenry.myportfolio.com/")}>Photography</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
