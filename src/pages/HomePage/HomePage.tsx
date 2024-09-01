import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import linkedinImage from '../../assets/photos/linkedin.jpeg';
import { Link } from 'react-router-dom';
import './HomePage.css';


const linkStyles = {
  fontSize: '1rem',
  fontWeight: 400,
  textDecoration: 'underline'
};
const contactLinkStyles = {
  ...linkStyles,
  fontSize: '0.95rem',
  textDecoration: 'none'
};


const HomePage: React.FC = () => {
  return (
    <Container className="mt-5" id="the-home-page">
      <Row className="align-items-center my-portfolio-row-1">
        <Col md={2} className="" />
        <Col md={6}>
          <h2>Welcome!</h2>
          <p>
            My name is Bren. I'm a full stack developer.<br />
            Checkout my sample projects <Link to="/projects" style={linkStyles}>here.</Link>
          </p>
        </Col>

        <Col md={3} className="">
          <Image src={linkedinImage} alt="LinkedIn Profile" id="the-image" fluid roundedCircle />
        </Col>

      </Row>

      <Row className="align-items-center my-portfolio-row-1">
        <Col md={2} className="" />
        <Col md={6}>
          <div>
            <h4>You can also contact me here</h4>
            <div>
              <label>email:</label>
              <Link to="mailto:allenbaga721@gmail.com" style={contactLinkStyles}>{` allenbaga721@gmail.com`}</Link>
            </div>

            <div>
              <label>LinkedIn:</label>
              <Link to="https://www.linkedin.com/in/allenbaga721" target='_blank' style={contactLinkStyles}>{` https://www.linkedin.com/in/allenbaga721`}</Link>
            </div>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default HomePage;