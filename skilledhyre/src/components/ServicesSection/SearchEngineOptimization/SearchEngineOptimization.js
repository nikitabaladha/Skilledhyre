import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchEngineOptimization1 from "../../../images/ServicesSubPageImages/search-engine-optimization-1.png";
import SearchEngineOptimization2 from "../../../images/ServicesSubPageImages/search-engine-optimization-2.png";

import { ImSearch } from "react-icons/im";
import { GrPieChart } from "react-icons/gr";
import { BiCodeBlock } from "react-icons/bi";
import { TbCloudComputing } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";

import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";

import "./SearchEngineOptimization.css";

const SearchEngineOptimization = () => {
  const services = [
    {
      title: "SEO Optimization",
      description:
        "Get more website traffic, more customers, and more visibility.",
      icon: <ImSearch />,
    },
    {
      title: "Web Development",
      description:
        "Your website has to impress your visitors within just a few seconds.",
      icon: <BiCodeBlock />,
    },
    {
      title: "PPC Advertising",
      description:
        "Target your ideal search phrases and get found at the top of Google’s results.",
      icon: <TbCloudComputing />,
    },
    {
      title: "Content Marketing",
      description:
        "You can provide the answers that your potential customers are looking for.",
      icon: <GrPieChart />,
    },
    {
      title: "Social Marketing",
      description: "Create and manage top-performing social campaigns.",
      icon: <AiOutlineFundProjectionScreen />,
    },
    {
      title: "App Development",
      description: "Launching a startup with limited capital? No problem.",
      icon: <HiOutlineClipboardDocumentList />,
    },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>Search Engine Optimization</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Search Engine Optimization</span>
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="container-fluid search-engine-optimization-sec">
          <div className="row search-engine-optimization-sec-row">
            {/* Left Column Services */}
            <div className="col-md-3">
              {services.slice(0, 3).map((service, index) => (
                <div
                  className="search-engine-optimization-sec-row-card"
                  key={index}
                >
                  <div className="row search-engine-optimization-sec-row-card-content-left">
                    <div className="col-md-8">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                    <div className="col-md-4 search-engine-optimization-sec-row-card-icon">
                      {service.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Column */}
            <div className="col-md-6">
              <div className="search-engine-optimization-sec-row-card-image">
                <img
                  src={SearchEngineOptimization1}
                  alt="Content Marketing Strategy"
                />
              </div>
            </div>

            {/* Right Column Services */}
            <div className="col-md-3">
              {services.slice(3, 6).map((service, index) => (
                <div
                  className="search-engine-optimization-sec-row-card"
                  key={index}
                >
                  <div className="row">
                    <div className="col-md-4 search-engine-optimization-sec-row-card-icon">
                      {service.icon}
                    </div>
                    <div className="col-md-8 search-engine-optimization-sec-row-card-content-right">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid search-engine-optimization-thi">
          <div className="search-engine-optimization-thi-background-color">
            <div className="search-engine-optimization-thi-background-image">
              <div className="search-engine-optimization-thi-heading">
                <h2>Know your SEO Score!</h2>
              </div>

              <div className="search-engine-optimization-thi-form-container">
                <form className="search-engine-optimization-thi-form">
                  <input
                    type="text"
                    className="form-control text-field-1"
                    placeholder="Your Website URL"
                  />
                  <input
                    type="email"
                    className="form-control text-field-2"
                    placeholder="Email"
                  />

                  <div className="search-engine-optimization-thi-button-div">
                    <Button
                      href="/start-now"
                      className="ml-2 search-engine-optimization-button-thi"
                    >
                      Start Now{" "}
                      <IoIosArrowRoundForward className="search-engine-optimization-button-thi-arrow-icon " />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid social-media-ppc-four-section">
          <div className="social-media-ppc-four-content">
            <h6>
              <span className="social-media-ppc-dot">•</span>real numbers
              <span className="social-media-ppc-dot">•</span>
            </h6>
            <h2>
              Expect Great Things from <br></br>Your SEO Agency
            </h2>
            <div>
              <span
                className="before"
                style={{ color: isChecked ? "#e1dfdf" : "#00c3ff" }}
              >
                Before
              </span>
              <span className="toggle-div">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </span>

              <span
                className="after"
                style={{ color: isChecked ? "#2196f3" : "#e1dfdf" }}
              >
                After
              </span>
            </div>
          </div>
        </div>

        {/* Sixth row */}
        <div className="container-fluid search-engine-optimization-six">
          <div className="search-engine-optimization-six-background-color">
            <div className="search-engine-optimization-six-background-image radius-div">
              <div className="search-engine-optimization-six-heading">
                <h2>
                  Take Your Website to Next <br></br> Level Right Now!
                </h2>
              </div>
              <div className="search-engine-optimization-six-button-div">
                <Button
                  href="/start-now"
                  className="ml-2 search-engine-optimization-button-six"
                >
                  Start Now
                  <IoIosArrowRoundForward className="search-engine-optimization-button-six-arrow-icon " />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SearchEngineOptimization;
