import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/HomeSection/Home/Home";
import Service from "./components/ServicesSection/Service/Service";
import WebsiteDesign from "./components/ServicesSection/WebsiteDesign/WebsiteDesign";
import WebsiteDevelopment from "./components/ServicesSection/WebDevelopment/WebDevelopment";
import SoftwareDevelopment from "./components/ServicesSection/SoftwareDevelopment/SoftwareDevelopment";
import EComDevelopment from "./components/ServicesSection/EComDevelopment/EComDevelopment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
          <Route path="/web-development" element={<WebsiteDevelopment />} />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/e-com-development" element={<EComDevelopment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
