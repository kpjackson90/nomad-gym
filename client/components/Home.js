import React, { Component } from "react";
import Head from "./partials/Head";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import fetchCountriesQuery from "../queries/fetchCountries";

import Background from "../img/kate-trysh-3cCe37VGDiQ-unsplash.jpg";

const backImg = {
  backgroundImage: `url("${Background}")`
};

class Home extends Component {
  renderCountries() {
    return this.props.data.countries.map(
      ({ id, country, city, country_image }) => {
        const bgImg = { backgroundImage: `url("${country_image}")` };
        return (
          <div key={id} className="col-12 col-lg-4">
            <div
              className="card text-white bg-img justify-content-center"
              style={bgImg}
              data-overlay="6"
            >
              <div className="card-body text-center flex-grow-0">
                <Link to={`/countries/${id}`}>
                  <h5 className="card-title mb-0">{country}</h5>
                </Link>
                <small>Number of cities:- {city.length}</small>
              </div>
            </div>
          </div>
        );
      }
    );
  }
  render() {
    if (this.props.data.loading) {
      return <div> Loading...</div>;
    }
    return (
      <div>
        <Head />
        <main className="main-content">
          <section className="section">
            <div className="container">
              <div className="row gap-y">{this.renderCountries()}</div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default graphql(fetchCountriesQuery)(Home);
