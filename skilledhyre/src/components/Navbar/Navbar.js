import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import brandLogoImage from "../../images/brand-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    setIsCollapsed(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
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
        {!isCollapsed && (
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isCollapsed ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
        <div
          className={`navbar-collapse ${isCollapsed ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          {isCollapsed && isMobile && (
            <RxCross1 className="navbar-close" onClick={closeNavbar} />
          )}
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
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
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
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
                      E- Learning Solution
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
                <Link className="nav-link" to="/get-in-touch">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
          <button className="navbar-btn me-2" type="submit">
            Get a Quote
          </button>
          <div>
            {/* <button className="navbar-btn me-2" type="submit">
              Get a Quote
            </button> */}
          </div>
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
