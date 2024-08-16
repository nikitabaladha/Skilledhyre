import React from "react";
import WebsiteDesign from "../WebsiteDesign/WebsiteDesign.js";
import WebDevelopment from "../WebDevelopment/WebDevelopment";
import SoftwareDevelopment from "../SoftwareDevelopment/SoftwareDevelopment";
import EComDevelopment from "../EComDevelopment/EComDevelopment";
import ELearningSolution from "../ELearningSolution/ELearningSolution.js";
import ERPSolution from "../ERPSolution/ERPSolution.js";
import APIIntegration from "../APIIntegration/APIIntegration.js";
import InfluencerMarketing from "../InfluencerMarketing/InfluencerMarketing.js";

const service = () => {
  return (
    <>
      <WebsiteDesign />
      <WebDevelopment />
      <SoftwareDevelopment />
      <EComDevelopment />
      <ELearningSolution />
      <ERPSolution />
      <APIIntegration />
      <InfluencerMarketing />
    </>
  );
};

export default service;
