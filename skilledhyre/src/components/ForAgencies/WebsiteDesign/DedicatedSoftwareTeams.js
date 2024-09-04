import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";
import "../../ServicesSection/CommonServiceSubPages.css";

import DedicatedSoftwareTeamsImage1 from "../../../images/ForAgenciesImages/DedicatedSoftwareTeams-1.png";
import DedicatedSoftwareTeamsImage2 from "../../../images/ForAgenciesImages/DedicatedSoftwareTeams-2.png";
import DedicatedSoftwareTeamsImage3 from "../../../images/ForAgenciesImages/DedicatedSoftwareTeams-3.png";
import DedicatedSoftwareTeamsImage4 from "../../../images/ForAgenciesImages/DedicatedSoftwareTeams-4.png";

const DedicatedSoftwareTeams = () => {
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
            <h1>Dedicated Software Teams</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Dedicated Software Teams</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={DedicatedSoftwareTeamsImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>Dedicated Software Teams
              </h6>
              <h2>What we do?</h2>

              <p>
                At Skilledhyre, we don’t just build software teams, we craft
                personalized powerhouses of talent tailored to your unique
                needs. We understand that every project is different, with its
                own set of challenges and goals. That’s why we take the time to
                get to know you, your business, and your vision before we start
                assembling your team.
              </p>

              <p>
                If you’re looking for a dedicated software team that is
                personalized to your needs, contact Skilledhyre today. We’ll
                help you build a team that is not only skilled, but also a
                perfect fit for your company culture.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>Benefits of our Dedicated Software Teams</h2>
              <p>
                In today’s fast-paced tech landscape, building and managing an
                in-house development team can be a complex and
                resource-intensive undertaking. That’s where Skilledhyre’s
                dedicated software teams come in, offering a powerful solution
                for businesses seeking agility, expertise, and
                cost-effectiveness. Here are 7 compelling benefits you can reap
                by partnering with Skilledhyre.
              </p>

              <p>1. Faster Time to Market</p>
              <p>2. Reduced Costs</p>
              <p>3. Enhanced Expertise</p>
              <p>4. Improved Quality & Security</p>
              <p>5. Increased Innovation</p>
              <p>6. Scalability & Flexibility</p>
              <p>7. Peace of Mind</p>
              <p>
                <string>
                  Partner with Skilledhyre today and unlock the power of
                  dedicated software teams. Experience faster time to market,
                  reduced costs, enhanced quality, and a dynamic team perfectly
                  suited to your project’s success.
                </string>
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={DedicatedSoftwareTeamsImage2}
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
                  src={DedicatedSoftwareTeamsImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>
                  Why Choose Skilledhyre for Your Dedicated Software Team?
                </h3>
                <p>
                  In the competitive world of software development, finding the
                  right team can make all the difference. At Skilledhyre, we're
                  more than just another staffing agency; we're your trusted
                  partner in building high-performing, dedicated software teams
                  that are tailored to your unique needs. Choose Skilledhyre and
                  unlock the true potential of your dedicated software team.
                  Contact us today to discuss your project requirements and
                  experience the Skilledhyre difference.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={DedicatedSoftwareTeamsImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Personalization Is What We Do</h3>
                <p>
                  At Skilledhyre, we understand that every software project is
                  unique, brimming with distinct goals, challenges, and a vision
                  as individual as your fingerprint. That's why we reject the
                  cookie-cutter approach to team building, instead opting for a
                  meticulously crafted path – personalization. We don't just
                  deliver teams; we cultivate powerhouses of talent, handpicked
                  and tailored to seamlessly integrate with your project and
                  company culture. Partner with Skilledhyre and embark on a
                  journey of personalized team building.
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

export default DedicatedSoftwareTeams;
