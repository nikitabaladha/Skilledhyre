import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-5 py-3 bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="text-white">Skilledhyre</h5>
            <p>
              Office no - 606 Tower A,I-thum
              <br />
              Noida sector 62, 201309
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="text-white">Services</h5>
            <ul className="list-unstyled">
              <li>Web Development</li>
              <li>Software Development</li>
              <li>E-Commerce Development</li>
              <li>Digital Marketing (SEO)</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white">Company</h5>
            <ul className="list-unstyled">
              <li>About Company</li>
              <li>Services</li>
              <li>Staffing</li>
              <li>Hire Developers</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white">Connect us</h5>
            <p>
              Follow our social media presence to stay updated about company.
            </p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="text-white">
              Copyright © 2024 skilledhyre. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
