import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Animation from "../../HomeSection/ProcessDrivenSEO/Animation";

import SearchEngineOptimization1 from "../../../images/ServicesSubPageImages/search-engine-optimization-1.png";
import SearchEngineOptimization3 from "../../../images/ServicesSubPageImages/search-engine-optimization-3.png";
import SearchEngineOptimization4 from "../../../images/ServicesSubPageImages/search-engine-optimization-4.png";
import SearchEngineOptimization5 from "../../../images/ServicesSubPageImages/search-engine-optimization-5.png";
import SearchEngineOptimization6 from "../../../images/ServicesSubPageImages/search-engine-optimization-6.png";
import SearchEngineOptimization7 from "../../../images/ServicesSubPageImages/search-engine-optimization-7.png";
import SearchEngineOptimization8 from "../../../images/ServicesSubPageImages/search-engine-optimization-8.jpg";
import SearchEngineOptimization9 from "../../../images/ServicesSubPageImages/search-engine-optimization-9.jpg";
import SearchEngineOptimization10 from "../../../images/ServicesSubPageImages/search-engine-optimization-10.jpg";
import SearchEngineOptimizationA from "../../../images/ServicesSubPageImages/search-engine-optimization-a.png";

import { ImSearch } from "react-icons/im";
import { GrPieChart } from "react-icons/gr";
import { BiCodeBlock } from "react-icons/bi";
import { TbCloudComputing } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Button } from "react-bootstrap";

import Footer from "../../HomeSection/Footer/Footer";
import Navbar from "../../HomeSection/Navbar/Navbar";

import "./SearchEngineOptimization.css";

