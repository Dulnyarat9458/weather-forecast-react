import React from "react";
import { Button, Card, Row, Col, Container, Nav, Navbar, Jumbotron, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function
    NavbarApp() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">WEATHER FORECAST</Navbar.Brand>
             {/*    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> */}
            </Container>
        </Navbar>
    );
}

export default NavbarApp;