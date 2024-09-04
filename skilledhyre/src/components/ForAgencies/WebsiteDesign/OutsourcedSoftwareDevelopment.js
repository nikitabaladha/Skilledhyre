import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";
import "../../ServicesSection/CommonServiceSubPages.css";

import OutsourcedSoftwareDevelopmentImage1 from "../../../images/ForAgenciesImages/OutsourcedSoftwareDevelopment-1.png";
import OutsourcedSoftwareDevelopmentImage2 from "../../../images/ForAgenciesImages/OutsourcedSoftwareDevelopment-2.png";
import OutsourcedSoftwareDevelopmentImage3 from "../../../images/ForAgenciesImages/OutsourcedSoftwareDevelopment-3.png";
import OutsourcedSoftwareDevelopmentImage4 from "../../../images/ForAgenciesImages/OutsourcedSoftwareDevelopment-4.png";

const OutsourcedSoftwareDevelopment = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".ser-sub-left-img, .ser-sub-right-img"
      );
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add("slide-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>Outsourced Software Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">
                Outsourced Software Development
              </span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={OutsourcedSoftwareDevelopmentImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>Outsourced Software
                Development
              </h6>
              <h2>What we do?</h2>

              <p>
                Skilledhyre isn’t just another software development company.
                We’re a passionate team of experts dedicated to helping
                businesses like yours achieve their full potential through the
                power of technology. As your trusted outsourcing partner, we
                handle the entire software development lifecycle, from ideation
                and prototyping to development, deployment, and ongoing
                maintenance.
              </p>

              <p>
                Partner with Skilledhyre and unlock the potential of technology
                for your business. Remember, at Skilledhyre, we don’t just
                develop software; we craft solutions that empower your business
                to thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>Benefits of Outsourced Software Development</h2>
              <p>
                In today’s competitive tech landscape, having the right software
                solutions is crucial for business success. But building and
                maintaining an in-house development team can be expensive,
                time-consuming, and resource-intensive. That’s where
                Skilledhyre, your trusted outsourcing partner, comes in. We
                offer a wide range of benefits that can empower your business to
                thrive:
              </p>

              <p>1. Cost-Effectiveness</p>
              <p>2. Access to Top Talent</p>
              <p>3. Scalability and Flexibility</p>
              <p>4. Faster Time to Market</p>
              <p>5. Focus on Core Business</p>
              <p>6. Reduced Risks and Burdens</p>
              <p>7. Enhanced Expertise and Innovation</p>
              <p>
                Partner with Skilledhyre and unlock these powerful benefits.
                Contact us today to discuss your project requirements and get a
                free quote. Let’s transform your business through the power of
                outsourced software development.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={OutsourcedSoftwareDevelopmentImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row ser-sub-card-row">
            <div className="col-md-6 d-flex flex-column ser-sub-card">
              <div className="col-md-12">
                <img
                  src={OutsourcedSoftwareDevelopmentImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Why choose us for Outsourced Software Development?</h3>
                <p>
                  In the dynamic world of technology, choosing the right
                  outsourced software development partner can make all the
                  difference. At Skilledhyre, we're not just another development
                  company – we're your strategic allies, dedicated to propelling
                  your business forward through innovative and tailored
                  solutions. Partner with Skilledhyre and unlock the full
                  potential of outsourced software development. We're not just
                  developers; we're your trusted technology partners, committed
                  to your success. Contact us today for a free consultation and
                  let's embark on a journey of innovation together.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={OutsourcedSoftwareDevelopmentImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Personalization Is What We Do</h3>
                <p>
                  Forget cookie-cutter solutions. At Skilledhyre, we believe
                  one-size-fits-all software development is a recipe for
                  mediocrity. That's why personalization is at the heart of
                  everything we do. As your outsourced software development
                  partner, we don't just build software; we craft unique
                  solutions that seamlessly integrate with your unique business
                  needs and goals. By choosing Skilledhyre, you choose a partner
                  who goes beyond just lines of code. We become an extension of
                  your team, invested in your success and dedicated to crafting
                  personalized software solutions that propel your business
                  forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default OutsourcedSoftwareDevelopment;
