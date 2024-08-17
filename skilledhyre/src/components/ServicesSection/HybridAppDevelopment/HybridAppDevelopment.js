import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../CommonServiceSubPages.css";
import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";

import hybridAppImage1 from "../../../images/ServicesSubPageImages/hybrid-app-1.jpg";
import hybridAppImage2 from "../../../images/ServicesSubPageImages/hybrid-app-2.jpg";
import hybridAppImage3 from "../../../images/ServicesSubPageImages/hybrid-app-3.jpg";
import hybridAppImage4 from "../../../images/ServicesSubPageImages/hybrid-app-4.jpg";

const HybridAppDevelopment = () => {
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
            <h1>Hybrid App Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Hybrid App Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={hybridAppImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>HYBRID MOBILE APP
                DEVELOPMENT
              </h6>
              <h2>What we do</h2>
              <p>
                Skilledhyre, a hybrid application development company of hybrid
                platform mobile app technology that provides cross-platform app
                development services. Our hybrid app development is an
                economical process. The reason for this is that we use real
                talent with skills in JavaScript, HTML5, and CSS to deliver the
                best hybrid apps for customers. The smartest apps are invented
                on various mobile platforms using Titanium, PhoneGap, Snecha
                HTML5-based app development tools with the help of our highly
                experienced hybrid mobile app development developers. Experts
                with high experience and value driven designing team works
                collectively with hybrid app development professionals to
                produce value-defining results for your cross-platform app
                needs.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-thi-content">
              <h2>What sets us Apart for Hybrid mobile App Development?</h2>
              <p>
                With a dedicated and committed team of hybrid mobile app
                developers who have experience in various devices, Skilledhyre
                works to bring together the best native apps and web apps. The
                best way to ensure that your app touches all the market that it
                is intended for is a hybrid application. Our proficiency in
                developing hybrid mobile applications is recognized by our
                professional development expert team. Our potential lies in
                developing built-to-order solutions that play vital roles on
                variousdevices. Contact us for the ultimate personal hybrid
                apps.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={hybridAppImage2}
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
                  src={hybridAppImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Cross-Platform Compatibility</h3>
                <p>
                  These applications are designed to run on multiple platforms
                  at once. So they don’t have the same limitations as apps built
                  specifically for one platform. This makes them ideal for
                  businesses that want their presence to reach all their
                  potential customers.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-card">
              <div>
                <img
                  src={hybridAppImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>User Experience</h3>
                <p>
                  A hybrid application can reuse components and design elements
                  across platforms, which helps create a more consistent user
                  experience. This can improve the brand image of an app because
                  users will be exposed to the same look and feel no matter what
                  platform they use it on.
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

export default HybridAppDevelopment;
