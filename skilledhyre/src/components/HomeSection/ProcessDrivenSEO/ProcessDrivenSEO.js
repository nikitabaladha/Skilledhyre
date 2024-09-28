import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "./ProcessDrivenSEO.css";
import Animation from "./Animation";

import seoImage1 from "../../../images/seo-1.png";
import seoImage2 from "../../../images/seo-2.png";
import seoImage3 from "../../../images/seo-3.png";
import seoImage4 from "../../../images/seo-4.png";
import seoImage5 from "../../../images/seo-5.png";
import seoImage6 from "../../../images/seo-6.png";

import { GrPieChart } from "react-icons/gr";
import { ImSearch } from "react-icons/im";
import { BiCodeBlock } from "react-icons/bi";
import { TbCloudComputing } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const ProcessDrivenSEO = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );
  const [key, setKey] = useState(0);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToLearnMore = () => {
    navigate(cardsData[activeCard].route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cardsData = [
    {
      title: "Website Design",
      description:
        "With the growing use of the internet, it has become essential for businesses to mark their web presence. However, a mere website is not enough.",
      image: seoImage1,
      icon: <GrPieChart className="seo-card-icon" />,
      route: "/website-design",
    },
    {
      title: "Software Development",
      description:
        "Our software development experienced professionals at Skilledhyre offer high-quality and effective software applications that suit the requirements of our clients.",
      image: seoImage2,
      icon: <AiOutlineFundProjectionScreen className="seo-card-icon" />,
      route: "/software-development",
    },
    {
      title: "E-Commerce Development",
      description:
        "E-commerce is a perfect way to buy and sell the products online. Therefore, E-commerce is a quick and convenient way to exchange goods and services with Skilledhyre.",
      image: seoImage3,
      icon: <HiOutlineClipboardDocumentList className="seo-card-icon" />,
      route: "/e-com-development",
    },
    {
      title: "What is SEO Optimization?",
      description:
        "At their core, keywords are one of — if not the most — single important component of a successful SEO campaign. Keywords refer to the words typed into a search box - be it on Google, Bing, or Yahoo. However, there is much more to keywords than just that. The keywords typed into a search box reveal certain details about customers and how they go about searching for things. Knowing this, it's important to target keywords that mimic your customer's minds and search tendencies.",
      image: seoImage4,
      icon: <ImSearch className="seo-card-icon" />,
      route: "/search-engine-optimization",
    },
    {
      title: "What is Web Development?",
      description:
        "The Internet is the power that has been making the businesses prosper and grow in current times. Therefore, to make businesses make the most of this power",
      image: seoImage5,
      icon: <BiCodeBlock className="seo-card-icon" />,
      route: "/web-development",
    },
    {
      title: "What is PCC Advertising?",
      description:
        "At their core, keywords are one of — if not the most — single important component of a successful SEO campaign. Keywords refer to the words typed into a search box - be it on Google, Bing, or Yahoo. However, there is much more to keywords than just that. The keywords typed into a search box reveal certain details about customers and how they go about searching for things. Knowing this, it's important to target keywords that mimic your customer's minds and search tendencies.",
      image: seoImage6,
      icon: <TbCloudComputing className="seo-card-icon" />,
      route: "/ppc-management",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 767;
      const tablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
      setIsMobile(mobile);
      setIsTablet(tablet);
      setKey((prevKey) => prevKey + 1);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    key,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 441,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="container-fluid seo seo-background-image">
      <Animation />
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <h6 className="mb-4 seo-sub-heading">
            <span className="seo-dot">•</span>Build your small business
          </h6>
          <h2 className="mb-4 seo-heading">
            Dominate Your Competition with
            <br />
            Process-Driven SEO
          </h2>
        </div>
        <div className="col-md-4 col-sm-12">
          <Button
            onClick={goToHome}
            className="seo-button seo-view-more-button"
          >
            View More
            <IoIosArrowRoundForward className="seo-arrow-icon seo-view-more-arrow-icon" />
          </Button>
        </div>
      </div>

      <Container>
        <Row className="seo-card-row">
          {isMobile || isTablet ? (
            <Slider {...settings}>
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className={`seo-card ${activeCard === index ? "active" : ""}`}
                  onClick={() => handleCardClick(index)}
                >
                  {card.icon}
                  <h5 className="seo-card-title">{card.title}</h5>
                </div>
              ))}
            </Slider>
          ) : (
            cardsData.map((card, index) => (
              <div
                key={index}
                className={`seo-card col-md-2 ${
                  activeCard === index ? "active" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                {card.icon}
                <h5 className="seo-card-title">{card.title}</h5>
              </div>
            ))
          )}
        </Row>
      </Container>

      <Container fluid className="seo-bottom-row">
        <Row>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center seo-bottom-left"
          >
            <div className="seo-bottom-content">
              <h2 className="seo-bottom-heading">
                {cardsData[activeCard].title}
              </h2>
              <p className="seo-description">
                {cardsData[activeCard].description}
              </p>
            </div>
            <Button
              onClick={goToLearnMore}
              className="seo-button seo-learn-more-button"
            >
              Learn more
              <IoIosArrowRoundForward className="seo-arrow-icon seo-learn-more-arrow-icon" />
            </Button>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center seo-image seo-bottom-right"
          >
            <Image src={cardsData[activeCard].image} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProcessDrivenSEO;
