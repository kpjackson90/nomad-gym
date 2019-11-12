import React, { Component } from "react";
import { Link } from "react-router";

import logo from "../../img/nomad_gym.png";

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
            <Link to="/" className="navbar-brand">
              <img className="logo-light" src={logo} alt="logo" />
            </Link>
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
