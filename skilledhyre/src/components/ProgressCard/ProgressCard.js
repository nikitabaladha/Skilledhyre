import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import "./ProgressCard.css";

const ProgressCard = ({ title, percentage }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(percentage / 100);
      const duration = 1000;
      const interval = duration / (percentage / increment);

      const animate = setInterval(() => {
        start += increment;
        if (start > percentage) {
          start = percentage;
          clearInterval(animate);
        }
        setProgress(start);
      }, interval);

      return () => clearInterval(animate);
    }
  }, [inView, percentage]);

  return (
    <div className="progress-card" ref={ref}>
      <div className="progress-bar-container">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: "#007bff",
            textColor: "#007bff",
            trailColor: "#d6d6d6",
            backgroundColor: "#f8f8f8",
          })}
        />
        <div className="outer-circle"></div>{" "}
        {/* Outer circle around percentage text */}
      </div>
      <h4 className="progress-title">{title}</h4>
    </div>
  );
};

export default ProgressCard;
