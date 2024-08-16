import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import brandingImage1 from "../../../images/ServicesSubPageImages/branding-1.jpg";
import brandingImage2 from "../../../images/ServicesSubPageImages/branding-2.png";
import brandingImage3 from "../../../images/ServicesSubPageImages/branding-3.png";
import brandingImage4 from "../../../images/ServicesSubPageImages/branding-4.png";

import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";

import "../CommonServiceSubPages.css";

const Branding = () => {
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
            <h1>Branding</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Branding</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={brandingImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>Software Development
              </h6>
              <h2>What we do</h2>
              <p>
                Our software development offer value to your business. Our
                software development experinced professionals at skilledhyre
                offer high quality and effective software applications that
                suits the requirements of our clients. We cater to our client’s
                needs and offer custom software development in a cost effective
                and timely manner. Our professionals are trained on new concepts
                and technology from time to time to meet the unique needs of
                business in an effective way. We work on our client’s
                requirements and develop a solution that is reliable and
                valuable to them.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-thi-content">
              <h2>Why hire us for your software development needs?</h2>
              <p>
                over the years software has become integral part of our life and
                bsuniness, we are using software applications today’s in evry
                aspect of life.across all industries softwares are used to
                deliver quality ,fast and automated results.as the time is
                changing software needs are also changing over the time, so we
                at Skilledhyre provides worldclass software as per international
                standards that can optimize your business to cater optimum
                results.Before developing the software applications we capture
                client’s all requirements and take full understanding of their
                business and working area after that we catture all the disired
                functionalities on the papers to have clear cut understaning of
                sofware functionalities.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={brandingImage2}
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
                  src={brandingImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>We serve several industries</h3>
                <p>
                  We are a renowned and a trustworthy name in the market where
                  our vast technical knowledge and talented workforce gives you
                  a high ROI on the investment you make. We serve different
                  industries like banking, travel, retail, manufacturing, etc.
                  Through our services we help our clients to enhance
                  productivity and reduce costs. Our services are highly
                  innovative for unexplored domains as well. We work with a
                  number of technologies to reach.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={brandingImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Our software developers work in an extraordinary manner</h3>
                <p>
                  We go that extra mile to help our clients and contribute to
                  the overall project in an efficient way. Our software
                  developers will perform their research and design thoroughly
                  so once the software development process is completed, the
                  required result is simply satisfying. After that, the other
                  phases of development and strict testing procedures will be
                  completed in an error free.
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

export default Branding;
