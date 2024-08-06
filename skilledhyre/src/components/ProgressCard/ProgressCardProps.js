import React from "react";
import ProgressCard from "./ProgressCard";
import { Container } from "react-bootstrap";
import "./ProgressCard.css";

const ProgressCardProps = () => {
  return (
    <Container
      fluid
      className="progress-props d-flex align-items-center justify-content-center"
    >
      <div className="row">
        <div className="col-md-3">
          <ProgressCard title="Happy Clients" percentage={75} />
        </div>
        <div className="col-md-3 ">
          <ProgressCard title="Projects" percentage={71} />
        </div>
        <div className="col-md-3">
          <ProgressCard title="Support" percentage={88} />
        </div>
        <div className="col-md-3">
          <ProgressCard className="mt-4" title="Hard Workers" percentage={85} />
        </div>
      </div>
    </Container>
  );
};

export default ProgressCardProps;
