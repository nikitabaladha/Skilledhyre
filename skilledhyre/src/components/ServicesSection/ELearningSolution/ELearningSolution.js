import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import eLearningImage1 from "../../../images/ServicesSubPageImages/e-learning-1.png";
import eLearningImage2 from "../../../images/ServicesSubPageImages/e-learning-2.jpg";
import eLearningImage3 from "../../../images/ServicesSubPageImages/e-learning-3.png";
import eLearningImage4 from "../../../images/ServicesSubPageImages/e-learning-4.png";
import eLearningImage5 from "../../../images/ServicesSubPageImages/e-learning-5.png";
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
            <h1>E -Learning Solution</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">E - Learning Solution</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={eLearningImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>E-Learning Solution
              </h6>
              <h2>What we do</h2>
              <p>
                We help organizations in developing digital training modules. We
                transform your company literature, and mundane in-person
                training using visual aids and interactive web/mobile-based
                gamification. This end to end process communication with
                engagement in the learning enhances information retention rates
                and improves employee skills.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-thi-content">
              <h2>AR AND VR EXPERIENCES</h2>
              <p>
                By transforming complex practical training with interactive,
                simulated VR experience we encourage effective skills
                development. Or provide an immersive digital experience so that
                the customers can sense the product value rather than just
                seeing a product video. An effective way of communicating the
                product benefits that can only be sensed by using the product.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={eLearningImage2}
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
                  src={eLearningImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>LEARNING MANAGEMENT SYSTEM</h3>
                <p>
                  We help you improve your service efficiency and effectiveness
                  by creating a knowledge-centric web and/or mobile-based app.
                  The key features of an LMS incorporate easy data management
                  with high levels of security, employee registrations,
                  personalized assessments, and tracking. Its applications range
                  from creating effective workforce training systems, as well as
                  developing clear and concise product e-detailers.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={eLearningImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>ENGAGING PRODUCT VIDEOS</h3>
                <p>
                  We conceptualize and produce high-end explainers with
                  live-action, 2D & 3D animations which improve engagement and
                  enable effective communication. Use them in your marketing
                  emailers, sales presentations, or during exhibitions to
                  attract new audiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth row */}
        <div className="container-fluid ser-sub-fif">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-fif-content">
              <h2>SALES TOOLKIT</h2>
              <p>
                By transforming complex practical training with interactive,
                simulated VR experience we encourage effective skills
                development. Or provide an immersive digital experience so that
                the customers can sense the product value rather than just
                seeing a product video. An effective way of communicating the
                product benefits that can only be sensed by using the product.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={eLearningImage5}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ELearningSolution;
