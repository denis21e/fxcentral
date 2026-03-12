import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();

  const courses = {
    1: {
      title: "Forex Basics Mastery Course",
      description: "Learn the basics of Forex trading and technical analysis.",
      price: 399,
      detailedDescription: "This course provides a comprehensive introduction to Forex trading, covering essential concepts such as currency pairs, market analysis, and trading strategies. You'll gain hands-on experience with technical analysis tools and learn how to make informed trading decisions. By the end of this course, you'll be equipped with the foundational knowledge needed to start trading in the Forex market confidently. This course is perfect for beginners who want to build a solid understanding of Forex trading."
    },
    2: {
      title: "FXC Bootcamp (Flagship Course)",
      description: "The most comprehensive bootcamp for Forex trading.",
      price: 599,
      detailedDescription: "This flagship course offers an in-depth exploration of Forex trading strategies, mentorship, and real-time analysis. You'll learn advanced trading techniques, risk management strategies, and how to develop a personalized trading plan. This bootcamp is designed for serious traders looking to elevate their skills and achieve consistent profitability in the Forex market. With live trading sessions and direct mentorship from experienced traders, you'll gain invaluable insights that can significantly enhance your trading performance."
    },
    3: {
      title: "The Trading Master Report",
      description: "In-depth analysis and live trading strategies.",
      price: 999,
      detailedDescription: "This advanced course provides exclusive insights into live trading strategies and in-depth market analysis. You'll receive weekly reports and analysis from professional traders, along with access to live trading sessions. This course is ideal for experienced traders who want to refine their strategies and gain a competitive edge in the market. By participating in this course, you'll learn how to analyze market trends, identify profitable trading opportunities, and implement effective trading strategies that can lead to long-term success."
    },
  };

  const course = courses[id];

  if (!course) {
    return (
      <Container>
        <h1>Course Not Found</h1>
        <p>The course you are looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card className="text-center">
        <Card.Body className='body-card'>
          <Card.Title as="h1">{course.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{course.description}</Card.Subtitle>
          <Card.Text>
            <h3>Price: ${course.price}</h3>
            <h4>Course Value:</h4>
            <p>{course.detailedDescription}</p>
          </Card.Text>
          <Button variant="primary" onClick={() => alert('Course purchased!')}>
            Buy Course
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CourseDetail;
