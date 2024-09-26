import React, { useEffect } from "react";
import "./RecruitmentServices.css";

function RecruitmentServices() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".recruitment-services-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          card.classList.add("zoomIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data array to store recruitment services
  const servicesData = [
    {
      title: "Permanent Staffing",
      description:
        "Permanent Staffing Placing permanent employees & absorbing them into your organized Environment is a very Difficult & serious commitment, so it's better to choose the right person to make this difficult commitment into an accurate decision.",
    },
    {
      title: "Contract Staffing",
      description:
        "Filling a long-term vacancy is a time-consuming, costly process. Working with our recruitment agency represents the opportunity to cut all of that out by providing Contractual staff.",
    },
    {
      title: "RPO",
      description:
        "RPO Attract, engage and hire top-class talents for your organization with business-driven, people-focused recruitment solutions as individual as your business.",
    },
  ];

  return (
    <div className=" recruitment-container mt-5 mb-4">
      <h6 className="text-center mb-2 recruitment-services-sub-heading">
        <span className="recruitment-services-dot">•</span>RECRUITMENT SERVICES
        WE PROVIDE
        <span className="recruitment-services-dot">•</span>
      </h6>
      <h2 className="text-center recruitment-services-heading">RECRUITMENT</h2>
      <div className="row recruitment-services-card-row">
        {servicesData.map((service, index) => (
          <div className="col-md-4 col-sm-12 xs-12 mb-4" key={index}>
            <div className="recruitment-services-card">
              <div className="recruitment-services-card-body">
                <h5 className="recruitment-services-card-title">
                  {service.title}
                </h5>
                <p className="recruitment-services-text">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecruitmentServices;
