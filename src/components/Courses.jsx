import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Courses.css';
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';

const Courses = () => {
  return (
    <div id="courses-section" className="courses-section">
      <Container fluid>
        <Row className="course-row">
          <Col md={4} className="course-column">
            <div className="course-card">
              <h2 className="course-title">Forex Basics Mastery Course</h2>
              <div className="course-image-container">
                <img 
                  src={course3}
                  alt="chart img" 
                  className="course-image"
                />
              </div>
              <div className="course-details">
                <h3 className="details-title">Basics Of Forex And Technical Analysis</h3>
                <br />
                <ul className="course-features">
                  <li>Basics of Forex</li>
                  <li>Candlestick Charts</li>
                  <li>Trend Trading</li>
                  <li>Risk Management</li>
                  <li>Structure Levels</li>
                  <li>Price: $399</li>
                </ul>
                <Link to="/course/1">
                  <Button variant="primary">Buy Course</Button>
                </Link>
              </div>
            </div>
          </Col>

          <Col md={4} className="course-column">
            <div className="course-card">
              <h2 className="course-title">FXC Bootcamp<br/>(Flagship Course)</h2>
              <p className="course-subtitle">(Most value for your money)</p>
              <div className="course-image-container">
                <img 
                  src={course2}
                  alt="member content" 
                  className="course-image"
                />
              </div>
              <div className="course-details">
                <h3 className="details-title">The FXC Forex bootcamp includes the following...</h3>
                <ul className="course-pricing">
                  <li>Full Bootcamp Course</li>
                  <li>Full Mentorship</li>
                  <li>Email Analysis/Alerts</li>
                  <li>Price: $599</li>
                </ul>
                <Link to="/course/2">
                  <Button variant="primary">Buy Course</Button>
                </Link>
              </div>
            </div>
          </Col>

          <Col md={4} className="course-column">
            <div className="course-card">
              <h2 className="course-title">The Trading Master Report</h2>
              <p className="course-subtitle">(Pro traders only)</p>
              <div className="course-image-container">
                <img 
                  src={course1} 
                  alt=" EUR/NZD analysis" 
                  className="course-image"
                />
              </div>
              <div className="course-details">
                <h3 className="details-title">The Trading Master Report includes the following...</h3>
                <br />
                <ul className="course-pricing">
                  <li>Live trading and full analysis</li>
                 
                  <li>OTZ Crypto in-depth analysis</li>
                
                  <li>Pro Trader Report Each Monday</li>
                  
                  <li>Price: $999</li>
                  <br />
                </ul>
                <Link to="/course/3">
                  <Button variant="primary">Buy Course</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
