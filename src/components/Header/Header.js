import React from "react";
import { Images } from "../../assets/Assets";
const Header = () => {
return (
<div className="header-main">
   <nav className="navbar navbar-expand-lg header-bg ">
      <div className="container-fluid">
         <a className="navbar-brand" href="#">
         <img src={Images.logo} alt="" />
         </a>
         <button className="navbar-toggler  navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon navbar-dark "></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex     justify-content-center ">
               <li className="nav-item active">
                  <a className="nav-link" href="#">
                  Home<span className="sr-only"></span>
                  </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">
                  About Us
                  </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">
                  Pet Pros
                  </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">
                  Watch and Learn
                  </a>
               </li>
            </ul>
            <ul className="d-flex justiy-content-end login">
               <li className="nav-item">
                  <a className="nav-link nav-login" href="#">
                  Login
                  </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link nav-pro" href="#">
                  Become a pro
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</div>
);
};
export default Header;