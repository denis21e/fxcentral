import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginModal = ({ onClose, onLogin, onSignup }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/api/user/login?email=${email}&password=${password}`);

      if (response.status === 200) {
        console.log('User logged in successfully');
        onLogin(response.data); 
        onClose(); 
      } else {
        console.error('Failed to log in');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignup = () => {
    onClose();
    onSignup(); 
  };

  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group><Button variant="link" onClick={handleSignup}> 
              Don't have an account? Sign Up
            </Button>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Log In
            </Button>
            
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;