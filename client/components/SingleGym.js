import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchGym from '../queries/fetchGym';

class SingleGym extends Component {
  render() {
    if (!this.props.data.gym) {
      return <div>Loading...</div>;
    }
    const {
      name,
      address,
      phone_number,
      website,
      rating,
      gym_type,
      gym_image
    } = this.props.data.gym;
    console.log(this.props.data.gym);
    const backImg = {
      backgroundImage: `url("${gym_image}")`
    };

    return (
      <div>
        <header className='header text-white' style={backImg} data-overlay='5'>
          <div className='container text-center'>
            <div className='row'>
              <div className='col-md-8 mx-auto py-7'>
                <h1 className='display-3 fw-500'>{name}</h1>
              </div>
            </div>
          </div>
        </header>
        <main className='main-content'>
          <section className='section'>
            <div className='container'>
              <h1>{name}</h1>
              <h4>{address}</h4>
              <h4>{phone_number}</h4>
              <h4>{website}</h4>
              <h4>{rating}</h4>
              <h4>{gym_type}</h4>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default graphql(fetchGym, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SingleGym);
