import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonServiceSubPages.css";

import websiteDesignImage1 from "../../../images/ServicesSubPageImages/website-design-1.png";
import websiteDesignImage2 from "../../../images/ServicesSubPageImages/website-design-2.png";
import websiteDesignImage3 from "../../../images/ServicesSubPageImages/website-design-3.png";
import websiteDesignImage4 from "../../../images/ServicesSubPageImages/website-design-4.png";
import Footer from "../../HomeSection/Footer/Footer";

const WebsiteDesign = () => {
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
            <h1>WEBSITE DESIGN</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">WEBSITE DESIGN</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={websiteDesignImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>Website Development
              </h6>
              <h2>User-Centered Design</h2>
              <p>
                Skilledhyre has a number of clients from different businesses.
                This has enhanced our experience of offering attractive and
                effective website designs for various businesses in different
                fields. We design websites that are informative and
                user-friendly. We make sure that the visitor has an interactive
                experience and returns again for the information. We also offer
                all types of services that help you integrate your communication
                with the clients. When we design your website, along with it we
                take complete care of everything, right from domain registration
                to hosting other requirements as well. This helps you relax and
                focus on your business rather than the website. We work in
                collaboration with our clients and before staring the work, our
                experienced team make sure that the website being designed meets
                the requirements of the clients. Clients can even offer
                suggestions and can check the development of their website.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-thi-content">
              <h2>A strategic approach to website design and development</h2>
              <p>
                In this growing era of Internet, web presence is an essential
                element for any business to grow. Yet, a creating a mere website
                is not enough. Meeting the expectations of their growing
                clientele is what businesses need to make sure and that it
                persuades them to return to the web page, over and over again.
                Not just big but also businesses of small size and limited
                clientele require Website Design Services to build their brand
                value. Skilledhyre and its team of experienced workforce help
                you in achieving your goal of becoming a big brand by
                integratingvarious communication methods and offering a perfect
                solution. Our experienced website designers delivers the best to
                you to meet your goals in attracting prospective clientele.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={websiteDesignImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-card">
              <div className="col-md-12 ">
                <img
                  src={websiteDesignImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Make beautiful, conversion-focused websites</h3>
                <p>
                  Our objective is not just to offer pleasing designs to our
                  clients but also effective message that draws the attention of
                  people. A good website is one that is pleasing to the eyes,
                  gives a clear, precise and effective message and is also
                  comfortable in navigation. The website that holds the
                  attention of customers in short span of time is a good and
                  effective website. Whenever a person opens a website, they
                  should not feel lost. By using different tools and techniques,
                  we make sure that the visitor is engaged through interactive
                  communication. With our years of experience we have in the
                  field, we understand the requirements of the current market.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={websiteDesignImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>We Understand</h3>
                <p>
                  That every company has A different requirement. The same web
                  application does not work for everyone. Hence, we offer tailor
                  made Web Application Development services that includes
                  different functions like consultation, security, deployment,
                  development and maintenance as well. Since our inception, we
                  have worked on a number of projects that has added to our
                  experience and enhanced our knowledge. We have companies of
                  various sizes and belonging to different fields as our
                  clients. It is our objective to offer our complete services
                  and deliver high end quality solutions for every project. Our
                  team taps the market on a continual basis to match our
                  services to international standards. We welcome you to
                  experience us!
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

export default WebsiteDesign;
