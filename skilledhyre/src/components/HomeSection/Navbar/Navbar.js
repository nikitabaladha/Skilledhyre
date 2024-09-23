import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import brandLogoImage from "../../../images/brand-logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const handleClose = () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");
  };

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission here
    console.log("Search submitted:", searchTerm);
  };

  return (
    <nav className="navbar small-screen-navbar navbar-expand-lg navbar-light bg-light">
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
              <Link className="nav-link" to="/about-company">
                About Company
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services {/* Icons for large and small screens */}
                <IoIosArrowDown className="dropdown-toggle-icon large-screen" />
                <IoIosArrowForward className="dropdown-toggle-icon small-screen" />
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/website-design">
                    <span className="dropdown-dot">•</span> WEBSITE DESIGN
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/web-development">
                    <span className="dropdown-dot">•</span> WEB DEVELOPMENT
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/software-development">
                    <span className="dropdown-dot">•</span> Software Development
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/e-com-development">
                    <span className="dropdown-dot">•</span> E-Commerce
                    Development
                  </Link>
                </li>

                {/* Nested links */}
                <li className="border-bottom">
                  <Link className="dropdown-item">
                    <span className="dropdown-dot">•</span>
                    <span>Digital Marketing </span>
                    {/* Icons for large and small screens */}
                    <IoIosArrowDown className="dropdown-toggle-icon large-screen" />
                    <IoIosArrowForward className="dropdown-toggle-icon small-screen" />
                  </Link>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li className="border-bottom">
                      <Link className="dropdown-item border-top" to="/branding">
                        <span className="dropdown-dot">•</span> Branding
                      </Link>
                    </li>
                    <li className="border-bottom">
                      <Link
                        className="dropdown-item"
                        to="/search-engine-optimization"
                      >
                        <span className="dropdown-dot">•</span>Search Engine
                        Optimization
                      </Link>
                    </li>
                    <li className="border-bottom">
                      <Link
                        className="dropdown-item"
                        to="/social-media-marketing"
                      >
                        <span className="dropdown-dot">•</span>Social Media
                        Marketing
                      </Link>
                    </li>
                    <li className="border-bottom">
                      <Link className="dropdown-item" to="/ppc-management">
                        <span className="dropdown-dot">•</span>PPC Management
                      </Link>
                    </li>
                    <li className="border-bottom">
                      <Link className="dropdown-item" to="/content-marketing">
                        <span className="dropdown-dot">•</span>Content Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/influencer-marketing"
                      >
                        <span className="dropdown-dot">•</span>Influencer
                        Marketing
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Nested links */}
                <li className="border-bottom">
                  <Link className="dropdown-item">
                    <span className="dropdown-dot">•</span> Mobile Application
                    Development {/* Icons for large and small screens */}
                    <IoIosArrowDown className="dropdown-toggle-icon large-screen" />
                    <IoIosArrowForward className="dropdown-toggle-icon small-screen" />
                  </Link>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li className="border-bottom">
                      <Link
                        className="dropdown-item border-top"
                        to="/iphone-app-development"
                      >
                        <span className="dropdown-dot">•</span> IPhone App
                        Development
                      </Link>
                    </li>
                    <li className="border-bottom">
                      <Link
                        className="dropdown-item"
                        to="/android-app-development"
                      >
                        <span className="dropdown-dot">•</span> Android App
                        Development
                      </Link>
                    </li>
                    <li className="border-bottom">
                      <Link
                        className="dropdown-item"
                        to="/hybrid-app-development"
                      >
                        <span className="dropdown-dot">•</span> Hybrid App
                        Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/react-app-development"
                      >
                        <span className="dropdown-dot">•</span> React App
                        Development
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/e-learning-solution">
                    <span className="dropdown-dot">•</span> E-Learning Solution
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/erp-solution">
                    <span className="dropdown-dot">•</span> ERP SOLUTION
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/api-integration">
                    <span className="dropdown-dot">•</span> API Integration
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                onClick={(e) => e.preventDefault()}
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                Staffing {/* Icons for large and small screens */}
                <IoIosArrowDown className="dropdown-toggle-icon large-screen" />
                <IoIosArrowForward className="dropdown-toggle-icon small-screen" />
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/permanent-staffing">
                    <span className="dropdown-dot">•</span> Permanent Staffing
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/contract-staffing">
                    <span className="dropdown-dot">•</span> Contract Staffing
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/hr-consulting">
                    <span className="dropdown-dot">•</span> HR Consulting
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/contract-to-hire">
                    <span className="dropdown-dot">•</span> Contract to Hire
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/rpo">
                    <span className="dropdown-dot">•</span> RPO
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link className="dropdown-item" to="/head-hunting">
                    <span className="dropdown-dot">•</span> Head Hunting
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/hire-developers">
                Hire Developers
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                For Agencies {/* Icons for large and small screens */}
                <IoIosArrowDown className="dropdown-toggle-icon large-screen" />
                <IoIosArrowForward className="dropdown-toggle-icon small-screen" />
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="border-bottom">
                  <Link
                    className="dropdown-item"
                    to="/white-label-digital-marketing"
                  >
                    <span className="dropdown-dot">•</span> White Label Digital
                    Marketing
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link
                    className="dropdown-item"
                    to="/white-label-web-development"
                  >
                    <span className="dropdown-dot">•</span> White Label Web
                    Development
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link
                    className="dropdown-item"
                    to="/white-label-app-development"
                  >
                    <span className="dropdown-dot">•</span> White Label App
                    Development
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link
                    className="dropdown-item"
                    to="/outsourced-software-development"
                  >
                    <span className="dropdown-dot">•</span> Outsourced Software
                    Development
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link
                    className="dropdown-item"
                    to="/dedicated-software-teams"
                  >
                    <span className="dropdown-dot">•</span> Dedicated Software
                    Teams
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link
                    className="dropdown-item"
                    to="/dedicated-marketing-teams"
                  >
                    <span className="dropdown-dot">•</span> Dedicated Marketing
                    Teams
                  </Link>
                </li>
              </ul>
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

        {/* Search Input Area */}
        <div className="search-icon" onClick={handleSearchClick}>
          <FaSearch className="dropdown-toggle-icon" />
        </div>
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
