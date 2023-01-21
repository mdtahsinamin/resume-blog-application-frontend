import React from "react";
import { GiSkills, GiMedallist } from "react-icons/gi";
import { interest, skill } from "./constants";
const ExtraDetails = ({ register }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center mt-5">
            <h6>
              <GiSkills />
              Skill/ Language
            </h6>
          </div>
          {skill.map((elt) => (
            <div className="col-md-4 mb-2" key={elt.id}>
              <div class="form-group">
                <input
                  type="text"
                  name={elt.name}
                  class="form-control"
                  id={elt.name}
                  placeholder={elt.place}
                  {...register(`${elt.name}`)}
                />
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-center mt-5">
            <h6>
              <GiMedallist />
              Interest
            </h6>
          </div>
          {interest.map((inter) => (
            <div className="col-md-4 mb-2" key={inter.id}>
              <div class="form-group">
                <input
                  type="text"
                  name={inter.name}
                  class="form-control"
                  id={inter.name}
                  placeholder={inter.place}
                  {...register(`${inter.name}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExtraDetails;
