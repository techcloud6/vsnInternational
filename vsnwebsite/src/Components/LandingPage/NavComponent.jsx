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
        
          <Navbar.Collapse id="responsive-navbar-nav " className="nav-content">
          <div id='navs'>
            <Nav className="menu-item">
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/'
                style={{ marginRight: '57px' }} >
                ABOUT
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/OurServices'
                style={{ marginRight: '57px' }} >
                SERVICE
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/OurPartners'
                style={{ marginRight: '57px' }} >
                PARTNERS
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/OurClient'
                style={{ marginRight: '57px' }} >
                CLIENTS
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/Careers' 
                style={{ marginRight: '57px' }} >
                CAREERS
              </Nav.Link>
              <Nav.Link
                className="nav-menu"
                as={Link}
                to='/contact'
                style={{ marginRight: '57px' }} >
                CONTACT
              </Nav.Link>
            </Nav>


            </div>

            <Nav className="menu-item">
              <Nav.Link
                className="nav-menu nsbar">
                <h3>
                VSN | CLOUD
                </h3>
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
