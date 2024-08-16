import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonStaffingSubPages.css";

import Footer from "../../HomeSection/Footer/Footer";

import { BsStopwatch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineStars } from "react-icons/md";

const PermanentStaffing = () => {
  return (
    <>
      <Navbar />

      <div className="staffing">
        {/* First Row*/}
        <div className="container-fluid staffing-first">
          <div>
            <h1>Permanent Staffing</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Permanent Staffing</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid staffing-sec">
          <h6>
            <span className="staffing-dot">•</span>Staffing
          </h6>
          <h2>Permanent Staffing & Recruitment Consultants</h2>
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

        <div className="container-fluid staffing-thi">
          <div className="row contact-card-row">
            <div className="col-md-4">
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
            <div className="col-md-4">
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
            <div className="col-md-4">
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
            <div className="col-md-4">
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
            <div className="col-md-4">
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
            <div className="col-md-4">
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
        {/* <div className="div-with-two-colors"></div> */}
        <Footer />
      </div>
    </>
  );
};

export default PermanentStaffing;
