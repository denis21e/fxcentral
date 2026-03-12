import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setValidated(true);
    
   
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setSubmitStatus(null); 
    }, 5000);
  };
  
  return (
    <div id="contact" className="contact-section">
      <Container>
        <h2 className="section-title text-center mb-5">Contact Us</h2>
        
        <Row>
          <Col lg={6} className="mb-4">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Have questions about our courses or need assistance with your trading journey? We're here to help!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="contact-icon">✉️</i>
                  <div>
                    <h4>Email Us</h4>
                    <p>support@thetradingchannel.net</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="contact-icon">⏰</i>
                  <div>
                    <h4>Support Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="contact-icon">🌐</i>
                  <div>
                    <h4>Follow Us</h4>
                    <div className="social-links">
                      <a href="#" className="social-link">YouTube</a>
                      <a href="#" className="social-link">Twitter</a>
                      <a href="#" className="social-link">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="contact-form-container">
              {submitStatus === 'success' && (
                <Alert variant="success" className="mb-4">
                  Your message has been sent successfully! We'll get back to you soon.
                </Alert>
              )}
              {submitStatus === 'error' && (
                <Alert variant="danger" className="mb-4">
                  There was an error sending your message. Please try again later.
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter subject"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a subject.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                    rows={5}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="primary" type="submit" className="submit-button">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
