import React from "react";

const ProjectDevelop = ({ register }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center mt-2">
            <h6> Project 1</h6>
          </div>
          <div className="col-md-7 offset-md-3">
            <div class="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                class="form-control"
                id="Title"
                placeholder="Title"
                {...register("title")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                name="projectLink"
                class="form-control"
                id="link"
                placeholder="Link"
                {...register("projectLink")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="projectDescription"
                class="form-control"
                id="description"
                placeholder="Description"
                {...register("projectDescription")}
              />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <h6> Project 2</h6>
            </div>
            <div class="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title2"
                class="form-control"
                id="Title"
                placeholder="Title"
                {...register("title2")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                name="plink2"
                class="form-control"
                id="link"
                placeholder="Link"
                {...register("plink2")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="pDescription2">Description</label>
              <textarea
                type="text"
                name="pDescription2"
                class="form-control"
                id="description"
                placeholder="Description"
                {...register("pDescription2")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDevelop;
