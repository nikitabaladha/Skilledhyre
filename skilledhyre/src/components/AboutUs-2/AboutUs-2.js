import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import aboutUsImage from "../../images/about-us-2.png";

import "./AboutUs-2.css";

const AboutUs2 = () => {
  return (
    <Container fluid className="aboutus">
      <Row>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-start aboutus-content"
        >
          <h6 className="aboutus-sub-heading">
            <span className="aboutus-dot">•</span>ABOUT US
          </h6>
          <h2 className="mb-4 aboutus-heading">
            Skilledhyre as a skilled, experienced team of IT services
          </h2>

          <p className="lead mb-4 aboutus-description">
            We are team of expertise website design, brand promotion, android
            app development, E-commerce solutions, ERP solutions, Digital
            Marketing and web development. We together as the professional and
            skilled team is qualified to provide the best services to our
            customers worldwide in website design and web development.
          </p>
        </Col>

        <Col
          md={6}
          className="d-flex justify-content-center align-items-center aboutus-image"
        >
          <Image src={aboutUsImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs2;
