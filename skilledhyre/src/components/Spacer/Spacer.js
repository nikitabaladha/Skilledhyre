import React from "react";
import "./Spacer.css";
import spacerImage from "../../images/spacer.jpg";

const Spacer = () => {
  return (
    <>
      <img src={spacerImage} alt="Logo" className="spacer-img" />
    </>
  );
};

export default Spacer;
