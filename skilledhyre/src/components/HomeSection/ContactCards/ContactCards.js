import React from "react";
import { Link } from "react-router-dom";
import "./ContactCards.css";
import { TbMailFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";

function ContactCards() {
  return (
    <div className="container-fluid contact-card-container">
      <div className="row contact-card-row">
        <div className="col-md-4">
          <div className="contact-card">
            <div className="contact-card-body">
              <FaRegAddressCard className="contact-card-icon" />
              <p className="contact-card-text1">
                Office no - 606 Tower A, I-thum Noida sector 62, 201309
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-card">
            <div className="contact-card-body">
              <TbMailFilled className="contact-card-icon" />
              <h3 className="contact-card-title">Email Us</h3>
              <p className="contact-card-text2">team.skilledhyre@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="contact-card">
            <div className="contact-card-body">
              <FaPhone className="contact-card-icon" />
              <h3 className="contact-card-title">Call Us</h3>
              <p className="contact-card-text2">+91 7070633784</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid contact-form">
        <div className="row">
          <div className="col-md-6 col-sm-12 map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.086412379796!2d77.36987507495655!3d28.627172134325072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f6bf0e729b%3A0x4c68e44d9e70a67f!2sI-Thum%20Tower%20-%20office%20space%20in%20IThum%20Noida%20Sector%2062!5e0!3m2!1sen!2sin!4v1723001883419!5m2!1sen!2sin"
              width="560"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="I-Thum Tower Office Location"
            ></iframe>
          </div>
          <div className="col-md-6 col-sm-12 contact-form-container">
            <form className="contact-form">
              <input
                type="text"
                className="form-control text-field"
                placeholder="Your Name *"
              />
              <input
                type="email"
                className="form-control text-field"
                placeholder="Your Email *"
              />
              <textarea
                className="form-control text-field"
                placeholder="Message..."
                rows="4"
              ></textarea>

              <Button as={Link} to="/" className="ml-2 get-in-touch-button">
                Get In Touch <IoIosArrowRoundForward className="arrow-icon" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
