import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import RecruitmentServices from "../RecruitmentServices/RecruitmentServices";
import Services from "../Services/Services";
import AboutUs2 from "../AboutUs-2/AboutUs-2";
const Home = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <RecruitmentServices />
      <Services />
      <AboutUs2 />
    </>
  );
};

export default Home;
