// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Button } from "react-bootstrap";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { faPieChart } from "@fortawesome/free-solid-svg-icons";
// import "./ProcessDrivenSEO.css";

// const ProcessDrivenSEO = () => {
//   return (
//     <>
//       <div className="container-fluid seo">
//         <div className="row">
//           <div className="col-md-8">
//             <h6 className="mb-4 seo-sub-heading">
//               <span className="seo-dot">•</span>Build your small business
//             </h6>
//             <h2 className="mb-4 seo-heading">
//               Dominate Your Competition with
//               <br></br>
//               Process-Driven SEO
//             </h2>
//           </div>
//           <div className="col-md-4">
//             <Button
//               variant="secondary"
//               href="/start-now"
//               className="seo-view-more-button"
//             >
//               View More <IoIosArrowRoundForward className="seo-arrow-icon" />
//             </Button>
//           </div>
//         </div>

//         <div className="container">
//           <div className="row seo-card-row">
//             <div className="seo-card col-md-2">
//               <FontAwesomeIcon icon={faPieChart} className="seo-card-icon" />
//               <h5 className="seo-card-title">WEB DESIGNING</h5>
//             </div>

//             <div className="seo-card col-md-2">
//               <FontAwesomeIcon icon={faPieChart} className="seo-card-icon" />
//               <h5 className=" seo-card-title">Software Development</h5>
//             </div>

//             <div className="seo-card col-md-2">
//               <FontAwesomeIcon icon={faPieChart} className="seo-card-icon" />
//               <h5 className="seo-card-title">WEB DESIGNING</h5>
//             </div>

//             <div className="seo-card col-md-2">
//               <FontAwesomeIcon icon={faPieChart} className="seo-card-icon" />
//               <h5 className="seo-card-title">Software Development</h5>
//             </div>

//             <div className="seo-card col-md-2">
//               <FontAwesomeIcon icon={faPieChart} className="seo-card-icon" />
//               <h5 className="seo-card-title">WEB DESIGNING</h5>
//             </div>

//             <div className="seo-card col-md-2">
//               <FontAwesomeIcon icon={faPieChart} className="seo-card-icon" />
//               <h5 className="seo-card-title">Software Development</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProcessDrivenSEO;

// =================================================================
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import { faPieChart } from "@fortawesome/free-solid-svg-icons";
import "./ProcessDrivenSEO.css";

const ProcessDrivenSEO = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="container-fluid seo">
      <div className="row">
        <div className="col-md-8">
          <h6 className="mb-4 seo-sub-heading">
            <span className="seo-dot">•</span>Build your small business
          </h6>
          <h2 className="mb-4 seo-heading">
            Dominate Your Competition with
            <br />
            Process-Driven SEO
          </h2>
        </div>
        <div className="col-md-4">
          <Button
            variant="secondary"
            href="/start-now"
            className="seo-view-more-button"
          >
            View More <IoIosArrowRoundForward className="seo-arrow-icon" />
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="row seo-card-row">
          {[
            "WEB DESIGNING",
            "Software Development",
            "WEB DESIGNING",
            "Software Development",
            "WEB DESIGNING",
            "Software Development",
          ].map((title, index) => (
            <div
              key={index}
              className={`seo-card col-md-2 ${
                activeCard === index ? "active" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <FontAwesomeIcon icon={faPieChart} className="seo-card-icon" />
              <h5 className="seo-card-title">{title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessDrivenSEO;
