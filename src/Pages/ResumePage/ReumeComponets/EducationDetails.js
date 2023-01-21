import React from "react";

const EducationDetails = ({ register }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="form-group">
              <label htmlFor="university"> Collage/ University</label>
              <input
                type="text"
                name="university"
                class="form-control"
                id="university"
                placeholder="Enter your University"
                {...register("university")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="qualification"> Qualification</label>
              <input
                type="text"
                name="qualification"
                class="form-control"
                id="qualification"
                placeholder="Qualification"
                {...register("qualification")}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-5">
                <div class="form-group">
                  <label htmlFor="fromYear"> From Year</label>
                  <input
                    type="date"
                    name="fromYear"
                    class="form-control"
                    id="date"
                    {...register("fromYear")}
                  />
                </div>
              </div>
              <div className="col-md-5 offset-md-2">
                <div class="form-group">
                  <label htmlFor="toYear"> To Year</label>
                  <input
                    type="date"
                    name="toYear"
                    class="form-control"
                    id="date"
                    {...register("toYear")}
                  />
                </div>
              </div>
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="=description"> Description</label>
              <input
                type="text"
                name="description"
                class="form-control"
                id="description"
                placeholder="Description"
                {...register("description")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationDetails;
