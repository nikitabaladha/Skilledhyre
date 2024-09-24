import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Navbar from "../../../HomeSection/Navbar/Navbar";
import Footer from "../../../HomeSection/Footer/Footer";
import "./Development.css";

import Development1 from "../../../../images/ServicesSubPageImages/Development-1.jpg";

const Development = () => {
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
              <img src={Development1} alt="Development" />
              <div className="development-redirect-box">
                <h3>SMM Project</h3>
                <p>Media/Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="development-second">
        <p>
          <strong>Deprecated:</strong> str_replace(): Passing null to parameter
          #3 ($subject) of type array|string is deprecated in
          <strong>
            /home/codzskil/skilledhyre.com/wp-content/themes/onum/inc/frontend/template-tags.php
          </strong>
          on line <strong>199</strong>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Development;
