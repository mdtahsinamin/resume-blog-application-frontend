import React from "react";

const ExperienceDetails = ({ register }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center mt-5">
            <h6> Experience 1</h6>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    class="form-control"
                    id="organization"
                    placeholder="Organization"
                    {...register("organization")}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    name="position"
                    class="form-control"
                    id="position"
                    placeholder="Position"
                    {...register("position")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-1">
            <div class="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                name="exDuration"
                class="form-control"
                id="duration"
                placeholder="Duration"
                {...register("exDuration")}
              />
            </div>
          </div>
          <div className="col-md-9 offset-2 pt-3">
            <div class="form-group">
              <label htmlFor="exDescription">Description</label>
              <textarea
                type="text"
                name="exDescription"
                class="form-control"
                id="Description"
                placeholder="Description"
                {...register("exDescription")}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h6> Experience 2</h6>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input
                    type="text"
                    name="organization2"
                    class="form-control"
                    id="organization"
                    placeholder="Organization"
                    {...register("organization2")}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    name="position2"
                    class="form-control"
                    id="position"
                    placeholder="Position"
                    {...register("position2")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-1">
            <div class="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                name="exDuration2"
                class="form-control"
                id="duration"
                placeholder="Duration"
                {...register("exDuration2")}
              />
            </div>
          </div>
          <div className="col-md-9 offset-2 pt-3">
            <div class="form-group">
              <label htmlFor="duration">Description</label>
              <textarea
                type="text"
                name="exDescription2"
                class="form-control"
                id="Description"
                placeholder="Description"
                {...register("exDescription2")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceDetails;
