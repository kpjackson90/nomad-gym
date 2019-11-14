import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchCountry from "../queries/fetchCountry";

import Background from "../img/kate-trysh-3cCe37VGDiQ-unsplash.jpg";

const backImg = {
  backgroundImage: `url("${Background}")`
};

class SingleCountry extends Component {
  renderCities() {
    if (!this.props.data.country.city) {
      return <div>Loading...</div>;
    }

    return this.props.data.country.city.map(({ id, city_name, gym }) => {
      return (
        <div key={id} className="col-12 col-lg-4">
          <div
            className="card text-white bg-img justify-content-center"
            style={backImg}
            data-overlay="6"
          >
            <div className="card-body text-center flex-grow-0">
              <Link to={`/city/${id}`}>
                <h5 className="card-title mb-0">{city_name}</h5>
              </Link>
              <small>Number of gyms: {gym.length}</small>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (!this.props.data.country) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <header className="header text-white" style={backImg} data-overlay="5">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-8 mx-auto py-7">
                <h1 className="display-3 fw-500">
                  {this.props.data["country"].country}
                </h1>
              </div>
            </div>
          </div>
        </header>
        <main className="main-content">
          <section className="section">
            <div className="container">
              <div className="row gap-y">{this.renderCities()}</div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default graphql(fetchCountry, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SingleCountry);
