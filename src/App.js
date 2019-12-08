import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Content from './Content';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
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
            </Navbar>
            <Content />
        </div>
    );
}

export default App;
