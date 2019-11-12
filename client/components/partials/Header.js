import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-stick-dark"
        data-navbar="sticky"
      >
        <div className="container">
          <div className="navbar-left">
            <button className="navbar-toggler" type="button">
              &#9776;
            </button>
            <a className="navbar-brand" href="../index.html">
              <img
                className="logo-dark"
                src="../assets/img/logo-dark.png"
                alt="logo"
              />
              <img
                className="logo-light"
                src="../assets/img/logo-light.png"
                alt="logo"
              />
            </a>
          </div>

          <section className="navbar-mobile">
            <span className="navbar-divider d-mobile-none"></span>

            <ul className="nav nav-navbar">
              <li className="nav-item">
                <Link to="/" className="nav-link" href="#">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link active" href="#">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    );
  }
}

export default Header;
