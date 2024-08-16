import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import apiImage1 from "../../../images/ServicesSubPageImages/api-1.jpg";
import apiImage2 from "../../../images/ServicesSubPageImages/api-2.jpg";
import apiImage3 from "../../../images/ServicesSubPageImages/api-3.jpg";
import apiImage4 from "../../../images/ServicesSubPageImages/api-4.png";

import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonServiceSubPages.css";

const ELearningSolution = () => {
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
  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>API Integration</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">API Integration</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={apiImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>API Integration
              </h6>
              <h2>What we do</h2>
              <p>
                We as Skilledhyre are expert in providing API integration and
                development services with complete utilization of modern tools
                and techniques. Our API development team has been working on the
                multiple projects till now and even some of these we have
                designed for the cross-platform applications. We have the best
                knowledge about JASON API, XML API and REST API development
                which enables us to develop the solutions for Web and mobile
                integration which is available best at the market.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-thi-content">
              <h2>Payment Gateway</h2>
              <p>
                We offer payment gateway integration services for ecommerce
                websites, online shopping websites, recharge websites, online
                payment websites, startups, digital goods, B2B, NGO, merchants
                and more. Payment gateway integration services offered by us
                have helped our clients to offer several payment options on
                their website.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={apiImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div className="col-md-12 ">
                <img
                  src={apiImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Email API Integration</h3>
                <p>
                  We provide email API integration services for websites and
                  apps. We offer website email integration services with ZOHO
                  CRM, Zendesk, Salesforce, HubSpot, SAP, Office 365, Dropbox,
                  Facebook and more. This integration provides you a special
                  email address to communicate with your customers and
                  employees, receive alerts and resolve support tickets.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={apiImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>SMS API Integration</h3>
                <p>
                  We integrate SMS text message capability to web pages,
                  websites, and mobile apps to boost the business efficiency and
                  productivity of clients. SMS API Integration gives you the
                  ability to send alerts, reminders and discount offers online
                  to your customers and partners. Easily add SMS functionality
                  to your mobile app and website with Skilledhyre.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ELearningSolution;
