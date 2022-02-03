import React from "react";
import { Images } from "../../assets/Assets";

const PetForm = () => {
  return (
    <div className="form-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 form-pet-main">
            <div className="form-img">
            <img src={Images.petform} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-data">
              <h3>Are You Wag Enabled?</h3>
              <p>
                Sign up for our newsletter to get exclusive deals and expert
                advice for you and your pet.
              </p>
              <div className="feild d-flex">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="ZipCode" />
              </div>
              <input type="email" placeholder="Your Email Address" />
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetForm;
