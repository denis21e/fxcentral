import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Reviews.css';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';

const Reviews = () => {
  const reviews = [
    {
      name: "Michael Thompson",
      experience: "3 years trading experience",
      rating: 5,
      text: "FXcentral's courses completely transformed my approach to forex trading. The technical analysis techniques I learned have been invaluable.",
      image: person1
    },
    {
      name: "Sarah Chen",
      experience: "1 year trading experience",
      rating: 5,
      text: "As a beginner, I found the Forex Basics Mastery Course incredibly helpful. The step-by-step approach made complex concepts easy to understand.",
      image: person2
    },
    {
      name: "David Martinez",
      experience: "2 years trading experience",
      rating: 5,
      text: "The Trading Master Report has been a game-changer for my trading strategy. The weekly insights are incredibly valuable and well-researched.",
      image: person1
    },
    {
      name: "Emma Wilson",
      experience: "6 months trading experience",
      rating: 5,
      text: "FXC Bootcamp exceeded my expectations. The mentorship program and community support have been instrumental in my trading journey.",
      image: person2
    },
    {
      name: "James Anderson",
      experience: "4 years trading experience",
      rating: 5,
      text: "The risk management strategies taught in these courses have saved me from numerous potential losses. Highly recommend for serious traders.",
      image: person1
    },
    {
      name: "Lisa Zhang",
      experience: "2 years trading experience",
      rating: 5,
      text: "The community support and weekly analysis have helped me develop a more disciplined approach to trading. Worth every penny!",
      image: person2
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div id="reviews" className="reviews-section">
      <Container>
        <h2 className="section-title text-center mb-5">What Our Students Say</h2>
        <Row>
          {reviews.map((review, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="review-card">
                <div className="review-header">
                  <img 
                    src={review.image}
                    alt={`${review.name}'s profile`} 
                    className="review-image"
                  />
                  <div className="review-info">
                    <h3 className="reviewer-name">{review.name}</h3>
                    <p className="reviewer-experience">{review.experience}</p>
                    <div className="review-stars">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <div className="review-content">
                  <p className="review-text">"{review.text}"</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
