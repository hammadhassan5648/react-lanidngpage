import React from "react";
import { Images } from "../../assets/Assets";

const PetPro = () => {
  return (
    <div className="pet-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pet-head text-center">
            <h3 className="d-flex justify-content-center">
              <i className="fas fa-paw"></i>Pet Pro’s around you
              <span>
                <i className="fas fa-paw"></i>
              </span>
            </h3>
            <p>
              Search our database of wag-tastic, top-ranked, local <br /> pet
              care professionals for all of your pets.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="Product-filter">
              <form className="d-flex">
                <div className="form-group3">
                  <p>Category</p>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      All{" "}
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-group1">
                  <p>Location (City, State, Zip)</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="California, United States"
                  />
                </div>
                <div className="form-group2">
                  <p>Keyword</p>
                  <input type="text" className="form-control" placeholder="All" />
                </div>
                <button type="search" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 pet-card-head">
            <p style={{ float: "right", marginRight: "14px" }}>
              Sort By <span>Latest</span>
              <i className="fas fa-chevron-down"></i>
            </p>
            <div className="row mt-5 pt-3">
              <div className="col-lg-4 col-md-4 col-sm-6 ">
                <div className="card-1">
                  {/* <img
                    src="../assignment soft/assets/img/Rectangle 9.png"
                    alt="nill"
                  /> */}
                  <img src={Images.Rectangle9} alt="" />
                  <h5>
                    Paws On Chicon <i className="fas fa-star"></i> <span>5.0</span>
                  </h5>
                  <p>Homemade Treats and Food, Pet Store, Self Serve Dog...</p>
                  <div className="deal d-flex ml-3 mb-5 mr-1">
                    <a href="#">
                      <i className="fal fa-badge-percent"></i>Deal Offered
                    </a>
                    <a href="#">
                      <i className="fal fa-badge-check"></i>Certified
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4  col-sm-6  ">
                <div className=" card-1 ">
                  {/* <img
                    src="../assignment soft/assets/img/Rectangle 10.png"
                    alt="nill"
                  /> */}
                  
                  <img src={Images.Rectangle10} alt="" />
                  <h5>
                    Liz’s Pet Care <i className="fas fa-star"></i> <span>5.0</span>
                  </h5>
                  <p>Pet Sitter, Dog Training, Pet Behaviour...</p>
                  <div className="deal d-flex ml-3 mb-5 ">
                    <a href="#">
                      <i className="fal fa-badge-percent"></i>Deal Offered
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4  col-sm-6 ">
                <div className=" card-1 card-3">
                  {/* <img
                    src="../assignment soft/assets/img/Rectangle 11.png"
                    alt="nill"
                  /> */}
                  <img src={Images.Rectangle11} alt="" />
                  <h5>
                    Pet Behaviorist <i className="fas fa-star"></i> <span>5.0</span>
                  </h5>
                  <p>Pet Sitter, Dog Training, Pet Behaviour...</p>
                  <div className="deal d-flex ml-3 mb-5 ">
                    <a href="#">
                      <i className="fal fa-badge-percent"></i>Deal Offered
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetPro;
