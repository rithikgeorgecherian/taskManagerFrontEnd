import React, { useContext } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <BootstrapNavbar bg="dark" variant="dark">
            <Container>
                <BootstrapNavbar.Brand href="/">Task Manager</BootstrapNavbar.Brand>
                <Nav className="ml-auto">
                    {user ? (
                        <>
                            <Link to="/tasks" className="nav-link">Tasks</Link>
                            <Button variant="outline-light" onClick={logout}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/register" className="nav-link">Register</Link>
                        </>
                    )}
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;
