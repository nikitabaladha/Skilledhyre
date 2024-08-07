import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import RecruitmentServices from "../RecruitmentServices/RecruitmentServices";
import Services from "../Services/Services";
import AboutUs2 from "../AboutUs-2/AboutUs-2";
import ProgressCardProps from "../ProgressCard/ProgressCardProps.js";
import ProcessDrivenSEO from "../ProcessDrivenSEO/ProcessDrivenSEO.js";
import Spacer from "../Spacer/Spacer.js";
import Testimonials from "../Testimonials/Testimonials.js";
import ContactCards from "../ContactCards/ContactCards.js";
import Footer from "../Footer/Footer.js";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="background-container">
        <Navbar />
        <AboutUs />
      </div>
      <div className="spacer"></div>
      <RecruitmentServices />
      <Services />
      <AboutUs2 />
      <ProgressCardProps />
      <Spacer />
      <ProcessDrivenSEO />
      <Testimonials />
      <ContactCards />
      <Footer />
    </>
  );
};

export default Home;
