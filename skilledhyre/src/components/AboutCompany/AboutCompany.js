import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";

import Navbar from "../HomeSection/Navbar/Navbar";
import Footer from "../HomeSection/Footer/Footer";
import "../../components/ServicesSection/CommonServiceSubPages.css";
import "./AboutCompany.css";

import AboutCompanyImage1 from "../../images/AboutCompanyImages/AboutCompany-1.png";
import AboutCompanyImage2 from "../../images/AboutCompanyImages/AboutCompany-2.png";

import { TbMailFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";

const AboutCompany = () => {
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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-company");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <div>
        {/* First Row*/}
        <div className="ser-sub">
          <div className="container-fluid ser-sub-first">
            <div>
              <h1>About Company</h1>
              <p>
                <Link to="/" className="homepage-link">
                  Home
                </Link>
                <span class="material-symbols-outlined greater-than-icon">
                  chevron_right
                </span>
                <span className="current-page">About Company</span>
              </p>
            </div>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={AboutCompanyImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>who we are
              </h6>
              <h2>Skilledhyre</h2>
              <p>
                We at Skilledhyre deliver high-end IT and Staffing solutions to
                businesses. We know what it takes to deliver effectively
                optimized website solutions. We develop and present new ideas,
                concepts, solutions and approaches for client success. Being
                knowledgeable, skilful and experienced is as important as being
                focused, organized and accessible.
              </p>
              <Button
                variant="secondary"
                onClick={handleClick}
                className="ml-2 contact-us-button"
              >
                Contact Us
                <IoIosArrowRoundForward className="arrow-icon" />
              </Button>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <h6>
                <span className="ser-sub-dot">•</span>Skilledhyre
              </h6>
              <h2>What we do</h2>
              <img
                src={AboutCompanyImage2}
                alt="Website Design"
                className="ser-sub-left-img"
                style={{ paddingTop: "20px" }}
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <p>
                These days Internet is the power that has been making the
                businesses prosper and grow. With our agile and experienced
                team, we make sure that the changes and developments are
                inculcated in the solutions that we offer to our versatile
                clientele. To make businesses make the most of this power, we
                create and design effective and sturdy online applications that
                are used for managing the companies’ data securely.
              </p>
              <p>
                To stay competitive in today’s electronically savvy world
                requires much more than launching a website on social media
                platforms. Skilledhyre provides top Digital marketing tools like
                Search Engine Optimization, Social Media Marketing, Pay Per
                Click, Content Marketing and many more to help you promote your
                business.
              </p>
              <p>
                We are specialised in Recruitment Consultants in PAN India. We
                help candidates realize their true potential and career
                applications and at the same time help employers recruit the
                best available talent. Our prime focus is not just our clients
                but also our candidates. We have an extensive candidate database
                and our job opportunities include permanent jobs, contractual
                positions, contract to hire and HR services in many industry
                sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid about-company-four">
          <div className="row">
            <div className="col-md-4">
              <div className="about-company-four-card card-1">
                <div className="about-company-four-small-number number-1">
                  01
                </div>
                <div className="about-company-four-card-content">
                  <h5>Establishment</h5>
                  <p>
                    With highly talented and experienced professionals,
                    Skilledhyre aims at delivering cutting edge solutions for
                    global organizations and tech startups. With the help of our
                    experts, we help our clients implement digital
                    transformations that achieve optimal results.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-company-four-card card-2">
                <div className="about-company-four-small-number number-2">
                  02
                </div>
                <div className="about-company-four-card-content">
                  <h5>Our Appeal</h5>
                  <p>
                    Our experts can deliver across a range of applications and
                    successful delivery of a hefty set of excellence, proficient
                    team, and quality engagement. We also believe to work with
                    perfection and professionalism and excluding out irrelevant
                    details.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-company-four-card card-3">
                <div className="about-company-four-small-number number-4">
                  03
                </div>
                <div className="about-company-four-card-content">
                  <h5>Priorities and propositions</h5>
                  <p>
                    Our approach is to combine our understanding of user
                    behavior with a commitment to meeting the business goals of
                    our clients. Our staff is diverse and talented in all
                    aspects of website technology and marketing, including
                    content creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth row */}
        <div
          className="container-fluid contact-card-container"
          style={{ paddingTop: "40px", paddingBottom: "20px" }}
        >
          <div className="row contact-card-row">
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-card-body">
                  <FaRegAddressCard className="contact-card-icon" />
                  <p className="contact-card-text1">
                    Office no - 606 Tower A, I-thum Noida sector 62, 201309
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-card-body">
                  <TbMailFilled className="contact-card-icon" />
                  <h3 className="contact-card-title">Email Us</h3>
                  <p className="contact-card-text2">
                    team.skilledhyre@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="contact-card">
                <div className="contact-card-body">
                  <FaPhone className="contact-card-icon" />
                  <h3 className="contact-card-title">Call Us</h3>
                  <p className="contact-card-text2">+91 7070633784</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutCompany;
