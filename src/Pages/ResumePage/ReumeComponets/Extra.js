import React from "react";

const Extra = ({ register }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div class="form-group">
              <label htmlFor="extraTitle">Title</label>
              <input
                type="text"
                name="extraTitle"
                class="form-control"
                id="extraTitle"
                {...register("extraTitle")}
              />
            </div>
            <div class="form-group">
              <label htmlFor="extraDescription">Description</label>
              <textarea
                type="text"
                name="extraDescription"
                class="form-control"
                id="extraTitle"
                {...register("extraDescription")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="form-group">
              <label htmlFor="extraTitle"> Title</label>
              <input
                type="text"
                name="extraTitle1"
                class="form-control"
                id="extraTitle"
                {...register("extraTitle1")}
              />
            </div>
            <div class="form-group">
              <label htmlFor="extraDescription">Description</label>
              <textarea
                type="text"
                name="extraDescription1"
                class="form-control"
                id="extraTitle"
                {...register("extraDescription1")}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h5> Selected courses</h5>
          </div>
          <div className="col-md-6">
            <div class="form-group">
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                name="courseName"
                class="form-control"
                id="courseName"
                {...register("courseName")}
              />
            </div>
            <div class="form-group">
              <label htmlFor="courseDescription1">Description</label>
              <input
                type="text"
                name="courseDescription"
                class="form-control"
                id="extraTitle"
                {...register("courseDescription")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="form-group">
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                name="courseName1"
                class="form-control"
                id="courseName"
                {...register("courseName1")}
              />
            </div>
            <div class="form-group">
              <label htmlFor="courseDescription1">Description</label>
              <input
                type="text"
                name="courseDescription1"
                class="form-control"
                id="extraTitle"
                {...register("courseDescription1")}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h5> Technical Skill</h5>
          </div>
          <div class="form-group">
            <label htmlFor="technicalSkill">Description</label>
            <textarea
              type="text"
              name="technicalSkill"
              class="form-control"
              id="technicalSkill"
              {...register("technicalSkill")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra;
