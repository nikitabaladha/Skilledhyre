import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";

import aboutUsImage from "../../../images/about-us-1.png";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container fluid className="about-us">
      <Row>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center about-us-image"
        >
          <Image src={aboutUsImage} fluid />
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-start about-us-content"
        >
          <h6 className="find-out-more-text">Find Out More About Us</h6>
          <h2 className="mb-4 about-us-title">
            Skilledhyre as a skilled, experienced team of IT services
          </h2>
          <div className="how-it-works-container">
            <div className="play-icon-wrapper">
              <i className="fas fa-play play-icon"></i>
            </div>
            <p className="how-it-works-text">How It Works</p>
          </div>
          <Button
            variant="secondary"
            href="/start-now"
            className="ml-2 start-now-button"
          >
            Start Now <IoIosArrowRoundForward className="arrow-icon" />
          </Button>
          <p className="lead mb-4 about-us-description">
            Skilledhyre as a skilled, experienced team of IT services delivers
            cutting-edge solutions for start-ups and global organizations across
            all domains of business. We are a team of professional and skilled
            web design development, web development, customized software
            development, ERP solutions, and Digital Marketing company in India.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
