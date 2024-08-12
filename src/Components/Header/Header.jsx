import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import logo from '../../assets/images/logo.png'
import './Header.css'

function Header() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container fluid style={{ width: '95%' }}>
                <Navbar.Brand href="#">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link fw-bold'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link fw-bold'} onClick={() => onUpdateActiveLink('about')}>About Us</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link fw-bold'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link fw-bold'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>

                    </Nav>

                    <Form className="d-flex justify-content-between">

                        <Button className=' me-4 border-light bg-transparent headerBtn'>Login</Button>
                        <Button className=' BookAppointmentBtn headerBtn'>Book an appointment  </Button>

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

