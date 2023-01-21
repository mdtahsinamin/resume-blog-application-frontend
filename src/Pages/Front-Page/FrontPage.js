import React, { Fragment } from "react";
import amazon from "../../assets/amazon.webp";
import business from "../../assets/Business_Insider_Logo-30x.webp";
import CBN from "../../assets/CNBC_New_Logo-30x.webp";
import resumeImg from "../../assets/desktop-with-resume-.svg";
import google from "../../assets/google.webp";
import HBR from "../../assets/HBR_Logo-30x.webp";
import imagesRight from "../../assets/img-1.svg";
import MSN from "../../assets/MSN_Logo-30x.webp";
import reportImg from "../../assets/resume-examples-img.svg";
import tesla from "../../assets/tesla.webp";
import FeatuerList from "../../components/FeatuterList/FeatuerList";
import "./FrontPage.css";
const FrontPage = () => {
  return (
    <Fragment>
      <div className="front-page-wrap">
        <div className="main">
          <article className="front-page">
            <div className="main-image center bottom-spacing">
              <figure>
                <img
                  src={resumeImg}
                  alt="Online Resume Builder"
                  className="resume-img"
                />
              </figure>
            </div>
            <div className="brand-warp">
              <h3>AS FEATURED IN:</h3>
              <div className="brand">
                <div className="b-logo">
                  <img src={google} alt="google" />
                </div>
                <div className="b-logo">
                  <img src={tesla} alt="tesla" />
                </div>
                <div className="b-logo">
                  <img src={amazon} alt="amazon" />
                </div>
                <div className="b-logo">
                  <img src={business} alt="business" />
                </div>
                <div className="b-logo">
                  <img src={CBN} alt="CBN" />
                </div>
                <div className="b-logo">
                  <img src={HBR} alt="HBR" />
                </div>
                <div className="b-logo">
                  <img src={MSN} alt="MSN" />
                </div>
              </div>
            </div>
            <FeatuerList />
            <div className="features-list-wrap flex">
              <div className="left">
                <ul className="features-list">
                  <li>
                    <p>
                      <span className="checkIcon"></span>
                      30+ Professional Resume Templates
                    </p>
                    <p className="desc">
                      Choose from over thirty modern and professional templates.
                      All of which can be customized to your liking.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="checkIcon"></span>
                      Fast and Easy to Use
                    </p>
                    <p className="desc">
                      Our free resume builder lets you easily and quickly create
                      a resume using our resume wizard.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="checkIcon"></span>
                      Robust Text Editor
                    </p>
                    <p className="desc">
                      Our text editor has everything you need to customize your
                      resume. Choose different fonts, sizes, bullets and much
                      more.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="checkIcon"></span>
                      Download your resume as PDF
                    </p>
                    <p className="desc">
                      Download your resume and send it straight to the hiring
                      manager. Whatever format you choose, we’ve got you
                      covered.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="block-center">
                <figure>
                  <img src={imagesRight} alt="" className="img-responsive" />
                </figure>
              </div>
            </div>
            <div className="resume-sample-heading center bottom-spacing top-spacing">
              <h2 className="demo-h2">Resume Examples</h2>
              <p className="demo-p">
                Need help building your resume? By analyzing thousands of
                winning resumes, we were able to build guides to help you build
                the perfect resume for the job you want. We’re adding more and
                more examples and guides every week in order to have the most
                comprehensive directory of resume examples. Click below to check
                out some of our featured resume examples along with tips for
                making your resume stand out!
              </p>
            </div>
            <div className="resume-examples flex">
              <div className="examples-image">
                <figure>
                  <img src={reportImg} alt="" className="report-img" />
                </figure>
                <div className="highlight">
                  <p className="title">A Resume Example for Every Job</p>
                  <p className="details">
                    Be sure to check out our examples to make sure your resume
                    is built to succeed.
                  </p>
                </div>
              </div>
              <div className="example-list-wrap">
                <div className="examples-list">
                  <ul>
                    <li>Accountant</li>
                    <li>Administrative Assistant</li>
                    <li>Artist</li>
                    <li>Business</li>
                    <li>Caregiver</li>
                    <li>Cashier</li>
                    <li>Certified Nursing Assistant</li>
                    <li>College</li>
                    <li>Computer Science</li>
                    <li>Customer Service Representative</li>
                    <li>Dental Assistant</li>
                    <li>Engineering</li>
                    <li>Esthetician</li>
                    <li>Executive</li>
                    <li>Financial Analyst</li>
                    <li>High School</li>
                    <li>Housekeeping</li>
                    <li>Information Technology IT</li>
                    <li>Internship</li>
                  </ul>
                </div>
                <div className="examples-list">
                  <ul>
                    <li>MBA</li>
                    <li>Medical Sales</li>
                    <li>Nursing</li>
                    <li>Nursing Student</li>
                    <li>Operations Manager</li>
                    <li>Pharmacist</li>
                    <li>Phlebotomist</li>
                    <li>Product Manager</li>
                    <li>Project Manager</li>
                    <li>Receptionist</li>
                    <li>Registered Nurse</li>
                    <li>Sales</li>
                    <li>Sales Associate</li>
                    <li>Server</li>
                    <li>Software Developer</li>
                    <li>Software Engineer</li>
                    <li>Student</li>
                    <li>Information Technology IT</li>
                    <li>Teacher</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="center books-list-heading bottom-spacing top-spacing">
              <h2 className="demo-h2">Resume Resource Center</h2>
              <p className="demo-p">
                Need help building your resume? By analyzing thousands of
                winning resumes, we were able to build guides to help you build
                the perfect resume for the job you want. We’re adding more and
                more examples and guides every week in order to have the most
                comprehensive directory of resume examples. Click below to check
                out some of our featured resume examples along with tips for
                making your resume stand out!
              </p>
            </div>
            <div className="books-list flex space-between bottom-spacing">
              <div className="book red">
                <p className="title">How to Write a Cover Letter</p>
                <p className="readMore">Read More</p>
              </div>
              <div className="book blue">
                <p className="title">How to Write a Resume</p>
                <p className="readMore">Read More</p>
              </div>
              <div className="book blue">
                <p className="title">How to Write a Resume</p>
                <p className="readMore">Read More</p>
              </div>
              <div className="book red">
                <p className="title">How to Write a Cover Letter</p>
                <p className="readMore">Read More</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
};

export default FrontPage;
