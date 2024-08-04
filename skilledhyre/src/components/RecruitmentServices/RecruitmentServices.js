import React from "react";
import "./RecruitmentServices.css";

function RecruitmentServices() {
  return (
    <div className="container mt-5">
      <h6 className="text-center mb-4 services-header">
        <span className="dot">•</span>RECRUITMENT SERVICES WE PROVIDE
        <span className="dot">•</span>
      </h6>
      <h2 className="text-center mb-4 services-title">RECRUITMENT</h2>
      <div className="row service-card-row">
        <div className="col-md-4 mb-4">
          <div className="card services-card zoomIn">
            <div className="service-card-body">
              <h5 className="card-title services-card-title">
                Permanent Staffing
              </h5>
              <p className="card-text services-text">
                Permanent Staffing Placing permanent employees & absorbing them
                into your organized Environment is a very Difficult & serious
                commitment, so it's better to choose right person to make this
                difficult commitment into accurate decision.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card services-card zoomIn">
            <div className="service-card-body">
              <h5 className="card-title services-card-title">
                Contract Staffing
              </h5>
              <p className="card-text services-text">
                Filling a long-term vacancy time consuming, costly process.
                Working with our recruitment agency represents the opportunity
                to cut all of that out providing Contractual staff.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card services-card zoomIn">
            <div className="service-card-body">
              <h5 className="card-title services-card-title">RPO</h5>
              <p className="card-text services-text">
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
