import React from "react";

import { Link, useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../../HomeSection/Navbar/Navbar";
import Footer from "../../../HomeSection/Footer/Footer";
import "./PortFolioGrid.css";

import Portfolio1 from "../../../../images/ServicesSubPageImages/Portfolio-grid-1.jpg";
import Portfolio2 from "../../../../images/ServicesSubPageImages/Portfolio-grid-2.jpg";
import Portfolio3 from "../../../../images/ServicesSubPageImages/Portfolio-grid-3.jpg";
import Portfolio4 from "../../../../images/ServicesSubPageImages/Portfolio-grid-4.jpg";

const PortfolioGrid = () => {
  const navigate = useNavigate();
  const images = [
    {
      image: Portfolio1,
      title: "SMM Project",
      description: "Media/Optimization",
      link: "/portfolio/smm-project",
    },

    {
      image: Portfolio2,
      title: "UX Design for Tubus",
      description: "Development",
      link: "/portfolio/ux-design-for-tubus",
    },
    {
      image: Portfolio3,
      title: "Analysis of Security",
      description: "Marketing/Optimization",
      link: "/portfolio/analysis-of-security",
    },
    {
      image: Portfolio4,
      title: "Responsive Design",
      description: "Optimization",
      link: "/portfolio/responsive-design",
    },
  ];

  const handleRedirect = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>Portfolio Grid</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Portfolio Grid</span>
            </p>
          </div>
        </div>

        {/* Second row  */}
        <div className="container-fluid portfolio--grid-second">
          <div className="search-engine-optimization-fif-header">
            <h6 className="mb-4 search-engine-optimization-fif-sub-heading">
              <span className="search-engine-optimization-dot">•</span>
              OUR PROJECTS
            </h6>
            <h2 className="mb-4 search-engine-optimization-fif-heading">
              View Some of Our Works <br></br>and Case Studies for Clients
            </h2>
          </div>
          <div className="portfolio-grid-navbar">
            <ul>
              <li>
                <a href="#all">All</a>
              </li>
              <li>
                <a href="#development">Development</a>
              </li>
              <li>
                <a href="marketing">Marketing</a>
              </li>
              <li>
                <a href="#media">Media</a>
              </li>
              <li>
                <a href="#optimization">Optimization</a>
              </li>
            </ul>
          </div>

          <div className="container search-engine-optimization-fif-slider-container portfolio-grid-image-container mt-5">
            <div className="row">
              {images.map((imgObj, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <div
                    className="portfolio-grid-image-item-container"
                    onClick={() => handleRedirect(imgObj.link)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={imgObj.image} alt={`Slide ${index + 1}`} />
                    {imgObj.image && (
                      <div className="hover-div">
                        <div className="overlay show-overlay">
                          <h3>{imgObj.title}</h3>
                          <p>{imgObj.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>{" "}
            {/* End of the row */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioGrid;
