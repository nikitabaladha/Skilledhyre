import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../HomeSection/Footer/Footer";
import Navbar from "../HomeSection/Navbar/Navbar";
import "./GetInTouch.css";

import { FaEarthAmericas } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <>
      <Navbar />
      <div>
        <div>
          {/* First row */}

          <div className="ser-sub">
            {/* First Row*/}
            <div className="container-fluid ser-sub-first">
              <div>
                <h1>Contacts</h1>
                <p>
                  <Link to="/" className="homepage-link">
                    Home
                  </Link>
                  <span class="material-symbols-outlined greater-than-icon">
                    chevron_right
                  </span>
                  <span className="current-page">Contacts</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}

        <div className="container-fluid get-in-touch-sec">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6 full-width-col">
              <div className="get-in-touch-sec-card">
                <div className="get-in-touch-sec-heading">
                  <h6>
                    <span className="get-in-touch-dot">•</span>contact details
                  </h6>
                  <h2>Our Contacts</h2>
                  <p>
                    Give us a call or drop by anytime, we endeavour to answer
                    all enquiries within 24 hours on business days. We will be
                    happy to answer your questions.
                  </p>
                </div>

                <div className="get-in-touch-sec-inner-card">
                  <div>
                    <FaEarthAmericas className="get-in-touch-sec-icon" />
                  </div>
                  <div className="get-in-touch-sec-inner-card-content">
                    <h6>Our Address:</h6>
                    <p>
                      Office no – 606 Tower A,I-thum Noida sector 62 , 201309
                    </p>
                  </div>
                </div>

                <div className="get-in-touch-sec-inner-card">
                  <div>
                    <TbMailFilled className="get-in-touch-sec-icon" />
                  </div>
                  <div className="get-in-touch-sec-inner-card-content">
                    <h6>Our mailbox:</h6>
                    <p>team.skilledhyre@gmail.com</p>
                  </div>
                </div>

                <div className="get-in-touch-sec-inner-card">
                  <div>
                    <FaPhone className="get-in-touch-sec-icon" />
                  </div>
                  <div className="get-in-touch-sec-inner-card-content">
                    <h6>Our phones:</h6>
                    <p>+91 -7070633784</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 get-in-touch-form-container">
              <h6>
                <span className="get-in-touch-form-dot">•</span>GET IN TOUCH
              </h6>
              <h2>Ready to Get Started?</h2>
              <form className="get-in-touch-contact-form">
                <input
                  type="text"
                  className="form-control text-field mb-3"
                  placeholder="Your Name *"
                />
                <input
                  type="email"
                  className="form-control text-field mb-3"
                  placeholder="Your Email *"
                />
                <textarea
                  className="form-control text-field mb-3"
                  placeholder="Message..."
                  rows="4"
                ></textarea>
                <Button className="ml-2 get-in-touch-button">
                  Get In Touch <IoIosArrowRoundForward className="arrow-icon" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Third row */}

        <div className="container-fluid get-in-touch-third">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.086412379796!2d77.36987507495655!3d28.627172134325072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f6bf0e729b%3A0x4c68e44d9e70a67f!2sI-Thum%20Tower%20-%20office%20space%20in%20IThum%20Noida%20Sector%2062!5e0!3m2!1sen!2sin!4v1723001883419!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="I-Thum Tower Office Location"
            className="xyz"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GetInTouch;
