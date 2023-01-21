import React from "react";

const PersonalDetails = ({ register }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div class="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                class="form-control"
                id="firstName"
                placeholder="Enter your first name"
                {...register("firstName")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                class="form-control"
                id="email"
                placeholder="Enter your Email Address"
                {...register("email")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="website">Your Website</label>
              <input
                type="text"
                name="website"
                class="form-control"
                id="website"
                placeholder="Enter your website link"
                {...register("website")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="facebook">FaceBook Link</label>
              <input
                type="text"
                name="facebook"
                class="form-control"
                id="facebook"
                placeholder="Enter your FaceBook link"
                {...register("facebook")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="Twitter">Linkedin Link</label>
              <input
                type="text"
                name="linkedin"
                class="form-control"
                id="Twitter"
                placeholder="Enter your Twitter link"
                {...register("linkedin")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="location">Address</label>
              <input
                type="text"
                name="location"
                class="form-control"
                id="location"
                placeholder="Enter your Address"
                {...register("location")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                class="form-control"
                id="lastName"
                placeholder="Enter your Last name"
                {...register("lastName")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                class="form-control"
                id="phoneNumber"
                placeholder="Enter your Phone Number"
                {...register("phoneNumber")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="github">GitHub Link</label>
              <input
                type="text"
                name="github"
                class="form-control"
                id="github"
                placeholder="Enter your Github link"
                {...register("github")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="Twitter">Twitter Link</label>
              <input
                type="text"
                name="twitter"
                class="form-control"
                id="Twitter"
                placeholder="Enter your Twitter link"
                {...register("twitter")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="instagram">Instagram Link</label>
              <input
                type="text"
                name="instagram"
                class="form-control"
                id="Twitter"
                placeholder="Enter your Twitter link"
                {...register("instagram")}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="instagram">CodeForces Profile</label>
              <input
                type="text"
                name="codeForces"
                class="form-control"
                id="Twitter"
                placeholder="Enter your CodeForces Profile"
                {...register("codeForces")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
