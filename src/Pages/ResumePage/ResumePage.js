import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import EducationDetails from "./ReumeComponets/EducationDetails";
import ExperienceDetails from "./ReumeComponets/ExperienceDetails";
import PersonalDetails from "./ReumeComponets/PersonalDetails";
import ProjectDevelop from "./ReumeComponets/ProjectDevelop";
import ExtraDetails from "./ReumeComponets/ExtraDetails";
import { FcDownload } from "react-icons/fc";
import { useForm } from "react-hook-form";
import instance from "../../utils/axios.config";
import { saveAs } from "file-saver";
import Extra from "./ReumeComponets/Extra";
const ResumePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [resumeData, setResumeData] = useState();
  const onSubmit = (data) => {
    instance
      .post("http://localhost:5000/create-pdf", data)
      .then(() => {
        instance
          .get("http://localhost:5000/fetch-pdf", {
            responseType: "arraybuffer",
          })
          .then((res) => {
            const pdfBlob = new Blob([res.data], {
              type: "application/pdf",
            });
            saveAs(pdfBlob, `${data.firstName}'s Resume.pdf`);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-center mt-5">
          <h5> Personal Details</h5>
        </div>
        <PersonalDetails register={register} />
        <div className="d-flex justify-content-center mt-5">
          <h5> Education Details</h5>
        </div>
        <EducationDetails register={register} />
        <div className="d-flex justify-content-center mt-5">
          <h5> Project Developed</h5>
        </div>
        <ProjectDevelop register={register} />
        <div className="d-flex justify-content-center mt-5">
          <h5> Experience Details</h5>
        </div>
        <ExperienceDetails register={register} />
        <div className="d-flex justify-content-center mt-5">
          <h5> Extra Details</h5>
        </div>
        <ExtraDetails register={register} />
        <div className="d-flex justify-content-center mt-5">
          <h5> Extra-curricular activity</h5>
        </div>
        <Extra register={register} />
        <div className="d-flex justify-content-around mt-5 mb-5">
          <div className="save data">
            <input
              type="submit"
              value="Download Resume"
              className="btn btn-danger w-100"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ResumePage;
