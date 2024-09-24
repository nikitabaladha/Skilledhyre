import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Development.css";
import { FaArrowRightLong } from "react-icons/fa6";

const OptimizationRedirectButton = () => {
  const navigate = useNavigate();

  const handlePage1Redirect = () => {
    navigate("/portfolio-category/optimization");
  };

  const handlePage2Redirect = () => {
    navigate("/portfolio-category/optimization-page2");
  };

  return (
    <>
      <div className="container-fluid optimization-second">
        <div className="button-group">
          <button className="btn button-style" onClick={handlePage1Redirect}>
            1
          </button>
          <button
            className="btn button-style active"
            onClick={handlePage2Redirect}
          >
            2
          </button>
          <button className="btn button-style" onClick={handlePage1Redirect}>
            <span className="arrow">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OptimizationRedirectButton;
