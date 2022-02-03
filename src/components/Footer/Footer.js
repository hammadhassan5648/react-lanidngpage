import React from "react";
import { Images } from "../../assets/Assets";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 footer-logo">
              <img src={Images.footerlogo} alt="" />
              </div>
              <div className="col-lg-4 col-md-4  col-sm-4  footer-menu">
                <h5>menu</h5>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Find a pro</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4  col-sm-4  footer-menu">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 footer-contact">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="#">Support@wagenabled.com</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
