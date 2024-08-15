import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
import Home from "./components/HomeSection/Home/Home";
import Service from "./components/ServicesSection/Service/Service";
import WebsiteDesign from "./components/ServicesSection/WebsiteDesign/WEbsiteDesign";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
