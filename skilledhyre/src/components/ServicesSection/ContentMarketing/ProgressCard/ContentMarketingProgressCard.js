import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import "./ContentMarketingProgressCard.css";

const ContentMarketingProgressCard = ({ title, percentage }) => {
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
    <div className={`content-marketing-progress-card`} ref={ref}>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradientColors" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff403e" />
            <stop offset="100%" stopColor="#ff811b" />
          </linearGradient>
        </defs>
      </svg>

      <div className="content-marketing-progress-bar-container">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: `url(#gradientColors)`,
            textColor: "#000000;",
            trailColor: "#ffffff",
            backgroundColor: "#ffffff",
          })}
          strokeWidth={10}
          className="content-marketing-percentage-text"
        />
        <div className="content-marketing-outer-circle"></div>
      </div>
      <h4 className="content-marketing-progress-title">{title}</h4>
    </div>
  );
};

export default ContentMarketingProgressCard;
