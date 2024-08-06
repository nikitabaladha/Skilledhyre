import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPieChart,
  faCode,
  faMobileAlt,
  faSearch,
  faDatabase,
  faChartLine,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="container-fluid services">
      <div class="space"></div>
      <div className="container">
        <h6 className="text-center mb-4 services-header">
          <span className="services-dot">•</span>OUR SERVICES
          <span className="services-dot">•</span>
        </h6>
        <h2 className="text-center mb-4 services-title">
          Introduce Best
          <br></br>
          IT Services
        </h2>
        <div className="row services-card-row">
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon
                  icon={faPieChart}
                  className="services-card-icon"
                />
                <h5 className="card-title services-card-title">
                  WEB DESIGNING
                </h5>
                <p className="card-text services-text">
                  With the growing use of internet, it has become essential for
                  businesses to mark their web presence. However, a mere website
                  is not enough.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon
                  icon={faPieChart}
                  className="services-card-icon"
                />
                <h5 className="card-title services-card-title">
                  WEB DEVELOPMENT
                </h5>
                <p className="card-text services-text">
                  Internet is the power that has been making the businesses
                  prosper and grow in current times. Therefore, to make
                  businesses make the most of this power.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon
                  icon={faPieChart}
                  className="services-card-icon"
                />
                <h5 className="card-title services-card-title">
                  RESPONSIVE WEBSITE
                </h5>
                <p className="card-text services-text">
                  The web traffic through mobile devices is set to exceed that
                  of the conventional desktop. So this requires website owners
                  to understand the importance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row services-card-row">
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon icon={faCode} className="services-card-icon" />
                <h5 className="card-title services-card-title">
                  Mobile Application
                </h5>
                <p className="card-text services-text">
                  Smartphones are being used on a regular basis so, most of the
                  Smartphone users download at least one application. As iPhone
                  and Android app.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  className="services-card-icon"
                />
                <h5 className="card-title services-card-title">
                  E-Commerce Development
                </h5>
                <p className="card-text services-text">
                  E commerce is a perfect way to buy and sell the products
                  online. Therefore, E commerce is a quick and convenient way to
                  exchange goods and services with Skilledhyre.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="services-card-icon"
                />
                <h5 className="card-title services-card-title">
                  Software Development
                </h5>
                <p className="card-text services-text">
                  Our software development services offer value to your
                  business. Our engineer's at Skilledhyre technologies offer
                  high quality and effective software applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row services-card-row">
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="services-card-icon"
                />
                <h5 className="card-title services-card-title">
                  CMS Development
                </h5>
                <p className="card-text services-text">
                  The CMS solutions have plenty of add-ons that can change the
                  look of your website and benefit your business. It allows the
                  clients to edit the website content
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="services-card-icon"
                />
                <h5 className="card-title services-card-title">
                  Digital Marketing
                </h5>
                <p className="card-text services-text">
                  Digital marketing services provide businesses of all sizes
                  with an opportunity to market their brand 24/7 at a low cost.
                  It brings new clients as well as maintains relationship with
                  existing clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card services-card zoomIn">
              <div className="services-card-body">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="services-card-icon"
                />
                <h5 className="card-title services-card-title">E-Learning</h5>
                <p className="card-text services-text">
                  E-Learning is any learning that utilizes electronics devices
                  like computer/PDA/Mobile and/or utilizes a network (LAN, WAN
                  or Internet) for delivery, interaction, or facilitation. It
                  can be synchronous, asynchronous, instructor-led or
                  computer-based or a combination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
