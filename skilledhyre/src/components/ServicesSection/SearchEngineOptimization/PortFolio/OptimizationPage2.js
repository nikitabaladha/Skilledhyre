import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Navbar from "../../../HomeSection/Navbar/Navbar";
import Footer from "../../../HomeSection/Footer/Footer";
import "./Development.css";

import OptimizationPageImage2 from "../../../../images/ServicesSubPageImages/OptimizationPage2.jpg";
import OptimizationPageImage1 from "../../../../images/ServicesSubPageImages/Portfolio-grid-1.jpg";
import OptimizationRedirectButton from "./OptimizationRedirectButton";

const OptimizationPage2 = () => {
  const navigate = useNavigate();

  const handleResponsiveDesignRedirect = () => {
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
          <div className="col-md-6">
            <div
              className="development-image-container"
              style={{ cursor: "pointer" }}
              onClick={handleMediaRedirect}
            >
              <img src={OptimizationPageImage1} alt="Development" />
              <div className="development-redirect-box">
                <h3>SMM Project</h3>
                <p>Media/Optimization</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="development-image-container"
              style={{ cursor: "pointer" }}
              onClick={handleResponsiveDesignRedirect}
            >
              <img src={OptimizationPageImage2} alt="Development" />
              <div className="development-redirect-box">
                <h3>Responsive Design</h3>
                <p>Optimization</p>
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

export default OptimizationPage2;
