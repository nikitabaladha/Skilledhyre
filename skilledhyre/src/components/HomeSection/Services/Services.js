import React from "react";
import "./Services.css";

import { GrPieChart } from "react-icons/gr";
import { ImSearch } from "react-icons/im";
import { BiCodeBlock } from "react-icons/bi";
import { TbCloudComputing } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const servicesData = [
  {
    icon: <GrPieChart className="services-card-icon" />,
    title: "WEB DESIGNING",
    description:
      "With the growing use of internet, it has become essential for businesses to mark their web presence. However, a mere website is not enough.",
  },
  {
    icon: <AiOutlineFundProjectionScreen className="services-card-icon" />,
    title: "WEB DEVELOPMENT",
    description:
      "Internet is the power that has been making the businesses prosper and grow in current times. Therefore, to make businesses make the most of this power.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="services-card-icon" />,
    title: "RESPONSIVE WEBSITE",
    description:
      "The web traffic through mobile devices is set to exceed that of the conventional desktop. So this requires website owners to understand the importance.",
  },
  {
    icon: <ImSearch className="services-card-icon" />,
    title: "Mobile Application",
    description:
      "Smartphones are being used on a regular basis so, most of the Smartphone users download at least one application. As iPhone and Android app.",
  },
  {
    icon: <BiCodeBlock className="services-card-icon" />,
    title: "E-Commerce Development",
    description:
      "E commerce is a perfect way to buy and sell the products online. Therefore, E commerce is a quick and convenient way to exchange goods and services with Skilledhyre.",
  },
  {
    icon: <TbCloudComputing className="services-card-icon" />,
    title: "Software Development",
    description:
      "Our software development services offer value to your business. Our engineer's at Skilledhyre technologies offer high quality and effective software applications.",
  },
  {
    icon: <GrPieChart className="services-card-icon" />,
    title: "CMS Development",
    description:
      "The CMS solutions have plenty of add-ons that can change the look of your website and benefit your business. It allows the clients to edit the website content.",
  },
  {
    icon: <TbCloudComputing className="services-card-icon" />,
    title: "Digital Marketing",
    description:
      "Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. It brings new clients as well as maintains relationship with existing clients.",
  },
  {
    icon: <TbCloudComputing className="services-card-icon" />,
    title: "E-Learning",
    description:
      "E-Learning is any learning that utilizes electronics devices like computer/PDA/Mobile and/or utilizes a network (LAN, WAN or Internet) for delivery, interaction, or facilitation. It can be synchronous, asynchronous, instructor-led or computer-based or a combination.",
  },
];

function Services() {
  return (
    <div className="container-fluid services">
      <div className="space"></div>
      <div className="container">
        <h6 className="text-center mb-4 services-sub-heading">
          <span className="services-dot">•</span>OUR SERVICES
          <span className="services-dot">•</span>
        </h6>
        <h2 className="text-center services-heading">
          Introduce Best
          <br></br>
          IT Services
        </h2>
        <div className="row services-card-row">
          {servicesData.map((service, index) => (
            <div className="col-md-4 col-sm-12 col-xs-12 mb-4" key={index}>
              <div className="services-card">
                <div className="svg-container-services">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="#1459ba"
                      fillOpacity="1"
                      className="svg-path-services"
                      d="M0,32L80,69.3C160,107,320,181,480,213.3C640,245,800,235,960,192C1120,149,1280,75,1360,37.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                  </svg>
                </div>
                <div className="services-card-body">
                  {service.icon}
                  <h5 className="services-card-title">{service.title}</h5>
                  <p className="services-text">{service.description}</p>
                </div>
                <div className="svg-container-services">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="#1459ba"
                      fillOpacity="1"
                      className="svg-path-services"
                      d="M1440,192L1392,165.3C1344,139,1248,85,1152,85.3C1056,85,960,139,864,186.7C768,235,672,277,576,256C480,235,384,149,288,149.3C192,149,96,235,48,277.3L0,320L0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
