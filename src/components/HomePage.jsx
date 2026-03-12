import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';
import logoStudent from '../assets/graduated.png';
import logotrading from '../assets/bar-chart.png';
import globe from '../assets/planet-earth.png';
import video from '../assets/intro.mp4';

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="home-page">
      <Container>
       
        <div className="video-section">
          <div className="video-container">
            <video 
              ref={videoRef}
              src={video} 
              className="intro-video" 
              controls={isPlaying}
            />
            {!isPlaying && (
              <div className="play-overlay" onClick={handlePlayClick}>
                <h2 className="click-text">Click Below</h2>
                <div className="play-button">
                  <span className="play-icon">▶</span>
                </div>
                <h2 className="play-text">PLAY</h2>
              </div>
            )}
            <p className="video-support-text">Questions? Email - support@FXcentral.com</p>
          </div>
        </div>

        
        <Row className="stats-section">
          <Col md={4} className="stat-item text-center">
            <div className="stat-icon student-icon">
              <img 
                src={logoStudent} 
                alt="Graduate student with cap icon" 
                className="stat-image"
              />
            </div>
            <h3 className="stat-text">Over 10,000 Students Taught</h3>
          </Col>
          <Col md={4} className="stat-item text-center">
            <div className="stat-icon">
              <img 
                src={logotrading}
                alt="trading chart icon" 
                className="stat-image"
              />
            </div>
            <h3 className="stat-text">Over 10,000 courses sold</h3>
          </Col>
          <Col md={4} className="stat-item text-center">
            <div className="stat-icon views-icon">
              <img 
                src={globe}
                alt="globe icon" 
                className="stat-image"
              />
            </div>
            <h3 className="stat-text">Verified across the globe</h3>
          </Col>
        </Row>

        
        <div id="courses" className="our-courses">
          <h2 className="free-title">Our Courses</h2>
         
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
