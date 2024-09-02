import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../CommonServiceSubPages.css";
import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";

import reactNativeAppImage1 from "../../../images/ServicesSubPageImages/react-app-1.jpg";
import reactNativeAppImage2 from "../../../images/ServicesSubPageImages/react-app-2.jpg";
import reactNativeAppImage3 from "../../../images/ServicesSubPageImages/react-app-3.jpg";
import reactNativeAppImage4 from "../../../images/ServicesSubPageImages/react-app-4.jpg";

const ReactNativeAppDevelopment = () => {
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
            <h1>React Native App Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">React Native App Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={reactNativeAppImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>REACT NATIVE MOBILE APP
                DEVELOPMENTS
              </h6>
              <h2>What we do</h2>
              <p>
                We help every business owner get the exact type of application
                for their needs. We know how to make happy clients by providing
                the application with an easy user interface and good navigation
                speed which make the customer satisfied. Our clients are running
                their businesses happily today. Experts at Skilledhyre, develop
                Native iOS, Android apps using the modern React Native
                JavaScript library.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>Hire Skilledhyre for React App Development</h2>
              <p>
                Skilledhyre is a well-known and leading react native app
                development services company in Noida, Delhi/NCR. All the latest
                technologies are included in the mobile application by our team
                of professionals. The best benefits of hiring Skilledhyre for
                the native app development is that our app developers have
                developed the app for multiple businesses and different clients.
                Before starting the development work, our experts analyze the
                client business so that they can develop the perfect
                application. Our team of experts works on finding the best
                option for the customers.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={reactNativeAppImage2}
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
                  src={reactNativeAppImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>React Native App Ideation & Consulting</h3>
                <p>
                  React Native application development comes with a number of
                  benefits for SMEs and Enterprises alike, but the framework
                  doesn’t fit all development scenarios. Our react native mobile
                  app developer sits with you to understand your product vision
                  and find the best way in which React Native can be aligned
                  with your business goals.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-card">
              <div>
                <img
                  src={reactNativeAppImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>React Native Support & Maintenance</h3>
                <p>
                  App development using React Native is a continuous process.
                  Your application will have to be upgraded according to every
                  new operating system version and design upgrades. Our React
                  Native app developers understand the importance of constant
                  upgrades and offer you extensive support and maintenance
                  support till much after app deployment.
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

export default ReactNativeAppDevelopment;
