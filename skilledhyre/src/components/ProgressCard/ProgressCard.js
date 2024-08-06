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
    <div className={`progress-card ${inView ? "slideInUp" : ""}`} ref={ref}>
      <div className="progress-bar-container">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textSize: "16px",
            // fontWeight: "bold",
            pathColor: "#00c3ff",
            textColor: "#FFFFFF",
            trailColor: "#0049b1",
            backgroundColor: "#0049b1",
          })}
          strokeWidth={10}
          className="percentage-text"
        />
        <div className="outer-circle"></div>{" "}
      </div>
      <h4 className="progress-title">{title}</h4>
    </div>
  );
};

export default ProgressCard;
