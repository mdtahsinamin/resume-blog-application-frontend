import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import FrontPage from "../Front-Page/FrontPage";
import ResumeFeature from "../ResumeFeatuer/ResumeFeature";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <ResumeFeature />
      <FrontPage />
      <Footer />
    </Fragment>
  );
};

export default Home;
