import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer text-white bg-dark py-7">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="nav nav-bold nav-uppercase justify-content-center justify-content-md-end">
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>

          <div className="col-md-6 text-center text-md-left mt-5 mt-md-0">
            <div className="social social-bg-dark">
              <a className="social-facebook" href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="social-twitter" href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="social-instagram" href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-12 text-center">
            <br />
            <small>© Nomad Gym 2019, All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
