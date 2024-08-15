import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import softwareDevelopmentImage2 from "../../../images/SoftwareDevelopmentImages/software-development-2.jpg";
import softwareDevelopmentImage3 from "../../../images/SoftwareDevelopmentImages/software-development-3.png";
import softwareDevelopmentImage4 from "../../../images/SoftwareDevelopmentImages/software-development-4.png";
import softwareDevelopmentImage5 from "../../../images/SoftwareDevelopmentImages/software-development-5.png";
import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";
import "./SoftwareDevelopment.css";

const WebsiteDevelopment = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".soft-dev-left-img, .soft-dev-right-img"
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

      <div className="soft-dev">
        {/* First Row*/}
        <div className="container-fluid soft-dev-first">
          <div>
            <h1>Software Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Software Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid soft-dev-sec">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={softwareDevelopmentImage2}
                alt="Website Design"
                className="soft-dev-left-img"
              />
            </div>
            <div className="col-md-6 d-flex flex-column soft-dev-sec-content">
              <h6>
                <span className="recruitment-services-dot">•</span>Software
                Development
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
        <div className="container-fluid soft-dev-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column soft-dev-thi-content">
              <h2>Why hire us for your software development needs?</h2>
              <p>
                Over the years software has become integral part of our life and
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
                src={softwareDevelopmentImage3}
                alt="Website Design"
                className="soft-dev-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid soft-dev-fourth">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center soft-dev-card">
              <div className="col-md-12 ">
                <img
                  src={softwareDevelopmentImage4}
                  alt="Website Design"
                  className="soft-dev-card-img"
                />
              </div>
              <div className="soft-dev-fourth-content">
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
            <div className="col-md-6 d-flex flex-column justify-content-center soft-dev-card">
              <div>
                <img
                  src={softwareDevelopmentImage5}
                  alt="Website Design"
                  className="soft-dev-card-img"
                />
              </div>
              <div className="soft-dev-fourth-content">
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

export default WebsiteDevelopment;
