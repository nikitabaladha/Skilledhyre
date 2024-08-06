import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import { faPieChart } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./ProcessDrivenSEO.css";
import seoImage1 from "../../images/seo-1.png";
import seoImage2 from "../../images/seo-2.png";
import seoImage3 from "../../images/seo-3.png";
import seoImage4 from "../../images/seo-4.png";
import seoImage5 from "../../images/seo-5.png";
import seoImage6 from "../../images/seo-6.png";

const ProcessDrivenSEO = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cardsData = [
    {
      title: "Website Design",
      description:
        "With the growing use of internet, it has become essential for businesses to mark their web presence. However, a mere website is not enough.",
      image: seoImage1,
    },
    {
      title: "Software Development",
      description:
        "Our software development experinced  professionals at skilledhyre offer high quality and effective software applications that suits the requirements of our clients.",
      image: seoImage2,
    },
    {
      title: "E-Commerce Development",
      description:
        "E commerce is a perfect way to buy and sell the products online. Therefore, E commerce is a quick and convenient way to exchange goods and services with Skilledhyre.",
      image: seoImage3,
    },
    {
      title: "What is SEO Optimization?",
      description:
        "At their core, keywords are one of — if not the most — single important component of a successful SEO campaign. Keywords refer to the words typed into a search box - be it on Google, Bing, or Yahoo. However, there is much more to keywords than just that.The keywords typed into a search box reveal certain details about customers and how they go about searching for things. Knowing this, it's important to target keywords that mimic your customer's minds and search tendencies.",
      image: seoImage4,
    },
    {
      title: "What is Web Development?",
      description:
        "Internet is the power that has been making the businesses prosper and grow in current times. Therefore, to make businesses make the most of this power",
      image: seoImage5,
    },
    {
      title: "What is PCC Advertising?",
      description:
        "At their core, keywords are one of — if not the most — single important component of a successful SEO campaign. Keywords refer to the words typed into a search box - be it on Google, Bing, or Yahoo. However, there is much more to keywords than just that.The keywords typed into a search box reveal certain details about customers and how they go about searching for things. Knowing this, it's important to target keywords that mimic your customer's minds and search tendencies.",
      image: seoImage6,
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="container-fluid seo mirror-image bottom-mirror-image">
      <div className="row">
        <div className="col-md-8">
          <h6 className="mb-4 seo-sub-heading">
            <span className="seo-dot">•</span>Build your small business
          </h6>
          <h2 className="mb-4 seo-heading">
            Dominate Your Competition with
            <br />
            Process-Driven SEO
          </h2>
        </div>
        <div className="col-md-4">
          <Button
            variant="secondary"
            href="/start-now"
            className="seo-button seo-view-more-button"
          >
            View More
            <IoIosArrowRoundForward className="seo-arrow-icon seo-view-more-arrow-icon" />
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="row seo-card-row">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`seo-card col-md-2 ${
                activeCard === index ? "active" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <FontAwesomeIcon icon={faPieChart} className="seo-card-icon" />
              <h5 className="seo-card-title">{card.title}</h5>
            </div>
          ))}
        </div>
      </div>

      <Container fluid className="seo-bottom-row">
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <div className="seo-bottom-content">
              <h2 className="seo-bottom-heading">
                {cardsData[activeCard].title}
              </h2>
              <p className="seo-description">
                {cardsData[activeCard].description}
              </p>
            </div>
            <Button
              variant="secondary"
              href="/start-now"
              className="seo-button seo-learn-more-button"
            >
              Learn more
              <IoIosArrowRoundForward className="seo-arrow-icon seo-learn-more-arrow-icon" />
            </Button>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center seo-image"
          >
            <Image src={cardsData[activeCard].image} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProcessDrivenSEO;
