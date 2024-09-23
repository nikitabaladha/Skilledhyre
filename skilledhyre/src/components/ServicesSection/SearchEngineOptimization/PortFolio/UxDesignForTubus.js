import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import Navbar from "../../../HomeSection/Navbar/Navbar";
import Footer from "../../../HomeSection/Footer/Footer";
import "./PortFolio.css";

import UxDesignForTubus1 from "../../../../images/ServicesSubPageImages/UxDesignForTubus-1.jpg";
import UxDesignForTubus2 from "../../../../images/ServicesSubPageImages/UxDesignForTubus-2.jpg";
import UxDesignForTubus3 from "../../../../images/ServicesSubPageImages/UxDesignForTubus-3.jpg";
import UxDesignForTubus4 from "../../../../images/ServicesSubPageImages/UxDesignForTubus-4.jpg";

const UxDesignForTubus = () => {
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
              <span className="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <Link to="/portfolio-grid" className="homepage-link">
                Portfolio
              </Link>
              <span className="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <Link to="/development" className="homepage-link">
                Development
              </Link>
              <span className="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">UX Design for Tubus</span>
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="container-fluid portfolio-sec">
          <div className="row">
            <div className="col-md-3">
              <h6 className="title-top">Published</h6>
              <h6 className="title-bottom">November 22, 2019</h6>
            </div>
            <div className="col-md-3">
              <h6 className="title-top">Category</h6>
              <h6 className="title-bottom">Development / Media</h6>
            </div>
            <div className="col-md-3">
              <h6 className="title-top">Client</h6>
              <h6 className="title-bottom">Oceanthemes</h6>
            </div>
            <div className="col-md-3">
              <div className="portfolio-social-icons">
                <FaFacebook className="facebook-icon" />
                <AiFillTwitterCircle className="twitter-icon" />
                <FaPinterest className="pinterest-icon" />
                <ImMail4 className="mail-icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid portfolio-thi">
          <img
            src={UxDesignForTubus1}
            alt="UX Design for Tubus - 1"
            className="portfolio-thi-image"
          />
        </div>

        {/* Fourth row */}
        <div className="container-fluid portfolio-fourth">
          <h3 className="number">
            <span>01.</span>
            <span className="heading">The Challenge & Solution</span>
          </h3>
          <p>
            <span className="drop-cap">
              <span className="drop-cap letter">O</span>
            </span>
            <span className="text">
              One of the principal decisions that startup owners have to make is
              whether or not to engage in SEO. One common consideration is the
              cost of investing in an SEO campaign versus possible returns.
              Another is the daunting list of SEO terminologies, which may
              overwhelm newcomers to the e-commerce and website scene. If you
              are a new online entrepreneur but are not convinced of the
              benefits of SEO, then this article is for you! Here are some of
              the reasons why SEO is important and why you should consider it as
              a marketing technique.{" "}
              <strong>
                SEO is less expensive than other online marketing approaches.
              </strong>{" "}
              It also offers higher reward rates when compared to other
              techniques such as social media marketing, pay per click
              advertising, and email marketing. While you may need to defray a
              substantial amount to cover initial SEO planning and processes
              that include website design, programming, and strategizing, you
              can be sure to get faster and more long-term results.
            </span>
          </p>
        </div>

        {/* Fifth row */}
        <div className="container-fluid portfolio-fifth">
          <div className="blockquote">
            <p>
              “I cannot give you the formula for success, but I can give you the
              formula for failure." <br />
              "It is: Try to please everybody.” <br />
            </p>
            <p className="name">– Herbert Bayard Swope</p>
          </div>
        </div>

        {/* Sixth row */}
        <div className="container-fluid portfolio-six">
          <div className="row">
            <div className="col-md-6">
              <img
                src={UxDesignForTubus2}
                alt="UX Design for Tubus - 2"
                className="portfolio-six-image"
              />
            </div>
            <div className="col-md-6">
              <img
                src={UxDesignForTubus3}
                alt="UX Design for Tubus - 3"
                className="portfolio-six-image"
              />
            </div>
          </div>
        </div>

        {/* Seventh row */}
        <div className="container-fluid portfolio-fourth">
          <h3 className="number">
            <span>02.</span>
            <span className="heading">Working Process</span>
          </h3>
          <p className="text">
            One SEO component called off-site SEO ensures that users of external
            pages or of social media can find your website. Being optimized for
            SEO increases the site’s potential to draw customers from other
            platforms other than the search engine. For instance, when you post
            content and links to your page on Facebook or Twitter, you are able
            to promote your website and attract more customers. One of the main
            goals of SEO is to attract the targeted audience through organic
            searches. The number of visitors to your site influences
            <span style={{ color: "#00c3ff" }}>
              {" "}
              your sales and subscriptions.{" "}
            </span>{" "}
            It also promotes the marketing of your products and services.
            Increased inbound traffic is always good for business because it
            equates to more conversion opportunities.
          </p>
          <p className="text pt-0">
            Some SEO-related tools such as the Google Keyword Planner and Google
            Analytics provide quantitative data to help you understand your
            market, analyze the trends, and know your competitors’ standings. It
            helps you identify popular and valuable keywords so you can decide
            how to structure or revise your content.
          </p>
        </div>

        {/* Eighth-row */}
        <div className="container-fluid portfolio-eighth">
          <img
            src={UxDesignForTubus4}
            alt="UX Design for Tubus - 4"
            className="portfolio-eighth-image"
          />
        </div>

        {/* Ninth row */}
        <div className="container-fluid portfolio-fourth">
          <h3 className="number">
            <span>03.</span>
            <span className="heading"> Perfect Result</span>
          </h3>
          <p className="text">
            Implementing SEO strategies help you to rank higher on the search
            engine’s results page (SERP). This means that when your target
            customers search for products and services that your industry
            offers, they are{" "}
            <span style={{ color: "#fe4c1c" }}>
              likely to find your website.
            </span>
            When you repeatedly appear on the SERP, users become aware of your
            site and your business. This increases the chances of landing
            potential customers on your webpages.{" "}
            <strong>
              SEO is less expensive than other online marketing approaches.
            </strong>{" "}
            It also offers higher reward rates when compared to other techniques
            such as social media marketing, pay per click advertising, and email
            marketing.
          </p>
        </div>

        {/* Tenth row */}
        <div className="container-fluid portfolio-tenth">
          <div className="portfolio-navigation">
            <Link
              to="/portfolio/analysis-of-security"
              className="left-icon-text"
            >
              <div className="left-icon-container">
                <FaArrowLeftLong className="left-icon" />
              </div>
              <span className="previous"> PREVIOUS</span>
            </Link>

            <Link
              to="/portfolio/new-soft-for-watch"
              className="right-icon-text"
            >
              <span className="next"> NEXT</span>

              <div className="right-icon-container">
                <FaArrowRightLong className="right-icon" />
              </div>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default UxDesignForTubus;
