import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/HomeSection/Home/Home";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import GetInTouch from "./components/GetInTouch/GetInTouch";

import Service from "./components/ServicesSection/Service/Service";
import WebsiteDesign from "./components/ServicesSection/WebsiteDesign/WebsiteDesign";
import WebsiteDevelopment from "./components/ServicesSection/WebDevelopment/WebDevelopment";
import SoftwareDevelopment from "./components/ServicesSection/SoftwareDevelopment/SoftwareDevelopment";
import EComDevelopment from "./components/ServicesSection/EComDevelopment/EComDevelopment";
import ELearningSolution from "./components/ServicesSection/ELearningSolution/ELearningSolution";
import ERPSolution from "./components/ServicesSection/ERPSolution/ERPSolution";
import APIIntegration from "./components/ServicesSection/APIIntegration/APIIntegration";
import InfluencerMarketing from "./components/ServicesSection/InfluencerMarketing/InfluencerMarketing";
import Branding from "./components/ServicesSection/Branding/Branding";

import SocialMediaMarketing from "./components/ServicesSection/SocialMediaMarketing/SocialMediaMarketing";
import PPCManagement from "./components/ServicesSection/PPCManagement/PPCManagement";
import ContentMarketing from "./components/ServicesSection/ContentMarketing/ContentMarketing";
import SearchEngineOptimization from "./components/ServicesSection/SearchEngineOptimization/SearchEngineOptimization";

import PermanentStaffing from "./components/StaffingSection/PermanentStaffing/PermanentStaffing";
import ContractStaffing from "./components/StaffingSection/ContractStaffing/ContractStaffing";
import HRConsulting from "./components/StaffingSection/HRConsulting/HRConsulting";
import ContractToHire from "./components/StaffingSection/ContractToHire/ContractToHire";
import RPO from "./components/StaffingSection/RPO/RPO";
import HeadHunting from "./components/StaffingSection/HeadHunting/HeadHunting";

import IPhoneAppDevelopment from "./components/ServicesSection/IPhoneAppDevelopment/IPhoneAppDevelopment";
import AndroidAppDevelopment from "./components/ServicesSection/AndroidAppDevelopment/AndroidAppDevelopment";
import HybridAppDevelopment from "./components/ServicesSection/HybridAppDevelopment/HybridAppDevelopment";
import ReactAppDevelopment from "./components/ServicesSection/ReactNativeAppDevelopment/ReactNativeAppDevelopment";

import WhiteLabelDigitalMarketing from "./components/ForAgencies/WhiteLabelDigitalMarketing";
import WhiteLabelWebDevelopment from "./components/ForAgencies/WhiteLabelWebDevelopment";
import WhiteLabeAppDevelopment from "./components/ForAgencies/WhiteLabeAppDevelopment";
import OutsourcedSoftwareDevelopment from "./components/ForAgencies/OutsourcedSoftwareDevelopment";
import DedicatedSoftwareTeams from "./components/ForAgencies/DedicatedSoftwareTeams";
import DedicatedMarketingTeams from "./components/ForAgencies/DedicatedMarketingTeams";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />

          <Route path="/service" element={<Service />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
          <Route path="/web-development" element={<WebsiteDevelopment />} />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/e-com-development" element={<EComDevelopment />} />
          <Route path="/e-learning-solution" element={<ELearningSolution />} />
          <Route path="/erp-solution" element={<ERPSolution />} />
          <Route path="/api-integration" element={<APIIntegration />} />
          <Route path="/branding" element={<Branding />} />
          <Route
            path="/influencer-marketing"
            element={<InfluencerMarketing />}
          />

          <Route
            path="/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route path="/ppc-management" element={<PPCManagement />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />

          <Route path="/permanent-staffing" element={<PermanentStaffing />} />
          <Route path="/contract-staffing" element={<ContractStaffing />} />
          <Route path="/hr-consulting" element={<HRConsulting />} />
          <Route path="/contract-to-hire" element={<ContractToHire />} />
          <Route path="/rpo" element={<RPO />} />
          <Route path="/head-hunting" element={<HeadHunting />} />

          <Route
            path="/iphone-app-development"
            element={<IPhoneAppDevelopment />}
          />
          <Route
            path="/android-app-development"
            element={<AndroidAppDevelopment />}
          />
          <Route
            path="/hybrid-app-development"
            element={<HybridAppDevelopment />}
          />
          <Route
            path="/react-app-development"
            element={<ReactAppDevelopment />}
          />
          <Route
            path="/search-engine-optimization"
            element={<SearchEngineOptimization />}
          />

          {/* For Agencies pages */}
          <Route
            path="/white-label-digital-marketing"
            element={<WhiteLabelDigitalMarketing />}
          />
          <Route
            path="/white-label-web-development"
            element={<WhiteLabelWebDevelopment />}
          />
          <Route
            path="/white-label-app-development"
            element={<WhiteLabeAppDevelopment />}
          />
          <Route
            path="/outsourced-software-development"
            element={<OutsourcedSoftwareDevelopment />}
          />
          <Route
            path="/dedicated-software-teams"
            element={<DedicatedSoftwareTeams />}
          />

          <Route
            path="/dedicated-marketing-teams"
            element={<DedicatedMarketingTeams />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
