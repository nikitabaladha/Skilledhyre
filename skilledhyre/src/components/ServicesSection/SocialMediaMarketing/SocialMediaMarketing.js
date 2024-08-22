import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import "../CommonSocialMediaPPC.css";
import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";

import socialMedia1 from "../../../images/ServicesSubPageImages/social-media-1.png";
import socialMedia2 from "../../../images/ServicesSubPageImages/social-media-2.png";
import socialMedia3 from "../../../images/ServicesSubPageImages/social-media-3.png";
import socialMedia4 from "../../../images/ServicesSubPageImages/social-media-4.png";

import cardTop1 from "../../../images/ServicesSubPageImages/svg-card-1.png";
import cardTop2 from "../../../images/ServicesSubPageImages/svg-card-2.png";
import cardTop3 from "../../../images/ServicesSubPageImages/svg-card-3.png";

import cardBottom1 from "../../../images/ServicesSubPageImages/social-media-card-bottom-1.png";
import cardBottom2 from "../../../images/ServicesSubPageImages/social-media-card-bottom-2.png";
import cardBottom3 from "../../../images/ServicesSubPageImages/social-media-card-bottom-3.png";

import slickSlider1 from "../../../images/ServicesSubPageImages/social-media-marketing-slide-1.jpg";
import slickSlider2 from "../../../images/ServicesSubPageImages/social-media-marketing-slide-2.jpg";
import slickSlider3 from "../../../images/ServicesSubPageImages/social-media-marketing-slide-3.jpg";

