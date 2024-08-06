import React from "react";
import "./Spacer.css";
import spacerImage from "../../images/spacer.jpg";

const Spacer = () => {
  return (
    <>
      <div className="upper-spacer"></div>

      <img src={spacerImage} alt="Logo" className="spacer-img" />

      <div className="lower-spacer"></div>
    </>
  );
};

export default Spacer;
