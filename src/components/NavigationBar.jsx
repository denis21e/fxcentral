import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import logoImage from '../assets/fx.jpg';

const NavigationBar = ({ user, onSignupClick, onLoginClick }) => {
  return (
    <>
      <div className="support-bar">
        <Container>
          <div className="d-flex justify-content-end">
            <p className="mb-0">Questions? - support@FXcentral.com</p>
          </div>
        </Container>
      </div>
      <Navbar expand="lg" className="bg-white py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="brand-container">
              <div className="logo-container">
                <img 
                  src={logoImage} 
                  alt="FXC logo" 
                  className="logo-image"
                />
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-item">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-item">Contact Us</Nav.Link>
              {user ? (
                <Nav.Link as={Link} to="/profile" className="nav-item" style={{ cursor: 'pointer' }}>
                  {user.name}
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link onClick={onLoginClick} className="nav-item" style={{ cursor: 'pointer' }}>
                    Log in
                  </Nav.Link>
                  <Nav.Link onClick={onSignupClick} className="nav-item" style={{ cursor: 'pointer' }}>
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="m-0" />
    </>
  );
};

export default NavigationBar;