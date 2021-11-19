import React from "react";
import "./css/Footer.css";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="footerContent">
            <h1>Danbattles</h1>
            <h4>
              Danbattles is not a real site, it is only for demonstration
              purposes.
            </h4>
          </Col>
        </Row>
        <Row className='socialMedia'>
          <Col>
            <i className="fab fa-github fa-3x"></i>
            <i className="fab fa-twitter fa-3x"></i>
            <i className="fab fa-reddit fa-3x"></i>
            <i className="fab fa-facebook-f fa-3x"></i>
            <i className="fab fa-discord fa-3x"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