const SearchEngineOptimization = () => {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!url || !email) {
      setError("Please fill in all fields.");
    } else {
      // Handle form submission logic here
      console.log("Form submitted:", url, email);
      setError(null);
    }
  };

  const handleClick = () => {
    navigate("/get-a-quote");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // This function will handle the redirection when a slide is clicked
  const handleRedirect = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const images = [
    {
      image: SearchEngineOptimization8,
      title: "Analysis of Security",
      description: "Marketing/Optimization",
      link: "/portfolio/analysis-of-security",
    },
    {
      image: SearchEngineOptimization9,
      title: "SMM Project",
      description: "Media/Optimization",
      link: "/portfolio/smm-project",
    },
    {
      image: SearchEngineOptimization10,
      title: "UX Design for Tubus",
      description: "Development",
      link: "/portfolio/ux-design-for-tubus",
    },
    {
      image: SearchEngineOptimizationA,
    },
    {
      image: SearchEngineOptimization10,
      title: "UX Design for Tubus",
      description: "Development",
      link: "/portfolio/ux-design-for-tubus",
    },
    {
      image: SearchEngineOptimization8,
      title: "Analysis of Security",
      description: "Marketing/Optimization",
      link: "/portfolio/analysis-of-security",
    },
  ];

  const services = [
    {
      title: "SEO Optimization",
      description:
        "Get more website traffic, more customers, and more visibility.",
      icon: <ImSearch />,
    },
    {
      title: "Web Development",
      description:
        "Your website has to impress your visitors within just a few seconds.",
      icon: <BiCodeBlock />,
    },
    {
      title: "PPC Advertising",
      description:
        "Target your ideal search phrases and get found at the top of Google’s results.",
      icon: <TbCloudComputing />,
    },
    {
      title: "Content Marketing",
      description:
        "You can provide the answers that your potential customers are looking for.",
      icon: <GrPieChart />,
    },
    {
      title: "Social Marketing",
      description: "Create and manage top-performing social campaigns.",
      icon: <AiOutlineFundProjectionScreen />,
    },
    {
      title: "App Development",
      description: "Launching a startup with limited capital? No problem.",
      icon: <HiOutlineClipboardDocumentList />,
    },
  ];

  const cardData = [
    {
      beforeNumber: "104,457",
      afterNumber: "314,297",
      description: "Annual Organic Traffic",
      imgSrc: SearchEngineOptimization5,
    },
    {
      beforeNumber: "26,740",
      afterNumber: "34,369",
      description: "Annual Organic Traffic",
      imgSrc: SearchEngineOptimization6,
    },
    {
      beforeNumber: "780%",
      afterNumber: "980%",
      description: "Annual Organic Traffic",
      imgSrc: SearchEngineOptimization7,
    },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const [activeClients, setActiveClients] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [teamAdvisors, setTeamAdvisors] = useState(0);
  const [gloriousYears, setGloriousYears] = useState(0);

  const animateCounter = (finalValue, setValue) => {
    let startValue = 0;
    const duration = 2000;
    const increment = finalValue / (duration / 10);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= finalValue) {
        clearInterval(counter);
        setValue(finalValue);
      } else {
        setValue(Math.floor(startValue));
      }
    }, 10);
  };

  useEffect(() => {
    animateCounter(20, setActiveClients);
    animateCounter(50, setProjectsDone);
    animateCounter(25, setTeamAdvisors);
    animateCounter(2, setGloriousYears);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="ser-sub">
        {/* First Row*/}
        <div className="container-fluid ser-sub-first">
          <div>
            <h1>Search Engine Optimization</h1>
            <p>
              <Link to="/" className="homepage-link">
                Home
              </Link>
              <span class="material-symbols-outlined greater-than-icon">
                chevron_right
              </span>
              <span className="current-page">Search Engine Optimization</span>
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="container-fluid search-engine-optimization-sec">
          <div className="row">
            {/* Left Column Services */}
            <div className="col-md-3 col-sm-12 search-engine-optimization-card">
              {services.slice(0, 3).map((service, index) => (
                <div key={index}>
                  <div className="row d-flex align-items-center search-engine-optimization-card-left">
                    <div className="col-md-8 col-sm-10 search-engine-optimization-left-content">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                    <div className="col-md-4 col-sm-2 search-engine-optimization-sec-row-card-icon">
                      {service.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Column */}
            <div className="col-md-6 col-sm-12 search-engine-optimization-sec-image-container">
              <img
                src={SearchEngineOptimization1}
                alt="Content Marketing Strategy"
              />
            </div>

            {/* Right Column Services */}
            <div className="col-md-3 col-sm-12 search-engine-optimization-card">
              {services.slice(3, 6).map((service, index) => (
                <div key={index}>
                  <div className="row d-flex align-items-center search-engine-optimization-card-right">
                    <div className="col-md-4 col-sm-2 search-engine-optimization-sec-row-card-icon">
                      {service.icon}
                    </div>
                    <div className="col-md-8 col-sm-10 search-engine-optimization-right-content">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="container-fluid search-engine-optimization-thi">
          <div className="search-engine-optimization-thi-background-color">
            <div className="search-engine-optimization-thi-background-image">
              <div className="search-engine-optimization-thi-heading">
                <h2>Know your SEO Score!</h2>
              </div>

              <div className="search-engine-optimization-thi-form-container">
                <form
                  className="search-engine-optimization-thi-form"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    className="form-control text-field-1"
                    placeholder="Your Website URL"
                    name="url"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <input
                    type="email"
                    className="form-control text-field-2"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* This div will be hidden on small screens */}
                  <div className="search-engine-optimization-thi-button-div">
                    <Button
                      type="submit"
                      className="ml-2 search-engine-optimization-button-thi"
                    >
                      Start Now{" "}
                      <IoIosArrowRoundForward className="search-engine-optimization-button-thi-arrow-icon" />
                    </Button>
                  </div>

                  {/* Button directly for small screens */}
                  <Button
                    type="submit"
                    className="ml-2 search-engine-optimization-button-thi d-block d-md-none"
                  >
                    Start Now{" "}
                    <IoIosArrowRoundForward className="search-engine-optimization-button-thi-arrow-icon" />
                  </Button>
                </form>
                {error && (
                  <div className="response">
                    One or more fields have an error. Please check and try
                    again.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="container-fluid search-engine-optimization-four">
          <Animation />
          {/* Heading */}
          <div className="search-engine-optimization-four-content">
            <h6>
              <span className="search-engine-optimization-dot">•</span>Real
              Numbers
              <span className="search-engine-optimization-dot">•</span>
            </h6>
            <h2>
              Expect Great Things from <br></br>Your SEO Agency
            </h2>
          </div>

          {/* Toggle button */}
          <div className="toggle-container">
            <span className={isChecked ? "before-active" : "before"}>
              Before
            </span>
            <span className="toggle-div">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span className="slider round"></span>
              </label>
            </span>
            <span className={isChecked ? "after-active" : "after"}>After</span>
          </div>

          {/* Cards */}
          <div className="container-fluid search-engine-optimization-four-card-container">
            <div className="row">
              <div className="col-md-1">
                <img
                  className="search-engine-optimization-four-card-left-image"
                  src={SearchEngineOptimization3}
                  alt=""
                />
              </div>

              {cardData.map((card, index) => (
                <div className="col-md-3 col-sm-12" key={index}>
                  <div className="search-engine-optimization-four-card">
                    <div className="search-engine-optimization-four-card-body">
                      <h2 className={`card-number-${index + 1}`}>
                        {isChecked ? card.afterNumber : card.beforeNumber}
                      </h2>
                      <p>{card.description}</p>
                    </div>
                    <img
                      className="search-engine-optimization-four-card-image"
                      src={card.imgSrc}
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
              <div className="col-md-1">
                <img
                  src={SearchEngineOptimization4}
                  className="search-engine-optimization-four-card-right-image"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* increment cards */}
          <div className="container-fluid search-engine-optimization-increment">
            <div className="row search-engine-optimization-container justify-content-center">
              <div className="col-md-3 search-engine-optimization-increment-content d-flex flex-column align-items-center">
                <div className="span-increment-number">
                  <span className="span-number">{activeClients}</span>
                  <span>+</span>
                </div>

                <h6>
                  <span className="search-engine-optimization-dot">•</span>
                  ACTIVE CLIENTS
                </h6>
              </div>

              <div className="col-md-3 search-engine-optimization-increment-content">
                <div className="span-increment-number">
                  <span className="span-number">{projectsDone}</span>
                  <span className="span-plus">+</span>
                </div>
                <h6>
                  <span className="search-engine-optimization-dot">•</span>
                  PROJECTS DONE
                </h6>
              </div>

              <div className="col-md-3 search-engine-optimization-increment-content">
                <div className="span-increment-number">
                  <span className="span-number">{teamAdvisors}</span>
                  <span>+</span>
                </div>
                <h6>
                  <span className="search-engine-optimization-dot">•</span>
                  TEAM ADVISORS
                </h6>
              </div>

              <div className="col-md-3 search-engine-optimization-increment-content">
                <div className="span-increment-number">
                  <span className="span-number">{gloriousYears}</span>
                  <span>+</span>
                </div>
                <h6>
                  <span className="search-engine-optimization-dot">•</span>
                  GLORIOUS YEARS
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth row  */}
        <div className="container-fluid search-engine-optimization-fif">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="search-engine-optimization-fif-header">
                <h6 className="mb-4 search-engine-optimization-fif-sub-heading">
                  <span className="search-engine-optimization-dot">•</span>
                  RECENT PROJECTS
                </h6>
                <h2 className="mb-4 search-engine-optimization-fif-heading">
                  Our Latest Case Studies
                </h2>
                <p>
                  If we had a ‘secret sauce’ it would be our awesome people.
                  <br></br> We have only professional team!
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <Button
                as={Link}
                to="/search-engine-optimization"
                className="seo-button seo-view-more-button"
                style={{
                  marginTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "2px",
                  width: "160px",
                  boxShadow: "8px 8px 18px 0px rgba(254, 76, 28, 0.3)",
                }}
              >
                All Works
                <IoIosArrowRoundForward className="seo-arrow-icon seo-view-more-arrow-icon" />
              </Button>
            </div>
          </div>
          <div className="container search-engine-optimization-fif-slider-container mt-5">
            <Slider {...settings}>
              {images.map((imgObj, index) => (
                <div
                  key={index}
                  className="slider-item-container"
                  onClick={() => handleRedirect(imgObj.link)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={imgObj.image}
                    alt={`Slide ${index + 1}`}
                    className="img-fluid"
                  />
                  {imgObj.image !== SearchEngineOptimizationA && (
                    <div className="hover-div">
                      <div className="overlay show-overlay">
                        <h3>{imgObj.title}</h3>
                        <p>{imgObj.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Sixth row */}
        <div className="container-fluid search-engine-optimization-six">
          <div className="search-engine-optimization-six-background-color">
            <div className="search-engine-optimization-six-background-image radius-div">
              <div className="search-engine-optimization-six-heading">
                <h2>
                  Take Your Website to Next <br></br> Level Right Now!
                </h2>
              </div>
              <div className="search-engine-optimization-six-button-div">
                <Button
                  onClick={handleClick}
                  className="ml-2 search-engine-optimization-button-six"
                >
                  Start Now
                  <IoIosArrowRoundForward className="search-engine-optimization-button-six-arrow-icon " />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SearchEngineOptimization;
