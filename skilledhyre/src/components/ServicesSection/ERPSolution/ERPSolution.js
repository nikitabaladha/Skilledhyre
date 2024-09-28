import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import erpImage1 from "../../../images/ServicesSubPageImages/erp-1.png";
import erpImage2 from "../../../images/ServicesSubPageImages/erp-2.png";
import erpImage3 from "../../../images/ServicesSubPageImages/erp-3.png";
import erpImage4 from "../../../images/ServicesSubPageImages/erp-4.jpg";
import erpImage5 from "../../../images/ServicesSubPageImages/erp-5.jpg";
import erpImage6 from "../../../images/ServicesSubPageImages/erp-6.png";

import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonServiceSubPages.css";

const ERPSolution = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".ser-sub-left-img, .ser-sub-right-img"
      );
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add("slide-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const erpCardsFourthRow = [
    {
      image: erpImage3,
      title: "INCREASES THE OVERALL PRODUCTIVITY",
      description:
        "An ERP software company in Noida helps in boosting the overall productivity of an organization. It cuts down the repetitive process and reduces the manual entries. Thus it decreases the chances of human error which can turn out to be big business mistakes. ERP software streamlines business processes and is an efficient way to collect data and resources.",
    },
    {
      image: erpImage4,
      title: "INTERNAL COLLABORATION",
      description:
        "Every business needs different departments to have collaborated in such a way that it should be like a unit. ERP solution helps us to attain this. All the data entered are centralized and consistent in the ERP system. It is equally accessible to all departments which results in wonderful internal collaboration within the organization.",
    },
  ];

  const erpCardsFifthRow = [
    {
      image: erpImage5,
      title: "ERP IS SCALABLE RESOURCE",
      description:
        "We can always add or delete the users in enterprise resource planning software by making it scalable. It doesn't depend on how big or small your business is, ERP can be modified accordingly. But you need to be sure about the maximum business limitation.",
    },
    {
      image: erpImage6,
      title: "COST SAVING SOFTWARE",
      description:
        "It may sound ironic that ERP which has itself a high cost can save cost. But it's true. ERP Software saves you from wasting your money on different organizational expenditures. It gives accurate results which help in gaining proper insights and thus saves cost.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>ERP Solutions</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">ERP Solutions</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={erpImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>ERP Solutions
              </h6>
              <h2>What we do</h2>
              <p>
                ERP solution is a system that has the ability to combine
                different parts of the business into a single framework to make
                balanced and informed decisions for the future. We at
                Skilledhyre delivers ERP Solutions for different businesses.
                With ERP system solutions for your business, you can easily
                manage your vendors, customers, partners, and much more along
                with Finance, HR, and departmental data for your internal team.
                Our ERP models are customizable and highly scalable in terms of
                making modifications.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>ACCURATE FORECASTING PROCESS</h2>
              <p>
                ERP software gives tools to organizations that help in gaining
                insights and do measure accurate forecasts. Moreover, these
                forecasts will help an organization to understand how much
                resources are required from an inventory which in turn increases
                sales, reduces the chances of failures, and penetrates the
                costing required.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={erpImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row ser-sub-card-row">
            {erpCardsFourthRow.map((card, index) => (
              <div
                key={index}
                className="col-md-6 d-flex flex-column justify-content-center ser-sub-card"
              >
                <div className="col-md-12 ">
                  <img
                    src={card.image}
                    alt="Website Design"
                    className="ser-sub-card-img"
                  />
                </div>
                <div className="ser-sub-fourth-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fifth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row ser-sub-card-row">
            {erpCardsFifthRow.map((card, index) => (
              <div
                key={index}
                className="col-md-6 d-flex flex-column justify-content-center ser-sub-card"
              >
                <div className="col-md-12 ">
                  <img
                    src={card.image}
                    alt="Website Design"
                    className="ser-sub-card-img"
                  />
                </div>
                <div className="ser-sub-fourth-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ERPSolution;
