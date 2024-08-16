import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import eComDevelopmentImage1 from "../../../images/ServicesSubPageImages/e-com-1.jpg";
import eComDevelopmentImage2 from "../../../images/ServicesSubPageImages/e-com-2.png";
import eComDevelopmentImage3 from "../../../images/ServicesSubPageImages/e-com-3.png";
import eComDevelopmentImage4 from "../../../images/ServicesSubPageImages/e-com-4.png";
import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";
import "../CommonServiceSubPages.css";

const EComDevelopment = () => {
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
            <h1>E-Commerce Development</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">E-Commerce Development</span>
            </p>
          </div>
        </div>

        {/* Second-row */}
        <div className="container-fluid ser-sub-sec">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={eComDevelopmentImage1}
                alt="Website Design"
                className="ser-sub-left-img"
              />
            </div>
            <div className="col-md-6 d-flex flex-column ser-sub-sec-content">
              <h6>
                <span className="ser-sub-dot">•</span>E-Commerce Development
              </h6>
              <h2>E-commerce Website Development Company</h2>
              <p>
                Our development team with the help of their experience selects
                the best e- commerce platform for you. Then, our web design team
                will work on the Magento, osCommerce and OpenCart as per your
                requirements and give you a suitable option. We give you a
                solution for your e-commerce website that is highly useful,
                qualitative and gives you results. Each platform has its own
                unique and individual features. What we do is we guide our
                clients on these features to select the option that is best for
                them.
              </p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid ser-sub-thi">
          <div className="row">
            <div className="col-md-6 d-flex flex-column ser-sub-thi-content">
              <h2>Benefits of E-Commerce website design and development</h2>
              <p>
                It would not be wrong to say that today E-commerce is a perfect
                way to buy and sell the products online and is a quick and
                convenient way to exchange goods and services or the
                transmitting of funds or data, over an electronic network,
                primarily the internet. We at skilledhyre shape high quality
                e-commerce websites that suits the needs and vision of our
                clients in the best way possible. Our team works on custom-
                tailored design layouts and creates a secured gateway to
                payments which is very important to run a website successfully.
                As we all know that E-commerce sales are growing every year, the
                competition has become very sturdy. We at skilledhyre can help
                you think beyond the competition and keep your buyers happy.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={eComDevelopmentImage2}
                alt="Website Design"
                className="ser-sub-right-img"
              />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid ser-sub-fourth">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div className="col-md-12 ">
                <img
                  src={eComDevelopmentImage3}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Why choose us for e-commerce website development?</h3>
                <p>
                  If you are going to do business online on a large scale then
                  it is an important component for your business. We are having
                  expertise team of E-Commerce Developers who can provide
                  optimized E-Commerce Applications. We have an established
                  track record of developing eCommerce solutions that allow your
                  company to gain a competitive edge within your market.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ser-sub-card">
              <div>
                <img
                  src={eComDevelopmentImage4}
                  alt="Website Design"
                  className="ser-sub-card-img"
                />
              </div>
              <div className="ser-sub-fourth-content">
                <h3>Personalization Is What We Do</h3>
                <p>
                  Our development team with the help of their experience selects
                  the best e- commerce platform for you. Then, our web design
                  team will work on the Magento, osCommerce and OpenCart as per
                  your requirements and give you a suitable option. We give you
                  a solution for your e-commerce website that is highly useful,
                  qualitative and gives you results. Each platform has its own
                  unique and individual features. What we do is we guide our
                  clients on these features to select the option that is best
                  for them. It also depends on the time you would like to invest
                  on the development of website. For example, Magento is more
                  powerful but OpenCart is much easier to set up and built on an
                  MVC framework. However, OpenCart is flexible, affordable and
                  fast solutions who want to set up their business online in a
                  quick way and at a reasonable cost.
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

export default EComDevelopment;
