import React from "react";
import ProgressCard from "./ContentMarketingProgressCard";
import { Container } from "react-bootstrap";
import "./ContentMarketingProgressCard.css";

const ContentMarketingProgressCardProps = () => {
  return (
    <Container
      fluid
      className="content-marketing-progress-props d-flex align-items-center justify-content-center"
    >
      <div className="row">
        <div className="col-md-3">
          <ProgressCard title="SEO & Marketing" percentage={75} />
        </div>
        <div className="col-md-3 top-card ">
          <ProgressCard title="Keywords Results" percentage={43} />
        </div>
        <div className="col-md-3">
          <ProgressCard title="Google Analytics" percentage={66} />
        </div>
        <div className="col-md-3 top-card">
          <ProgressCard className="mt-4" title="Off Page SEO" percentage={15} />
        </div>
      </div>
    </Container>
  );
};

export default ContentMarketingProgressCardProps;
