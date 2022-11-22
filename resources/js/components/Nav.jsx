import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import logo from '../../css/logo-proauto.png';

const Navigation = () => {

    let users = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();
    function logOut() {
        localStorage.clear();
        navigate.push('/');
    }

    
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/HomePage">
                    <img
                        src={logo} height={'90px'}
                    />
                    <b>Sistema - ProautosXpress</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>

                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Nav>
                                    <Nav.Link onClick={logOut}>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" height={'30px'}
                                        />
                                        <b>Cerrar Session</b>
                                    </Nav.Link>

                                </Nav>
                            </>
                            :
                            <>
                                <Nav>
                                    <Nav.Link as={Link} to="/Login">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/891/891372.png" height={'45px'}
                                        />
                                        <b>Login</b></Nav.Link>
                                    <Nav.Link as={Link} to="/Register">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/138/138659.png" height={'45px'}
                                        />
                                        <b>Registrarse</b></Nav.Link>
                                </Nav>
                            </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation