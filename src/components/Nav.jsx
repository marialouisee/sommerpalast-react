import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {

    Link as RouterLink
  } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const MyNav = () => {
    return (
        <>
        <Navbar className='d-flex mynav' collapseOnSelect expand='sm'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
                <Navbar.Collapse className="justify-content-end ">
                    <Nav>
                        <Nav><Link activeClass="active" className="navLink" to="home" spy={true} smooth={true} duration={500}>HOME</Link></Nav>
                        <Nav><Link activeClass="active" className="navLink" to="sommerpalast" spy={true} smooth={true} duration={500}>Sommerpalast</Link></Nav>
                        <Nav><Link activeClass="active" className="navLink" to="eismanufaktur" spy={true} smooth={true} duration={500}>Eismanufaktur</Link></Nav>
                        <Nav><Link activeClass="active" className="navLink" to="kurse" spy={true} smooth={true} duration={500}>Kurse</Link></Nav>
                        <Nav><Link activeClass="active" className="navLink" to="soon" spy={true} smooth={true} duration={500}>Bald für Sie</Link></Nav>
                        <Nav><Link activeClass="active" className="navLink" to="contact" spy={true} smooth={true} duration={500}>Kontakt</Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            
        </>
    )
}

export default MyNav
