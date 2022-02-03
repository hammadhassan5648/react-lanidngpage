import React from "react";
import { Images } from "../../assets/Assets";

const MainSection = () => {
  return <div className="banner-main">
  <div className="container">
     <div className="row">
        <div className="col-lg-8 head-banner">
           <h3>For Pet People, By Pet People</h3>
           <p>Explore from 100’s of pet care professionals around your areas, learn <br/> from pet care videos and look for best pet products</p>
        </div>
     </div>
     <div className="row m-auto">
        <div className="col-lg-10 col-md-12 cards-head">
           <h3>I would like to</h3>
           <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 card pt-3">
                 <p> Find a Pet Professional</p>
                 <i className="fas fa-chevron-right"></i>
                 <img src={Images.Layer1} alt="" />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12   card pt-3 ">
                 <p>Discover New Pet Products</p>
                 <i className="fas fa-chevron-right"></i>
                 <img src={Images.Layer2} alt="" />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12  card  pt-3">
                 <p>Explore Pet Care Advice </p>
                 <i className="fas fa-chevron-right"></i>
                 <img src={Images.Layer3} alt="" />
              </div>
           </div>
        </div>
     </div>
  </div>
  <div className="banner-img">
  <img src={Images. Bannerimg} alt="" />
  </div>
</div>
};

export default MainSection;
