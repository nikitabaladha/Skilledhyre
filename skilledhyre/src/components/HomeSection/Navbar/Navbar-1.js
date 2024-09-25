import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import brandLogoImage from "../../../images/brand-logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const handleClose = () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");
  };

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Search submitted:", searchTerm);

    handleCloseSearch();
  };

  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [staffingExpanded, setStaffingExpanded] = useState(false);
  const [agenciesExpanded, setAgenciesExpanded] = useState(false);
  const [digitalMarketingExpanded, setDigitalMarketingExpanded] =
    useState(false);
  const [mobileAppDevExpanded, setMobileAppDevExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleServices = () => {
    setServicesExpanded(!servicesExpanded);
    setActiveLink("services");
  };

  const toggleStaffing = () => {
    setStaffingExpanded(!staffingExpanded);
    setActiveLink("staffing");
  };

  const toggleAgencies = () => {
    setAgenciesExpanded(!agenciesExpanded);
    setActiveLink("agencies");
  };

  const toggleDigitalMarketing = () => {
    setDigitalMarketingExpanded(!digitalMarketingExpanded);
    setActiveLink("digitalMarketing");
  };

  const toggleMobileAppDev = () => {
    setMobileAppDevExpanded(!mobileAppDevExpanded);
    setActiveLink("mobileAppDev");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            id="brand-logo"
            src={brandLogoImage}
            alt="Logo"
            width="30"
            height="24"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="dropdown-header">
            <button
              className="close"
              type="button"
              aria-label="Close"
              onClick={handleClose}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active home-link"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About Company
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={`nav-link ${
                  activeLink === "services" ? "activeLink" : ""
                }`}
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded={servicesExpanded}
                onClick={() => {
                  if (activeLink === "services") {
                    setServicesExpanded(false);
                    setActiveLink(null);
                  } else {
                    setServicesExpanded(true);
                    setActiveLink("services");
                  }
                }}
              >
                Services{" "}
                <IoIosArrowDown className="dropdown-toggle-icon large-screen" />
              </Link>{" "}
              {servicesExpanded && (
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> WEBSITE DESIGN
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> WEB DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> Software
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> E-Commerce
                      Development
                    </Link>
                  </li>
                  <li className="dropdown-submenu">
                    <Link
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                      href="#"
                      aria-expanded={digitalMarketingExpanded}
                      onClick={() => {
                        if (activeLink === "digitalMarketing") {
                          setDigitalMarketingExpanded(false);
                          setActiveLink(null);
                        } else {
                          setDigitalMarketingExpanded(true);
                          setActiveLink("digitalMarketing");
                        }
                      }}
                    >
                      <span className="dropdown-dot">•</span> Digital Marketing{" "}
                      <IoIosArrowForward className="dropdown-toggle-icon large-screen" />
                    </Link>
                    {digitalMarketingExpanded && (
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "digitalMarketing"
                                ? "active-link"
                                : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> Branding
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "digitalMarketing"
                                ? "active-link"
                                : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> Search
                            Engine Optimization
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "digitalMarketing"
                                ? "active-link"
                                : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> Social Media
                            Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "digitalMarketing"
                                ? "active-link"
                                : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> PPC
                            Management
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "digitalMarketing"
                                ? "active-link"
                                : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> Content
                            Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "digitalMarketing"
                                ? "active-link"
                                : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> Influencer
                            Marketing
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="dropdown-submenu">
                    <Link
                      aria-expanded={mobileAppDevExpanded}
                      onClick={() => {
                        if (activeLink === "mobileAppDev") {
                          setMobileAppDevExpanded(false);
                          setActiveLink(null);
                        } else {
                          setMobileAppDevExpanded(true);
                          setActiveLink("mobileAppDev");
                        }
                      }}
                      href="#"
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                    >
                      <span className="dropdown-dot">•</span> Mobile Application
                      Development{" "}
                      <IoIosArrowForward className="dropdown-toggle-icon large-screen" />
                    </Link>
                    {mobileAppDevExpanded && (
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "mobileAppDev" ? "active-link" : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> IPhone App
                            Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "mobileAppDev" ? "active-link" : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> Android App
                            Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "mobileAppDev" ? "active-link" : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> Hybrid App
                            Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${
                              activeLink === "mobileAppDev" ? "active-link" : ""
                            }`}
                            href="#"
                          >
                            <span className="dropdown-dot">•</span> React App
                            Development
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> E-Learning
                      Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> ERP SOLUTION
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "services" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> API Integration
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded={staffingExpanded}
                onClick={() => {
                  if (staffingExpanded) {
                    setStaffingExpanded(false);
                    setActiveLink(null);
                  } else {
                    setStaffingExpanded(true);
                    setActiveLink("staffing");
                  }
                }}
              >
                Staffing{" "}
                <IoIosArrowDown className="dropdown-toggle-icon large-screen" />
              </Link>
              {staffingExpanded && (
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "staffing" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> Permanent Staffing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "staffing" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> Contract Staffing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "staffing" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> HR Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "staffing" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> Contract to Hire
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "staffing" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> RPO
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "staffing" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> Head Hunting
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span className="dropdown-dot">•</span> Hire Developers
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded={agenciesExpanded}
                onClick={() => {
                  if (agenciesExpanded) {
                    setAgenciesExpanded(false);
                    setActiveLink(null);
                  } else {
                    setAgenciesExpanded(true);
                    setActiveLink("agencies");
                  }
                }}
              >
                For Agencies{" "}
                <IoIosArrowDown className="dropdown-toggle-icon large-screen" />
              </Link>
              {agenciesExpanded && (
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "agencies" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> White Label
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "agencies" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> White Label Web
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "agencies" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> White Label App
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "agencies" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> Outsourced
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "agencies" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> Dedicated Software
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeLink === "agencies" ? "active-link" : ""
                      }`}
                      href="#"
                    >
                      <span className="dropdown-dot">•</span> Dedicated
                      Marketing Teams
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/get-in-touch">
                Get in touch
              </Link>
            </li>
          </ul>
          <button className="navbar-btn me-2 get-a-quote">
            <Link className="nav-link " to="/get-a-quote">
              Get A Quote
            </Link>
          </button>
        </div>
        {/* Search Icon or Close Button */}
        {!showSearch ? (
          <div className="search-icon" onClick={handleSearchClick}>
            <FaSearch className="dropdown-toggle-icon" />
          </div>
        ) : (
          <div className="close-search-icon" onClick={handleCloseSearch}>
            <IoMdClose className="close-search-form" />
          </div>
        )}

        {/* Search Input Area */}
        {showSearch && (
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <FaSearch />
              </button>
            </div>
          </form>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
