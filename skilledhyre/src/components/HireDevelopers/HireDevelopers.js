import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6";
import { Card, Button } from "react-bootstrap";
import { RxDotsHorizontal } from "react-icons/rx";
import { BsStopwatch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineStars } from "react-icons/md";
import { FaBezierCurve } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaVrCardboard } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { FaRegFileVideo } from "react-icons/fa";
import { FaDharmachakra } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaDrupal } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { TbFileTextAi } from "react-icons/tb";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { CiStickyNote } from "react-icons/ci";
import { MdOutlineStickyNote2 } from "react-icons/md";

import Navbar from "../HomeSection/Navbar/Navbar";
import Footer from "../HomeSection/Footer/Footer";
import "./HireDevelopers.css";

import hireDeveloperImage2 from "../../images/HireDeveloperImages/HireDeveloper-2.png";
import hireDeveloperImage3 from "../../images/HireDeveloperImages/HireDeveloper-3.png";
import hireDeveloperImage4 from "../../images/HireDeveloperImages/HireDeveloper-4.png";
import hireDeveloperImage5 from "../../images/HireDeveloperImages/HireDeveloper-5.png";
import hireDeveloperImage6 from "../../images/HireDeveloperImages/HireDeveloper-6.png";

const HireDevelopers = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hire-developers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ThirdRowCardData = [
    {
      icon: <FiShoppingBag className="hire-developers-thi-card-icon" />,
      title: "Cost-Effective Models",
      description:
        "Hire dedicated developer and save 60% capital on designing and developing a professional application. Hiring dedicated web developers for projects can reflect significant savings on operating costs without cutting corners.",
    },
    {
      icon: <BsStopwatch className="hire-developers-thi-card-icon" />,
      title: "Extensive Expertise",
      description:
        "More than 95% of the developers are aged 18-35, and every year more than 200,000 software developers are hired by the IT industry. Because of this number, any development challenges thrown across becomes easy.",
    },
    {
      icon: <FaRegHandshake className="hire-developers-thi-card-icon" />,
      title: "Quality Work",
      description:
        "The top software outsourcing companies consistently provide top quality software solutions. This is because of the talented software programmers that have an ever-increasing thirst for learning and experimenting.",
    },
    {
      icon: <LuPencilRuler className="hire-developers-thi-card-icon" />,
      title: "High-End Infrastructure",
      description:
        "Skilledhyre keeps itself abreast with the latest technology and tools needed to outperform in software development.",
    },
    {
      icon: (
        <HiOutlineDocumentMagnifyingGlass className="hire-developers-thi-card-icon" />
      ),
      title: "Timely Delivery",
      description:
        "Skilledhyre is having skilled and experienced team in India that can develop a mobile app or a website for you within the required timeframe.",
    },
    {
      icon: <MdOutlineStars className="hire-developers-thi-card-icon" />,
      title: "End-to-End Services",
      description:
        "To keep you updated with each and every phase of the development, you are provided access to all your work documents, to-do lists, and project delivery dates. Helping you keep track of your application development phase so that nothing goes wrong during the development and deployment.",
    },
  ];

  const FourthRowCardData = [
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
      title: "App Developers",
    },
  ];

  const FifthRowCardData = [
    {
      icon: <FaRegFileVideo className="hire-developers-fif-card-icon" />,
      title: "Blockchain",
      iconClass: "icon-1", // Custom class for the icon
      titleClass: "title-1", // Custom class for the title
    },
    {
      icon: (
        <HiOutlineChatBubbleLeftRight className="hire-developers-fif-card-icon" />
      ),
      title: "Chatbot",
      iconClass: "icon-2",
      titleClass: "title-2",
    },
    {
      icon: <FaDharmachakra className="hire-developers-fif-card-icon" />,
      title: "Machine Learning",
      iconClass: "icon-3",
      titleClass: "title-3",
    },
    {
      icon: <FaBezierCurve className="hire-developers-fif-card-icon" />,
      title: "Crypto Currency",
      iconClass: "icon-4",
      titleClass: "title-4",
    },
  ];

  const SixthRowCardData = [
    {
      icon: <FaComputer className="hire-developers-six-card-icon" />,
      title: ".NET",
      iconClass: "icon-1",
      titleClass: "title-1",
    },
    {
      icon: <FaPhp className="hire-developers-six-card-icon" />,
      title: "PHP",
      iconClass: "icon-2",
      titleClass: "title-2",
    },
    {
      icon: <FaJava className="hire-developers-six-card-icon" />,
      title: "Java",
      iconClass: "icon-3",
      titleClass: "title-3",
    },
    {
      icon: <FaAngular className="hire-developers-six-card-icon" />,
      title: "Angular",
      iconClass: "icon-4",
      titleClass: "title-4",
    },
    {
      icon: <FaHtml5 className="hire-developers-six-card-icon" />,
      title: "HTML 5",
      iconClass: "icon-5",
      titleClass: "title-5",
    },
    {
      icon: (
        <div className="hire-developers-six-card-icon icon-6">
          <img
            src={hireDeveloperImage4}
            alt="QA Tester"
            style={{ width: 40, height: 40 }}
          />
        </div>
      ),
      title: "QA Tester",
      iconClass: "icon-6",
      titleClass: "title-6",
    },
  ];

  const SeventhRowCardData = [
    {
      icon: <FaDrupal className="hire-developers-seven-card-icon" />,
      title: "Drupal",
      iconClass: "icon-1",
      titleClass: "title-1",
    },
    {
      icon: <FaMagento className="hire-developers-seven-card-icon" />,
      title: "Magento",
      iconClass: "icon-2",
      titleClass: "title-2",
    },
    {
      icon: <FaWordpress className="hire-developers-seven-card-icon" />,
      title: "Wordpress",
      iconClass: "icon-3",
      titleClass: "title-3",
    },
    {
      icon: (
        <div className="hire-developers-six-card-icon icon-6">
          <img
            src={hireDeveloperImage5}
            alt="QA Tester"
            style={{ width: 40, height: 40 }}
          />
        </div>
      ),
      title: "Sitecore",
      iconClass: "icon-4",
      titleClass: "title-4",
    },

    {
      icon: (
        <div className="hire-developers-six-card-icon icon-6">
          <img
            src={hireDeveloperImage6}
            alt="QA Tester"
            style={{ width: 40, height: 40 }}
          />
        </div>
      ),
      title: "Shopify",
      iconClass: "icon-5",
      titleClass: "title-5",
    },
  ];

  const EighthRowCardData = [
    {
      icon: <FaPhotoVideo className="hire-developers-eight-card-icon" />,
      title: "Video Editing",
      iconClass: "icon-1",
      titleClass: "title-1",
    },
    {
      icon: (
        <MdOutlineVideoSettings className="hire-developers-eight-card-icon" />
      ),
      title: "Short Video Ads",
      iconClass: "icon-2",
      titleClass: "title-2",
    },
    {
      icon: <FaPhotoVideo className="hire-developers-eight-card-icon" />,
      title: "Product Photography",
      iconClass: "icon-3",
      titleClass: "title-3",
    },
    {
      icon: <CiGift className="hire-developers-eight-card-icon" />,
      title: "Animated GIFs",
      iconClass: "icon-4",
      titleClass: "title-4",
    },
    {
      icon: <TbFileTextAi className="hire-developers-eight-card-icon" />,
      title: "3d Product Animation",
      iconClass: "icon-5",
      titleClass: "title-5",
    },
  ];

  const NinthRowCardData = [
    {
      icon: <FaPhotoVideo className="hire-developers-nine-card-icon" />,
      title: "Visiting Cards & Letterhead",
      iconClass: "icon-1",
      titleClass: "title-1",
    },
    {
      icon: (
        <MdOutlineVideoSettings className="hire-developers-nine-card-icon" />
      ),
      title: "Banner Ads",
      iconClass: "icon-2",
      titleClass: "title-2",
    },
    {
      icon: <FaPhotoVideo className="hire-developers-nine-card-icon" />,
      title: "Social Media Design",
      iconClass: "icon-3",
      titleClass: "title-3",
    },
    {
      icon: <CiGift className="hire-developers-nine-card-icon" />,
      title: "Script Writing",
      iconClass: "icon-4",
      titleClass: "title-4",
    },
    {
      icon: <CiGift className="hire-developers-nine-card-icon" />,
      title: "Legal Writing",
      iconClass: "icon-4",
      titleClass: "title-4",
    },
  ];

  const TenthRowCardData = [
    {
      icon: <FaPhotoVideo className="hire-developers-ten-card-icon" />,
      title: "Content Writing",
      iconClass: "icon-1",
      titleClass: "title-1",
    },
    {
      icon: (
        <MdOutlineVideoSettings className="hire-developers-ten-card-icon" />
      ),
      title: "Resume & Letter",
      iconClass: "icon-2",
      titleClass: "title-2",
    },
    {
      icon: <FaPhotoVideo className="hire-developers-ten-card-icon" />,
      title: "Script Writing",
      iconClass: "icon-3",
      titleClass: "title-3",
    },
    {
      icon: <CiStickyNote className="hire-developers-ten-card-icon" />,
      title: "Poster Design",
      iconClass: "icon-4",
      titleClass: "title-4",
    },
    {
      icon: <MdOutlineStickyNote2 className="hire-developers-ten-card-icon" />,
      title: "3D Models & Product Design",
      iconClass: "icon-5",
      titleClass: "title-5",
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
              <span className="hire-developers-decorative-dot"></span>
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
          {/*Cards */}
          <div className="container-fluid hire-developers-thi-card-container">
            <div className="row hire-developers-thi-card-row">
              {ThirdRowCardData.map((card, index) => (
                <div className="col-md-6" onClick={handleClick} key={index}>
                  <div className="hire-developers-thi-card">
                    <div className="hire-developers-thi-card-body">
                      <div>{card.icon}</div>
                      <div className="hire-developers-thi-card-content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

          {/* fourth row Cards  */}
          <div className="container-fluid hire-developers-four-card-container">
            <div className="row hire-developers-four-card-row">
              {FourthRowCardData.map((card, index) => (
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

        {/* Fifth row */}
        <div className="container-fluid hire-developers-fif">
          <div className="hire-developers-thi-header">
            <h2>Blockchain & ML</h2>
            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>
          </div>

          {/* Cards */}
          <div className="container-fluid hire-developers-fif-card-container">
            <div className="row hire-developers-fif-card-row">
              {FifthRowCardData.map((card, index) => (
                <div className="col-md-3" onClick={handleClick} key={index}>
                  <div className="hire-developers-fif-card">
                    <div className="hire-developers-fif-card-body">
                      <div
                        className={`hire-developers-fif-card-icon icon ${card.iconClass}`}
                      >
                        {card.icon}
                      </div>
                      <div className="hire-developers-fif-card-content">
                        <h3 className={card.titleClass}>{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sixth row */}
        <div className="container-fluid hire-developers-six">
          <div className="hire-developers-thi-header">
            <h2>Web & Full Stack</h2>
            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>
          </div>

          {/* Cards */}
          <div className="container-fluid hire-developers-six-card-container">
            <div className="row hire-developers-six-card-row">
              {SixthRowCardData.map((card, index) => (
                <div className="col-md-4" onClick={handleClick} key={index}>
                  <div className="hire-developers-six-card">
                    <div className="hire-developers-six-card-body">
                      <div
                        className={`hire-developers-six-card-icon icon ${card.iconClass}`}
                      >
                        {card.icon}
                      </div>
                      <div className="hire-developers-six-card-content">
                        <h3 className={card.titleClass}>{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seventh row */}
        <div className="container-fluid hire-developers-seven">
          <div className="hire-developers-thi-header">
            <h2>Ecommerce & CMS</h2>
            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>
          </div>

          {/* Cards */}
          <div className="container-fluid hire-developers-seven-card-container">
            <div className="row hire-developers-seven-card-row">
              {SeventhRowCardData.map((card, index) => (
                <div
                  className={`col-md-${index < 3 ? 4 : 6}`}
                  onClick={handleClick}
                  key={index}
                >
                  <div className="hire-developers-seven-card">
                    <div className="hire-developers-seven-card-body">
                      <div
                        className={`hire-developers-seven-card-icon icon ${card.iconClass}`}
                      >
                        {card.icon}
                      </div>
                      <div className="hire-developers-seven-card-content">
                        <h3 className={card.titleClass}>{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eighth row */}
        <div className="container-fluid hire-developers-eight">
          <div className="hire-developers-thi-header">
            <h2>Video & Animation</h2>
            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>
          </div>

          {/* Cards */}
          <div className="container-fluid hire-developers-eight-card-container">
            <div className="row hire-developers-eight-card-row">
              {EighthRowCardData.map((card, index) => (
                <div
                  className={`col-md-${index < 3 ? 4 : 6}`}
                  onClick={handleClick}
                  key={index}
                >
                  <div className="hire-developers-eight-card">
                    <div className="hire-developers-eight-card-body">
                      <div
                        className={`hire-developers-eight-card-icon icon ${card.iconClass}`}
                      >
                        {card.icon}
                      </div>
                      <div className="hire-developers-eight-card-content">
                        <h3 className={card.titleClass}>{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ninth row */}
        <div className="container-fluid hire-developers-nine">
          <div className="hire-developers-thi-header">
            <h2>Graphic & Design</h2>
            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>
          </div>

          {/* Cards */}
          <div className="container-fluid hire-developers-nine-card-container">
            <div className="row hire-developers-nine-card-row">
              {NinthRowCardData.map((card, index) => (
                <div
                  className={`col-md-${index < 3 ? 4 : 6}`}
                  onClick={handleClick}
                  key={index}
                >
                  <div className="hire-developers-nine-card">
                    <div className="hire-developers-nine-card-body">
                      <div
                        className={`hire-developers-nine-card-icon icon ${card.iconClass}`}
                      >
                        {card.icon}
                      </div>
                      <div className="hire-developers-nine-card-content">
                        <h3 className={card.titleClass}>{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tenth row */}
        <div className="container-fluid hire-developers-ten">
          <div className="hire-developers-thi-header">
            <h2>Writing & Translation</h2>
            <div className="hire-developers-dot-dash-line">
              <span className="hire-developers-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="hire-developers-decorative-line"></span>
            </div>
          </div>

          {/* Cards */}
          <div className="container-fluid hire-developers-ten-card-container">
            <div className="row hire-developers-ten-card-row">
              {TenthRowCardData.map((card, index) => (
                <div
                  className={`col-md-${index < 3 ? 4 : 6}`}
                  onClick={handleClick}
                  key={index}
                >
                  <div className="hire-developers-ten-card">
                    <div className="hire-developers-ten-card-body">
                      <div
                        className={`hire-developers-ten-card-icon icon ${card.iconClass}`}
                      >
                        {card.icon}
                      </div>
                      <div className="hire-developers-ten-card-content">
                        <h3 className={card.titleClass}>{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eleventh row */}

        <div className="container-fluid staffing-fif">
          <div className="staffing-fif-content">
            <h2>Call to Action</h2>
            <div className="staffing-dot-dash-line">
              <span className="staffing-decorative-dot">
                <RxDotsHorizontal />
              </span>
              <span className="staffing-decorative-line"></span>
            </div>
          </div>

          <Card className="staffing-fif-card">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Text className="staffing-fif-card-text">
                  Do You Have An Interesting Projects?
                </Card.Text>
                <div className="staffing-fif-card-button">
                  <Button className="contact-us" onClick={handleClick}>
                    Contact Us <FaArrowRight />
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HireDevelopers;
