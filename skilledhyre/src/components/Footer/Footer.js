import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className="svg-path"
        >
          <path
            className="elementor-shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            fill="#0049B1"
          ></path>
        </svg>
      </div>
      <footer className="footer footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 footer-content">
              <h5 className="footer-heading">Skilledhyre</h5>
              <p className="footer-text">
                Office no - 606 Tower A,I-thum
                <br />
                Noida sector 62, 201309
              </p>
            </div>
            <div className="col-md-3 col-sm-12 footer-content">
              <h5 className="footer-heading">Services</h5>
              <ul className="footer-text footer-link">
                <li>Web Development</li>
                <li>Software Development</li>
                <li>E-Commerce Development</li>
                <li>Digital Marketing (SEO)</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 footer-content">
              <h5 className="footer-heading">Company</h5>
              <ul className="footer-text footer-link">
                <li>About Company</li>
                <li>Services</li>
                <li>Staffing</li>
                <li>Hire Developers</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 footer-content">
              <h5 className="footer-heading">Connect us</h5>
              <p className="span-text">
                Follow our social media presence to stay updated about company.
              </p>
              <div className="social-icons">
                <FaFacebook className="social-media-icon" />
                <FaTwitter className="social-media-icon" />
                <FaLinkedin className="social-media-icon" />
                <FaPinterest className="social-media-icon" />
                <FaInstagram className="social-media-icon" />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p className="footer-text">
                Copyright © 2024 <span className="span-text">Skilledhyre</span>.
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
