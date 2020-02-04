import gql from 'graphql-tag';

export default gql`
  query CountryQuery($id: ID!) {
    country(id: $id) {
      id
      country
      country_image
      city {
        id
        city_name
        city_image
        gym {
          id
        }
      }
    }
  }
`;
