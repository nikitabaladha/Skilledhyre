import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../HomeSection/Navbar/Navbar";
import Footer from "../../HomeSection/Footer/Footer";
import "../../ServicesSection/CommonServiceSubPages.css";

import DedicatedMarketingTeamsImage1 from "../../../images/ForAgenciesImages/DedicatedMarketingTeams-1.png";
import DedicatedMarketingTeamsImage2 from "../../../images/ForAgenciesImages/DedicatedMarketingTeams-2.png";
import DedicatedMarketingTeamsImage3 from "../../../images/ForAgenciesImages/DedicatedMarketingTeams-3.png";
import DedicatedMarketingTeamsImage4 from "../../../images/ForAgenciesImages/DedicatedMarketingTeams-4.png";

const DedicatedMarketingTeams = () => {
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
            <h1>Dedicated Marketing Teams</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Dedicated Marketing Teams</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={DedicatedMarketingTeamsImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>Dedicated Marketing Teams
              </h6>
              <h2>What we do?</h2>

              <p>
                At Skilledhyre, we understand the challenges businesses face in
                building and managing high-performing marketing teams. That’s
                why we offer a unique solution:
                <strong> dedicated marketing teams,</strong>
                tailored to your specific needs and goals.
              </p>

              <p>
                We take the time to understand your business, your target
                audience, and your marketing objectives. This in-depth
                understanding allows us to create a team that is perfectly
                aligned with your needs.
              </p>

              <p>
                Our team of experienced marketing professionals includes
                specialists in all areas of marketing, from content creation and
                social media management to SEO and PPC advertising. We carefully
                select the right team members based on your specific
                requirements and ensure they have the skills and experience to
                deliver results.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>Benefits of our Dedicated Marketing Teams</h2>
              <p>
                In today’s competitive landscape, having a strong marketing team
                is essential for business success. But building and managing an
                in-house team can be time-consuming, expensive, and complex.
                That’s where Skilledhyre’s dedicated marketing teams come in. We
                offer a unique solution that provides you with all the benefits
                of a world-class marketing team without the hassle.
              </p>

              <p>1. Expertise and Experience</p>
              <p>2. Focus and Dedication</p>
              <p>3. Cost-Effectiveness</p>
              <p>4. Scalability and Flexibility</p>
              <p>5. Accountability and Transparency</p>
              <p>6. Streamlined Operations</p>
              <p>7. Faster Time-to-Market </p>
              <p>
                Partner with Skilledhyre and unlock the power of a dedicated
                marketing team. Contact us today to discuss your unique needs
                and discover how we can help you achieve your marketing
                objectives.
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={DedicatedMarketingTeamsImage2}
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
                  src={DedicatedMarketingTeamsImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>
                  Why Choose Skilledhyre for Your Dedicated Marketing Team?
                </h3>
                <p>
                  In today's competitive landscape, having a high-performing
                  marketing team is no longer a luxury, it's a necessity. But
                  building and managing an in-house team can be expensive,
                  time-consuming, and complex. That's where Skilledhyre steps
                  in. We offer a unique solution: dedicated marketing teams
                  tailored to your specific needs and goals, providing you with
                  numerous advantages over traditional approaches. Don't settle
                  for average marketing results. Choose Skilledhyre and unlock
                  the full potential of your dedicated marketing team.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={DedicatedMarketingTeamsImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Personalization Is What We Do</h3>
                <p>
                  In today's digital age, cookie-cutter marketing just doesn't
                  cut it. Audiences crave personalization, a human touch that
                  resonates with their unique needs and desires. At Skilledhyre,
                  we don't just deliver marketing; we craft personalized
                  experiences that captivate and convert.Ready to unlock the
                  transformative power of personalization? Contact Skilledhyre
                  today and let our dedicated marketing team craft an experience
                  that resonates with your unique audience. Remember, at
                  Skilledhyre, personalization is what we do.
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

export default DedicatedMarketingTeams;
