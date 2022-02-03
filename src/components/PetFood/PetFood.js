import React from "react";
import { Images } from "../../assets/Assets";
const PetFood = () => {
  return (
    <div className="food-main"> 
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12  ">
            <div className="food-pet">
            <img src={ Images.petfood1 } alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="food-data">
            <img src={ Images.petfood } alt="" />
              <p className="feature">Featured Product </p>
              <h3>ZIWI Premium Pet Food </h3>
              <p>
                Finding a healthy balance between a dog food that is healthy for
                your dog and one that tastes delicious can be difficult. While
                an all-natural raw diet is a new phase in the canine world, that
                doesn’t work for every household
              </p>
              <div className="d-flex">
                <a href="#">See Product Review</a>
                <p> About Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetFood;
