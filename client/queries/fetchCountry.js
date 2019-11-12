import gql from "graphql-tag";

export default gql`
  query CountryQuery($id: ID!) {
    country(id: $id) {
      id
      country
      city {
        id
        city_name
        gym {
          id
        }
      }
    }
  }
`;
