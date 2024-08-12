import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import brandLogoImage from "../../images/brand-logo.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const handleClose = () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");
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
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/action">
                    WEBSITE DESIGN
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    WEB DEVELOPMENT
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/something-else">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    E-Commerce Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    E-Learning Solution
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    ERP SOLUTION
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    API Integration
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                Staffing
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/action">
                    Permanent Staffing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/something-else">
                    Contract Staffing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    HR Consulting
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    Contract to Hire
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    RPO
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    Head Hunting
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
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                For Agencies
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/action">
                    White Label Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    White Label Web Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/something-else">
                    White Label App Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/action">
                    Outsourced Software Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    Dedicated Software Teams
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/something-else">
                    Dedicated Marketing Teams
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-company">
                Get in touch
              </Link>
            </li>
          </ul>

          <button className="navbar-btn me-2 get-a-quote" type="submit">
            Get a Quote
          </button>
        </div>
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
