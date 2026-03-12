import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import logoImage from '../assets/fx.jpg';
import picAboutUs from '../assets/picAboutUs.png';
const AboutUs = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src={logoImage} alt="Forex Trading" className="about-image" />
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Welcome to FX Central, your premier destination for learning about Forex trading and investment strategies. 
                Our mission is to empower individuals with the knowledge and skills necessary to navigate the complex world of Forex trading.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src= {picAboutUs} alt="Courses" />
            <Card.Body>
              <Card.Title>What We Offer</Card.Title>
              <Card.Text>
                At FX Central, we offer a variety of courses designed for traders of all levels, from beginners to advanced professionals. 
                Our expert instructors bring years of experience and a wealth of knowledge to the classroom, ensuring that you receive the best education possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Join Our Community</Card.Title>
              <Card.Text>
                We believe in a hands-on approach to learning, which is why our courses include practical exercises, real-world examples, 
                and live trading sessions. Our goal is to provide you with the tools and confidence you need to succeed in the Forex market.
              </Card.Text>
              <Link to="/courses">
                <Button variant="primary">Get Started</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="text-center mt-4">
            <Card.Body>
              <Card.Title>Thank You!</Card.Title>
              <Card.Text>
                Thank you for choosing FX Central. We look forward to helping you on your trading journey!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
