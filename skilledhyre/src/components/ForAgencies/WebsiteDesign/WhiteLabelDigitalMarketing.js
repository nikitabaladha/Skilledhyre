import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";
import "../../ServicesSection/CommonServiceSubPages.css";

import WhiteLabelDigitalMarketingImage1 from "../../../images/ForAgenciesImages/WhiteLabelDigitalMarketing-1.jpg";
import WhiteLabelDigitalMarketingImage2 from "../../../images/ForAgenciesImages/WhiteLabelDigitalMarketing-2.jpg";
import WhiteLabelDigitalMarketingImage3 from "../../../images/ForAgenciesImages/WhiteLabelDigitalMarketing-3.jpg";
import WhiteLabelDigitalMarketingImage4 from "../../../images/ForAgenciesImages/WhiteLabelDigitalMarketing-4.jpg";

const WhiteLabelDigitalMarketing = () => {
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
            <h1>White Label Digital Marketing</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">
                White Label Digital Marketing
              </span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={WhiteLabelDigitalMarketingImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>White label Digital
                Marketing
              </h6>
              <h2>White label Digital Marketing What we do?</h2>

              <p>
                Struggling to offer clients a full suite of digital marketing
                services without expanding your team? Look no further than
                Skilledhyre, your{" "}
                <strong>trusted white-label digital marketing partner.</strong>{" "}
                We work <strong>in the shadows</strong>, empowering you to
                deliver exceptional results under your own brand name.
              </p>

              <p>
                Gone are the days of scrambling to build internal expertise in
                SEO, social media, content creation, and more. With Skilledhyre,
                you gain access to{" "}
                <strong>a team of seasoned professionals</strong> across various
                digital disciplines,
                <strong>ready to tackle your clients’ challenges.</strong>
                Whether you’re a small agency or an established firm, we{" "}
                <strong>
                  scale seamlessly to match your needs and budget.
                </strong>
              </p>

              <p>
                <strong>But how does it work?</strong> It’s simple. We become
                your silent partner, working tirelessly behind the scenes to
                craft and execute{" "}
                <strong>data-driven digital marketing campaigns</strong> that
                align seamlessly with your brand and objectives. You’ll have the
                freedom to{" "}
                <strong> present these campaigns as your own,</strong> building
                stronger client relationships and boosting your bottom line.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>Benefits of White label Digital Marketing</h2>
              <p>
                Imagine offering{" "}
                <strong>top-notch digital marketing services</strong> to your
                clients,
                <strong>
                  without the burden of building an in-house team
                </strong>{" "}
                or stretching your budget thin. That’s the magic of white-label
                marketing, and Skilledhyre is here to help you unlock its full
                potential.
              </p>
              <p>
                <strong>But what exactly are the benefits for you?</strong>{" "}
                Buckle up, because we’re about to reveal the game-changing
                advantages of partnering with Skilledhyre for your white-label
                digital marketing needs:
              </p>
              <p>1. Expand Your Service Offerings Overnight</p>
              <p>2. Cost-Effective Growth</p>
              <p>3. Scalability on Demand</p>
              <p>4. Seamless Brand</p>
              <p>5. Data-Driven Results</p>
              <p>6. Focus on What You Do Best</p>
              <p>
                <strong>
                  Partnering with Skilledhyre for white-label digital marketing
                  is a win-win:
                </strong>{" "}
                you gain access to{" "}
                <strong>
                  cutting-edge expertise, cost-effective solutions, and the
                  freedom to focus on your core business,
                </strong>{" "}
                while your clients receive <strong>exceptional results</strong>{" "}
                that propel their success forward.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={WhiteLabelDigitalMarketingImage2}
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
                  src={WhiteLabelDigitalMarketingImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Why choose us for White Label Digital Marketing</h3>
                <p>
                  In the competitive world of digital marketing, agencies face a
                  constant pressure to expand their offerings while maintaining
                  efficiency and profitability. That's where Skilledhyre comes
                  in, your trusted white-label partner with a difference.
                  Choosing Skilledhyre is more than just outsourcing; it's
                  building a strategic partnership. We empower you to expand
                  your service portfolio, increase client satisfaction, and
                  ultimately, boost your agency's bottom line.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={WhiteLabelDigitalMarketingImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Personalization Is What We Do</h3>
                <p>
                  In today's digital landscape, generic marketing just doesn't
                  cut it. Customers crave personalized experiences that resonate
                  with their unique needs and preferences. That's where
                  Skilledhyre shines. We're not just your white-label digital
                  marketing partner; we're personalization ninjas, weaving
                  individual stories into every campaign we craft. But how does
                  it work? We go beyond the typical approach of simply inserting
                  names into emails or displaying location-based ads. We delve
                  deeper, uncovering your clients' individual needs, interests,
                  and behaviors.
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

export default WhiteLabelDigitalMarketing;
