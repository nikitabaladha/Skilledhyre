import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../CommonServiceSubPages.css";
import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";

import iphoneAppImage1 from "../../../images/ServicesSubPageImages/iphone-app-1.png";
import iphoneAppImage2 from "../../../images/ServicesSubPageImages/iphone-app-2.jpg";
import iphoneAppImage3 from "../../../images/ServicesSubPageImages/iphone-app-3.png";
import iphoneAppImage4 from "../../../images/ServicesSubPageImages/iphone-app-4.jpg";

const IPhoneAppDevelopment = () => {
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
            <h1>IPhone App Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">IPhone App Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={iphoneAppImage1}
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
                Skilledhyre provides top iOS application development services
                such as iPods,smartphones, tablets, TVs, and smartwatches.
                Regardless of what you’re lookingfor- whether it is professional
                experts who can transform your business idea into a functional
                iOS application or experts who can design a sleek interface and
                seamless user experience or professionals who provide high-end
                coding or full-cycle iOS development, Skilledhyre is the
                essential solution for you.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-thi-content">
              <h2>Scalability</h2>
              <p>
                We ensure a scalable iOS application development to facilitate
                the rapid growth of the businesses of our customers. With this
                strategy, users leverage of easy up-gradation of our
                applications and make them compatible with all platforms.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={iphoneAppImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-card">
              <div className="col-md-12 ">
                <img
                  src={iphoneAppImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>UX/UI Designing</h3>
                <p>
                  As InnovationM has been a remarkable name in the UX/UI design
                  industry, it also reflects in our iOS application development.
                  With our excellent data architecture techniques, we have
                  indulged simplified data acceptance and accessibility
                  features.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-card">
              <div>
                <img
                  src={iphoneAppImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Significance of iOS application</h3>
                <p>
                  iOS app developers with skilledhyre have the newest and up to
                  date knowledge of the platform, which helps them make the best
                  choice for the project. The iPhone application uses high-end
                  technology and has the best security, that is the reason why
                  most businesses go for iOS app development companies.
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

export default IPhoneAppDevelopment;
