// App.js
import React from "react";
import ProgressCard from "./ProgressCard";

const ProgressCardProps = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <ProgressCard title="Hard Workers" percentage={66} />
    </div>
  );
};

export default ProgressCardProps;
