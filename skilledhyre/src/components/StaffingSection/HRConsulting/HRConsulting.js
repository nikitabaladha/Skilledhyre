import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonStaffingSubPages.css";

import Footer from "../../HomeSection/Footer/Footer";

import { BsStopwatch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineStars } from "react-icons/md";
import { RxDotsHorizontal } from "react-icons/rx";

import researchCardImage from "../../../images/StaffingSubPageImages/research-card.png";
import planningCardImage from "../../../images/StaffingSubPageImages/planning-card.png";
import driveCardImage from "../../../images/StaffingSubPageImages/drive-card.jpg";
import StaffingArrowImage from "../../../images/StaffingSubPageImages/staffing-arrow.png";

const HRConsulting = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".slide-target");
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
    navigate("/hr-consulting");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <div className="staffing">
        {/* First Row*/}
        <div className="container-fluid staffing-first">
          <div>
            <h1>HR Consulting</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">HR Consulting</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid staffing-sec slide-target">
          <h6>
            <span className="staffing-dot">•</span>Staffing
          </h6>
          <h2>HR Consulting</h2>
          <p>
            Placing permanent employees & absorbing them into your organized
            Environment is a very Difficult & serious commitment, so it’s better
            to choose right person to make this difficult commitment into
            accurate decision.We are here to help you pick out just the right
            ones.
          </p>
          <p>
            Based on our experienced Knowledge we have found that client
            recruitment requirements usually fit into the one Strategy i.e. a
            higher degree of thorough search and screening process. So, we offer
            very transparent and flexible services which we believe will lead to
            a successful and cost effective solution to your staffing need.
          </p>
          <p>
            We can serve you very efficient & proficient permanent Staffing
            solution Across all position in IT & Non IT Industry. you rely on us
            to full fill your requirements for professional, mid-level
            experience resource or a fresher.
          </p>
        </div>

        {/* Third row */}
        <div className="container-fluid staffing-thi slide-target">
          <div className="staffing-thi-content">
            <h2>WHAT SKILLEDHYRE DELIVERS THROUGH HR CONSULTING?</h2>

            <div className="staffing-dot-dash-line">
              <span className="staffing-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="staffing-decorative-line"></span>
            </div>

            <p>
              Do you want to show your information with less gap? Then you
              should definitely use this style!
            </p>
          </div>

          <div className="container-fluid">
            <div className="row staffing-card-row">
              <div className="col-md-4" onClick={handleClick}>
                <div className="staffing-card staffing-card-1">
                  <div className="staffing-card-body">
                    <div>
                      <FiShoppingBag className="staffing-card-icon" />
                    </div>
                    <div>
                      <h3 className="staffing-card-text">
                        Fast-track Recruitment Services.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" onClick={handleClick}>
                <div className="staffing-card staffing-card-2">
                  <div className="staffing-card-body">
                    <div>
                      <BsStopwatch className="staffing-card-icon" />
                    </div>
                    <div>
                      <h3 className="staffing-card-text">
                        Expertise in hiring process.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" onClick={handleClick}>
                <div className="staffing-card staffing-card-3">
                  <div className="staffing-card-body">
                    <div>
                      <FaRegHandshake className="staffing-card-icon" />
                    </div>
                    <div>
                      <h3 className="staffing-card-text">
                        Expert recruitment team.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" onClick={handleClick}>
                <div className="staffing-card staffing-card-4">
                  <div className="staffing-card-body">
                    <div>
                      <LuPencilRuler className="staffing-card-icon" />
                    </div>
                    <div>
                      <h3 className="staffing-card-text">
                        Talents Search Specialist are in MBA HR
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" onClick={handleClick}>
                <div className="staffing-card staffing-card-5">
                  <div className="staffing-card-body">
                    <div>
                      <HiOutlineDocumentMagnifyingGlass className="staffing-card-icon" />
                    </div>
                    <div>
                      <h3 className="staffing-card-text">
                        Staffing within budget.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" onClick={handleClick}>
                <div className="staffing-card staffing-card-6">
                  <div className="staffing-card-body">
                    <div>
                      <MdOutlineStars className="staffing-card-icon" />
                    </div>
                    <div>
                      <h3 className="staffing-card-text">
                        Fast-tTransparent and flexible.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid staffing-four slide-target">
          <div className="row">
            <div className="col-md-4">
              <div className="staffing-four-card">
                <img
                  src={StaffingArrowImage}
                  alt="Flask"
                  className="staffing-four-arrow-image"
                />
                <div className="circle">01</div>
                <div className="staffing-four-card-body">
                  <img
                    src={researchCardImage}
                    alt="Flask"
                    className="staffing-four-image"
                  />
                  <h5 className="staffing-four-card-title">Research</h5>
                  <p className="staffing-four-card-text">
                    Replacement for a person who left, or whether it's a new
                    position
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="staffing-four-card">
                <img
                  src={StaffingArrowImage}
                  alt="Flask"
                  className="staffing-four-arrow-image"
                />
                <div className="circle">02</div>
                <div className="staffing-four-card-body">
                  <img
                    src={planningCardImage}
                    alt="Clipboard"
                    className="staffing-four-image"
                  />
                  <h5 className="staffing-four-card-title">Planning</h5>
                  <p className="staffing-four-card-text">
                    We plan before starting recruitment to get positive result
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="staffing-four-card">
                <img
                  src={StaffingArrowImage}
                  alt="Flask"
                  className="staffing-four-arrow-image"
                />
                <div className="circle">03</div>
                <div className="staffing-four-card-body">
                  <img
                    src={driveCardImage}
                    alt="Drive"
                    className="staffing-four-image"
                  />
                  <h5 className="staffing-four-card-title">Drive</h5>
                  <p className="staffing-four-card-text">
                    We are expert in Interview Drive for Bulk Hiring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth row */}
        <div className="container-fluid staffing-fif">
          <div className="staffing-fif-content">
            <h2>Call to Action</h2>
            <div className="staffing-dot-dash-line">
              <span className="staffing-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="staffing-decorative-line"></span>
            </div>
          </div>

          <Card className="staffing-fif-card">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Text className="staffing-fif-card-text">
                  Do You Have An Interesting Projects?
                </Card.Text>
                <div className="staffing-fif-card-button">
                  <Button className="contact-us" onClick={handleClick}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HRConsulting;
