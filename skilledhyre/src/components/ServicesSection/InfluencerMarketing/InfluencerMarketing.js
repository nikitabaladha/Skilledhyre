import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import influencerMarketingImage1 from "../../../images/ServicesSubPageImages/influencer-marketing-1.jpg";
import influencerMarketingImage2 from "../../../images/ServicesSubPageImages/influencer-marketing-2.jpg";
import influencerMarketingImage3 from "../../../images/ServicesSubPageImages/influencer-marketing-3.png";
import influencerMarketingImage4 from "../../../images/ServicesSubPageImages/influencer-marketing-4.png";
import influencerMarketingImage5 from "../../../images/ServicesSubPageImages/influencer-marketing-5.png";

import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonServiceSubPages.css";

const InfluencerMarketing = () => {
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
            <h1>Influencer Marketing</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Influencer Marketing</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={influencerMarketingImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>Influencer Marketing
              </h6>
              <h2>What we do</h2>
              <p>
                Influencer marketing is a marketing strategy that uses
                individuals with a significant social media following to promote
                a brand or product. These individuals, known as influencers, are
                typically experts or celebrities in their respective niches or
                industries and have a loyal and engaged audience.
              </p>
              <p>
                Influencer marketing is based on the idea that people are more
                likely to trust and follow the opinions and recommendations of
                people they admire and respect. As a result, companies partner
                with influencers to promote their products or services to their
                followers, who are likely to be interested in those offerings.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 ser-sub-thi-content">
              <h2>Why hire us for your Influencer Marketing needs?</h2>
              <p>
                The goal is to increase brand awareness, drive traffic, and
                ultimately, generate sales or conversions. Effective influencer
                marketing requires careful research and selection of the right
                influencer, as well as a clear understanding of the target
                audience and the goals of the campaign. Let the Skilledhyre team
                help you connect with the right influencers and create
                compelling campaigns that resonate with your audience. Get
                started today and see your brand soar to new heights!
              </p>
            </div>
            <div className="col-md-6 align-items-center">
              <img
                src={influencerMarketingImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row ser-sub-card-row">
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div className="col-md-12 ">
                <img
                  src={influencerMarketingImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Influencer outreach and partnerships</h3>
                <p>
                  We identify and select the ideal influencers for your brand by
                  analyzing their profiles, content quality, audience
                  demographics, and engagement metrics. This ensures effective
                  partnerships that align with your brand's goals.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={influencerMarketingImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Campaign planning and management</h3>
                <p>
                  We manage the entire influencer campaign process, from
                  negotiating rates and drafting contracts to overseeing content
                  creation and ensuring compliance. Our team handles every
                  detail to ensure smooth execution and optimal results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth row */}
        <div className="container-fluid ser-sub-sec influencer-fif">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <img
                src={influencerMarketingImage5}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 ser-sub-sec-content">
              <h3>Content creation</h3>

              <p>
                We design a tailored influencer marketing strategy based on your
                objectives, audience, and budget. This includes choosing the
                right influencers, content formats, and distribution channels to
                maximize impact.
              </p>

              <h3>Analytics and tracking</h3>
              <p>
                We provide comprehensive performance tracking and reporting,
                measuring key metrics such as reach, engagement, and ROI. Our
                insights help you evaluate campaign effectiveness and make
                data-driven decisions.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default InfluencerMarketing;
