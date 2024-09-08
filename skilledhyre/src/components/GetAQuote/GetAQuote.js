import React from "react";
import { Link } from "react-router-dom";

import Footer from "../HomeSection/Footer/Footer";
import Navbar from "../HomeSection/Navbar/Navbar";
import "./GetAQuote.css";

import { Button, Form } from "react-bootstrap";

const GetAQuote = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* First Row*/}
        <div className="ser-sub">
          <div className="container-fluid ser-sub-first">
            <div>
              <h1>Free a Quote</h1>
              <p>
                <Link to="/" className="homepage-link">
                  Home
                </Link>
                <span class="material-symbols-outlined greater-than-icon">
                  chevron_right
                </span>
                <span className="current-page">Free a Quote</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="Container-fluid get-a-quote-sec">
        <div className="get-a-quote-sec-header">
          <h6>
            <span className="get-a-quote-sec-dot">•</span>Get a Free Quote
            <span className="get-a-quote-sec-dot">•</span>
          </h6>
          <h2>Talk With Our Digital Strategists</h2>
          <p>
            Please fill out the form below to receive a free quote for our
            search marketing services. Select what services you are interested
            in below and we'll contact you as soon as possible.
          </p>
        </div>

        <div className="container-fluid get-a-quote-sec-form-container">
          <Form>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="text-field"
                    placeholder="Website URL *"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="text-field"
                    placeholder="Company name"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="text-field"
                    placeholder="First name *"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="text-field"
                    placeholder="Last name *"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="text-field"
                    placeholder="Phone number *"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Control
                    type="email"
                    className="text-field"
                    placeholder="Your Email *"
                  />
                </Form.Group>
              </div>
            </div>

            <p>Reason To Contact</p>
            <div className="row">
              <div className="col-md-4 checkbox-text">
                <Form.Check type="checkbox" label="SEO Optimization" />
              </div>
              <div className="col-md-4 checkbox-text">
                <Form.Check type="checkbox" label="Web Development" />
              </div>
              <div className="col-md-4 checkbox-text">
                <Form.Check type="checkbox" label="PPC Advertising" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 checkbox-text">
                <Form.Check type="checkbox" label="Content Marketing" />
              </div>
              <div className="col-md-4 checkbox-text">
                <Form.Check type="checkbox" label="Social Marketing" />
              </div>
              <div className="col-md-4 checkbox-text">
                <Form.Check type="checkbox" label="App Development" />
              </div>
            </div>

            <Form.Group className="mt-3">
              <Form.Control
                as="textarea"
                className="text-field"
                rows={5}
                placeholder="Your message"
              />
            </Form.Group>

            <Button className="mt-3">Submit</Button>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GetAQuote;
