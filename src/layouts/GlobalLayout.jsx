import React from "react";
import Header from "../components/Header";
import About from "../pages/About";
import Footer from "../components/Footer";
import Skills from "../pages/Skills";
import Experince from "../pages/Experince";
import Education from "../pages/Education";

const GlobalLayout = () => {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Skills />
      <Experince />
      <Footer />
    </div>
  );
};

export default GlobalLayout;
