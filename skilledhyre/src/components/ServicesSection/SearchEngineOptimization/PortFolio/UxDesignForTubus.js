import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";

import Navbar from "../../../HomeSection/Navbar/Navbar";
import Footer from "../../../HomeSection/Footer/Footer";
import "./PortFolio.css";

const UxDesignForTubus = () => {
  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>UX Design for Tubus</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <Link to="/" className="homepage-link">
                Portfolio
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <Link to="/" className="homepage-link">
                Development
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">UX Design for Tubus</span>
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="container-fluid portfolio-sec">
          <div className="row">
            <div className="col-md-3">
              <h6 className="title-top">Published</h6>
              <h6 className="title-bottom">November 22, 2019</h6>
            </div>
            <div className="col-md-3">
              <h6 className="title-top">Category</h6>
              <h6 className="title-bottom">Development / Media</h6>
            </div>
            <div className="col-md-3">
              <h6 className="title-top">client</h6>
              <h6 className="title-bottom">Oceanthemes</h6>
            </div>
            <div className="col-md-3">
              <div className="portfolio-social-icons">
                <FaFacebook className="facebook-icon" />
                <AiFillTwitterCircle className="twitter-icon" />
                <FaPinterest className="pinterest-icon" />
                <ImMail4 className="mail-icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid portfolio-thi"></div>

        <Footer />
      </div>
    </>
  );
};

export default UxDesignForTubus;