const SocialMediaMarketing = () => {
  const features = [
    {
      id: 1,
      smallNumber: "01",
      bigNumber: "01",
      title: "Improve SEO Rankings with Social",
      description:
        "Top ranking sites consistently use social media to encourage and improve upon their search visibility.",
    },
    {
      id: 2,
      smallNumber: "02",
      bigNumber: "02",
      title: "Our Writers are US Based Professionals",
      description:
        "Many affordable social management companies outsource the writing to foreign countries. We don’t!",
    },
    {
      id: 3,
      smallNumber: "03",
      bigNumber: "03",
      title: "Extra Promotion & Syndication Options",
      description:
        "Our pro and enterprise plans offer community management message forwarding and audience boost features.",
    },
    {
      id: 4,
      smallNumber: "04",
      bigNumber: "04",
      title: "No Long-Term Contracts",
      description:
        "You can cancel your social marketing plan at any time. There are no long-term contracts required to get started!",
    },
  ];

  const plans = [
    {
      title: "BASIC",
      price: "59.99",
      imageTop: cardTop1,
      imageBottom: cardBottom1,
      image: socialMedia2,
      features: [
        "5 posts per month",
        "2 social platforms included",
        "Profile creation and/or review",
        "SEO coordination",
        "Integrated hashtag strategy",
        "No long-term contracts",
      ],
    },
    {
      title: "ESSENTIAL",
      price: "89.99",
      imageTop: cardTop2,
      imageBottom: cardBottom2,
      image: socialMedia3,
      features: [
        "10 posts per month",
        "3 social platforms included",
        "Everything in Basic",
        "Optimized posting times",
        "Call-to-action posts",
        "Dedicated writer",
      ],
    },
    {
      title: "GROWTH",
      price: "169.99",
      imageTop: cardTop3,
      imageBottom: cardBottom3,
      image: socialMedia4,
      features: [
        "20 posts per month",
        "4 social platforms included",
        "Everything in Essential",
        "Authoritative link earning",
        "Advanced profile setup",
        "xtended distribution",
      ],
    },
  ];

  const realTestimonials = [
    {
      id: 1,
      TestimonialsImage: slickSlider1,
      description:
        "I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.",
      name: "Emilia Clarke",
      profession: "Designer",
    },
    {
      id: 2,
      TestimonialsImage: slickSlider2,
      description:
        "Skilledhyre has increased our traffic, keywords, and conversion. We’ve enjoyed working with them and consider them a strategic business partner.",
      name: "Maria Kloop",
      profession: "Developer",
    },
    {
      id: 3,
      TestimonialsImage: slickSlider3,
      description:
        "Skilledhyre has increased our traffic, keywords, and conversion. We’ve enjoyed working with them and consider them a strategic business partner.",
      name: "Taylor Green",
      profession: "Client of Company",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === realTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [realTestimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === realTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? realTestimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = realTestimonials[currentIndex];

  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>Social Media Marketing</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Social Media Marketing</span>
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="container-fluid social-media-ppc-sec">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center social-media-ppc-sec-content">
              <h6>
                <span className="social-media-ppc-dot">•</span>We get results
              </h6>
              <h2>Social Media Marketing & Management Services</h2>
              <p>
                With a custom social media marketing service plan, your business
                can start building brand awareness, as well as generating
                revenue from social media platforms like Facebook, Twitter,
                LinkedIn, Instagram, and more.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src={socialMedia1}
                alt="Website Design"
                className="social-media-ppc-sec-image"
              />
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid social-media-ppc-thi">
          <div className="row">
            {features.map((feature) => (
              <div className="col-md-6" key={feature.id}>
                <div className="social-media-ppc-thi-card">
                  <div className="small-number">{feature.smallNumber}</div>
                  <div className="social-media-ppc-thi-card-content">
                    <h5 className="">{feature.title}</h5>
                    <p className="">{feature.description}</p>
                    <span className="big-number">{feature.bigNumber}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid social-media-ppc-four-section">
          <div className="social-media-ppc-four-content">
            <h6>
              <span className="social-media-ppc-dot">•</span>Social Marketing
              Plans<span className="social-media-ppc-dot">•</span>
            </h6>
            <h2>Flexible Pricing Plans</h2>
            <p>
              We have experience working with large and small businesses and are
              ready to <br></br>develop a targeted strategy and plan that’s just
              right for you.
            </p>
          </div>

          <div className="container-fluid social-media-ppc-four">
            <div className="row">
              {plans.map((plan, index) => (
                <div className="col-md-4" key={plan.title}>
                  <div className="social-media-ppc-four-card">
                    <div>
                      <img
                        src={plan.imageTop}
                        alt={`${plan.title} plan`}
                        className="social-media-ppc-four-card-image-top"
                      />
                    </div>

                    <div className="social-media-ppc-four-card-header">
                      <img
                        src={plan.image}
                        alt={`${plan.title} plan`}
                        className="social-media-ppc-four-card-image"
                      />
                      <h5
                        className={`social-media-ppc-four-card-title card-title-${
                          index + 1
                        }`}
                      >
                        {plan.title}
                      </h5>
                    </div>

                    <div className="social-media-ppc-four-card-content">
                      <h1
                        className={`social-media-ppc-four-card-price ${
                          index === 0
                            ? "card-1"
                            : index === 1
                            ? "card-2"
                            : "card-3"
                        }`}
                      >
                        <sup>$</sup>
                        {plan.price}
                      </h1>
                      <p className="">Monthly Package</p>
                      <div className="border-container">
                        <ul>
                          {plan.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="social-media-ppc-four-card-button-container">
                        <Button
                          variant="secondary"
                          href="/"
                          className={`ml-2 choose-Plane-button-${index + 1}`}
                        >
                          Choose Plane
                          <IoIosArrowRoundForward
                            className={`choose-Plane-arrow-icon-${index + 1}`}
                          />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <img
                        src={plan.imageBottom}
                        alt={`${plan.title} plan`}
                        className="social-media-ppc-four-card-image-bottom"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fifth row */}
        <div className="container-fluid social-media-ppc-fif-section">
          <div className="row">
            <div className="col-md-4 d-flex flex-column justify-content-center social-media-ppc-fif-content">
              <h6>
                <span className="social-media-ppc-dot">•</span>REAL TESTIMONIALS
              </h6>
              <h2>What They Say About Our Company?</h2>
              <div>
                <IoIosArrowRoundBack
                  className="social-media-ppc-arrow-icon"
                  onClick={handlePrev}
                />

                <IoIosArrowRoundForward
                  className="social-media-ppc-arrow-icon"
                  onClick={handleNext}
                />
              </div>
            </div>

            <div className="col-md-8 d-flex social-media-ppc-fif-card-section">
              <div className="social-media-ppc-fif-card-background"></div>
              <div className="social-media-ppc-fif-card">
                <div
                  className="social-media-ppc-fif-slide"
                  key={currentTestimonial.id}
                >
                  <div className="social-media-ppc-fif-slide-image-container">
                    <img
                      src={currentTestimonial.TestimonialsImage}
                      alt={currentTestimonial.name}
                      className="social-media-ppc-fif-slide-image"
                    />
                  </div>

                  <div className="social-media-ppc-fif-slide-content">
                    <p>{currentTestimonial.description}</p>
                    <h5>{currentTestimonial.name}</h5>
                    <p className="profession-text">
                      {currentTestimonial.profession}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SocialMediaMarketing;
