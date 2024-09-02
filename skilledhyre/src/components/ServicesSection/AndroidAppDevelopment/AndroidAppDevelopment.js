import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../CommonServiceSubPages.css";
import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";

import androidAppImage1 from "../../../images/ServicesSubPageImages/android-app-1.jpg";
import androidAppImage2 from "../../../images/ServicesSubPageImages/android-app-2.jpg";
import androidAppImage3 from "../../../images/ServicesSubPageImages/android-app-3.png";
import androidAppImage4 from "../../../images/ServicesSubPageImages/android-app-4.jpg";

const AndroidAppDevelopment = () => {
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
            <h1>Android App Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Android App Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={androidAppImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>BUILDING SMARTER
                APPLICATIONS FOR SMART USERS
              </h6>
              <h2>What we do</h2>
              <p>
                We are the one of the best, skilled and work driven Android app
                development company in Noida, providing the best Android
                application development services at reasonable rates. We have
                experience and expertise of developing an android app with a
                skilled team of best android app developers in Noida. As an
                android app development company, we have served many
                organizations of all sizes whether big or small to develop our
                operations.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>What sets us Apart for Android App Development?</h2>
              <p>
                The team of Skilledhyre experts can be what you are looking for.
                We have developed number of android applications for various
                android devices. And our products have helped our clients
                achieve their business goals, and even outperformed their
                competitors. Let’s connect and see what difference we can make
                for you.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={androidAppImage2}
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
              <div className="col-md-12 ">
                <img
                  src={androidAppImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>The Research and Market Study</h3>
                <p>
                  Once a task is been assigned to us, our team will get together
                  for a detailed discussion. Our group of professionals will
                  conduct technical analysis, research and market study on how
                  effectively and economically the project can be transformed to
                  an awesome App.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-card">
              <div>
                <img
                  src={androidAppImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Design & Development</h3>
                <p>
                  We follow latest UX trends to define user experiences based on
                  the target audience. Once UX is done we build User Interface
                  by applying brand color and intuitive design trends. We use
                  the best suitable technology stack to develop the Mobile App
                  for various platforms such as Android, iOS and Windows.
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

export default AndroidAppDevelopment;
