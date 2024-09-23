import React from "react";

import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../../HomeSection/Navbar/Navbar";
import Footer from "../../../HomeSection/Footer/Footer";

import "./PortFolio.css";

const PortfolioGrid = () => {
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
        <div className="container-fluid search-engine-optimization-fif">
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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioGrid;
