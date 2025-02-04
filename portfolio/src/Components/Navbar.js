import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../CSS/Navbar.css';

const NavigationBar = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Navbar bg="white" expand="lg" className="custom-navbar shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand">
                    TaskZen
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {isLoggedIn ? (
                            <>
                                <Nav.Link as={Link} to="/" className="nav-link">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/todolist" className="nav-link">
                                    Add Task
                                </Nav.Link>
                                <Nav.Link as={Link} to="/tasks" className="nav-link">
                                    View Tasks
                                </Nav.Link>
                                <Nav.Link onClick={handleLogout} className="nav-link">
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" className="nav-link">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" className="nav-link">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
