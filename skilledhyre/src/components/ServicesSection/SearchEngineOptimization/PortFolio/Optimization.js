import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../HomeSection/Navbar/Navbar";
import Footer from "../../../HomeSection/Footer/Footer";
import "./Development.css";

import OptimizationRedirectButton from "./OptimizationRedirectButton";

import Optimization1 from "../../../../images/ServicesSubPageImages/Optimization-1.jpg";

const Optimization = () => {
  const navigate = useNavigate();

  const handleDevelopmentRedirect = () => {
    navigate("/portfolio/new-soft-for-watch");
  };

  const handleMediaRedirect = () => {
    navigate("/portfolio/smm-project");
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid development-first">
        <div className="row">
          <div className="col-md-6 redirect-container">
            <div
              className="new-soft-for-watch-redirect-box"
              style={{ cursor: "pointer" }}
              onClick={handleDevelopmentRedirect}
            >
              <h3>New Soft for Watch</h3>
              <p>Media/Optimization</p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="development-image-container"
              style={{ cursor: "pointer" }}
              onClick={handleMediaRedirect}
            >
              <img src={Optimization1} alt="Development" />
              <div className="development-redirect-box">
                <h3>Analysis of Security</h3>
                <p>Marketing/Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="optimization-second">
        <OptimizationRedirectButton />
      </div>

      <Footer />
    </>
  );
};

export default Optimization;
