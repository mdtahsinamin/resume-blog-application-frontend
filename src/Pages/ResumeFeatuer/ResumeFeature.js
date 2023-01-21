import React from "react";
import "./ResumeFeature.css";
import { Link } from "react-router-dom";
const ResumeFeature = () => {
  return (
    <div className="hero-warp">
      <main className="main">
        <div className="online-resume">
          <h1 className="mb-3">The Best Free Online Resume Builder</h1>
          <p>
            A Quick and Easy Way to Create Your Professional Resume. 30+
            Professional Resume Templates Choose from over thirty modern and
            professional templates. All of which can be customized to your
            liking. Fast and Easy to Use Our resume builder lets you easily and
            quickly create a resume using our resume wizard.
          </p>
          <div className="create-resume-btn mt-5">
            <Link to="/create-resume">
              <button className="btn-create-resume">
                Create my resume now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeFeature;
