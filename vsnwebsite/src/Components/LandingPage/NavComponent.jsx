import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./landingPage.scss"
import OurClient from '../OurClient/OurClient';
import { Link } from 'react-router-dom';

export default function NavComponent() {


  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-color mainNav"

      >
        <Container className="responsive">
          <Navbar.Toggle
            className="responsive-navbar " />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav-content">
            <Nav className="menu-item">
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/'>
                ABOUT
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/OurServices'>
                SERVICE
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/OurPartners'>
                PARTNERS
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/OurClient'>
                CLIENTS
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/Careers'>
                CAREERS
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/contact'>
                CONTACT
              </Nav.Link>

            </Nav>

            <Nav className="menu-item">
              <Nav.Link
                className="nav-menu">
                VSN CLOUD
              </Nav.Link>
              </Nav>




          </Navbar.Collapse>
          {/* <Nav.Link
            className="nav-logo">
            VSN CLOUD
          </Nav.Link> */}





        </Container>
      </Navbar>
    </>

  )
}
