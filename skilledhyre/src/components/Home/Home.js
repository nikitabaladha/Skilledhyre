import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import RecruitmentServices from "../RecruitmentServices/RecruitmentServices";
import Services from "../Services/Services";
const Home = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <RecruitmentServices />
      <Services />
    </>
  );
};

export default Home;
