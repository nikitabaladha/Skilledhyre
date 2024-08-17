import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonSocialMediaPPC.css";

import socialMedia1 from "../../../images/ServicesSubPageImages/social-media-1.png";
import Footer from "../../HomeSection/Footer/Footer";

const SocialMediaMarketing = () => {
  const features = [
    {
      id: 1,
      smallNumber: "01",
      bigNumber: "01",
      title: "Improve SEO Rankings with Social",
      description:
        "Top ranking sites consistently use social media to encourage and improve upon their search visibility.",
    },
    {
      id: 2,
      smallNumber: "02",
      bigNumber: "02",
      title: "Our Writers are US Based Professionals",
      description:
        "Many affordable social management companies outsource the writing to foreign countries. We don’t!",
    },
    {
      id: 3,
      smallNumber: "03",
      bigNumber: "03",
      title: "Extra Promotion & Syndication Options",
      description:
        "Our pro and enterprise plans offer community management message forwarding and audience boost features.",
    },
    {
      id: 4,
      smallNumber: "04",
      bigNumber: "04",
      title: "No Long-Term Contracts",
      description:
        "You can cancel your social marketing plan at any time. There are no long-term contracts required to get started!",
    },
  ];
  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>Social Media Marketing</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Social Media Marketing</span>
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="container-fluid social-media-ppc-sec">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center social-media-ppc-sec-content">
              <h6>
                <span className="social-media-ppc-dot">•</span>We get results
              </h6>
              <h2>Social Media Marketing & Management Services</h2>
              <p>
                With a custom social media marketing service plan, your business
                can start building brand awareness, as well as generating
                revenue from social media platforms like Facebook, Twitter,
                LinkedIn, Instagram, and more.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src={socialMedia1}
                alt="Website Design"
                className="social-media-ppc-sec-image"
              />
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid social-media-ppc-thi">
          <div className="row">
            {features.map((feature) => (
              <div className="col-md-6" key={feature.id}>
                <div className="social-media-ppc-thi-card">
                  <div className="small-number">{feature.smallNumber}</div>

                  <div className="social-media-ppc-thi-card-content">
                    <h5 className="">{feature.title}</h5>
                    <p className="">{feature.description}</p>

                    <span className="big-number">{feature.bigNumber}</span>
                  </div>
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

export default SocialMediaMarketing;
