import React from "react";
import { Link } from "react-router-dom";

import "./ContentMarketing.css";

import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";
import Animation from "../../HomeSection/ProcessDrivenSEO/Animation";

import contentMarketing1 from "../../../images/ServicesSubPageImages/content-marketing-1.png";
import contentMarketing2 from "../../../images/ServicesSubPageImages/content-marketing-2.png";
import ContentMarketingProgressCardProps from "./ProgressCard/ContentMarketingProgressCardProps";

const ContentMarketing = () => {
  const features = [
    {
      id: 1,
      smallNumber: "01",
      bigNumber: "01",
      title: "Real-time Keyword Data",
      description:
        "The waiting game is over. Launching an SEO campaign with Onum includes access , a real-time reporting.",
    },
    {
      id: 2,
      smallNumber: "02",
      bigNumber: "02",
      title: "ROI Obsessed Keywords",
      description:
        "Never guess again is SEO is generating a net-positive return - your team and your investors will love.",
    },
    {
      id: 3,
      smallNumber: "03",
      bigNumber: "03",
      title: "Scalable Keyword Growth",
      description:
        "Launching a startup with limited capital? No problem. Want to test our process before ramping up",
    },
    {
      id: 4,
      smallNumber: "04",
      bigNumber: "04",
      title: "Total Keyword Growth Visibility",
      description:
        "We provide a revolutionary level of transparency into our campaigns - from backlink acquisition.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>Content Marketing</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Content Marketing</span>
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="container-fluid content-marketing-sec">
          <div className="row">
            {features.map((feature) => (
              <div className="col-md-6" key={feature.id}>
                <div className="content-marketing-sec-card">
                  <div className="small-number">{feature.smallNumber}</div>
                  <div className="content-marketing-sec-card-content">
                    <h5 className="">{feature.title}</h5>
                    <p className="">{feature.description}</p>
                    <span className="big-number">{feature.bigNumber}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third-row */}
        <div className="container-fluid content-marketing-thi">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src={contentMarketing1}
                alt="Website Design"
                className="content-marketing-thi-image"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center content-marketing-thi-content">
              <h6>
                <span className="content-marketing-dot">•</span>content
                marketing
              </h6>
              <h2>
                If You Can Dream It,<br></br>We Can Rank It
              </h2>
              <p>
                Our approach to SEO is uniquely built around what we know
                works…and what we know doesn’t work. With over 200 verified
                factors in play within Google’s search algorithm, most agencies
                will rely on old tactics that no longer work, or guess with new
                tactics that they hope will stick.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid content-marketing-four-section">
          <Animation />
          <div className="content-marketing-four-content">
            <h6>
              <span className="content-marketing-dot">•</span>Verifiable results
              <span className="content-marketing-dot">•</span>
            </h6>
            <h2>
              SEO is a Revolving Process,<br></br>We Nail It Every Time
            </h2>
          </div>

          <div className="container content-marketing-four-circle">
            <div className="row">
              <div className="col-md-4">
                <div className="circle-card-1">
                  <div className="number-1">
                    <div className="content-marketing-four-circle-card-number-1">
                      01
                    </div>
                  </div>
                  <div className="content-marketing-four-circle-card-content-1">
                    <div className="dot-1">
                      <div className="content-marketing-four-circle-card-item-dot-1"></div>
                    </div>
                    <h3>Onsite Optimization</h3>
                    <p>
                      We help improve website content so visitors clearly
                      understand how it relates to their search.
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-marketing-four-circle-svg-container">
                <svg className="svg-circle" height="500" width="500">
                  <circle cx="250" cy="250" r="225" />
                  <defs>
                    <linearGradient
                      id="gradient"
                      gradientTransform="rotate(45)"
                    >
                      <stop offset="0%" stopColor="#015be6"></stop>
                      <stop offset="100%" stopColor="#03baee"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <img
                  className="content-marketing-four-circle-image"
                  src={contentMarketing2}
                  alt="Logo Shape"
                />
              </div>
              <div className="col-md-4">
                <div className="circle-card-2">
                  <div className="number-2">
                    <div className="content-marketing-four-circle-card-number-2">
                      02
                    </div>
                  </div>
                  <div className="content-marketing-four-circle-card-content-2">
                    <div className="dot-2">
                      <div className="content-marketing-four-circle-card-item-dot-2"></div>
                    </div>
                    <h3>Link Building</h3>
                    <p>
                      We help improve website content so visitors clearly
                      understand how it relates to their search.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="circle-card-3">
              <div className="number-3">
                <div className="content-marketing-four-circle-card-number-3">
                  03
                </div>
              </div>
              <div className="content-marketing-four-circle-card-content-3">
                <div className="dot-3">
                  <div className="content-marketing-four-circle-card-item-dot-3"></div>
                </div>
                <h3>Keyword Research</h3>
                <p>
                  We select themed keywords based on user-intent to solidify
                  rankings based on what users searches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth row */}
        <>
          <ContentMarketingProgressCardProps />
        </>
      </div>

      <Footer />
    </>
  );
};

export default ContentMarketing;
