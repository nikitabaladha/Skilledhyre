import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../../HomeSection/Navbar/Navbar";

import Footer from "../../../HomeSection/Footer/Footer";
import "./PortFolio.css";

const SMMProject = () => {
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

        <Footer />
      </div>
    </>
  );
};

export default SMMProject;
