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

  return (
    <div className="container mt-5 mb-4">
      <h6 className="text-center mb-2 recruitment-services-sub-heading">
        <span className="recruitment-services-dot">•</span>RECRUITMENT SERVICES
        WE PROVIDE
        <span className="recruitment-services-dot">•</span>
      </h6>
      <h2 className="text-center recruitment-services-heading">RECRUITMENT</h2>
      <div className="row recruitment-services-card-row">
        <div className="col-md-4 col-sm-12 xs-12 mb-4">
          <div className="recruitment-services-card">
            <div className="recruitment-services-card-body">
              <h5 className="recruitment-services-card-title">
                Permanent Staffing
              </h5>
              <p className="recruitment-services-text">
                Permanent Staffing Placing permanent employees & absorbing them
                into your organized Environment is a very Difficult & serious
                commitment, so it's better to choose right person to make this
                difficult commitment into accurate decision.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 xs-12 mb-4">
          <div className="recruitment-services-card">
            <div className="recruitment-services-card-body">
              <h5 className="recruitment-services-card-title">
                Contract Staffing
              </h5>
              <p className="recruitment-services-text">
                Filling a long-term vacancy time consuming, costly process.
                Working with our recruitment agency represents the opportunity
                to cut all of that out providing Contractual staff.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 xs-12 mb-4">
          <div className="recruitment-services-card">
            <div className="recruitment-services-card-body">
              <h5 className="recruitment-services-card-title">RPO</h5>
              <p className="recruitment-services-text">
                RPO Attract, engage and hire top-class talents for your
                organization with business-driven, people-focused recruitment
                solutions as individual as your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentServices;
