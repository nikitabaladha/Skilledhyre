import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../HomeSection/Navbar/Navbar";
import Footer from "../HomeSection/Footer/Footer";
import "../ServicesSection/CommonServiceSubPages.css";

import WhiteLabeAppDevelopmentImage1 from "../../images/ForAgenciesImages/WhiteLabeAppDevelopment-1.png";
import WhiteLabeAppDevelopmentImage2 from "../../images/ForAgenciesImages/WhiteLabeAppDevelopment-2.png";
import WhiteLabeAppDevelopmentImage3 from "../../images/ForAgenciesImages/WhiteLabeAppDevelopment-3.png";
import WhiteLabeAppDevelopmentImage4 from "../../images/ForAgenciesImages/WhiteLabeAppDevelopment-4.png";

const WhiteLabeAppDevelopment = () => {
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
            <h1>White Label App Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">White Label App Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={WhiteLabeAppDevelopmentImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>White Label App
                Development
              </h6>
              <h2>What we do?</h2>

              <p>
                Skilledhyre is a leading white label app development company,
                specializing in crafting high-quality, custom mobile
                applications for businesses of all sizes. We understand the
                challenges of creating a successful app from scratch, and we’re
                here to bridge the gap between your vision and a tangible
                product.
              </p>

              <p>
                Our journey with you begins with a spark – your app idea. We
                ignite that spark through in-depth consultations, meticulously
                dissecting your target audience, business goals, and desired
                functionalities. Our experienced consultants don’t just listen;
                they envision alongside you, refining your concept and
                identifying the features that will resonate most with your
                users.
              </p>

              <p>
                <strong>
                  Partner with Skilledhyre and leverage our expertise to
                  transform your app idea into a reality.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>Benefits of White Label App Development</h2>
              <p>
                In today’s mobile-first world, having a powerful, branded app is
                no longer a luxury, it’s a necessity. But building an app from
                scratch can be a daunting, time-consuming, and
                resource-intensive task. That’s where white label app
                development comes in, and why partnering with Skilledhyre can
                unlock a world of benefits for your business.
              </p>

              <strong>
                {" "}
                <p>1. Unleash Innovation in Record Time</p>
                <p>2. Cost-Effectiveness You Can Celebrate: </p>
                <p>3. Expertise at Your Fingertips</p>
                <p>4. Scalability Built-In</p>
                <p>5. Market-Ready in a Flash: </p>
                <p>6. Unwavering Support: </p>
                <p>7. Brand Identity, Amplified</p>
              </strong>

              <p>
                Don’t settle for anything less than extraordinary. Partner with
                Skilledhyre and unlock the true potential of white label app
                development. Contact us today for a free consultation and
                discover how we can turn your app vision into a reality.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={WhiteLabeAppDevelopmentImage2}
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
                  src={WhiteLabeAppDevelopmentImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Why choose us for White Label App Development?</h3>
                <p>
                  In the crowded and competitive landscape of white label app
                  development companies, it's easy to feel like you're searching
                  for a needle in a haystack. Promises abound, features get
                  muddled, and choosing the right partner to transform your app
                  vision into a tangible reality can feel like an insurmountable
                  task. But fear not, for amidst this whirlwind lies
                  Skilledhyre, a beacon of experience, expertise, and unwavering
                  dedication to your success. We're more than just another app
                  developer; we're your strategic partner, hand-in-hand with you
                  throughout the entire journey. Our team isn't filled with
                  faceless tech wizards; they're passionate individuals with
                  years of experience across diverse industries, each with a
                  unique understanding of the challenges and opportunities that
                  come with crafting exceptional apps.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={WhiteLabeAppDevelopmentImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Personalization Is What We Do</h3>
                <p>
                  In today's digital landscape, cookie-cutter solutions simply
                  don't cut it. Users crave experiences that are personal,
                  relevant, and speak directly to their unique needs and
                  desires. That's where Skilledhyre, your white label app
                  development partner, shines. We don't just build apps; we
                  craft personalized app experiences that captivate your target
                  audience and drive deeper engagement. Don't settle for
                  generic. Partner with Skilledhyre and unlock the power of
                  personalized app development. Contact us today for a free
                  consultation and let's craft an app experience that truly
                  resonates with your users.
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

export default WhiteLabeAppDevelopment;
