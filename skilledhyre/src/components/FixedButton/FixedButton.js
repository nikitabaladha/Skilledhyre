import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import "./FixedButton.css";

const FixedButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        className={`fixed-icon ${showButton ? "show" : "hide"}`}
        onClick={handleClick}
      >
        <FaArrowUpLong />
      </div>
    </div>
  );
};

export default FixedButton;
