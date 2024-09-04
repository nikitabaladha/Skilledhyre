import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";
import "../../ServicesSection/CommonServiceSubPages.css";

import WhiteLabelWebDevelopmentImage1 from "../../../images/ForAgenciesImages/WhiteLabelWebDevelopment-1.png";
import WhiteLabelWebDevelopmentImage2 from "../../../images/ForAgenciesImages/WhiteLabelWebDevelopment-2.png";
import WhiteLabelWebDevelopmentImage3 from "../../../images/ForAgenciesImages/WhiteLabelWebDevelopment-3.png";
import WhiteLabelWebDevelopmentImage4 from "../../../images/ForAgenciesImages/WhiteLabelWebDevelopment-4.png";

const WhiteLabelWebDevelopment = () => {
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
            <h1>White Label Web Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">White Label Web Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={WhiteLabelWebDevelopmentImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>White Label Web
                Development
              </h6>
              <h2>What we do?</h2>

              <p>
                Skilledhyre is a leading white label web development company,
                specializing in crafting high-quality, custom web solutions for
                agencies and businesses of all sizes. We understand the
                challenges you face in delivering exceptional digital
                experiences to your clients, and we’re here to bridge the gap
                between your vision and reality.
              </p>

              <p>
                <strong>
                  {" "}
                  Partner with Skilledhyre today and unlock the potential of
                  white label web development. We’ll help you deliver
                  cutting-edge web solutions to your clients and achieve your
                  business goals.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>Benefits of White Label Web Development</h2>
              <p>
                In today’s competitive digital landscape, offering comprehensive
                web development services is crucial for agency success. But
                building and maintaining an in-house development team can be
                costly, time-consuming, and require specialized expertise.
                That’s where Skilledhyre’s white label web development comes in,
                empowering agencies like yours to:
              </p>

              <p>1. Expand Your Service Offerings</p>
              <p>2. Enhance Your Brand Value</p>
              <p>3. Boost Profitability</p>
              <p>4. Access Expert Talent & Technology</p>
              <p>5. Streamline Project Delivery</p>
              <p>6. Scale According to Demand</p>
              <p>7. Gain Peace of Mind</p>
              <p>
                Partner with Skilledhyre and unlock the powerful benefits of
                white label web development. Let us handle the technical
                complexities while you focus on growing your agency and
                exceeding client expectations.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={WhiteLabelWebDevelopmentImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row ser-sub-card-row">
            <div className="col-md-6 d-flex flex-column ser-sub-card">
              <div className="col-md-12">
                <img
                  src={WhiteLabelWebDevelopmentImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Why choose us for White Label Web development?</h3>
                <p>
                  In the competitive world of web development, choosing the
                  right white label partner is crucial. With Skilledhyre, you
                  gain more than just a service provider – you gain a trusted
                  ally dedicated to your success. Choose Skilledhyre as your
                  white label web development partner and experience the
                  difference. We're committed to your success, providing
                  exceptional service, quality solutions, and a true partnership
                  that helps you achieve your goals.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={WhiteLabelWebDevelopmentImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Personalization Is What We Do</h3>
                <p>
                  In the age of mass-produced experiences, Skilledhyre goes
                  beyond cookie-cutter solutions. We understand that every
                  client is unique, with specific needs, goals, and target
                  audiences. That's why personalization is at the heart of
                  everything we do as your white label web development partner.
                  By going beyond the generic and embracing personalization,
                  Skilledhyre helps you deliver white label web experiences that
                  resonate, convert, and drive success for your clients. Partner
                  with us and unlock the power of truly personalized web
                  development.
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

export default WhiteLabelWebDevelopment;
