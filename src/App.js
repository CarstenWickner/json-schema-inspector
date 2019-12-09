import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './Content';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="32"
                            height="32"
                            className="d-inline-block align-top"
                        />{' '}
                        JSON Schema Inspector
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="https://github.com/CarstenWickner/react-jsonschema-inspector">GitHub</Nav.Link>
                            <Nav.Link href="https://carstenwickner.github.io/react-jsonschema-inspector/?path=/docs/inspector--show-case">Storybook</Nav.Link>
                            <Nav.Link href="https://github.com/CarstenWickner/react-jsonschema-inspector/issues">Found an Issue?</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Content />
        </div>
    );
}

export default App;
