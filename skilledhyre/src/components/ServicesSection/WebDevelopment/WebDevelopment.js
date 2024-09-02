import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import webDevelopmentImage1 from "../../../images/ServicesSubPageImages/web-development-1.png";
import webDevelopmentImage2 from "../../../images/ServicesSubPageImages/web-development-2.png";
import webDevelopmentImage3 from "../../../images/ServicesSubPageImages/web-development-3.png";
import webDevelopmentImage4 from "../../../images/ServicesSubPageImages/web-development-4.jpg";
import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonServiceSubPages.css";

const WebsiteDevelopment = () => {
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
            <h1>Web Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Web Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={webDevelopmentImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>Web Development
              </h6>
              <h2>What we do</h2>
              <p>
                SWe at Skilledhyre provide web development solutions to clients.
                We are having skilled and experienced team of developers to
                handle every kind of projects across all industries . Having
                expertise we know what it takes to deliver effectively optimized
                website solutions. Being knowledgeable, skilful and experienced
                is as important as being focused, organized and accessible.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-thi-content">
              <h2>Tailor Made Web Application Development</h2>
              <p>
                Internet is the power that has been making the businesses
                prosper and grow in current times. To make businesses make the
                most of this power, Skilledhyre is commited to offer the
                exceptional service of Web Application Development. We develop
                and design robust and effective online applications that are
                utilized for managing the data of the company securely. With
                years of experience in this field, we have come to know the
                changing trends in the web industry. We make sure that the
                changes and developments are inculcated in the solutions that we
                offer to our versatile clientele. We have talented professionals
                on our team who have years of experience in all three areas viz.
                specification, development and design of a number of interactive
                applications. Our clientele belongs to a variety of industries
                and hence, we understand the background of many fields. This
                helps us offer a solution that meets the needs of the client,
                perfectly.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={webDevelopmentImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row ser-sub-card-row">
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div className="col-md-12 ">
                <img
                  src={webDevelopmentImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>We Have Been Developing Web Applications</h3>
                <p>
                  For event management system, Interactive database system,
                  secure payment system as well as grant management system and
                  many others. While these systems vary a lot from each other,
                  the one thing common is the requirement of high end knowledge
                  to put together an effective result. skilledhyre captures the
                  exact requirement of the client through a well designed
                  documented system. The members on the team first make sure
                  that everyone has completely understood the demands of the new
                  project. When this assurance is made, the responsible people
                  understand the functioning of the system and the purpose for
                  which it is designed. The technical design people, then map
                  out the entire system architecturally with the help of a
                  series of different wireframes. This helps the people
                  demonstrate the flow of application.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={webDevelopmentImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>We Develop As per Client's Requirements</h3>
                <p>
                  That every business has A different requirement and different
                  working area along with different business models. The same
                  web application does not work for everyone. Hence, we offer
                  tailor made Web Application Development services that includes
                  different functions like consultation, security, deployment,
                  development and maintenance as well. Since our inception, we
                  have worked on a number of projects that has added to our
                  experience and enhanced our knowledge. We have companies of
                  various sizes and belonging to different fields as our
                  clients. It is our objective to offer our complete services
                  and deliver high end quality solutions for every project. Our
                  team taps the market on a continual basis to match our
                  services to international standards. We welcome you to
                  experience us!
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

export default WebsiteDevelopment;
