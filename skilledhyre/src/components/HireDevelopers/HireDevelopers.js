import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxDotsHorizontal } from "react-icons/rx";
import { BsStopwatch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineStars } from "react-icons/md";

import { FaAppStoreIos } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaVrCardboard } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { FaRegFileVideo } from "react-icons/fa";

import Navbar from "../HomeSection/Navbar/Navbar";
import Footer from "../HomeSection/Footer/Footer";
import "../../components/ServicesSection/CommonServiceSubPages.css";
import hireDeveloperImage2 from "../../images/HireDeveloperImages/HireDeveloper-2.png";
import hireDeveloperImage3 from "../../images/HireDeveloperImages/HireDeveloper-3.png";
import "./HireDevelopers.css";

const HireDevelopers = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hire-developers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cardsData = [
    {
      icon: FaAppStoreIos,
      title: "IOS",
    },
    {
      icon: FaAndroid,
      title: "Android",
    },
    {
      icon: FaVrCardboard,
      title: "AR",
    },
    { icon: hireDeveloperImage2, title: "Xamarin" },
    {
      icon: hireDeveloperImage3,
      title: "Flutter",
    },
    {
      icon: () => <span className="material-symbols-outlined">lan</span>,
      title: "IOT",
    },
    {
      icon: FaReact,
      title: "React",
    },
    {
      icon: FaSwift,
      title: "Swift",
    },
    {
      icon: FaRegFileVideo,
      title: "FaRegFileVideo",
    },
  ];
  return (
    <>
      <Navbar />

      <div>
        {/* First Row*/}
        <div className="ser-sub">
          <div className="container-fluid ser-sub-first">
            <div>
              <h1>Hire Developers</h1>
              <p>
                <Link to="/" className="homepage-link">
                  Home
                </Link>
                <span class="material-symbols-outlined greater-than-icon">
                  chevron_right
                </span>
                <span className="current-page">Hire Developers</span>
              </p>
            </div>
          </div>
        </div>

        {/* Second row */}

        <div className="container-fluid hire-developers-sec">
          <div className="staffing-thi-content">
            <h2>
              Hire Web & App <strong>Developers</strong>
            </h2>

            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                {/* <RxDotsHorizontal /> */}
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>

            <p>
              Skilledhyre help startups, small businesses, and enterprises to
              achieve their digital transformation goals, by allowing them to
              hire the best web and app developers from India.
            </p>
            <p>
              We have made it easy to hire front end developers and backend
              developers based on different engagement models. By hiring
              dedicated Indian programmers from our talent pool, you can reduce
              your development cost by up to 60%.
            </p>
            <p>
              Get yourself a team of developers that are process oriented,
              possess technical expertise, offer workforce transparency & are
              cost-effective to your company
            </p>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid hire-developers-thi ">
          <div className="hire-developers-thi-header">
            <h2>Here are a few more benefits</h2>
            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>
          </div>

          <div className="container-fluid hire-developers-thi-card-container">
            <div className="row hire-developers-thi-card-row">
              <div className="col-md-6" onClick={handleClick}>
                <div className="hire-developers-thi-card">
                  <div className="hire-developers-thi-card-body">
                    <div>
                      <FiShoppingBag className="hire-developers-thi-card-icon" />
                    </div>
                    <div className="hire-developers-thi-card-content">
                      <h3>Cost-Effective Models</h3>
                      <p>
                        Hire dedicated developer and save 60% capital on
                        designing and developing a professional application.
                        Hiring dedicated web developers for projects can reflect
                        significant savings on operating costs without cutting
                        corners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" onClick={handleClick}>
                <div className="hire-developers-thi-card">
                  <div className="hire-developers-thi-card-body">
                    <div>
                      <BsStopwatch className="hire-developers-thi-card-icon" />
                    </div>
                    <div className="hire-developers-thi-card-content">
                      <h3>Extensive Expertise</h3>
                      <p>
                        More than 95% of the developers are aged 18-35, and
                        every year more than 200,000 software developers are
                        hired by the IT industry. Because of this number, any
                        development challenges thrown across becomes easy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" onClick={handleClick}>
                <div className="hire-developers-thi-card">
                  <div className="hire-developers-thi-card-body">
                    <div>
                      <FaRegHandshake className="hire-developers-thi-card-icon" />
                    </div>
                    <div className="hire-developers-thi-card-content">
                      <h3>Quality Work</h3>
                      <p>
                        The top software outsourcing companies consistently
                        provide top quality software solutions. This is because
                        of the talented software programmers that have an
                        ever-increasing thirst for learning and experimenting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" onClick={handleClick}>
                <div className="hire-developers-thi-card">
                  <div className="hire-developers-thi-card-body">
                    <div>
                      <LuPencilRuler className="hire-developers-thi-card-icon" />
                    </div>
                    <div className="hire-developers-thi-card-content">
                      <h3>High-End Infrastructure</h3>
                      <p>
                        Skilledhyre keeps itself abreast with the latest
                        technology and tools needed to outperform in software
                        development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" onClick={handleClick}>
                <div className="hire-developers-thi-card">
                  <div className="hire-developers-thi-card-body">
                    <div>
                      <HiOutlineDocumentMagnifyingGlass className="hire-developers-thi-card-icon" />
                    </div>
                    <div className="hire-developers-thi-card-content">
                      <h3>Timely Delivery</h3>
                      <p>
                        Skilledhyre is having skilled and experinced team in
                        India that can develop a mobile app or a website for you
                        within the required timeframe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" onClick={handleClick}>
                <div className="hire-developers-thi-card">
                  <div className="hire-developers-thi-card-body">
                    <div>
                      <MdOutlineStars className="hire-developers-thi-card-icon" />
                    </div>
                    <div className="hire-developers-thi-card-content">
                      <h3>End-to-End Services</h3>
                      <p>
                        To keep you updated with each and every phase of the
                        development, you are provided access to all your work
                        documents, to-do lists, and project delivery dates.
                        Helping you keep track of your application development
                        phase so that nothing goes wrong during the development
                        and deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid hire-developers-four">
          <div className="hire-developers-thi-header">
            <h2>Mobility</h2>
            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>
          </div>
          <div className="container-fluid hire-developers-four-card-container">
            <div className="row hire-developers-four-card-row">
              {cardsData.map((card, index) => (
                <div key={index} className="col-md-4" onClick={handleClick}>
                  <div className="hire-developers-four-card">
                    <div className="hire-developers-four-card-body">
                      <div>
                        {typeof card.icon === "function" ? (
                          <span className="hire-developers-four-card-icon">
                            {card.icon()}
                          </span>
                        ) : (
                          <img
                            src={card.icon}
                            alt={card.title}
                            className="hire-developers-four-card-icon"
                          />
                        )}
                      </div>
                      <div className="hire-developers-four-card-content">
                        <h3>{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HireDevelopers;
